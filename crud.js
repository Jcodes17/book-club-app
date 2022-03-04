var currentData = null;


function onBookFormAdd(){
   var bookData = readBookData();
    // will pull this data from the readBookData function 
    if(currentData == null){
        insertBookData(bookData);
    } else {
        updateBookData(bookData);
    resetBookData();
    }
}

function readBookData(){
    var bookData = [];
    bookData["formAuthor"] = document.getElementById("formAuthor").value;
    // push values for bookData
    bookData["formTitle"] = document.getElementById("formTitle").value;
    bookData["formRating"] = document.getElementById("formRating").value;
    return bookData;
   
}

function resetBookData(){
    // clear all input fields for better user experience
    bookData["formAuthor"] = document.getElementById("formAuthor").value = '';
    // push values for bookData
    bookData["formTitle"] = document.getElementById("formTitle").value = '';
    bookData["formRating"] = document.getElementById("formRating").value = '';
    selectedRow = null;
}

function insertBookData(data){
    // inserting new book data
    var table = document.getElementById('bookList').getElementsByTagName('tbody')[0];
    // inserting the new data into our empty table called booklist
    var insertNewRow = table.insertRow(table.length);
    row1 = insertNewRow.insertCell(0);
    // method to insert a cell into the current row
    row1.innerHTML = data.formAuthor;
    row2 = insertNewRow.insertCell(1);
    row2.innerHTML = data.formTitle;
    row3 = insertNewRow.insertCell(2);
    row3.innerHTML = data.formRating;
    row4 = insertNewRow.insertCell(3);
    row4.innerHTML = `<a onClick="editBookData(this)">Edit</a>
                    <a onClick="onDelete(this)">Delete</a>`;
}

function editBookData(td){
    currentData = td.parentElement.parentElement;
    // return corresponding row element
    document.getElementById('formAuthor').value = currentData.cells[0].innerHTML;
    document.getElementById('formTitle').value = currentData.cells[1].innerHTML;
    document.getElementById('formRating').value = currentData.cells[2].innerHTML;
}

function updateBookData(bookData){
    currentData.cells[0].innerHTML = bookData.formAuthor;
    currentData.cells[1].innerHTML = bookData.formTitle;
    currentData.cells[2].innerHTML = bookData.formRating;

}