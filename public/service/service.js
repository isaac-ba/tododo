app.factory('taskService', function($http){

var todo = {
  tasks: [],

  addTask: function(input){

    $http.post('/todo', {name: input})
    .then(function(resFromServer){
       console.log(resFromServer.data);
    });
  },
  getAll:function(){
      return $http.get('/todo').then(function (data) {

        angular.copy(data.data, todo.tasks);
        console.log(todo.tasks);
    })
  }
};

return todo;

});
