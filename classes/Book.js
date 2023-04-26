const Media = require('./Media');
class Book extends Media{
    constructor(title,author,year,numPages,genre,rating){
        super(title,year,genre)
        this.author = author
        this.numPages = numPages
        this.rating = rating

    }
    summary(){
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`
    }
    static highestRating(books) {
        let maxRating = 0;
        let bestBook = "";
        books.forEach((book) => {
          if (book.rating > maxRating) {
            maxRating = book.rating;
            bestBook = book;
          }
        });
        return bestBook;
      }

}
module.exports = Book