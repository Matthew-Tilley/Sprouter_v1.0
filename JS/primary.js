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

EXAMPLE #8

Again, since I was getting back the function definition that
tells me I need to put a set of parens after "x" to call the
function...

Now I get a random number logged to the console when refreshing
the page.  However, I also still get an "uncaught reference error"
when clickinbg the button.

My guess is, because "y" is just a variable (not a function) that's
why it's not working?



*/

let x = function()
{
    return ( Math.random() );
}

let y = console.log(x());









