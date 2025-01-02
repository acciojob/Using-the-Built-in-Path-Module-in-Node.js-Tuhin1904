const path = require('path');
const { argv } = require('process');

function joinPaths(segment1, segment2){
    return path.join(segment1, segment2);
}

const args = argv.slice(2);

if(args.length < 2){
    console.error(`Please provide two file path segments as arguments`);
    process.exit(1);
}

const [segment1, segment2] = args;

const joinedPath = joinPaths(segment1, segment2);
console.log(`Joined Path: ${joinedPath}`)

// DO NOT EDIT BELOW THIS LINE
module.exports = { joinPaths };