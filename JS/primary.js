$(document).ready(function(){
    
    
    $("#sowDate").datepicker();
    
    
    $("#seedPicker").on("change", function(){
        
        console.log( $(this).val() );
        
    });
    
    
    
    
});