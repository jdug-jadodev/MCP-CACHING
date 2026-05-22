#!/usr/bin/env node

import { ContextCacheServer } from './server.js';
import { runInitCommand } from './init/init-command.js';

const args = process.argv.slice(2);

if (args.includes('--init')) {
  await runInitCommand();
} else {
  const server = new ContextCacheServer();
  await server.start();
}
