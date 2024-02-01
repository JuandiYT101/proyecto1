var SpeechRecognition = windows.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    Textbox.innerHTML = "";
    recognition.start();
}
recognition.onresult = function (event) {


    console.log(event);
    var content = event.result[0][0].trascript;
    Tectbox.innerHTML = content;
    console.log(content);
    if(content == "Toma mi selfie")
    {
        console.log("tomando selfie --- ")
        speack();
    }

}