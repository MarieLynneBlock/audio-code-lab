
<body>
    
<div
    style = "background:black; height:500px; color:orange;"
    tabindex = "1"
    onkeydown = "setNote(event.key)">
    
    <h2>Press w ,x, c or v after clicking here</h2>
    <h4>Made for AZERTY-keyboards  (QUERTY: z, x, c, v)</h4>
</div>

</body>


<script>

    // Audio Context + Make it all-browser compatible
    var audio_context = window.AudioContext || window.webkitAudioContext;
    
    // Create Audio Engine
    var con = new audio_context();
        // create Oscillator
    var osc = con.createOscillator();
        // connect to audio output
    osc.connect(con.destination);
    
    
    osc.frequency.value = 600;
    
    osc.start();
    
    
    //this function is called when the user presses a key on the keboard
    function setNote(key){
        if (key == "w") {
            // play C
            osc.frequency.value = 261.63;
        }
        
        if (key == "x") {
            // play E
            osc.frequency.value = 293.66;
        }
        
        if (key == "c") {
            // play E
            osc.frequency.value = 329.63;
        }
        
        if (key == "v") {
            // play F
            osc.frequency.value = 349.23;
        }
    }
    
</script>
