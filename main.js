$(document).ready(function(){
    //create variable
    var counts = 0;
    $(".addtocart").click(function () {
    //to number and increase to 1 on each click
       counts += +1;
       $(".cart-counter").animate({
    //show span with number
                 opacity: 1
             }, 300, function () {
    //write number of counts into span
                 $(this).text(counts);
             });
         }); 
 });

//cart increase and decrease value
 function increaseValue()
    {   
        var a = document.getElementById("price").innerHTML;
        var b = document.getElementById("number").value;
        var value = parseInt(document.getElementById('number').value, 10);
        value = isNaN(value) ? 0 : value;
        if(value<10){
            value++;
                document.getElementById('number').value = value;
                var result = parseInt(a) * parseInt(b);
                return document.getElementById('total').innerHTML = result;
        }

    }
    function decreaseValue()
    {
        var a = document.getElementById("price").innerHTML;
        var b = document.getElementById("number").value;
        var value = parseInt(document.getElementById('number').value, 10);
        value = isNaN(value) ? 0 : value;
        if(value>1){
            value--;
                document.getElementById('number').value = value;
                var result = parseInt(a) * parseInt(b);
                return document.getElementById('total').innerHTML = result;
        }
    
    }
