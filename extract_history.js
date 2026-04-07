import { execSync } from 'child_process';
import { writeFile } from 'fs/promises';

const FILES = ['feed-x.json', 'feed-podcasts.json'];
const REPO_DIR = 'follow-builders';

async function extractHistory() {
  const allData = {
    x: [],
    podcasts: []
  };

  const seenXIds = new Set();
  const seenPodcastGuids = new Set();

  for (const file of FILES) {
    console.log(`Extracting history for ${file}...`);
    const log = execSync(`git -C ${REPO_DIR} log --pretty=format:"%H" ${file}`).toString().split('\n');
    
    for (const hash of log) {
      if (!hash) continue;
      try {
        const content = execSync(`git -C ${REPO_DIR} show ${hash}:${file}`).toString();
        const json = JSON.parse(content);

        if (file === 'feed-x.json' && json.x) {
          for (const builder of json.x) {
            for (const tweet of builder.tweets) {
              if (!seenXIds.has(tweet.id)) {
                seenXIds.add(tweet.id);
                allData.x.push({
                  author: builder.name,
                  handle: builder.handle,
                  ...tweet
                });
              }
            }
          }
        } else if (file === 'feed-podcasts.json' && json.podcasts) {
          for (const podcast of json.podcasts) {
            if (!seenPodcastGuids.has(podcast.guid)) {
              seenPodcastGuids.add(podcast.guid);
              allData.podcasts.push(podcast);
            }
          }
        }
      } catch (e) {
        // Skip errors for very old or malformed commits
      }
    }
  }

  // Sort by date (descending)
  allData.x.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  allData.podcasts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  await writeFile('all_historical_data.json', JSON.stringify(allData, null, 2));
  console.log(`Extraction complete!`);
  console.log(`Total Tweets: ${allData.x.length}`);
  console.log(`Total Podcasts: ${allData.podcasts.length}`);
}

extractHistory();
