$(document).ready(function(){


    $("#seedPicker").on("change", function(){
        
      let type = $(this).val();

      console.log(type);

    });


    $("#sowDate").datepicker();

    $(".DDBX-T-01").selectmenu();




});