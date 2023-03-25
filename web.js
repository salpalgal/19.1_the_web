$("#formContain").on("click","#submit",function(){
    $("<p></p>").text(`${$("#inputVal").val()}`).appendTo("#textContain")
    $("#inputVal").val("")


})

