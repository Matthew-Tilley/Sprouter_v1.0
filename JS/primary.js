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

EXAMPLE #15

Not sure why I did this (really doesn't matter) but changed the
return values so they add up to an integer instead of concat a
string.

*/


function go(){
    
    
    console.log(this1() + that() );
    
    
}


function this1(){
    
    return 2;
    
}



function that(){
    
    return 2;
    
}






























