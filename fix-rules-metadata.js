const fs = require('fs');
const path = require('path');
const rulesDir = path.join(__dirname, '.cursor', 'rules');

const files = fs.readdirSync(rulesDir);

files.forEach(file => {
  if (file.endsWith('.mdc')) {
    const filePath = path.join(rulesDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file already has metadata
    if (!content.startsWith('---')) {
      const fileName = file.replace('.mdc', '');
      const title = fileName.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      
      const metadata = `---
title: ${title}
description: Guidelines for the WanderWorld tours and travels website
---

`;
      
      // Add metadata to file
      fs.writeFileSync(filePath, metadata + content);
      console.log(`Added metadata to ${file}`);
    } else {
      console.log(`${file} already has metadata`);
    }
  }
});

console.log('Done processing rule files'); 