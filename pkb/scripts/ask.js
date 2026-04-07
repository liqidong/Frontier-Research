import { readFile } from 'fs/promises';
import { join } from 'path';

// pkb/scripts/ask.js

async function callLLM(prompt) {
  // Mocking AI response based on custom identity
  return "Based on your preference for 'File over app', building a Wiki LLM as a CLI is the most strategic move. It ensures 100% data ownership and follows the minimalist vibe you value.";
}

async function ask(question) {
  const identity = await readFile('./wiki/concepts/Identity.md', 'utf-8');
  const map = await readFile('./wiki/map.md', 'utf-8');

  console.log(`Searching for: "${question}"...`);

  const systemPrompt = `
    You are my AI Twin / CKO (Chief Knowledge Officer).
    
    My Identity:
    ${identity}

    Wiki Context Map:
    ${map}

    INSTRUCTIONS:
    1. Read the map and identify the most relevant entities or concepts.
    2. Answer the question specifically using my personal context.
    3. Use my tone and vibe. Be direct, minimalist, and agency-focused.
  `;

  // For MVP, we mock the retrieval of 3-5 relevant files based on the question
  console.log("Analyzing knowledge map for relevant context...");
  const answer = await callLLM(`Question: ${question}\n\nSystem Prompt: ${systemPrompt}`);

  console.log("\nCKO Answer:");
  console.log("----------------------------------------");
  console.log(answer);
  console.log("----------------------------------------");
}

ask(process.argv[2] || "How should I structure my Wiki LLM?");
