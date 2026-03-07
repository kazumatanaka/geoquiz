const fs = require('fs');
const files = fs.readFileSync('generated_file_names.txt', 'utf8').split('\n').filter(Boolean);

const map = {};
files.forEach(f => {
    // extract base, up/down
    // e.g. card_ganjin_1771334875863_down_1772087377242.png
    let parts = f.split('_');
    let type = parts[parts.length - 2]; // up or down
    let base = parts.slice(0, parts.length - 2).join('_');
    
    if(!map[base]) map[base] = {};
    map[base][type] = f;
});

console.log(JSON.stringify(map, null, 2));
