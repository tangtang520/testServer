/**
 * Created by tangtang on 15/1/4.
 */
//app.controller("getInfo",function($scope){
//    $scope.fname = "TT";
//    $scope.lname = "jj";
//})
//app.controller("getInfo",function($scope){
//    $scope.message = "";
//    $scope.saveqq = function(){
//        $scope.message = "";
//    }
//    $scope.clearqq = function(){
//        $scope.message = "";
//    }
//    $scope.left = function(){
//        return 100 - $scope.message.length;
//    }
//})
app.controller("getInfo", function($scope) {
    $scope.message = "";
    $scope.left  = function() {return 100 - $scope.message.length;};
    $scope.clearqq = function() {$scope.message="";};
    $scope.saveqq  = function() {$scope.message="";};
});