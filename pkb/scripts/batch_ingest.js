import { readFile, writeFile, readdir, mkdir } from 'fs/promises';
import { join } from 'path';

const SRC_DIR = './ai_research_reports';
const WIKI_DIR = './pkb/wiki';

async function batchIngest() {
  const files = await readdir(SRC_DIR);

  for (const file of files) {
    if (file === 'index.md') continue;

    const content = await readFile(join(SRC_DIR, file), 'utf-8');
    let destPath = '';

    if (file.startsWith('x_')) {
      // It's a builder entity
      const entityName = file.replace('x_', '').replace('.md', '');
      destPath = join(WIKI_DIR, 'entities', `${entityName}.md`);
      console.log(`Ingesting Entity: ${entityName}`);
    } else if (file.startsWith('podcast_')) {
      // It's a podcast log
      const podcastName = file.replace('podcast_', '').replace('.md', '');
      destPath = join(WIKI_DIR, 'logs', `${podcastName}.md`);
      console.log(`Ingesting Podcast Log: ${podcastName}`);
    }

    if (destPath) {
      // Simple wrapper to add metadata
      const wrappedContent = `---\ntype: research_import\nsource_file: ${file}\nimported_at: ${new Date().toISOString()}\n---\n\n${content}`;
      await writeFile(destPath, wrappedContent);
    }
  }

  console.log('Batch ingestion complete.');
}

batchIngest().catch(console.error);
