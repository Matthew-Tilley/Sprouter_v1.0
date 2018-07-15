

$(document).ready(function(){


    $("#seedPicker").on("change", function(){
        
      let type = $(this).val();

      console.log(type);
     
    });


    /* $("#sowDate").datepicker().on("change", function(){

        console.log( $("#sowDate").datepicker("getDate"));
    }); */


    /* $("#sowDate").datepicker().on("change", function(){

        let x =  $("#sowDate").datepicker("getDate");

        console.log(x + "OIJASOIJASD");
    }); */
    
    
    /* $("#sowDate").datepicker().on("change", function(){

        return $("#sowDate").datepicker("getDate");
    });

    console.log(x.val()); */

    /* function getDate(){

        x = $("#sowDate").datepicker("getDate");
        
        return x;
    }


    let startDate = getDate(x);

    console.log(startDate); */



    /* $("#sowDate").datepicker().on("change", function(){

        let x =  $("#sowDate").datepicker("getDate");

        console.log(x + "OIJASOIJASD");
    }); */





   /*  
   THIS ONE WORKS
   let getDate = $("#sowDate").datepicker().on("change", function(){

            let x = $("#sowDate").datepicker("getDate").getTime();

            return x;
    }); */

    $("#sowDate").datepicker();

    
    let startDate = $("#sowDate").on("change", function(){

        let x = $("#sowDate").datepicker("getDate").getTime();

        

       return x;

        

    });


    console.log(startDate());

 /*    var time = new Date().getTime();
    var date = new Date(time);
    alert(date.toString()); // Wed Jan 12 2011 12:42:46 GMT-0800 (PST)
    

 */


});





