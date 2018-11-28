function book(title,authour,pages,read) {
this.title = title;
this.authour =authour;
this.pages = pages;
this.read = read;

book.info = function() {
  var info = book.values;
  return info;

};

}

book("The Hobbit", "JRR Tolken", 295, false);
