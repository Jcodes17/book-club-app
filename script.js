
// const books = [];
var currentData = null;


function onBookFormAdd(){
  var bookData = readBookData();
   // will pull this data from the readBookData function 
   if(currentData == null){
       addBookData(bookData);
   } else {
       updateBookData(bookData);
   resetBookData();
   }
}

console.log("Testing");


function readBookData(){
  var bookData = [];
  bookData["Author"] = document.getElementById("Author").value;
  // push values for bookData
  bookData["Title"] = document.getElementById("Title").value;
  bookData["Rating"] = document.getElementById("Rating").value;
  return bookData;
}

function resetBookData(){
    // clear all input fields for better user experience
  document.getElementById("Author").value = " ";
  document.getElementById("Title").value = " ";
  document.getElementById("Rating").value = " ";
  selectedRow = null;
}



function addBookData(data) {
    // document.getElementById("Add").addEventListener("click", () => {
    var table = document.getElementById('bookList').getElementsByTagName('tbody')[0];
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


function editBookData(td){
  currentData = td.parentElement.parentElement;
  // return corresponding row element
  confirm("Please make your edits.");
  document.getElementById('Author').value = currentData.cells[0].innerHTML;
  document.getElementById('Title').value = currentData.cells[1].innerHTML;
  document.getElementById('Rating').value = currentData.cells[2].innerHTML;
  
}

function updateBookData(bookData){
  currentData.cells[0].innerHTML = bookData.Author;
  currentData.cells[1].innerHTML = bookData.Title;
  currentData.cells[2].innerHTML = bookData.Rating;
}

function onDelete(td){
  if (confirm('Are you sure you would like to delete this record?')){
      row = td.parentElement.parentElement;
      document.getElementById("bookList").deleteRow(row.rowIndex);
      confirm("Book deleted");
      resetBookData();
  }
}




// let action = row.insertCell(3);
//     action.appendChild(createDeleteButton(id++));


// function createDeleteButton(id) {
//   let btn = document.createElement("button");
//   btn.className = "btn btn-primary";
//   btn.id = id;
//   btn.innerHTML = "Delete";
//   btn.onclick = () => {
//     console.log(`Deleting row with id: item-${id}`);
//     let elementToDelete = document.getElementById(`item-${id}`);
//     elementToDelete.parentNode.removeChild(elementToDelete);
//   };
//   return btn;
// }



// function editProduct(Author, Title, Rating){
//     // var productID = document.getElementById("productID").value || "none";
//     // var qty = document.getElementById("quantity").value || 0;

//     document.getElementById("Author").value = Author;
//     document.getElementById("Title").value = Title;
//     document.getElementById("Rating").value = Rating;    
//  }

// // row.setAttribute("id", `item-${id}`);
    // row.insertCell(0).innerHTML = document.getElementById("Author").value;
    // row.insertCell(1).innerHTML = document.getElementById("Title").value;
    // row.insertCell(2).innerHTML = document.getElementById("Rating").value;
    // row.insertCell(3).innerHTML = '<button type="button" onClick="editProduct(\''+ Author+'\', \''+Title+'\', \''+Rating+'\');"/>Edit</button>'; 
    // let action = row.insertCell(3);
    // action.appendChild(createDeleteButton(id++));
    // let update = row.insertCell(4);
    // action.appendChild(createUpdateButton(id++));
    // document.getElementById("Author").value = " ";
    // document.getElementById("Title").value = " ";
    // document.getElementById("Rating").value = " ";
    // const bookObject = document.getElementById('form').value;
    // const description = document.getElementById("Author", "Title", "Rating");
    // const book = {
    //   Author: "Author",
    //   Title: "Title",
    //   Rating: "Rating",
    // };



// console.log(books);

// function editHtmlTbleSelectedRow() {
//   var author = document.getElementById("Author").value,
//     title = document.getElementById("Title").value,
//     rating = document.getElementById("Rating").value;
//   if (!checkEmptyInput()) {
//     table.rows[rIndex].cells[0].innerHTML = Author;
//     table.rows[rIndex].cells[1].innerHTML = Title;
//     table.rows[rIndex].cells[2].innerHTML = Rating;
//   }
// }

/* function createUpdateButton(id) {
  let updateBtn = document.createElement("updateBtn");
  updateBtn.className = "btn btn-primary";
  updateBtn.id = id;
  updateBtn.innerHTML = "Update";
  updateBtn.onclick = () => {
    console.log(`Update row with id: item-${id}`);
    let elementToUpdate = document.getElementById(`item-${id}`);
    elementToUpdate.parentNode.replaceChild(elementToUpdate);
  };

  return updateBtn;
} */


// function bookInfo() {
//   const bookObject = document.getElementById("books").value;
//   const description = document.getElementById("Author", "Title", "Rating");
//   const book = {
//     Author: Author,
//     Title: Title,
//     Rating: Rating,
//   };
//   console.log(bookObject);
// }


// var Author = document.getElementById("Author").value || "none";
// var Title = document.getElementById("Title").value || 0;
// var Rating = document.getElementById("Rating").value || 0;