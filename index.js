#!/usr/bin/env node

const fs = require('fs');

function convert(path) {
    var text = fs.readFileSync(path, 'utf8');
    console.log(text);
    let newOne = ``;
    let escaped = `\`\\`;
    for (let i = 0; i < text.length; i++) {
        for (let h = 0; h < escaped.length; h++) {
            if (text[i] === escaped[h]) {
                newOne += `\\`;
                break;
            }
        }
        newOne += text[i];
    }

    fs.writeFile(path, newOne, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
    return newOne;
}

let path = process.argv[2];
if (path != undefined) {
    convert(path);
} else {
    console.log('Merci de rajouter un argument');
}

module.exports = convert;