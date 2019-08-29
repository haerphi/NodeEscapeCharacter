# Text art escape character
Hi, welcome in my npm package to convert your text art !
## Warning
The convert edit the file, I doesn't create a new file with the result.
## Setup
### Git
 - Clone the repertory : `git clone https://github.com/haerphi/NodeEscapeCharacter.git`
 - Move in the folder
 - Install depedencies : `npm i` or `npm install`
 - Convert your file : `node . PathToYourFile``
 - Enjoy
### Npm
Example:
```
const escapecharater = require('escapecharacter');

let test = escapecharater.convert('./textArt.txt');
console.log(test);

escapecharater.convertFile('./textArt.txt');
```