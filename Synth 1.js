
<script>

// audio_context

// is used to create the audio system
    var audio_context = window.AudioContext || window.webkitAudioContext;
    
// create the audio system
    var con = new audio_context();
    
// create an oscillator
    var osc = con.createOscillator();
    
// connect the oscillator to the audio output
    osc.connect(con.destination);
    
// start the oscillator
    osc.start();
    
</script>
