angular.module('sailsExample',[]);
angular.module('sailsExample').controller('sailsExampleCrtl', ['$scope', function($scope){

io.socket.get('/item', function (data){
	$scope.mensajes = data;
	$scope.$apply();
});

io.socket.on('item', function (event){
	switch (event.verb){
	case 'created':
		$scope.mensajes.push(event.data);
		$scope.$apply();
		break;
	}
});

$scope.enviar = function(){
	io.socket.get('/item/create?mensaje='+$scope.mensaje, function (data){
		$scope.mensajes.push(data);
		$scope.mensaje = '';
		$scope.$apply();
})};

}])