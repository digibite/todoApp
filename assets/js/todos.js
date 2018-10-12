// Check Off Specific Todos By Clicking
$("#list-of-todos").on("click", "li", function () {
    $(this).toggleClass("completed");
});

//Click on X to delete todo
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(200, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        //grabbin new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");

    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})

// $("ul").click(function(){
//     alert("clicked on a ul!");
// });

// $("#container").click(function(){
//     alert("clicked on a container!");
// });

// $("body").click(function(){
//     alert("clicked on a body!");
// });


