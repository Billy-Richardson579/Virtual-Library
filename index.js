// IMPORT CLASSES HERE

const Media = require('./Media');
const Book= require('./classes/Book');
const Movie = require('./classes/Movie');
const Music = require('./classes/Music');

const book = new Book('The Catcher in the Rye', 1951, 'Fiction');
 console.log(book.summary())

// DO NOT EDIT BELOW THIS LINE
try {
    module.exports = {
        Media,
    }
} catch(e){

}

try {
    module.exports = {
        Media,
        Book,
    }
} catch(e){

}

try {
    module.exports = {
        Media,
        Book,
        Movie
    }
} catch(e){

}

try {
    module.exports = {
        Media,
        Book,
        Movie,
        Music
    }
} catch(e){

}