#!/usr/bin/env node
import { spawn } from 'child_process';
import { StdioClientTransport, Client } from '@modelcontextprotocol/sdk/client/stdio.js';

async function run() {
  // Spawn the local server binary
  const child = spawn(process.execPath, ['dist/index.js'], { stdio: ['pipe', 'pipe', 'pipe'] });

  child.stderr.on('data', (b) => process.stderr.write(b));
  child.stdout.on('data', (b) => process.stdout.write(b));

  const transport = new StdioClientTransport(child);
  const client = new Client({ name: 'daemon-test' });

  try {
    await client.connect(transport);
    const res = await client.callTool('get_context_from_config', { projectRoot: process.cwd() });
    console.log('MCP call full result:');
    console.log(JSON.stringify(res, null, 2));
  } catch (err) {
    console.error('daemon test failed', err);
  } finally {
    try { await client.close(); } catch {}
    child.kill();
  }
}

run().catch((e) => { console.error(e); process.exit(1); });
