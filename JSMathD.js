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
    
    
    var d1_coord = {};
    var d2_coord = {};
    
    var startE1 = (eyRad-((d1.length*fontSize)/2))+(fontSize/2);
    //var startE1 = 10;
    for (i = 0; i < d1.length; i++) {
        var x = exRad; 
        var y = (startE1)+(i*fontSize);
        
        var t = r.text(x, y, d1[i]);//x,y,text
        t.attr({"font-size": fontSize, "font-family": "monospace"});
        
        d1_coord[d1[i]] = [x, y];
    }
    
    var startE2 = (eyRad-((d2.length*fontSize)/2))+(fontSize/2);
    for (i = 0; i < d2.length; i++) {
        var x = exRad*4;
        var y = startE2+(i*fontSize);
        
        var t = r.text(x, y, d2[i]); //x,y,text
        t.attr({"font-size": fontSize, "font-family": "monospace"});
        
        d2_coord[d2[i]] = [x, y];
    }

    for(i=0;i<relation.length;i++){
        var rel = relation[i];
        var x1 = d1_coord[rel[0]][0]+fontSize/2;
        var y1 = d1_coord[rel[0]][1];
        var x2 = d2_coord[rel[1]][0]-fontSize/2;
        var y2 = d2_coord[rel[1]][1];
        
        //Draw arrows
        var path_1 = r.path('M' + x1 + ' ' + y1 + 'L' + x2 + ' ' + y2);
        path_1.attr({'stroke-width': 2 ,'arrow-end': 'classic-wide-long'});
    }
    
}


