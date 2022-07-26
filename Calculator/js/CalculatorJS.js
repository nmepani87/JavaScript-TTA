//Object to keep track of values
const Calculator = {
    Display_Value: '0',
    //First holder for operand of any expressions
    First_Operand: null,
    //Second holder to check if 2nd operand typed in by user
    Wait_Second_Operand: false,
    //To hold operator
    operator: null,
};

//Function to change value each time botton clicked
function Input_Digit(digit) {
    const {Display_Value, Wait_Second_Operand} = Calculator;
    //If to check if the Wait_Second_Operand is true, then sets Display_Value to what was clicked
    if(Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        //To overwrite the value displayed if its at 0, if not 0 then adds to it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

function Input_Decimal(dot) {
    //This needs so clicking decimal accidently doesn't bug out operation
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        //Asking to add decimal if Display.Value hasn't got already
        Calculator.Display_Value += dot;
    }
}

function Handle_Operator(Next_Operator) {
    const {First_Operand, Display_Value, operator} = Calculator;
    //Once operator key pressed, current number shown on screen is converted and 
    //stored in Calculator.First_Operand if nothing already in there
    const Value_of_Input = parseFloat(Display_Value);
    //Checks if operator already exists and if Wait_Second_Operand = true, 
    // if so updates operator and exits function
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {
        const Value_Now = First_Operand || 0;
        //If operator exists, property check done for operator in Perform_Calculation
        // object and function that matches operator executes
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        //Decimal point fixed
        result = Number(result).toFixed (9);
        //Get rid of any 0 at end
        result = (result *1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

//To carry out type of math operation user is trying to do put clicking on symbol
const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) =>  Second_Operand
}

//Resets value back to 0 to start working out again
function Calculator_Reset(){
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

//Changes value shown on calculator screen with content of Display_Value
function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value
}

Update_Display();
//Tracks what's being clicked
const keys = document.querySelector('.calculator-keys');
//Setting function that'll be called when specific event delivered to target
keys.addEventListener('click', (event) => {
    //Target vari is object representing element that was clicked
    const { target } = event;
    //If element clicked not button, function exited
    if (!target.matches('button')) {
        return
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return
    }
    //AC resets 
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return
    }  
    Input_Digit(target.value);
    Update_Display();     
})