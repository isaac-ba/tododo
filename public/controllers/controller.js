app.controller('controller', function($scope, taskService){
// $scope.tasks = taskService.tasks;
// $scope.addTask = taskService.addTask;
// taskService.addTask($scope.input);

$scope.addTask = function(){
  taskService.addTask($scope.input);
  taskService.getAll();
};

taskService.getAll().then(function(){
  $scope.tasks = taskService.tasks;
})
});