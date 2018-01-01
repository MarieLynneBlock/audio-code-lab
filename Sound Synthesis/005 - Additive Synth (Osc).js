
<body>
   
    <div
    style="background: #3366cc;
    height: 100%;
    color: #fff;"
    tabindex="0"
    onkeydown="playSynth()">

        <h1>Click here and tap the keyboard</h1>
    </div>
</body>

<script>
var audio_context = window.AudioContext || window.webkitAudioContext;

var con = new audio_context();


function playSynth(){
    
    // an oscillator
    var osc = con.createOscillator();
    // and a gain node
    var amp = con.createGain();
    
    // set frequency to a random value in the range 0-500
    // (Math.random() provides a number 0-1 and * 500 means 
    // multiply by 500.
    osc.frequency.value = Math.random() * 500;
    
    // connect the oscillator into the gain node
    osc.connect(amp);
  
    // set up the behaviour of the gain node into the future - the time now
    var now = con.currentTime;
    // - start with gain at 0
    amp.gain.value = 0;
    // - in 2 seconds, gain up to 0.1
    amp.gain.linearRampToValueAtTime(0.1, now + 2);
    // - in 4 seconds, gain back down to zero
    amp.gain.linearRampToValueAtTime(0, now + 4);
    
    // sine oscillator
    osc.type = 'sine';
    
    // connect the oscillator to the audio output
    amp.connect(con.destination);
    
    osc.start();
    // switch off the oscillator in 4.1 seconds time when the gain is back down to zero. (computation stops, doesn't affect the sound - to spare the CPU)
    osc.stop(now + 4.1);
    
}
</script>
