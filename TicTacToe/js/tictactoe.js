let activePlayer = 'X';
//Array stores array of moves, this used to determine win conditions
let selectedSquares = [];

//Function for playing x/o in square
function placeXOrO(squareNumber){
    //This condition for checking square not already selected
    //.some to check each element of the array to see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        let select = document.getElementById(squareNumber);
        //Condition to check whos turn
        if (activePlayer === 'X') {
            select.style.backgroundImage = 'URL("images/Flaming_x.png")';
        } else {
            select.style.backgroundImage = 'URL("images/Flaming_o.png")';
        }

        //squarenumber and activeplayer concenated together and added to array
        selectedSquares.push(squareNumber + activePlayer);
        // Calls function to check for any win conditions
        checkWinConditions();
        // Condition for changing the active player
        if (activePlayer === 'X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }

        audio("./media/jump_coin_arcade.wav");
        //Condition to check if computer turn
        if (activePlayer === 'O') {
            //Function to disable click for computer turn
            disableClick();
            //Function sets a 1 sec delay for computer to take turn (place image) & clicking to turn back on
            setTimeout(function() { computersTurn(); }, 1000);
        }
        //Returning true is needed for computersTurn() to work
        return true;
        
    }

    //Function for random square being picked by computer
    function computersTurn() {
        //Needed for while loop
        let success = false;
        //This stores the random number 0-8
        let pickASquare;
        //Condition allows for while loop to keep trying if a square already taken
        while (!success) {
            pickASquare = String(Math.floor(Math.random() * 9));
            //If random number returns true, the square is hasn't been used
            if (placeXOrO(pickASquare)){
                //Calls the function
                placeXOrO(pickASquare);
                //Changing condition to end loop
                success = true;
            };
        }
    }
}

//Function to parse selectedSquares array to search for win conditions
function checkWinConditions() {
    //drawWin function called to draw line once condition met
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    //Condition to check if tie occurs, if condition met then rest of function is executed
    else if (selectedSquares.length >= 9) {
        audio('./media/sudden_death_tekken.wav');
        //Delay of 1 sec added before resetGame function called
        setTimeout(function () { resetGame(); }, 1000);
    }

    //Function checks if array includes 3 strings. Used for check for win condition
    function arrayIncludes(squareA, squareB, squareC) {
        //3 variables to check if 3 in row acheived
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //If 3 variables passed all included in array then true returned and else if excutues drawLine function
        if (a === true && b === true && c === true) { return true; }
    }
}

//Function to temp clicking be possible
function disableClick() {
    //This make our body unclickable
    body.style.pointerEvents = 'none';
    //Making body clickable after 1sec delay
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
}
//Function to take string parameter of path set for placement sound from earlier
function audio(audioURL) {
    //Creates new audio object and path passed as parameter
    let audio = new Audio(audioURL);
    //Method to play the sound
    audio.play();
}

//Function to utilize HTML cavnas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2){
    //Give access to html canvas element
    const canvas = document.getElementById('win-lines');
    //Give access to methods and properties to use on canvas
    const c = canvas.getContext('2d');
    //Indications of where to start/end line on x/y axis
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        //variables temp stores x/y axis data we update in animation loop
        x = x1,
        y = y1;

    //Function to interact with canvas
    function animateLineDrawing() {
        //Variable for loop creation
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //Clears content of last loop iteration
        c.clearRect(0, 0, 608, 608);
        //Starts new path
        c.beginPath();
        //Takes us you line starting point
        c.moveTo(x1, y1);
        //Tell where the line end point will be
        c.lineTo(x, y);
        //Line width set
        c.lineWidth = 10;
        //Line color
        c.strokeStyle = 'rgba(70, 255, 33, 0.8)';
        //This methods draws everything laid out above
        c.stroke();
        //Condition to check if reached endpoints
        if (x1 <= x2 && y1 <= y2) {
            //+10 to previous end x/y endpoint
            if (x < x2) {x += 10; }
            if (y < y2) {y += 10; }
            //Needed to 6,4,2 win condition
            if (x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop); }
        }
        //Needed to 6,4,2 win condition again
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop); }
        }
    }

    //Function to clear line after drawn
    function clear() {
        //Starts line animation
        const animationLoop = requestAnimationFrame(clear);
        //Clears the line from canvas
        c.clearRect(0, 0, 608, 608);
        //Stops line animation 
        cancelAnimationFrame(animationLoop);
    }

    //Disabling clicking when win sound is played
    disableClick();
    //Sound to be played when game won
    audio('./media/champion_tekken.wav');
    //Calls line animation loop to start
    animateLineDrawing();
    //After 1 sec canvas is cleared, resets game and clicking allowed again
    setTimeout(function () { clear(); resetGame(); }, 1000);
}

//Function to allow game to start again from beginning after draw/win
function resetGame() {
    //Loop to check through each square 
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        //Clears the X/Os' "backgroundImage"
        square.style.backgroundImage = '';
    }
    //Resets array so can start again
    selectedSquares = [];
}

