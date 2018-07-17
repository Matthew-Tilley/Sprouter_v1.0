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

EXAMPLE #14

SYNTAX ERROR - Realized what I did / had an ending paren in the
wrong spot.

Now works as expected...

*/


function go(){
    
    
    console.log(this1() + " & " + that() );
    
    
}


function this1(){
    
    return "this";
    
}



function that(){
    
    return "that";
    
}






























