// https://esolangs.org/wiki/Hello

const readlineSync = require('readline-sync')

let i = process.argv.slice(2).toString() || readlineSync.question("Enter command: ")
let ERR = "ERROR! COMMAND NOT FOUND"

interpret()

function interpret() {

    if (i === "h") {
        console.log("Hello world!")
    } else {
        console.log(ERR)
    }

    i = readlineSync.question("Enter command: ")
    interpret()
}