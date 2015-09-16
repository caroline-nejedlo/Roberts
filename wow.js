window.AudioContext = window.AudioContext||window.webkitAudioContext||window.mozAudioContext;
var context = new AudioContext();

var source = context.createBufferSource(); //this represents the audio source. We need to now populate it with binary data.
var request = new XMLHttpRequest();
request.open('GET', 'space-music.mp3', true);
request.responseType = 'arraybuffer'; //This asks the browser to populate the retrieved binary data in a array buffer
request.onload = function(){
  context.decodeAudioData(request.response, function(buffer) {
    source.buffer = buffer;
  }, null);
}
request.send();
source.connect(context.destination);
source.start(0);
