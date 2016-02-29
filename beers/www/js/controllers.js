
angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.factory('BeerData', function(){                                          // This factory stores information as a singleton so multiple controllers can access it
  return {data: {}};
})

.controller('SearchCtrl', function($scope, $state, $http, BeerData) {     // use dependency injection to get the BeerData factory
  $scope.form = {};                                                       // used to store your form data

  $scope.search = function() { 

    var params={}
    if($scope.form.abv)
    {
        params.abv=$scope.form.abv;
      }    
      if($scope.form.name)
    {
        params.name=$scope.form.name;
      }    
      if($scope.form.ibu)
    {
        params.ibu=$scope.form.ibu;
      }    
      
      if($scope.form.isOrganic)
    {
        params.isOrganic=$scope.form.isOrganic? 'Y' : 'N';
      }    
      if($scope.form.isDark)
      {
        params.isDark=$scope.form.isDark? 'Y' : 'N';
       }      
       if($scope.form.isVerified)
      {
        params.isVerified=$scope.form.isVerified? 'Y' : 'N';
       }                                                 // called when the search button is clicked
    $http({
      method: 'GET',
      url: 'https://salty-taiga-88147.herokuapp.com/beers',               // the link to my proxy
      params: params                                                         // sets the GET params
        
        //item thumbnail

      
    }).then(function successCallback(response) {
      BeerData.data = response.data;                                      // save the response data in the factory
      $state.go('app.beers');                                             // go to the beer results state
    });
  }
})

.controller('BeersCtrl', function($scope, BeerData) {
  console.log(BeerData.data); 

  console.log(BeerData.data.totalResults);   
  console.log(BeerData.data.data[0].nameDisplay);                                          // test to make sure that the data got passed through
  if (BeerData.data.totalResults>50 ){
    BeerData.data.totalResults = 50;
                        }                       // this should be updated to contain the beer data
                                                    // this should be updated to contain the beer data
  $scope.playlists = [];
  for (var i = 0; i<=BeerData.data.totalResults - 1; i++) {
    if(!BeerData.data.data[i].labels)
    {
      BeerData.data.data[i].labels= "null";
      console.log("no picture");
    }
        $scope.playlists.push({title:BeerData.data.data[i].nameDisplay, image:BeerData.data.data[i].labels,  id:i})
         };  
         console.log (i);

                                              // this should be updated to contain the beer data 
  })


.controller('BeerCtrl', function($scope, $stateParams, BeerData) {        // use dependency injection to get the BeerData factory
  console.log($stateParams.id); 
  console.log(BeerData.data.data[$stateParams.id].isOrganic) 
  $scope.beer = BeerData.data.data[$stateParams.id]
                                          // test to make sure the id gets passed through the URL

  
});
