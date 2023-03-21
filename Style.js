//JavaScript Document
/*
document.getElementById("child-D").nextElementSibling.style.background = "red";

var a = document.getElementById("child-D").nextElementSibling;

console.log(a);

var a = document.createElement("h4");

console.log(a);

var b = document.createTextNode("This is just a text for practice");

a.appendChild(b);

document.getElementById("existing-div").appendChild(a);



var d = document.getElementById("existing-div");
 
var x = "Learn Programming Languages in 2023 for best future.Learn Programming Languages in 2023 for best future.Learn Programming Languages in 2023 for best future.Learn Programming Languages in 2023 for best future.Learn Programming Languages in 2023 for best future.Learn Programming Languages in 2023 for best future.";

d.insertAdjacentText("beforeend", x);

*/

var newElement = document.createElement("li");
var newtext = document.createTextNode("This is new text");

newElement.appendChild(newtext);

var target = document.getElementById("fruits");

var oldElement = target.children[0];

target.replaceChild(newElement, oldElement);


var target = document.getElementById("fruits");

var oldElement = target.children[1];

target.removeChild(oldElement);

//Clone Node Method
var target = document.getElementById("fruits").children[3];

var oldElement = target.cloneNode(true);

document.getElementById("list2").appendChild(oldElement);


//Clone Contains() Method
var parentElement = document.getElementById("services");

var target = document.getElementById("heading2");

var Find = parentElement.contains(target);

console.log(Find);




//let x = "Welcome to Lahore";


//document.write("Hello world" + " " + x + " " + "Enjoy best food");

//let x = "Welcome to Lahore";

//document.write("Hello world" + " " + x + " " + "Enjoy best food");


/*
//JQuery code for Practice//


//Selector code//
$(document).ready(function () {
    $(".course2").css("background", "wheat");
    $(".course2").css("font-family", "timesNewRoman");

});

//Mouse Events code//

$(document).ready(function () {
    $(".heading2").click(function () {
        $(".heading2").css("background", "pink");

    });

    $(".heading2").dblclick(function () {
        $(this).css("background", "orange");

    });

    $(".heading2").contextmenu(function () {
        $(".heading2").css("background", "gray");

    });

    $(".heading2").mouseenter(function () {
        $(".heading2").css("background", "yellow");

    });

    $(".heading2").mouseleave(function () {
        $(".heading2").css("background", "wheat");

    });

});

//Keyboard Events Code//s

$(document).ready(function () {
    $("body").keypress(function () {
        $(this).css("background", "White");

    });

    $("body").keyup(function () {
        $(this).css("background", "White");

    });

});

//Form Events Code//

$(document).ready(function () {
    $("#fname, #fmail, #country").focus(function () {
        $(this).css("background", "Wheat");
    });

    $("#fname, #fmail, #country").blur(function () {
        $(this).css("background", "");
    });

    $("#fname").change(function () {
        
        //$(this).css("background", "blue");
        var z = $(this).val();
        $("#test").html(z);
    });

    $("#country, #fname").select(function () {
        
        $(this).css("background", "yellow");
        
    });

    $("#action").submit(function () {
        
        alert("Form submitted.");
        
    });
});

//JQuery Get Methods  Code//

$(document).ready(function () {
    $("#action").submit(function () {
        var x = $("#fname").val();
        var y = $("#fmail").val();
        var z = $("#country").val();
        alert(x + " " + y + " country:" + z);
    });
    
    //console.log(x);
});

//jQuery Set Methods  Code//

$(document).ready(function () { 
    $("#Addbutton").click(function () { 
        $(".promo2").addClass("abc xyz");
        
    });

    $("#Removebutton").click(function () { 
        $(".promo2").removeClass("abc");
        
    });

    $("#Togglebutton").click(function () { 
        $(".promo2").toggleClass("abb xyz");
        
    });

});

*/
//jQuery Set Methods  Code//

