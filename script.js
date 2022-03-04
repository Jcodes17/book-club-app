let id = 0;
const books = [];
var Author = document.getElementById("Author").value || "none";
var Title = document.getElementById("Title").value || 0;
var Rating = document.getElementById("Rating").value || 0;
console.log("Testing");

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

function addBook() {
  document.getElementById("Add").addEventListener("click", () => {
    let table = document.getElementById("books");
    let row = table.insertRow(1);
    row.setAttribute("id", `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById("Author").value;
    row.insertCell(1).innerHTML = document.getElementById("Title").value;
    row.insertCell(2).innerHTML = document.getElementById("Rating").value;
    row.insertCell(3).innerHTML = '<button type="button" onClick="editProduct(\''+ Author+'\', \''+Title+'\', \''+Rating+'\');"/>Edit</button>'; 
    let action = row.insertCell(3);
    action.appendChild(createDeleteButton(id++));
    // let update = row.insertCell(4);
    // action.appendChild(createUpdateButton(id++));
    document.getElementById("Author").value = " ";
    document.getElementById("Title").value = " ";
    document.getElementById("Rating").value = " ";
    // const bookObject = document.getElementById('form').value;
    // const description = document.getElementById("Author", "Title", "Rating");
    // const book = {
    //   Author: "Author",
    //   Title: "Title",
    //   Rating: "Rating",
    // };
  });
}

addBook();

function createDeleteButton(id) {
  let btn = document.createElement("button");
  btn.className = "btn btn-primary";
  btn.id = id;
  btn.innerHTML = "Delete";
  btn.onclick = () => {
    console.log(`Deleting row with id: item-${id}`);
    let elementToDelete = document.getElementById(`item-${id}`);
    elementToDelete.parentNode.removeChild(elementToDelete);
  };
  return btn;
}



function editProduct(Author, Title, Rating){
    // var productID = document.getElementById("productID").value || "none";
    // var qty = document.getElementById("quantity").value || 0;

    document.getElementById("Author").value = Author;
    document.getElementById("Title").value = Title;
    document.getElementById("Rating").value = Rating;    
 }

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

console.log(books);

function editHtmlTbleSelectedRow() {
  var author = document.getElementById("Author").value,
    title = document.getElementById("Title").value,
    rating = document.getElementById("Rating").value;
  if (!checkEmptyInput()) {
    table.rows[rIndex].cells[0].innerHTML = Author;
    table.rows[rIndex].cells[1].innerHTML = Title;
    table.rows[rIndex].cells[2].innerHTML = Rating;
  }
}
