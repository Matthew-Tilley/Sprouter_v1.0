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

EXAMPLE #2

My thinking here is, that I will now assign the result to a variable
but it's no longer working because I changed the naming of the
function...still no problem "conceptually."  (Easy to figure out
because it gives back an "uncaught reference error" on the HTML side.)

*/

let x = function test()
{
    console.log(Math.random());
}







