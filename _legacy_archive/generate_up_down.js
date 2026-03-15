const fs = require('fs');
const { execSync } = require('child_process');

// Read cards.js
let cardsContent = fs.readFileSync('cards.js', 'utf8');
// Clean up to evaluate
cardsContent = cardsContent.replace('const cardData =', 'module.exports =');
const tmpFile = 'tmp_cards.js';
fs.writeFileSync(tmpFile, cardsContent);

const cardData = require('./tmp_cards.js');

const chars = cardData.filter(c => c.type !== 'item');

const prompts = [];

chars.forEach(c => {
    let name = c.name;
    let group = c.group;
    let baseFile = c.img.split('/').pop().replace('.png', '');

    // UP
    prompts.push({
        name: baseFile + "_up",
        prompt: `Anime style, gorgeous japanese fantasy art. ${name} (${group} era). Huge aura, extremely energetic, confident, happy, dynamic pose, smiling, brightly glowing. High quality, masterpiece, detailed.`
    });

    // DOWN
    prompts.push({
        name: baseFile + "_down",
        prompt: `Anime style, japanese fantasy art. ${name} (${group} era). Sad, exhausted, depressed, looking down, gloomy atmosphere, pale face, tattered clothes, dark aura. High quality, masterpiece, detailed.`
    });
});

fs.writeFileSync('generation_tasks.json', JSON.stringify(prompts, null, 2));
fs.unlinkSync(tmpFile);
console.log(`Generated ${prompts.length} tasks and saved to generation_tasks.json`);
