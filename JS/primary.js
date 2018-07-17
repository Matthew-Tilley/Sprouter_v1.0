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

EXAMPLE #12

Just like before, I have created another function that is
called whenever the button is clicked.

Within the function that is actuated when the button is clicked,
I call function "y()" that gets the value of 4.

I guess "y" doesn't equal 4 until function "y" is actually called...
by clicking the button and firing function "a" which...makes sense
now that I think about it.

*/

let y = function (){
    return 2+2;
}


function a(){
    console.log(y());
}




















