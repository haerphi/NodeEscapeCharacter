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
A little example:
```
const escapecharater = require('escapecharacter');

//convert will return a string
let test = escapecharater.convert('./textArt.txt');
console.log(test);

//convertFile will modify the file
escapecharater.convertFile('./textArt.txt');
```
If you check the source code of convert, you'll notice it just use <br>
`fs.readFileSync(path, 'utf8');`