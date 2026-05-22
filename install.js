#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

const SKILL_NAME = 'spark-to-spec';
const SKILL_SRC = path.join(__dirname, 'skills', SKILL_NAME);

const AGENT_SKILL_DIRS = [
  path.join(os.homedir(), '.claude', 'skills', SKILL_NAME),
  path.join(os.homedir(), '.gemini', 'skills', SKILL_NAME),
];

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const file of fs.readdirSync(src)) {
    const srcFile = path.join(src, file);
    const destFile = path.join(dest, file);
    if (fs.statSync(srcFile).isDirectory()) {
      copyDir(srcFile, destFile);
    } else {
      fs.copyFileSync(srcFile, destFile);
    }
  }
}

let installed = 0;
let skipped = 0;

for (const dest of AGENT_SKILL_DIRS) {
  const agentDir = path.dirname(dest);
  const agentConfigDir = path.dirname(agentDir);

  if (!fs.existsSync(agentConfigDir)) {
    console.log(`Skipping ${agentConfigDir} — agent not installed`);
    skipped++;
    continue;
  }

  copyDir(SKILL_SRC, dest);
  console.log(`Installed ${SKILL_NAME} → ${dest}`);
  installed++;
}

if (installed === 0) {
  console.error('No supported agents found (looked for ~/.claude and ~/.gemini).');
  process.exit(1);
}
