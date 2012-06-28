function parsePGN(text) {
    var result = [];
    var lines = text.split("\n");
    var intag = true;
    var game = {};
    var gametxt = "";
    for(var i = 0; i<lines.length; i++) {
        if(lines[i]=="") {
            ;
        }
        else if(lines[i].match(/\[([^ ]*) "([^"]*)"\]/)) {
            if(!intag) {
                game.steps = parseGame(gametxt);
                result.push(game);
                game = {};
                gametxt = "";
                intag = true;
            }
            game[RegExp.$1] = RegExp.$2;
        }
        else {
            gametxt += lines[i]
            intag = false
        }
    }
    game.steps = parseGame(gametxt);
    result.push(game);
    return result;
}

function parseGame(txt) {
    var r = [];
    var step = /[0-9]+\. *(?:([a-h][1-8])|\-\-) *(?:([a-h][1-8])|\-\-)/g
    while(step.exec(txt)) {
        if(RegExp.$1)
            r.push(RegExp.$1);
        if(RegExp.$2)
            r.push(RegExp.$2);
    }
    return r;
}