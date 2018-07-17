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

EXAMPLE #7

So...now what I'm thinking is "okay, so x is a function
that returns some random number to a variable.  Thus,
what I'll do is create another variable to "catch" variable
"x" while calling console.log with "y" when the button is
clicked.

What I get back is a function definition, and then an
"uncaught reference error" when the button is clicked.





*/

let x = function()
{
    return ( Math.random() );
}

let y = console.log(x);









