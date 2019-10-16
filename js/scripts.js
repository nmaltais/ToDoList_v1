$(function(){
  $("#loginModalContainer").load("modals/login.html");
  $("#createTasksModalContainer").load("modals/createTasks.html");
});

$("#loginBtn").click(function(){
    $("#loginModal").modal('show');
});
$("#createTaskBtn").click(function(){
    $("#createTaskModal").modal('show');
});
