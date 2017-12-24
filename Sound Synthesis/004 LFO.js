<body>
    <div
    style="background:black;height:100%"
    onmousemove="lfo.frequency.value = event.clientX"
       >
        
    </div>
</body>


<script>
// Low Frequency Oscillator:

var audio_context = window.AudioContext || window.webkitAudioContext;

var con = new audio_context();

// this time, we create two oscillators
var osc = con.createOscillator();
var lfo = con.createOscillator();

// lfo_amp is not an oscillator - it is a 'gain node'
var lfo_amp = con.createGain();
// we set the gain to 200 - it multiplies the input by 200!
lfo_amp.gain.value = 200;

osc.frequency.value = 300;
lfo.frequency.value = 15;

// now for the wiring 
// ...
// connect the lfo oscillator 
// to the gain node, so it is boosted
// from the range -1 to 1 to -200 to 200
lfo.connect(lfo_amp);
// connect the gain node into the frequency 
// control for the main oscillator
lfo_amp.connect(osc.frequency);
// connect the main osciilator to the audio out
osc.connect(con.destination);

// fire em up!
// (you might want to do this in 'onmousedown'
// so they only start when the user clicks)
//osc.start();
//lfo.start();

</script>
