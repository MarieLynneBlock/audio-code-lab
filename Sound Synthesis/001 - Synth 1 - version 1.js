// Headphone Users: Turn down the volume!


<script>

    // Make it all-browsers compatible
    var audio_context = window.AudioContext || window.webkitAudioContext;

    
    // Create Audio Engine
    var con = new audio_context();
        // create Oscillator
    var osc = con.createOscillator();
    
        // connect to audio output
    osc.connect(con.destination);
    
    osc.start();

</script>
    
