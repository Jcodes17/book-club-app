// // const books = [];

// console.log("starting book club crud");
// // console.log(bookData);
// var currentData = null;
// // current data set to null, representing the absence of any data/value
// var bookData = [];


// // 1st of two onsubmit functions for button "add"
// function onBookFormAdd() {
//   // function to start adding book data when the user clicks on add
//   // this is being called on the html file
//   var bookData = readBookData();
//   // will pull this data from the readBookData function
//   if (currentData == null) {
//     // if currentData is null
//     addBookData(bookData);
//     // will call the addBookData function w/ a parameter of bookData
//     console.log("inserting book data");
//   //} else {
//   //   updateBookData(bookData);
//   //   console.log("updating book data");
//   //   resetBookData();
//   // }
//   }
// }

// // 2nd of two onsubmit functions for button "update"
// // this is being called on the html file
// function onBookFormUpdate(){
//   var bookData = readBookData();
//   if (currentData != null){
//     // if there is already book data in our table on the browser
//     updateBookData(bookData);
//     // will call the updateBookData function with bookData as the parameter
//     resetBookData();
//     // next we will call the resetBookData fields to a blank slate for the user to input new info
//     console.log("updated data");
//   }
//   currentData = null;
//   // setting our CurrentData back to null to prevent the browser from updating this data to the current cell/line that we just edited
//   // this will allow us to add new books to the table after an edit
// }


// // function to store our book data
// // still trying to work on this
// function bookArray (){
//   var bookData2 = [];
//   document.getElementById("Add").addEventListener("click", () => {
//     // document.getElementById("Author", "Title", "Rating").value(() => {
//     //   bookData.push(bookArray)
//     bookData2.push = document.getElementById("Author").value;
//   // push values for bookData
//     bookData2.push = document.getElementById("Title").value;
//     bookData2.push = document.getElementById("Rating").value;
//     //})
//     return bookData2;
//   })
// }




// // funtion to read
// function readBookData() {
//   var bookData = [];
//   bookData["Author"] = document.getElementById("Author").value;
//   // push Author value for bookData
//   bookData["Title"] = document.getElementById("Title").value;
//     // push Title value for bookData
//   bookData["Rating"] = document.getElementById("Rating").value;
//   // push Rating value for bookData
//   // console.log(bookData);
//   return bookData;
// }

// // function to reset all our input fields for author, title, rating
// function resetBookData() {
//   // clear all input fields for better user experience
//   document.getElementById("Author").value = "";
//   document.getElementById("Title").value = "";
//   document.getElementById("Rating").value = "";
//   currentData = null;
//   // setting our CurrentData back to null to prevent the browser from updating this data to the current cell/line that we just edited
//   // this will allow us to add new books to the table after an edit
// }

// // function to add our bookdata our table
// function addBookData(data) {
//   // document.getElementById("Add").addEventListener("click", () => {
//   var table = document
//     .getElementById("bookList")
//     .getElementsByTagName("tbody")[0];
//   // inserting the new data into our empty table called booklist
//   var insertNewRow = table.insertRow(table.length);
//   cell1 = insertNewRow.insertCell(0);
//   // method to insert a cell into the current row
//   cell1.innerHTML = data.Author;
//   cell2 = insertNewRow.insertCell(1);
//   cell2.innerHTML = data.Title;
//   cell3 = insertNewRow.insertCell(2);
//   cell3.innerHTML = data.Rating;
//   cell4 = insertNewRow.insertCell(3);
//   cell4.innerHTML = `<a onClick="editBookData(this)"><strong>Edit</strong></a>
//                     <a onClick="onDelete(this)"><strong>Delete</strong></a>`;
//   resetBookData();
//   // after adding book data to our table we will call the resetBookData to clear the input fields for better user experience
// }


// // function to editBookdata based on the td element from the html
// function editBookData(td) {
//   currentData = td.parentElement.parentElement;
//   // return corresponding row element
//   confirm("Please make your edits.");
//   // confirm will display a dialog box w/ a message and an ok button and a cancel button
//   // this will cause the browser to display a pop up informing the user to make their edits
//   document.getElementById("Author").value = currentData.cells[0].innerHTML;
//   document.getElementById("Title").value = currentData.cells[1].innerHTML;
//   document.getElementById("Rating").value = currentData.cells[2].innerHTML;
// }


// // function to update bookdata based on the bookdata variable found in the readbookdata function above
// function updateBookData(bookData) {
//   currentData.cells[0].innerHTML = bookData.Author;
//   // will update current data with new data from the author input field
//   currentData.cells[1].innerHTML = bookData.Title;
//   // will update current data with new data from the title input field
//   currentData.cells[2].innerHTML = bookData.Rating;
//   // will update current data with new data from the rating input field
//   resetBookData();
//   // after adding book data to our table we will call the resetBookData to clear the input fields for better user experience
// }

// // function to delete a table based on a table data
// function onDelete(td) {
//   if (confirm("Are you sure you would like to delete this record?")) {
//     // confirm will display a dialog box w/ a message and an ok button and a cancel button
//     row = td.parentElement.parentElement;
//     document.getElementById("bookList").deleteRow(row.rowIndex);
//     confirm("Book deleted");
//     // confirm will display a dialog box w/ a message and an ok button and a cancel button
//     // this is display a message to inform the user that their row of data will be deleted
//     resetBookData();
//     // after adding book data to our table we will call the resetBookData to clear the input fields for better user experience
//   }
// }

// // console.log(bookData2);

// // let teams = [];
// // let teamId = 0;

// // onClick('new-team', () => {
// //     teams.push(new Team(teamId++, getValue('new-team-name')));
// //     drawDOM();
// // })

// // function onClick(id, action) {
// //     let element = document.getElementById(id);
// //     element.addEventListener("click", action);
// //     return element;
// // }

// const books = [];
var currentData = null;
const bookData = [];

class Book {
  constructor(author, title, rating) {
    this.author = author;
    this.title = title;
    this.rating = rating;
  }
}

function onBookFormAdd() {
  // var bookData = readBookData();
  // // bookData = [
  //   { title: "Something here ",
  //     author: "Author's name"
  //   }
  // ]
  // will pull this data from the readBookData function
  if (currentData == null) {
    readBookData() //assign a book to the bookvalue array
    addBookData(bookData);
    console.log("inserting book data");
  //} else {
  //   updateBookData(bookData);
  //   console.log("updating book data");
  //   resetBookData();
  // }
  }
}


function onBookFormUpdate(){
  // var bookData = readBookData();
  if (currentData != null){
    updateBookData();
    resetBookData();
    console.log("updated data");
  }
  currentData = null;
}

// function bookArray (){
//   var bookData2 = [];
//   document.getElementById("Add").addEventListener("click", () => {
//     // document.getElementById("Author", "Title", "Rating").value(() => {
//     //   bookData.push(bookArray)
//     bookData2.push = document.getElementById("Author").value;
//   // push values for bookData
//     bookData2.push = document.getElementById("Title").value;
//     bookData2.push = document.getElementById("Rating").value;
//     //})
//     return bookData2;
//   })
// }
// console.log(bookData2);

// let teams = [];
// let teamId = 0;

// onClick('new-team', () => {
//     teams.push(new Team(teamId++, getValue('new-team-name')));
//     drawDOM();
// })

// function onClick(id, action) {
//     let element = document.getElementById(id);
//     element.addEventListener("click", action);
//     return element;
// }



console.log("Testing");
// console.log(bookData);

function readBookData() { 
  let author = document.getElementById("Author").value;
  // push values for bookData
  let title = document.getElementById("Title").value;
  let rating = document.getElementById("Rating").value;
  
  const newBook = new Book(author, title, rating);
  bookData.push(newBook);
  console.log(bookData);
  // console.log(newBook);
  // return bookData;
}

function resetBookData() {
  // clear all input fields for better user experience
  document.getElementById("Author").value = "";
  document.getElementById("Title").value = "";
  document.getElementById("Rating").value = "";
  currentData = null;
}

function addBookData(dataArray) {
  // document.getElementById("Add").addEventListener("click", () => {
    // console.log(dataArray);
    var table = document
    .getElementById("bookList")
    .getElementsByTagName("tbody")[0];
    table.innerHTML = ""
  for(let i = 0; i < dataArray.length; i++) {
  
    // inserting the new data into our empty table called booklist
    var insertNewRow = table.insertRow(table.length);
    cell1 = insertNewRow.insertCell(0);
    // method to insert a cell into the current row
    cell1.innerHTML = dataArray[i].author;
    cell2 = insertNewRow.insertCell(1);
    cell2.innerHTML = dataArray[i].title;
    cell3 = insertNewRow.insertCell(2);
    cell3.innerHTML = dataArray[i].rating;
    cell4 = insertNewRow.insertCell(3);
    cell4.innerHTML = `<a onClick="editBookData(${i})" id="edit"><strong>Edit</strong></a>
                      <a onClick="onDelete(${i})"><strong>Delete</strong></a>`;
  }

  resetBookData();
}



function editBookData(data) {
  currentBook = bookData[data]
  // return corresponding row element
  confirm("Please make your edits.");
  document.getElementById("Author").value = currentBook.author //.cells[0].innerHTML;
  document.getElementById("Title").value = currentBook.title //cells[1].innerHTML;
  document.getElementById("Rating").value = currentBook.rating //cells[2].innerHTML;
  bookData.splice(data, 1);
}

function updateBookData() {
  const updatedBook = new Book(
  document.getElementById("Author").value,
  document.getElementById("Title").value,
  document.getElementById("Rating").value
  )
  bookData.push(updatedBook);
  addBookData(bookData);
  resetBookData();
}

function onDelete(indexValue) {
  console.log(indexValue);
  if (confirm("Are you sure you would like to delete this record?")) {
    bookData.splice(indexValue, 1)
    confirm("Book deleted");
    addBookData(bookData);
    resetBookData();
  }
}