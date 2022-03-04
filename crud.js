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
    document.getElementById("formAuthor").value = '';
    // push values for bookData
    document.getElementById("formTitle").value = '';
    document.getElementById("formRating").value = '';
    selectedRow = null;
}

function insertBookData(data){
    // inserting new book data
    var table = document.getElementById('bookList').getElementsByTagName('tbody')[0];
    // inserting the new data into our empty table called booklist
    var insertNewRow = table.insertRow(table.length);
    cell1 = insertNewRow.insertCell(0);
    // method to insert a cell into the current row
    cell1.innerHTML = data.formAuthor;
    cell2 = insertNewRow.insertCell(1);
    cell2.innerHTML = data.formTitle;
    cell3 = insertNewRow.insertCell(2);
    cell3.innerHTML = data.formRating;
    cell4 = insertNewRow.insertCell(3);
    cell4.innerHTML = `<a onClick="editBookData(this)">Edit</a>
                    <a onClick="onDelete(this)">Delete</a>`;
    resetBookData();
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

function onDelete(td){
    if (confirm('Are you sure you would like to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById("bookList").deleteRow(row.rowIndex);
        resetBookData();
    }
}