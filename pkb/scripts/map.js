import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const WIKI_DIR = './pkb/wiki';
const MAP_FILE = join(WIKI_DIR, 'map.md');

async function generateMap() {
  const categories = ['entities', 'concepts', 'logs'];
  let mapContent = '# Wiki Knowledge Map\n\n> This file is the primary index for the AI Agent. It provides a high-level overview of all available knowledge items.\n\n';

  for (const cat of categories) {
    const catDir = join(WIKI_DIR, cat);
    try {
      const files = (await readdir(catDir)).filter(f => f.endsWith('.md'));
      
      if (files.length > 0) {
        mapContent += `## ${cat.charAt(0).toUpperCase() + cat.slice(1)}\n`;
        for (const file of files) {
          const content = await readFile(join(catDir, file), 'utf-8');
          // Simple logic: extract the first line as summary (if it starts with #)
          const firstLine = content.split('\n')[0].replace('# ', '').trim();
          mapContent += `- [[${file.replace('.md', '')}]]: ${firstLine}\n`;
        }
        mapContent += '\n';
      }
    } catch (e) {
      // Category dir might not exist yet
    }
  }

  await writeFile(MAP_FILE, mapContent);
  console.log(`Map updated: ${MAP_FILE}`);
}

generateMap();
