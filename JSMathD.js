function JSMathD(){}

JSMathD.relation = function(data, options) {
    var d1 = data['set1'];
    var d2 = data['set2'];
    var relation = data['rel'];
    var fontSize = (options['fontSize'] == null ? 15 : options['fontSize']);
    
    var r = Raphael(options['holder']);
    
    //pointers
    var exRad  = fontSize+(fontSize/2);
    var eyRad = fontSize + (d1.length*fontSize)/2;
    
    //Draw ellipses
    r.ellipse(exRad, eyRad, exRad, eyRad); //x,y,hr,vr
    r.ellipse(exRad*4, eyRad, exRad, eyRad); //x,y,hr,vr
    
    
    
    var startE1 = (eyRad-((d1.length*fontSize)/2))+(fontSize/2);
    //var startE1 = 10;
    for (i = 0; i < d1.length; i++) {
        var t = r.text(exRad, (startE1)+(i*fontSize), d1[i]);//x,y,text
        t.attr({"font-size": fontSize, "font-family": "monospace"});
    }
    
    var startE2 = (eyRad-((d2.length*fontSize)/2))+(fontSize/2);
    for (i = 0; i < d2.length; i++) {
        var t = r.text(exRad*4, startE2+(i*fontSize), d2[i]); //x,y,text
        t.attr({"font-size": fontSize, "font-family": "monospace"});
    }
}


