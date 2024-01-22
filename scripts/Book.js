// class Book {
    
//     title;
//     author;

//     // create private status
//     #status;


  
//     constructor(name) {
//       this.name = name;
//     }
  
//     introduceSelf() {
//       console.log(`Hi! I'm ${this.name}`);
//     }
//   }

class Book {
    constructor(title, author, status) {
      this.title = title;
      this.author = author;
      this._onLoan = status; // Private property for loan status
    }
  
    // Getter method for onLoan status
    get onLoan() {
      return this._onLoan;
    }
  
    // Method to borrow the book
    borrow() {
      if (!this._onLoan) {
        this._onLoan = true;
        console.log(`${this.title} by ${this.author} has been borrowed.`);
      } else {
        console.log(`${this.title} is already on loan.`);
      }
    }
  
    // Method to return the book
    returnBook() {
      if (this._onLoan) {
        this._onLoan = false;
        console.log(`${this.title} by ${this.author} has been returned.`);
      } else {
        console.log(`${this.title} is not currently on loan.`);
      }
    }
  }

  // Export the Book class for use in other files
export default Book;