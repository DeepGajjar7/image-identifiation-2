//https://teachablemachine.withgoogle.com/models/jL7gh_1ud/

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

var camera=document.getElementById("camera");

Webcam.attach(camera);

function takesnapshot(){
    Webcam.snap(
        function(data_uri){
            document.getElementById("result").innerHTML='<img id="captureImage" src="'+data_uri+'">';

        }
    );

}

var classifier =ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/jL7gh_1ud/model.json",model_loaded);

function model_loaded(){
    console.log("model is loaded");
}