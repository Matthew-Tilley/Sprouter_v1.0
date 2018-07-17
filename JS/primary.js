$(document).ready(function(){
    
    
    $("#sowDate").datepicker();
    
    
    /*  THIS CODE IS WORKING PROPERLY - SAVING FOR LATER
    
    $("#seedPicker").on("change", function(){
        
        console.log( $(this).val() );
        
    });
    
    */
    
    
   
    
   
    
    
    
    
    $("#sowDate").datepicker().on("change", function(){
        
        let tempStart =  $(this).val();
        
        console.log(tempStart);
        
    });
    
    
   
    
});     /*END jQUERY*/




/*

EXAMPLE #5

Per usual, once I start messing around with "return" values
the wheels completely fall off.

My thinking is, that clicking the button will assign a value
(random number) to the variable "x" and I should be able to
log it via the output below.

Instead, I just get back a function definition...

*/

let x = function()
{
    return ( Math.random() );
}

console.log(x);









