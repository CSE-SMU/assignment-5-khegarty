This is an addon starter template for the [Ionic Framework](http://ionicframework.com/).

## How to use this template

*This template does not work on its own*. It is missing the Ionic library, and AngularJS.

To use this, either create a new ionic project using the ionic node.js utility, or copy and paste this into an existing Cordova project and download a release of Ionic separately.

### With the Ionic tool:

Take the name after `ionic-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myApp sidemenu
```

Then, to run it, cd into `myApp` and run:

```bash
$ ionic platform add ios
$ ionic build ios
$ ionic emulate ios
```

Substitute ios for android if not on a Mac, but if you can, the ios development toolchain is a lot easier to work with until you need to do anything custom to Android.

## Demo
http://plnkr.co/edit/0RXSDB?p=preview

## Issues
Issues have been disabled on this repo, if you do find an issue or have a question consider posting it on the [Ionic Forum](http://forum.ionicframework.com/).  Or else if there is truly an error, follow our guidelines for [submitting an issue](http://ionicframework.com/contribute/#issues) to the main Ionic repository. On the other hand, pull requests are welcome here!








<ion-view view-title="Welcome to my beer app!">
  <ion-content>
    <ion-list>
    <div class="card" >
  		<div class="item item-text-wrap">
  			<font color="red">
    		In the boxes below please enter in the parameters you would like to search by.</font>
  		</div>
	</div>

      <ion-item ng-repeat="playlist in playlists">
      <ion-checkbox ng-model="isChecked">{{playlist.title}}</ion-checkbox>
      <div ng-show= "isChecked">
        <div class="list">

  <div class="item item-input-inset">
    <label class="item-input-wrapper">
      <input type="text" placeholder="input search term">
    </label>
    
  </div>

</div>
      </div>
      </ion-item>
      <li class="item item-toggle">
     	Is beer light or dark?

     	<label class="toggle toggle-balanced">
       	<input type="checkbox">
      	 <div class="track">
         <div class="handle">
         </div>
       	</div>
       	Dark
     	</label>
  		</li>
      <li class="item item-toggle">
     	Is organic?
     	<label class="toggle toggle-balanced">
       	<input type="checkbox">
      	 <div class="track">
         <div class="handle"></div>
       	</div>
       	Yes
     	</label>
  		</li>
      
   
    </ion-list>
  </ion-content>
</ion-view>



<ion-view view-title="Search">
  
  </ion-content>
  <div class = "container">
    <ion-item ng-repeat="playlist in playlists" href="#/app/beers/{{playlists.id}}">
    <div class = "row">
      <div class = "col-sm-6"
      <ion-checkbox ng-model="isChecked">{{playlist.title}}</ion-checkbox>
      <div ng-show= "isChecked">
        <div class="list">

  <div class="item item-input-inset">
    <label class="item-input-wrapper">
      <input type="text" placeholder="input search term">
    </label>
    </div>
  </div>
  </div>

</div>
      </div>
      </ion-item>
<div class = "row">
  <div class = "col-sm-6">
      <li class="item item-toggle">
      Is beer light or dark?

      <label class="toggle toggle-balanced">
        <input type="checkbox">
         <div class="track">
         <div class="handle">
         </div>
        </div>
        Dark
      </label>
      </li>
    </div>
  </div>
    <div class = "row">
      <li class="item item-toggle">
      Is organic?
      <label class="toggle toggle-balanced">
        <input type="checkbox">
         <div class="track">
         <div class="handle"></div>
        </div>
        Yes
      </label>
      </li>
      
   
  </div>
  <div class="bar bar-footer">
  <div class="title">Search</div>
  <button class="button button-block button-royal" ng-click = "search()">
  Submit
</button>
</div>
</ion-view>

