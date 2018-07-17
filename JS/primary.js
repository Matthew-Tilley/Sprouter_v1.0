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
    
    
    
    
    
    $("#test").on("click", function(){
        
        console.log(Math.random());
        
        
    });
    
    
   
    
});     /*END jQUERY*/




/*

EXAMPLE #17

Yup...eliminated the "onclick" in my HTML because it was
trying to call a function that no longer existed; hence 
the uncaught reference error.

Not only that, but it wouldn't be needed anyway since I
am now using jQuery as my event handler.

Everything working as expected...

*/


































