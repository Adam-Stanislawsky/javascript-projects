// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, isbn, numberPages, timesCheckedOut, discarded) {

       //assign properties
       this.title = title;
       this.author = author;
       this.copyrightDate = copyrightDate;
       this.isbn = isbn;
       this.numberPages = numberPages;
       this.timesCheckedOut = timesCheckedOut; //this s/b method for novel
       this.discarded = discarded; //this s/b method for manual
    }
    //define methods
    checkout(uses = 1) {
        this.timesCheckedOut += uses;
    }
 }

// Define your Manual and Novel classes here:

// class Manual extends Book {
//     constructor() {
//         super();
        
//     }
//     //put manual method here

//     dispose(currentYear){
//         if (currentYear-this.copyright > 5) {
//            this.discarded = 'Yes';
//         }
//     }
// }

//i dont really understand the constructor and super. im  not understanding the point if we still have to type them all out each time. why doesn't the book example need it?
class Manual extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
       super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
    }
 
    dispose(currentYear){
       if (currentYear-this.copyright > 5) {
          this.discarded = 'Yes';
       }
    }
 }

// class Novel extends Book {
//     constructor() {
//         super();
//     }
//     //put novel method here
//     dispose(){
//         if (this.timesCheckedOut > 100) {
//            this.discarded = 'Yes';
//         }
//      }
// } 

//WHY DO I HAVE TO PUT THE SAME KEYS IN THE CONSTRUCTOR AND SUPER AREAS, WHY DON'T THEY PULL THINGS FROM THE PARENT CLASS?

class Novel extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
       super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
    }
 
    dispose(){
       if (this.timesCheckedOut > 100) {
          this.discarded = 'Yes';
       }
    }
 }


// Declare the objects for exercises 2 and 3 here:

let novelExample = new Novel ("Pride and Prejudice", "Jane Austen", 1813, 1111111111111, 432,32, 'No')

let makingTheShip = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'No');

console.log(novelExample);
console.log(makingTheShip);

// Code exercises 4 & 5 here:

makingTheShip.checkout(5);
makingTheShip.dispose();

console.log(makingTheShip);