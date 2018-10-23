function stateTwo(){
    noStroke()
    background(80,80,80);
    fill(210,210,210)
    rect(0,0,width,height/2+pS);
    for(i=0;i<40;i++){
        arc(0+i*15,
        map(sin(frameCount/30+i),-1,1,height/2-6+pS,height/2+pS),
        100,
        map(cos(frameCount/30+i),-1,1,20,30),
        0,
        PI,
        OPEN)
    }
}
