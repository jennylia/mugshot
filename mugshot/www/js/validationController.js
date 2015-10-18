
	//1. Create the clarifai object
	clarifai = new Clarifai({
    	'clientId': '35jcg0WIW8KDHG5TKA9D61-XB_LsDPc442OWyuRl',
    	'clientSecret': 'Brfgub1h4VO0-7yP0Xl9Oxi5KMFydWPUY7tP7zVi'
  	});

	//Wait for it to load a little bit
	  	 setTimeout(function() {
		    sampleNegatives().then(samplePositives).then(train)
		 }, 6000);

	 //Copied over the other logics:
	 function positive(imgurl) {
		  return clarifai.positive(imgurl, 'jennymug2', callback).then(
		    promiseResolved,
		    promiseRejected
		  );
		}

		function negative(imgurl) {
		  return clarifai.negative(imgurl, 'jennymug2', callback).then(
		    promiseResolved,
		    promiseRejected
		  );
		}

		function train() {
		  return clarifai.train('jennymug2', callback).then(
		    promiseResolved,
		    promiseRejected
		  );
		}

		function predict(imgurl) {
		  clarifai.predict(imgurl, 'jennymug2', callback)
		  .then(function(obj) {
		      if (obj.score < 0.6) {
		      	alert("HEY!@@@@@@@@@@@@@@@@@@@@@@@@");
		        console.log({
		          title: 'Go ahead and use it!',
		          text: 'This is not jenny lian\'s mug',
		          imageUrl: obj.url
		        });
		      } else {
		      	alert("HEY! Don't Touch");
		      	console.log("======================================");
		        console.log({
		          title: 'No touch allowed!',
		          text: 'This is MINE',
		          imageUrl: obj.url
		        });
		      }
		    },
		    promiseRejected
		  );
		}

		function promiseResolved(obj){
		  console.log('Promise resolved', obj);
		}

		function promiseRejected(obj){
		  console.log('Promise rejected', obj);
		}

		function callback(obj){
		  console.log('callback', obj);
		}

		function mugSubmit() {
		  predict($("#new-mug").val());
		}

		function samplePositives() {
		  var p1 = clarifai.positive('https://larvalsubjects.files.wordpress.com/2010/04/450x450std-cobalt-blue-mug.jpg', 'jennymug2', callback).then(
		    promiseResolved,
		    promiseRejected
		  );
		  var p2 = clarifai.positive('http://arswarehouse.com/images/87168-06.jpg', 'jennymug2', callback).then(
		    promiseResolved,
		    promiseRejected
		  );
		  var p3 = clarifai.positive('http://www.promo-mugs.co.uk/acatalog/sparta-light-blue-297.jpg', 'jennymug2', callback).then(
		    promiseResolved,
		    promiseRejected
		  );
		  var p4 =clarifai.positive('http://www.leaderpromos.com/ProdImages/xlarge/BUL_sm6303_lightblue.jpg', 'jennymug2', callback).then(
		    promiseResolved,
		    promiseRejected
		  );
		  var p5 =clarifai.positive('http://www.piercingglance.com/image/cache/data/Mugs/supreme-mug-blue-750x750.jpg', 'jennymug2', callback).then(
		    promiseResolved,
		    promiseRejected
		  );
		  var p6 = clarifai.positive('http://www.ikea.com/PIAimages/0209837_PE365557_S5.JPG', 'jennymug2', callback).then(
		    promiseResolved,
		    promiseRejected
		  );
		  var p7 = clarifai.positive('http://www.woodenurecover.com/assets/images/Coffe-Mugs/Blue-Recovery-Mug.jpg', 'jennymug2', callback).then(
		    promiseResolved,
		    promiseRejected
		  );

		  return Promise.all([p1, p2, p3, p4,p5, p6, p7]);
		}

		function sampleNegatives() {
		  var n1 = clarifai.negative('http://i.imgur.com/GeMQsiQ.jpg', 'jennymug2', callback).then(
		    promiseResolved,
		    promiseRejected
		  );
		  var n2 = clarifai.negative('http://studiodiner.com/images/F31865175.png', 'jennymug2', callback).then(
		    promiseResolved,
		    promiseRejected
		  );
		  var n3 = clarifai.negative('http://cdn3.volusion.com/bvdx6.cp5fo/v/vspfiles/photos/1085040852515505-2.jpg', 'jennymug2', callback).then(
		    promiseResolved,
		    promiseRejected
		  );
		  var n4 = clarifai.negative('https://www.connox.com/m/100031/137802/media/iittala/Teema-rot/Teema-becher-rot.jpg', 'jennymug2', callback).then(
		    promiseResolved,
		    promiseRejected
		  );
		  var n5 = clarifai.negative('http://www.woodenurecover.com/assets/images/Coffe-Mugs/Red-Recovery-Mug.jpg', 'jennymug2', callback).then(
		    promiseResolved,
		    promiseRejected
		  );
		    return Promise.all([n1, n2, n3, n4,n5]);

		}

angular.module('mugshot')
	.controller('validationController', function($scope, $cordovaCamera, $cordovaFile) {
	// alert("hey this loads");
	

});