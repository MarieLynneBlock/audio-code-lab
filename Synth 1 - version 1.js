
<script>

// audio_context

// is used to create the audio system
    var audio_context = window.AudioContext || window.webkitAudioContext;
    
// create audio system
    var con = new audio_context();
    
// create an oscillator
    var osc = con.createOscillator();
    
// connect oscillator to audio output
    osc.connect(con.destination);
    
// start oscillator
    osc.start();
    
// Headphone Users: Turn down volume!
    
</script>
