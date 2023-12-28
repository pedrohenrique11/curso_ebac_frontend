$(document).ready(function() {
    $("form").submit(function(e) {
        e.preventDefault()

        const task = $("#newTaskInput").val();

        if(task !== "") {
            $("ul").append(`<li><p>${task}</p></li>`)
        } else alert("Adicione uma tarefa!")
    })
    $("ul").on("click", "li", function() {
        $(this).toggleClass("done");
    });

})