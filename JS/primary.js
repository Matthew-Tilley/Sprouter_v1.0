$(document).ready(function(){
    
    
    $("#sowDate").datepicker();
    
    
    $("#seedPicker").on("change", function(){
        
        console.log( $(this).val() );
        
    });
    
    
    
    $("#sowDate").datepicker().on("change", function(){
        
        let tempStart =  $(this).val();
        
        console.log(tempStart);
        
        
        
        
    });
    
    
    
    
    
    
    
    
    
    
});