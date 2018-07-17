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
    
    
    
    
    
    let x = $("#test").on("click", function(){
        
        return(Math.random());
        
        
    });
    
    
    console.log(x());
    
   
    
});     /*END jQUERY*/




/*

EXAMPLE #20

So...tried putting in a set of parens to call the function
(like before) and it REALLY didn't like that at all.

Okay, so I am trying to use a button with an ID of "test"
and using that to fire a jQuery function that will return
a value (random number) to the variable "x" and it's not working.



*/


































