$(document).ready(function(){


    $("#seedPicker").on("change", function(){
        
      let type = $(this).val();

      console.log(type);
     

    });



    $("#sowDate").datepicker();

    $("#sowDate").on("change", function(){
        console.log(Math.random() + 1);
    });


    

    $/* (".DDBX-T-01").selectmenu(); */




});