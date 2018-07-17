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
    
    
    console.log(x);
    
   
    
});     /*END jQUERY*/




/*

EXAMPLE #18

Okay...here is where the rubber meets the road.  I'm looking
at this as "click the button" and "x" will automagically have
a random number value (float) stored in it.

Then the whole console.log thing gives me back a function 
definition because I didn't use parens to actually call the function.
Regardless, I'm thinking you click the button and whammo...that's what
"x" is and should output such to the console.



*/


































