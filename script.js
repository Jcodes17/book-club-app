// const books = [];
var currentData = null;
var bookData = [];

function onBookFormAdd() {
  var bookData = readBookData();
  // will pull this data from the readBookData function
  if (currentData == null) {
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
  var bookData = readBookData();
  if (currentData != null){
    updateBookData(bookData);
    resetBookData();
    console.log("updated data");
  }
  currentData = null;
}

function bookArray (){
  var bookData2 = [];
  document.getElementById("Add").addEventListener("click", () => {
    // document.getElementById("Author", "Title", "Rating").value(() => {
    //   bookData.push(bookArray)
    bookData2.push = document.getElementById("Author").value;
  // push values for bookData
    bookData2.push = document.getElementById("Title").value;
    bookData2.push = document.getElementById("Rating").value;
    //})
    return bookData2;
  })
}
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
  var bookData = [];
  bookData["Author"] = document.getElementById("Author").value;
  // push values for bookData
  bookData["Title"] = document.getElementById("Title").value;
  bookData["Rating"] = document.getElementById("Rating").value;
  // console.log(bookData);
  return bookData;
}

function resetBookData() {
  // clear all input fields for better user experience
  document.getElementById("Author").value = " ";
  document.getElementById("Title").value = " ";
  document.getElementById("Rating").value = " ";
  selectedRow = null;
}

function addBookData(data) {
  // document.getElementById("Add").addEventListener("click", () => {
  var table = document
    .getElementById("bookList")
    .getElementsByTagName("tbody")[0];
  // inserting the new data into our empty table called booklist
  var insertNewRow = table.insertRow(table.length);
  cell1 = insertNewRow.insertCell(0);
  // method to insert a cell into the current row
  cell1.innerHTML = data.Author;
  cell2 = insertNewRow.insertCell(1);
  cell2.innerHTML = data.Title;
  cell3 = insertNewRow.insertCell(2);
  cell3.innerHTML = data.Rating;
  cell4 = insertNewRow.insertCell(3);
  cell4.innerHTML = `<a onClick="editBookData(this)">Edit</a>
                    <a onClick="onDelete(this)">Delete</a>`;
  resetBookData();
}

function editBookData(td) {
  currentData = td.parentElement.parentElement;
  // return corresponding row element
  confirm("Please make your edits.");
  document.getElementById("Author").value = currentData.cells[0].innerHTML;
  document.getElementById("Title").value = currentData.cells[1].innerHTML;
  document.getElementById("Rating").value = currentData.cells[2].innerHTML;
}

function updateBookData(bookData) {
  currentData.cells[0].innerHTML = bookData.Author;
  currentData.cells[1].innerHTML = bookData.Title;
  currentData.cells[2].innerHTML = bookData.Rating;
  resetBookData();
}

function onDelete(td) {
  if (confirm("Are you sure you would like to delete this record?")) {
    row = td.parentElement.parentElement;
    document.getElementById("bookList").deleteRow(row.rowIndex);
    confirm("Book deleted");
    resetBookData();
  }
}

