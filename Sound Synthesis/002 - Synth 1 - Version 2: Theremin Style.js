// Update Synth 1, Version 2  -  add mouse control: Theremin-style Synth

<body>
    
     // HTML - create a simple user interface
    
    <div
        style="background:black; height:500px;color:white;"
        onmousemove="osc.frequency.value = event.clientY;"
        onmousedown="osc.start()">
   
        <h2>Click anywhere in the black area and move the mouse to start</h2>
    </div>

</body>


<script>

    // access audio capabilities of the browser
    var audio_context = window.AudioContext || window.webkitAudioContext;
  
    // create audio context
    var con = new audio_context();
    
        // create an oscillator
    var osc = con.createOscillator();
        // connect the oscillator to the audio output
    osc.connect(con.destination);
        // set the frequency on the oscillator
    osc.frequency.value = 600;


   //osc.start();
    		// Commented out - now only starts with a mouse click
    
</script>
