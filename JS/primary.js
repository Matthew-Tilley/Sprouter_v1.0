$(document).ready(function(){
    
    //  REFACTORED MY CODE - REALIZED THERE IS NO REASON TO
    //  INITIALIZE THE DATEPICKER, THEN USE THE EXACT SAME
    //  CODE TO CREATE A FUNCTION...JUST DOING IT "ALL IN ONE"
    //  AT THIS POINT.

    //  THIS INITIALIZES THE jQUERY-UI DATEPICKER AND
    //  CREATES A FUNCTION THAT IS FIRED WHEN USERS 
    //  PROVIDE (CHANGE) THEIR INPUT VIA THAT INTERFACE.
    //  AT THIS POINT I HAVE IT LOGGING TO THE CONSOLE
    //  SO THAT I CAN TEST THE FUNCTION, BUT ALSO DON'T
    //  UNDERSTAND HOW TO GET THAT VALUE OUT (VIA RETURN)
    //  TO DO ANYTHING ELSE WITH IT.
    
    $("#sowDate").datepicker().on("change", function(){
        
        let tempStart =  $(this).val();
        
        console.log(tempStart);
        
    });
    
    
    
    
    //  THIS INITIALIZES A DROPDOWN MENU CALLED THE "SEEDPICKER"
    //  AND FIRES OFF A FUNCTION WHEN THE USER CHANGES THEIR
    //  SELECTION.  AGAIN...LOGGING IT TO THE CONSOLE SO THAT I
    //  CAN TEST IT'S WORKING PROPERLY, BUT DON'T KNOW HOW TO 
    //  GET THE VALUE BACK (RETURN) AND DO ANYTHING ELSE WITH IT.
    //  RETURN VALUES ARE CURRENTLY THE BANE OF MY EXISTENCE.
    
    /*
    
    $("#seedPicker").on("change", function(){
        
        console.log( $(this).val() );
        
    });
    
    */
    
    
    var test = $("#seedPicker").on("change", function(){
        
                console.log ( $(this).val() );
        
                });
    
    
    
    
    
    /*
        Now I put everything back kinda-sorta like it was before; 
        instead of "returning" the value it gets shuffled off to 
        the console.
        
        The whole thing is *STILL* assigned to a variable of "test"
        and everything works just fine.    
       
    */
    
    
    

    
    
    
    
   
    
   
    
    
    
    
    
    
    
    
    
    
   
    
    
   
    
});     /*END jQUERY*/































