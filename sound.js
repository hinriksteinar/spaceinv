var sounds = {
  "backgroundsound": {
    url : '../Sound/X-Files-Illuminati-Song.mp3',
    volume : .05
  },
  "bomb": {
    url : '../Sound/explosion.wav',
    volume : .05
  },
    "bomb2": {
    url : '../Sound/explosion2.wav',
    volume : .05
  },
    "invaderkilled": {
    url : '../Sound/invaderkilled.wav',
    volume : .05
  },
    "shoot": {
    url : '../Sound/shoot.wav',
    volume : .05
  },
    "ufo_highpitch": {
    url : '../Sound/ufo_highpitch.wav',
    volume : .05
  },
    "ufo_lowpitch": {
    url : '../Sound/ufo_lowpitch.wav',
    volume : .05
  },
    "fastinvader": {
    url : '../Sound/fastinvader.wav',
    volume : .05
  },
    "fastinvader": {
    url : '../Sound/fastinvader2.wav',
    volume : .05
  },
    "fastinvader3": {
    url : '../Sound/fastinvader.wav',
    volume : .05
  },
    "fastinvader4": {
    url : '../Sound/fastinvader.wav',
    volume : .05
  },
  {
    "bump": {
    url : "https://freesound.org/data/previews/118/118649_2139651-lq.mp3",
    volume : .05
  }}
};

// kalla úr annari skrá t.d playSound('bomb'); sem dæmi

var soundContext = new AudioContext();

for(var key in sounds) {
  loadSound(key);
}
function loadSound(name){
  var sound = sounds[name];
  var url = sound.url;
  var sound1 = sounds1[name];
  var url1 = sound1.url;
  var buffer = sound.buffer;

  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';

  request.onload = function() {
    soundContext.decodeAudioData(request.response, function(newBuffer) {
      sound.buffer = newBuffer;
    });
  }

  request.send();
}

function playSound(name, options){
  var sound = sounds[name];
  var soundVolume = sounds[name].volume || 1;

  var buffer = sound.buffer;
  if(buffer){
    var source = soundContext.createBufferSource();
    source.buffer = buffer;

    var volume = soundContext.createGain();

    if(options) {
      if(options.volume) {
        volume.gain.value = soundVolume * options.volume;
      }
    } else {
      volume.gain.value = soundVolume;
    }

    volume.connect(soundContext.destination);
    source.connect(volume);
    source.start(0);
  }
}
