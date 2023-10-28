var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});

// Global variables: speak_data, image_id


recognition.onresult = function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    if (Content == "take my selfie"){
        console.log("taking selfie");
        speak();
    };
}

function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    setTimeout(() => {
        image_id = "selfie1";
        take_snapshot();
        utterThis = new SpeechSynthesisUtterance("Your collage will be taken in 5 seconds");
        synth.speak(utterThis);
    }, 5000);
    setTimeout(() => {
        image_id = "selfie2";
        take_snapshot();
        utterThis = new SpeechSynthesisUtterance("Your collage will be taken in 5 seconds");
        synth.speak(utterThis);
    }, 5000);
    setTimeout(() => {
        image_id = "selfie3";
        take_snapshot();
        utterThis = new SpeechSynthesisUtterance("Your collage will be taken in 5 seconds");
        synth.speak(utterThis);
    }, 5000);

}

function take_snapshot(){
    console.log(image_id);
    
    Webcam.snap((data_url) => {
        if (image_id == "selfie1"){
            document.getElementById("result1").innerHTML = "<img id='selfie_1' src='"+data_url+"'>";
        } else if (image_id == "selfie2"){
            document.getElementById("result2").innerHTML = "<img id='selfie_2' src='"+data_url+"'>";
        } else if (image_id == "selfie3"){
            document.getElementById("result3").innerHTML = "<img id='selfie_3' src='"+data_url+"'>";
        };
    });
}







