/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var stopTable = 15
var score =0;
var num1;
var num2;
$(document).ready(function(){
	 newSum();
	$("#btncheck").click(function(){
	
	//alert("hiiiii");
	    if(num1*num2 == $("#answer").val())
		{	
			score = score + 5;
			$("#myFeedback").text("Correct");
			
			$("#myScore").text("Your score is: " + score.toString());
			newSum();
		}	
		else
			$("#myFeedback").text("Sorry, try again");
			
		$("#answer").val("");
     });
	 
 });
 
  
	 
function newSum() {
	num1= Math.floor((Math.random() * 15) + 1);;
	num2 =Math.floor((Math.random() * 10) + 1);;
	$("#question").text(num1.toString() + " * " + num2.toString());
	//alert(num1.toString() + " * " + num2.toString());
}

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
