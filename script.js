const display=document.getElementById('display');
// displaying no on display portion
function getNumber(input){
    display.value+=input;
}
function deleteNo(){
   display.value=display.value.slice(0,-1);
}

function reset(){
    display.value=' ';
}

function result(){
    // eval methos is used for evaluating data and we need to pass the string of that part,that we need to evaluate(ex. "1+5+7-14") 
   try{
    display.value=eval(display.value)
   }
   catch(error){
    display.value='error'
   }
}