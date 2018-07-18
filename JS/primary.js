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
        
                    return $(this).val();
        
                });
    
    
    
    
    
    /*
       
       Now I'll try this:
       
            console.log(test);
            
            
        That gives me back this again:
        
            jQuery.fn.init [select#seedPicker.DDBX-T-01]
            
        
        So, now I try this:
        
            console.log(test());
            
            
        And it gives me back the great-big, horrible error
        messages in my console.
        
        
        Now I'm going to try changing up the function itself,
        like so:
        
        CHANGING FROM:
        
            var test = $("#seedPicker").on("change", function(){

                    console.log ( $(this).val() );

                    });
                    
                    
        CHANGING TO:
                
            var test = $("#seedPicker").on("change", function(){

                        $(this).val();

                    });
                    
                    
        
        Running this:
            
            console.log(test);
        
        Gives me back this:
        
            jQuery.fn.init [select#seedPicker.DDBX-T-01]
            
    
        
        Running this:
        
            console.log(test());
            
            
        Gives me back the big-horrible error message again.  :(
        
        
        
        That gives me the bright idea to try putting in a dreaded
        return keyword again, like so:
        
            var test = $("#seedPicker").on("change", function(){

                        return $(this).val();

                    });
                    
        
        I run this and get the big horrible error message:
        
            console.log(test());
            
        
        
        I run this:
        
            console.log(test);
            
        
        
        And get back the following:
        
            jQuery.fn.init [select#seedPicker.DDBX-T-01]
        
     
        
    */
    
    
   
    
    console.log(test);
   
    
});     /*END jQUERY*/































