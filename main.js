var prediction_1="";
var prediction_2="";
Webcam.set({
    width:350,
    height: 300,
image_format:"png",
png_quality:100
});
var cam=document.getElementById("camera");
Webcam.attach("#camera");
function take_picture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured" src="'+data_uri+'">';
    });
}
console.log("ml5 version",ml5.version);
var classifier=ml5.imageClassifier("",modelLoaded);
function modelLoaded(){
    console.log("model Loaded");
}
function speak() {
    synth=window.speechSynthesis;
    speak_data1="the first pediction is " +prediction_1;
    speak_data2="the second pediction is " +prediction_2;
    var utterThis=new SpeechSynthesisUtterance(speak_data1+speak_data2);
    synth.speak();
}
