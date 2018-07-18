$(document).ready(function(){
    

    // THIS INITIALIZES THE jQUERY-UI DATEPICKER:
    
    $("#sowDate").datepicker();

    
    
    // THIS OBTAINS A DATE VALUE PER USER INPUT AND LOGS IT
    // TO THE CONSOLE.  (AT THIS POINT I DON'T UNDERSTAND 
    // HOW TO RETURN THE VALUE AND USE IT ELSEWHERE).
    
    $("#sowDate").datepicker().on("change", function(){
        
        let tempStart =  $(this).val();
        
        console.log(tempStart);
        
    });
    
    
    
    
    $("#seedPicker").on("change", function(){
        
        console.log( $(this).val() );
        
    });
    
    
    
    
   
    
   
    
    
    
    
    
    
    
    
    
    
   
    
    
   
    
});     /*END jQUERY*/































