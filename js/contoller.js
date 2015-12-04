/**
 * Created by robmoore on 12/4/15.
 */
app.controller('mainController', ['$scope', function($scope){
    $scope.title = "Test title for angular"
    $scope.products = [
        {
            name: "Secret name",
            price: 19,
            date: new Date('2015', '11', '04'),
            likes: 0,
            dislikes:0
        },
        {
            name:"product 2",
            price: 20,
            date: new Date('2013', '08', '23'),
            likes: 0,
            dislikes:0

        },
        {
            name:"product 3",
            price: 30,
            date: new Date('2013', '10', '03'),
            likes: 0,
            dislikes:0
        },
        {
            name:"product 4",
            price: 22,
            date: new Date('2012', '08', '23'),
            likes: 0,
            dislikes:0

        },
        {
            name:"product 5",
            price: 18,
            date: new Date('2015', '08', '23'),
            likes: 0,
            dislikes:0
        }
    ]
    $scope.plusOne = function(index){
        $scope.products[index].likes += 1;
    };
    $scope.minusOne = function(index){
        $scope.products[index].dislikes += 1;
    };
}]);