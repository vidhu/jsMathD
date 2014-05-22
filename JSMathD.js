function JSMathD(){}

JSMathD.relation = function(data, options) {
    d1 = data['set1'];
    d2 = data['set2'];
    relation = data['rel'];
    
    var r = Raphael(options['holder']);
    
    //pointers
    var eWidth  = 20;
    var eHeight = 50;
    
    //Draw ellipses
    r.ellipse(eWidth, eHeight, eWidth, eHeight); //x,y,hr,vr
    r.ellipse(eWidth*4, eHeight, eWidth, eHeight); //x,y,hr,vr
    
    //Add texts
    fontSize = (options['fontSize'] == null ? 15 : options['fontSize']);
    
    var startE1 = (eHeight-((d1.length*fontSize)/2))+(fontSize/2);
    //var startE1 = 10;
    for (i = 0; i < d1.length; i++) {
        var t = r.text(eWidth, (startE1)+(i*fontSize), d1[i]);//x,y,text
        t.attr({"font-size": fontSize, "font-family": "monospace"});
    }
    
    var startE2 = (eHeight-((d2.length*fontSize)/2))+(fontSize/2);
    for (i = 0; i < d2.length; i++) {
        var t = r.text(eWidth*4, startE2+(i*fontSize), d2[i]); //x,y,text
        t.attr({"font-size": fontSize, "font-family": "monospace"});
    }
}


