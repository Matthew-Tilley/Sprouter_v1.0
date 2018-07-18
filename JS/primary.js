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
        Okay...here is what I'm trying to do.  I basically made the
        whole thing an anonymous function, right?
        
        My thinking is, the function will fire when somebody changes
        the dropdown value.
        
        That function obtains the current value and "returns" it.
        
        Thus, that means the variable "test" now equals whatever value
        happens to get "returned" by the function at any given moment.
        
        At first I did:
        
            console.log(test); 
        
        and got this back via the console:
        
            jQuery.fn.init [select#seedPicker.DDBX-T-01]
            
        So, that tells me (since I'm basically getting a function definition
        back) I need to call it (test) as a function instead...like this:
        
            console.log(test());
        
        But when I do that, it causes everything to go haywire and puke all
        over the console:
        
            jquery-3.3.1.js:3818 jQuery.Deferred exception: test is not a function TypeError: test is not a function
            at HTMLDocument.<anonymous> (file:///home/madmin/Desktop/WEBDEV/CURRENT_PROJECTS/SPROUTER_v1.0/JS/primary.js:85:17)
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
            at HTMLDocument.<anonymous> (primary.js:85)
            at mightThrow (jquery-3.3.1.js:3534)
             
    */
    
    
    
    console.log(test());
    
    
    
    
   
    
   
    
    
    
    
    
    
    
    
    
    
   
    
    
   
    
});     /*END jQUERY*/































