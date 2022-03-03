let id = 0;
const books = [];


console.log("Testing");

 
function bookInfo() {
    const bookObject = document.getElementById('books').value;
const description = document.getElementById("Author", "Title", "Rating");
const book = {
    Author: Author,
    Title: Title,
    Rating: Rating,
}
console.log(bookObject);
}

function addBook() {
    document.getElementById('Add').addEventListener('click', () => {
    let table = document.getElementById('books');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML=document.getElementById('Author').value; 
    row.insertCell(1).innerHTML=document.getElementById('Title').value; 
    row.insertCell(2).innerHTML=document.getElementById("Rating").value;
    let action = row.insertCell(3);
    action.appendChild(createDeleteButton(id++));
    document.getElementById("Author").value = " ";
    document.getElementById("Title").value = " ";
    document.getElementById("Rating").value = " ";
    // const bookObject = document.getElementById('form').value;
    const description = document.getElementById("Author", "Title", "Rating");
    const book = {
        Author: 'Author',
        Title: 'Title',
        Rating: 'Rating',
        }
    })
}

addBook();






function createDeleteButton(id){
    let btn = document.createElement('button');
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


console.log(books);