function JSMathD() {
}

/**
 * Draws a relation diagrams of 2 sets
 * @param {array} data
 * @param {array} options
 */
JSMathD.relation = function(data, options) {
    var d1 = data['set1'];
    var d2 = data['set2'];
    var relation = data['rel'];
    var fontSize = (options['fontSize'] == null ? 15 : options['fontSize']);

    var r = Raphael(options['holder'], options['width'], options['height']);

    //pointers
    var exRad = fontSize + (fontSize / 2);
    var eyRad = fontSize + (d1.length * fontSize) / 2;

    //Draw ellipses
    r.ellipse(exRad, eyRad, exRad, eyRad); //x,y,hr,vr
    r.ellipse(exRad * 4, eyRad, exRad, eyRad); //x,y,hr,vr


    //Coordinated of elements in set 1 and 2
    //Used for ploting arrows
    var d1_coord = {};
    var d2_coord = {};

    //Insert set 1 elements
    var startE1 = (eyRad - ((d1.length * fontSize) / 2)) + (fontSize / 2);
    //var startE1 = 10;
    for (i = 0; i < d1.length; i++) {
        var x = exRad;
        var y = (startE1) + (i * fontSize);

        var t = r.text(x, y, d1[i]);//x,y,text
        t.attr({"font-size": fontSize, "font-family": "monospace"});

        d1_coord[d1[i]] = [x, y];
    }

    //insert set 2 elements
    var startE2 = (eyRad - ((d2.length * fontSize) / 2)) + (fontSize / 2);
    for (i = 0; i < d2.length; i++) {
        var x = exRad * 4;
        var y = startE2 + (i * fontSize);

        var t = r.text(x, y, d2[i]); //x,y,text
        t.attr({"font-size": fontSize, "font-family": "monospace"});

        d2_coord[d2[i]] = [x, y];
    }

    //Plot arrows
    for (i = 0; i < relation.length; i++) {
        var rel = relation[i];
        var x1 = d1_coord[rel[0]][0] + fontSize / 2;
        var y1 = d1_coord[rel[0]][1];
        var x2 = d2_coord[rel[1]][0] - fontSize / 2;
        var y2 = d2_coord[rel[1]][1];

        var path_1 = r.path('M' + x1 + ' ' + y1 + 'L' + x2 + ' ' + y2);
        path_1.attr({'stroke-width': 2, 'arrow-end': 'classic-wide-long'});
    }

};

JSMathD.equivalence = function(data, options) {
    var r = Raphael(options['holder'], options['width'], options['height']);
    var textAttr = {
        "font-size": 12, 
        "font-family": "monospace",
        "text-anchor": "start"
    };

    for (var key in data) {
        var maxCharacters = JSMathD.getMaxCharactersInSets(data[key])*10;
        var numClasses = JSMathD.getNumClasses(data[key]);
        
        //Draw Container
        var labelCont = r.rect(10, 5, key.length*8, 15).attr("fill", "#99DBFF");
        var labelTxt = r.text(12, 12, key).attr(textAttr);
        var outter = r.rect(10, 20, 10+(maxCharacters)+10, (numClasses+1)*36); //+1 to allow non classes
        
        //Draw equivalence classes
        var nonClassElements = "";
        for (var i = 0; i < Object.size(data[key]); i++) {
            var start_x = 15;
            var start_y = 25;
            
            if (data[key][i] instanceof Array) {
                
                //Add elements from set
                var text = "";
                for(var j in data[key][i]){
                    text += data[key][i][j] + ", ";
                }
                text = text.substring(0, text.length-2);
                var class_text = r.text(start_x+5, start_y + 13 + (i * 35), text).attr(textAttr);
                
                //Draw inner rect
                var inner = r.rect(start_x, start_y + (i * 35), (maxCharacters)+10, 30);
            }else{
               nonClassElements +=  data[key][i] + ", ";
            }
        }
        
        //Add non class elements
        nonClassElements = nonClassElements.substring(0, nonClassElements.length-2);
        var class_text = r.text(20, 25 + 13 + (numClasses * 35), nonClassElements).attr(textAttr);
    }

}

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key))
            size++;
    }
    return size;
};

JSMathD.getNumClasses = function(set){
    var sum = 0;
    for (var i = 0; i < Object.size(set); i++) {
        if (set[i] instanceof Array) {
            sum++
        }
    }
    return sum;
}

JSMathD.getMaxCharactersInSets = function(sets){
    var max = 0;
    for(var set in sets){
        var sum = 0;
        for(var element in sets[set]){
            sum += sets[set][element].toString().length;
            sum++;
        }
        if(max < sum){
            max = sum;
        }
    }
    return max;
}
