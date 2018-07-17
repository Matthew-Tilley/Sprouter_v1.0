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

EXAMPLE #13

Created a function that calls two other functions, both of which
return a respective string value.

Using button click to fire the function call...only getting back
a value of "this" however.  Hmmmm.....


*/


function go(){
    
    
    console.log(this1()) + " & " + that();
    
    
}


function this1(){
    
    return "this";
    
}



function that(){
    
    return "that";
    
}






























