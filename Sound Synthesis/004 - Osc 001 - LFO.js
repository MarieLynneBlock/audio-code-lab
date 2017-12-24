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

// create two oscillators
var osc = con.createOscillator();
var lfo = con.createOscillator();

// gain node [not an oscillator]
var lfo_amp = con.createGain();
// set gain to 200 = multiplies input by 200!
lfo_amp.gain.value = 200;

osc.frequency.value = 300;
lfo.frequency.value = 1;


// WIRING:
// connect the lfo oscillator to the gain node -> boost range -1 to 1 to -200 to 200
lfo.connect(lfo_amp);

// connect the gain node into the frequency control for the main oscillator
lfo_amp.connect(osc.frequency);

// connect the main oscilator to audio out
osc.connect(con.destination);


osc.start();
lfo.start();

</script>
