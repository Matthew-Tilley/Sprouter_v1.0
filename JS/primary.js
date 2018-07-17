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

EXAMPLE #6

Since I got back a function definition before, that tells me
I need to modify my code by doing console.log(x());
instead of console.log(x); because...it is a function.  Still
not completely intuitive, but that makes sense to me.

Instead of the value changing though, now I just get back ONE
value after refreshing the page each time; also has NOTHING to
do with clicking the button.

At this point, assuming that's because I'm not actually calling
the function when clicking the button now?


*/

let x = function()
{
    return ( Math.random() );
}

console.log(x());









