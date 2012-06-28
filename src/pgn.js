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
    return txt;
}