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

EXAMPLE #21

I set this up after watching a YouTube tutorial based on converting
miles to kilometers; made it deal with temperatures instead so I wouldn't
just be "following the example" he was presenting.

All I wanted to do is check to ensure the function was working (not even
returning a value yet) and thought it would just log a value to the console.
(In other words, whatever I entered into the Celcius field would output to the
console.)

Instead I get this back in the console:

<input id="test" type="text" onchange="convert()">


*/


function convert(){
    
    let tempVal = document.getElementById("test");
    
    console.log(tempVal);
    
}



























