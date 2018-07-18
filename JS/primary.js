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
    
    
    var result = test();
    
    
    
    /*
        Function is same as before - should get a value when user
        changes selection on dropdown menu.  Return statement obtains
        and "returns" that value / assigns it to the variable "test"
        right?
        
        Now I'm trying to instantiate another variable (result) and
        equating that with the variable "test."
        
        Instead of trying to console.log the value from "test" I am 
        now trying to console.log the value from "result" instead:
        
            console.log(result);
            
        Again, that gives me back the following console:
        
            jQuery.fn.init [select#seedPicker.DDBX-T-01]
            
        So, that tells me to call it as a function...no problem:
        
            console.log(result());
        
        That gives me the same freak-out screen from my JavaScript console
        as before:
        
            jquery-3.3.1.js:3818 jQuery.Deferred exception: result is not a function TypeError: result is not a function
            at HTMLDocument.<anonymous> (file:///home/madmin/Desktop/WEBDEV/CURRENT_PROJECTS/SPROUTER_v1.0/JS/primary.js:88:17)
            at mightThrow (file:///home/madmin/Desktop/WEBDEV/CURRENT_PROJECTS/SPROUTER_v1.0/JS/jquery-3.3.1.js:3534:29)
            at process (file:///home/madmin/Desktop/WEBDEV/CURRENT_PROJECTS/SPROUTER_v1.0/JS/jquery-3.3.1.js:3602:12) undefined
            
            jQuery.Deferred.exceptionHook @ jquery-3.3.1.js:3818
            process @ jquery-3.3.1.js:3606
            setTimeout (async)
            (anonymous) @ jquery-3.3.1.js:3640
            fire @ jquery-3.3.1.js:3268
            fireWith @ jquery-3.3.1.js:3398
            fire @ jquery-3.3.1.js:3406
            fire @ jquery-3.3.1.js:3268
            fireWith @ jquery-3.3.1.js:3398
            ready @ jquery-3.3.1.js:3878
            completed @ jquery-3.3.1.js:3888
            jquery-3.3.1.js:3827 Uncaught TypeError: result is not a function
                at HTMLDocument.<anonymous> (primary.js:88)
                at mightThrow (jquery-3.3.1.js:3534)
                at process (jquery-3.3.1.js:3602)
                
                
        So then, I'm thinking "okay, maybe I need to set variable "result" to the
        *FUNCTION* of "test()" not just the *VARIABLE* of "test."  In other words:
        
            NOT LIKE THIS:
            
                var result = test;
            
            BUT LIKE THIS:
            
                var result = test();
        
        
        At first (after making the appropriate changes) I ran my console.log like this:
        
            console.log(result());
            
        Silly mistake, because "result" is obviously a variable...not a function.  However,
        the console gave me an error saying "test" is not a function.  (That part has me 
        kinda scratching my head.)
        
        
        So, now I change up my console.log statement like this...and log the *VARIABLE* 
        stored in "result" which (in my mind) should be equal to whatever happens to be
        returned from function test() at any given moment:
        
            console.log(result);
            
        Instead, I still get back those same nasty error messages in the console:
        
            jquery-3.3.1.js:3818 jQuery.Deferred exception: test is not a function TypeError: test is not a function
            at HTMLDocument.<anonymous> (file:///home/madmin/Desktop/WEBDEV/CURRENT_PROJECTS/SPROUTER_v1.0/JS/primary.js:52:18)
            at mightThrow (file:///home/madmin/Desktop/WEBDEV/CURRENT_PROJECTS/SPROUTER_v1.0/JS/jquery-3.3.1.js:3534:29)
            at process (file:///home/madmin/Desktop/WEBDEV/CURRENT_PROJECTS/SPROUTER_v1.0/JS/jquery-3.3.1.js:3602:12) undefined
            
            jQuery.Deferred.exceptionHook @ jquery-3.3.1.js:3818
            process @ jquery-3.3.1.js:3606
            setTimeout (async)
            (anonymous) @ jquery-3.3.1.js:3640
            fire @ jquery-3.3.1.js:3268
            fireWith @ jquery-3.3.1.js:3398
            fire @ jquery-3.3.1.js:3406
            fire @ jquery-3.3.1.js:3268
            fireWith @ jquery-3.3.1.js:3398
            ready @ jquery-3.3.1.js:3878
            completed @ jquery-3.3.1.js:3888
            jquery-3.3.1.js:3827 Uncaught TypeError: test is not a function
            at HTMLDocument.<anonymous> (primary.js:52)
            at mightThrow (jquery-3.3.1.js:3534)
            at process (jquery-3.3.1.js:3602)
            
    
        UUUUUUGGGGGGGHHHHHHHHHHHHHHH....!!!!!  :(
        
       
    */
    
    
    console.log(result);
    
    

    
    
    
    
   
    
   
    
    
    
    
    
    
    
    
    
    
   
    
    
   
    
});     /*END jQUERY*/































