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

EXAMPLE #10

Now I put in the parens and everything works properly...it
spits out a random number every time the button is clicked.

The confusing part is, I didn't even "pass" function "y" the
variable "x" via an argument...didn't even instantiate a 
parameter for such.  Yet, it's still working...???


*/

let x = function()
{
    return ( Math.random() );
}


let y = function()
{
    console.log(x());
}









