var mic
var fft

function setup() {
    var myCanvas = createCanvas(windowWidth, windowHeight, P2D)
    angleMode(DEGREES)
    mic = new p5.AudioIn()
    mic.start()
    fft = new p5.FFT()
    fft.setInput(mic)
}

function draw() {
    background(0)
    
    var freq_array = fft.analyze()

    var bass_amp = fft.getEnergy("bass")
    var lowMid_amp = fft.getEnergy("lowMid")
    var mid_amp = fft.getEnergy("mid")
    var highMid_amp = fft.getEnergy("highMid")
    var treble_amp = fft.getEnergy("treble")

    noStroke()

    // Orange circle - lowMids
    let r1 = map(lowMid_amp, 80, 240, 100, 360)
    let r2 = map(lowMid_amp, 80, 240, 280, 300)
    fill('rgb(255, 125, 0)')
    circle(windowWidth/9, windowHeight/3, r2)
    fill('rgb(244, 201, 93)')
    circle(windowWidth/9, windowHeight/3, r1)

    // Green Circle - mids
    let r3 = map(mid_amp, 80, 240, 100, 300)
    let r4 = map(mid_amp, 80, 240, 220, 260)
    fill('rgb(0, 215, 128)')
    circle(windowWidth/4, windowHeight/2 - 40, r4)
    fill('rgb(200, 224, 112)')
    circle(windowWidth/4, windowHeight/2 - 40, r3)
    
    // Pink circle - bass
    let r5 = map(bass_amp, 80, 240, 100, 460)
    let r6 = map(bass_amp, 80, 240, 400, 460)
    fill('rgb(126, 46, 132)')
    circle(windowWidth/3 + 200, windowHeight/3 - 50, r6)
    fill('rgb(239, 121, 138)')
    circle(windowWidth/3 + 200, windowHeight/3 - 50, r5)

    // Blue circle - highMids
    let r7 = map(highMid_amp, 80, 240, 100, 260)
    let r8 = map(highMid_amp, 80, 240, 180, 240)
    fill('rgb(0, 127, 255)')
    circle(windowWidth/4 - 250, windowHeight/2 + 200, r8)
    fill('rgb(27, 231, 255)')
    circle(windowWidth/4 - 250, windowHeight/2 + 200, r7)

    // Purple circle - lowMids
    let r9 = map(lowMid_amp, 80, 240, 100, 320)
    let r10 = map(lowMid_amp, 80, 240, 260, 300)
    fill('rgb(26, 255, 213)')
    circle(windowWidth/4 + 100, windowHeight/2 + 250, r10)
    fill('rgb(125, 131, 255)')
    circle(windowWidth/4 + 100, windowHeight/2 + 250, r9)

    // Yellow circle - treble
    let r11 = map(treble_amp, 80, 240, 100, 200)
    let r12 = map(treble_amp, 80, 240, 160, 180)
    fill('rgb(255, 149, 5)')
    circle(windowWidth/3 + 200, windowHeight/2 + 300, r12)
    fill('rgb(255, 253, 119)')
    circle(windowWidth/3 + 200, windowHeight/2 + 300, r11)

    // Red circle - highMids
    let r13 = map(highMid_amp, 80, 240, 80, 200)
    let r14 = map(highMid_amp, 80, 240, 160, 220)
    fill('rgb(244, 201, 93)')
    circle(windowWidth/2 - 50, windowHeight/2 + 120, r14)
    fill('rgb(221, 97, 74)')
    circle(windowWidth/2 - 50, windowHeight/2 + 120, r13)

    //loop()
}
