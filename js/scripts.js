$(function(){
  $("#loginModalContainer").load("modals/login.html");
  $("#createTasksModalContainer").load("modals/createTasks.html");
  $('#notificationsBtn').popover({
    container: 'body'
});
});

$("#loginBtn").click(function(){
    $("#loginModal").modal('show');
});
$("#createTaskBtn").click(function(){
    $("#createTaskModal").modal('show');
});
