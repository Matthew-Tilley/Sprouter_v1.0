$(document).ready(function(){
    
    $("#seedPicker").selectmenu();
    $("#sowDate").datepicker();
    
    
    $("#seedPicker").on("change", function(){
        
        console.log( $(this).val() );
        
    });
    
    
    
    
});