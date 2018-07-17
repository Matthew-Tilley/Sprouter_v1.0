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

EXAMPLE #16

Now using jQuery for the event handler - returning random value
as expected but also "uncaught reference error" and I probably
know why.

*/


































