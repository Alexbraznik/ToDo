$(window).load(function () {
    $(".loader-inner").fadeOut();
    $(".loader").delay(400).fadeOut('slow');
});

//var List = document.getElementById('List');
//var todos;
//function toLocal() {
//    todos = List.innerHTML;
//    localStorage.setItem('todos', todos);
//}



$(document).ready(function () {
    addListenerToAddTask();
});
function addListenerToAddTask() {
    $(".add-task").click(function () {
        var valueTask = $(".input-task").val();
        //toLocal();
        if (!valueTask) {
            alert("Enter your text!")
            return false
        }
        var containerTodo = "<div class='todo-container'> <input type='checkbox' class='chbx'></input>  <font>" + valueTask + "</font><button class='edit-task'>&#9998;</button><button class='delete-task'>&#10006;</button></div>";
        $(".todos-container").append(containerTodo);
        $(".input-task").val("");
        addListenerToDeleteTask();
        addListenerToEditTask();
        chkbxListener();
    });
}
function addListenerToDeleteTask() {
    $(".delete-task").click(function () {
        var widget = this;
        $("#myModalBox").modal("show");
        $(".delete-changes").click(function () { 
            $(widget).parents(".todo-container").remove();
            //toLocal();
            $("#myModalBox").modal("hide");
        })
    })
};
function addListenerToEditTask() {
    $(".edit-task").click(function () {
        var valueEditTask = $(this).siblings("font");
        $("#myModal").modal("show");
        var inputForEdit = $(".input-task-edit");
        inputForEdit.val(valueEditTask.text());
        //toLocal();
        $(".save-changes").unbind("click");
        $(".save-changes").click(function () {

            if (!inputForEdit.val()) {
                alert("Enter your text!")
                return false
            }
            valueEditTask.text(inputForEdit.val());
        });

    });
}
function chkbxListener() {

};



//if (localStorage.getItem('todos')) {
//    List.innerHTML = localStorage.getItem('todos');
//}





//$('#myform').submit(function (e) {
//    e.preventDefault();
//    $.ajax({
//        url: "/Form/MyajaxCall",
//        type: 'POST',
//        dataType: "json",
//        data: { order: 'Client_Call' },
//        success: function (data) {

//        }, error: function (data) {

//        }
//    });
//});
