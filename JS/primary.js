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

EXAMPLE #23

Forget about all the text-field stuff for right now...just trying to get the
return value situation squared away.

So, I made a function and had it return the value of "Farenheit" after converting 
from Celcius.  Yay...it works!

What if I want to just store that variable somewhere and access / use it later in
my code???


*/


let x = function convert(){
    
    let celcius = prompt("Enter the degrees in Celcius");
    //I am getting a value from user via the prompt method and assigning it to variable celcius.
    
    
    let farenheit = celcius * 1.8 + 32;
    //Here I am instantiating the variable farenheit and storing a calculated result therein.
    
    
    return farenheit;
    //Now I am returning the result from above.
    
    
    
}


console.log(x());



























