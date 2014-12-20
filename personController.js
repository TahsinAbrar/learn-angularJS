function personController($scope) {
    $scope.firstName = "James",
    $scope.lastName = "Bond",
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    }
}