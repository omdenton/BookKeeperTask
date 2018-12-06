function book(title,authour,pages,read) {
  this.title = title;
  this.authour =authour;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return Object.values(theHobbit); 
    };


}

const theHobbit = new book("The Hobbit", "JRR Tolken", 295, false);
console.log(theHobbit.info());