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

EXAMPLE #4

Now I have fixed the previous problem by changing "test" to "x"
in my HTML function call.

Also eliminated "test" within the function definition...because 
doing it this way creates an "anonymous function" correct?

In this case, it now works properly and spits out random numbers 
as expected...

*/

let x = function()
{
    console.log( Math.random() );
}










