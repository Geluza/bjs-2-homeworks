//задача 1
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.type = null;
    this.state = 100;
  }

  fix() {
    this.state = this.state * 1.5;
  }


  set state(number) {

    if (number < 0) {
      this._state = 0;
    }
    else if (number > 100) {
      this._state = 100;
    } else {
      this._state = number;
    }
  }

  get state() {
    return this._state;
  }

}

class Magazine extends PrintEditionItem {

  constructor(name, releaseDate, pagesCount, type) {
    super(name, releaseDate, pagesCount, type);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {

  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "book";
    this.author = author;
  }

}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic"
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

//задание 2

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    let findBook = this.books.find((item) => item[type] === value);
    if (findBook === undefined) {
      findBook = null;
    }
    return findBook;
  }


  giveBookByName(bookName) {
    let giveBook = this.books.find((book) => book.name === bookName);
    if (giveBook === undefined) {
      return null;
    } else {
      this.books.splice(giveBook, 1);
      return giveBook;
    }
    }
    }






