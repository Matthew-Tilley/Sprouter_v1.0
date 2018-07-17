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

EXAMPLE #9

To fix the previous issue, I made "y" into an anonymous
function and used it to console.log the value of "x" but
it gets back a function definition instead.  Obviously, I
know what needs to be done in this case; starting to catch
on...



*/

let x = function()
{
    return ( Math.random() );
}


let y = function()
{
    console.log(x);
}









