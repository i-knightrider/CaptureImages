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

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    //This code is running only in phones
    document.getElementById("capture").addEventListener("click", captureImages);
    function captureImages(){
        navigator.device.capture.captureImage(onSuccess, onError, {limit : 10});
        function onSuccess(){
            var i, len, path;
            len = mediaFiles.length;
            for(i = 0 ; i < len ; i++){
                path = mediaFiles[i].fullPath;
                console.log(path);
            }
        }
        function onError(){
            alert("There is some error!");
        }
    }
    //Sir's code
    //this will run in browser and phone
    document.getElementById('takePicture').addEventListener('click', takeCameraPicture);
    function takeCameraPicture() {
        var qty = {quantity: 50};
        destination= { destinationType: Camera.DestinationType.DATA_URL}
        navigator.camera.getPicture(onSuccessOne, onErrorOne, qty, destination);
    }
    function onSuccessOne(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }
    function onErrorOne(message) {
        alert('There is some problem and the Problem is : '+ message);
    }
}
