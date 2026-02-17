//Restart Game Button
var restart = document.querySelector("#b");

//Grabs all the Squares
var squares = document.querySelectorAll("td");

//Clear all the Squares
function clearBoard() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].textContent = '';
    }
}

restart.addEventListener("click", clearBoard);

//Check the Squares maker
function changMaker() {
    if  (this.textContent ==='') {
        this.textContent = 'X'
    }else if (this.textContent === 'X') {
        this.textContent = 'O';
    }else {
        this.textContent = '';
    }
}

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', changMaker);
}

//For loop to add listers to all the Squares

