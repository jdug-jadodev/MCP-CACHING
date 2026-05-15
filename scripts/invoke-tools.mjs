import path from 'node:path';
import { pathToFileURL } from 'node:url';

(async function main(){
  const root = process.cwd();
  const toUrl = (p) => pathToFileURL(path.join(root, p)).href;
  const { LRUCache } = await import(toUrl('dist/cache/lru-cache.js'));
  const { Logger } = await import(toUrl('dist/logger/logger.js'));
  const { getContextFromConfig } = await import(toUrl('dist/tools/get-context-from-config.js'));
  const { getDirectoryContext } = await import(toUrl('dist/tools/get-directory-context.js'));
  const { getProjectContext } = await import(toUrl('dist/tools/get-project-context.js'));

  const cache = new LRUCache({ maxEntries: 5000, maxEntrySizeKb: 1024 });
  const logger = new Logger();

  console.log('\n=== getContextFromConfig ===');
  try{
    const result = await getContextFromConfig({ projectRoot: root }, cache, logger);
    console.log(JSON.stringify({ filesIncluded: result.filesIncluded, filesOmitted: result.filesOmitted, truncated: result.truncated }, null, 2));
    console.log('Content snippet:\n', result.content.slice(0,1000));
  }catch(e){
    console.error('getContextFromConfig failed', e);
  }

  console.log('\n=== getDirectoryContext (src) ===');
  try{
    const result2 = await getDirectoryContext({ rootPath: path.join(root,'src') }, cache, logger);
    console.log(JSON.stringify({ filesIncluded: result2.filesIncluded, filesOmitted: result2.filesOmitted, truncated: result2.truncated }, null, 2));
    console.log('Content snippet:\n', result2.content.slice(0,1000));
  }catch(e){
    console.error('getDirectoryContext failed', e);
  }

  console.log('\n=== getProjectContext (selected files) ===');
  try{
    const paths = ['src/index.ts','src/server.ts','src/cache/lru-cache.ts','contextcache.json','.github/instructions/.copilot-instructions.md'];
    const result3 = await getProjectContext({ paths, projectRoot: root }, cache, logger);
    console.log(JSON.stringify({ filesIncluded: result3.filesIncluded, filesOmitted: result3.filesOmitted, truncated: result3.truncated }, null, 2));
    console.log('Content snippet:\n', result3.content.slice(0,1000));
  }catch(e){
    console.error('getProjectContext failed', e);
  }

  logger.close();
})().catch(err=>{console.error(err); process.exit(1);});
