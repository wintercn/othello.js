
void function() {
    Othello = {};
    Othello.OthelloAIPad = OthelloAIPad;
    Othello.OthelloViewer = OthelloViewer;
    Othello.OthelloPattern = OthelloPattern;
    Othello.OthelloGame = OthelloGame;
    Othello.OthelloBoard = OthelloBoard;
    //    Othello.OthelloEditor = OthelloEditor;
    //    Othello.OthelloViewer = OthelloViewer;

    Othello.OthelloEditor

    function OthelloPattern() {
        this.pattern = new Array(100);
        for (var i = 0; i < 100; i++) this.pattern[i] = 0;
        with (this) {
            this.clone = function() {
                var ret = new OthelloPattern();
                ret.pattern = pattern.slice();
                return ret;
            };
            this.makeMove = function(x, y, c) {
                var d = [-11, -10, -9, -1, 1, 9, 10, 11];
                var turningPieces = [];
                if (pattern[10 * x + y] == 0) {
                    for (i = 0; i < 8; i++) {
                        var p = 10 * x + y + d[i];
                        if (pattern[p] == 3 - c) {
                            while (pattern[p] != 0) {
                                p += d[i];
                                if (pattern[p] == c) {
                                    turningPieces.push([p % 10, Math.floor(p / 10)])
                                    while (p != 10 * x + y) {
                                        p += -d[i];
                                        pattern[p] = c;
                                    }
                                    break;
                                }
                            }
                        }
                    }
                    if (turningPieces.length > 0) { pattern[10 * x + y] = c; }
                }
                return turningPieces;
            };
            this.getNextMovePattern = function(x, y) {

            }
            this.canMakeMove = function(c) {
                var d = [-11, -10, -9, -1, 1, 9, 10, 11];
                for (var y = 1; y <= 8; y++) {
                    for (var x = 1; x <= 8; x++) {
                        if (pattern[y * 10 + x] == 0) {
                            for (i = 0; i < 8; i++) {
                                var p = 10 * y + x + d[i];
                                if (pattern[p] == 3 - c) {
                                    while (pattern[p] != 0) {
                                        p += d[i];
                                        if (pattern[p] == c) {
                                            return true;
                                        }
                                    }
                                }
                            }

                        }
                    }
                }
                return false;
            };

            this.toString = function() {
                var str = "";
                for (var i = 1; i <= 8; i++) {
                    for (var j = 1; j <= 8; j++) {
                        if (pattern[i * 10 + j] == 0) str += " _";
                        if (pattern[i * 10 + j] == 1) str += " o";
                        if (pattern[i * 10 + j] == 2) str += " x";
                    }
                    str += "\n";
                }
                return str;
            };
        }
    }
    OthelloPattern.start = new OthelloPattern();
    OthelloPattern.start.pattern[44] = 2;
    OthelloPattern.start.pattern[45] = 1;
    OthelloPattern.start.pattern[54] = 1;
    OthelloPattern.start.pattern[55] = 2;


    function OthelloGame(startPattern, moves) {
        if (arguments.length == 0)
            startPattern = OthelloPattern.start.clone();
        else
            startPattern = startPattern.clone();

        this.patterns = new Array(startPattern);
        this.moves = new Array;
        this.colors = [1];
        this.current = 0;


        with (this) {
            this.makeMove = function(x, y) {

                var currentPattern = patterns[current];

                var c;


                c = colors[current];

                var newPattern = currentPattern.clone();
                if (c && newPattern.makeMove(x, y, c).length) {
                    current++;
                    this.moves.splice(current, Infinity);
                    this.patterns.splice(current, Infinity);
                    this.colors.splice(current, Infinity);
                    moves.push([x, y]);
                    patterns.push(newPattern);

                    if (newPattern.canMakeMove(3 - c)) {
                        colors.push(3 - c);
                    }
                    else if (newPattern.canMakeMove(c)) {
                        colors.push(c);
                    }
                    else {
                        colors.push(0);
                    }
                    return true;
                }
                else return false;

            };
            this.moveBackward = function(x, y) {
                if (current > 0) current--;
            }
            this.moveForward = function() {
                if (current < patterns.length - 1) current++;
            };
            this.moveToStart = function() {
                current = 0;
            };
            this.moveToEnd = function() {
                current = patterns.length - 1;
            };
            this.toString = function() {

            };
        }
        if (moves && ((moves instanceof String) || (typeof moves == "string"))) {
            for (var i = 0; i < moves.length; i++) {
                var y = moves.charCodeAt(i++) - "a".charCodeAt(0) + 1;
                var x = moves.charCodeAt(i) - "1".charCodeAt(0) + 1;
                this.makeMove(x, y);
            }
        }
    }

    function OthelloBoard() {
        var rootElement = null;
        var pieceElements = [[], [], [], [], [], [], [], []];
        with (this) {
            this.getRootElement = function() {
                return rootElement;
            };
            this.onBeforeRenderingPiece = function(x, y, element) {

            };
            this.applyToHTMLElement = function(div) {
                rootElement = null;
            };
            this.createHTMLElement = function() {
                rootElement = document.createElement("div");
                rootElement.style.width = "297px";
                rootElement.style.height = "297px";
                var borderElement = document.createElement("div");
                borderElement.style.cssText = "width:297px;height:21px;position:relative;overflow:hidden;float:left;";
                borderElement.style.background = "url(\"Resources/u297x21.png\")";
                rootElement.appendChild(borderElement);
                for (i = 1; i <= 8; i++) {
                    var borderElement = document.createElement("div");
                    borderElement.style.cssText = "width:21px;height:32px;position:relative;overflow:hidden;float:left;";
                    borderElement.style.background = "url(\"Resources/l" + i + "_21x32.png\")";
                    rootElement.appendChild(borderElement);
                    for (j = 1; j <= 8; j++) {
                        var pieceElement = document.createElement("div");
                        pieceElement.style.cssText = "width:32px;height:32px;position:relative;overflow:hidden;float:left;";
                        pieceElement.background = "url(\"Resources/b31.png\")";
                        this.onBeforeRenderingPiece(j, i, pieceElement);
                        rootElement.appendChild(pieceElement);
                        pieceElements[i - 1][j - 1] = pieceElement;
                        pieceElements[i - 1][j - 1].onclick = (function(x, y) {
                            return function() { onSquareClick(x, y) }
                        })(i, j);
                    }
                    var borderElement = document.createElement("div");
                    borderElement.style.cssText = "width:20px;height:32px;position:relative;overflow:hidden;float:left;";
                    borderElement.style.background = "url(\"Resources/r" + i + "_20x32.png\")";
                    rootElement.appendChild(borderElement);
                }
                var borderElement = document.createElement("div");
                borderElement.style.cssText = "width:297px;height:20px;position:relative;overflow:hidden;float:left;";
                borderElement.style.background = "url(\"Resources/d297x20.png\")";
                rootElement.appendChild(borderElement);

                return rootElement;
            };
            this.onSquareClick = function(x, y) {
                //to be override
            }
            this.loadOthelloPattern = function(game) {
                for (var i = 0; i < 8; i++) {
                    for (var j = 0; j < 8; j++) {
                        switch (game.pattern[(i + 1) * 10 + j + 1]) {
                            case 1:
                                pieceElements[i][j].style.background = "url(\"Resources/b31.png\")";
                                break;
                            case 2:
                                pieceElements[i][j].style.background = "url(\"Resources/w31.png\")";
                                break;
                            default:
                                pieceElements[i][j].style.background = "url(\"Resources/e31.png\")";
                                break;
                        }
                    }
                }
            };
            this.putPiece = function(x, y) {

            };
            this.turnPiece = function(x, y) {

            };
            this.turnPieces = function(pieces) {

            };
        }
    }
    function OthelloViewer(game) {
        this.board = new OthelloBoard(this);
        if (!(game && game instanceof OthelloGame))
            game = new OthelloGame();
        var color = 1;
        var rootElement = null;
        game.moveToStart();
        with (this) {
            this.getRootElement = function() {
                return rootElement;
            };
            this.createHTMLElement = function() {
                rootElement = document.createElement("div");
                rootElement.style.width = "297px";
                rootElement.style.height = "327px";
                rootElement.style.position = "relative";
                this.boardElement = board.createHTMLElement();
                board.loadOthelloPattern(game.patterns[game.current]);
                rootElement.appendChild(boardElement);

                this.controlElement = document.createElement("div");
                controlElement.style.width = "297px";
                controlElement.style.height = "30px";
                controlElement.style.background = "#cccccc";
                controlElement.style.position = "relative";
                controlElement.style.textAlign = "center"
                rootElement.appendChild(controlElement);

                this.toStartButton = document.createElement("a");
                toStartButton.innerHTML = "&lt;&lt;";
                toStartButton.style.margin = "20px";
                toStartButton.href = "javascript:void 0;";
                toStartButton.onclick = function() {
                    game.moveToStart();
                    board.loadOthelloPattern(game.patterns[game.current]);
                }
                this.backwardButton = document.createElement("a");
                backwardButton.innerHTML = "&lt;";
                backwardButton.style.margin = "20px";
                backwardButton.href = "javascript:void 0;";
                backwardButton.onclick = function() {
                    game.moveBackward();
                    board.loadOthelloPattern(game.patterns[game.current]);
                }
                this.forwardButton = document.createElement("a");
                forwardButton.innerHTML = "&gt;";
                forwardButton.style.margin = "20px";
                forwardButton.href = "javascript:void 0;";
                forwardButton.onclick = function() {
                    game.moveForward();
                    board.loadOthelloPattern(game.patterns[game.current]);
                }
                this.toEndButton = document.createElement("a");
                toEndButton.innerHTML = "&gt;&gt;";
                toEndButton.style.margin = "20px";
                toEndButton.href = "javascript:void 0;";
                toEndButton.onclick = function() {
                    game.moveToEnd();
                    board.loadOthelloPattern(game.patterns[game.current]);
                }
                controlElement.appendChild(toStartButton);
                controlElement.appendChild(backwardButton);
                controlElement.appendChild(forwardButton);
                controlElement.appendChild(toEndButton);
                return rootElement;
            }
            this.loadOthelloGame = function() {
            }
        }
    }
    function OthelloAIPad(game) {
        OthelloBoard.call(this);
        var game = game || new OthelloGame();
        var color = 1;
        var _super = { createHTMLElement: this.createHTMLElement };
        var ai = new (AI.Pattern);
        var thinking = false;
        this.createHTMLElement = function() {
            var rootElement = _super.createHTMLElement.apply(this);
            this.loadOthelloPattern(game.patterns[game.current]);
            return rootElement;
        }
        this.onMove = function(x, y, color) {
        }
        this.onSquareClick = function(x, y) {
            if(thinking) return;
            thinking = true;
            if (game.makeMove(x, y)) {
                ai=ai.move(y,x);
                var me = this;
                this.loadOthelloPattern(game.patterns[game.current]);
                if(!ai.pass())
                {                
                    setTimeout(function(){ me.computerMove(); },10);
                }
                else thinking = false;
            }
            else thinking = false;
        };
window.thinkingTime = 0;
        this.computerMove= function() {

var begin = new Date();
            var t=ai.computer(3,10);
window.thinkingTime += new Date - begin;
            game.makeMove(t[1], t[0]);
            ai=ai.move(t[0],t[1]);
            var me = this;
            if(ai.pass())
            {
                setTimeout(function(){ me.computerMove(); },500);
            }
            else thinking = false;
            this.loadOthelloPattern(game.patterns[game.current]);
        };
    }
    //window.onload = function() {
    //    var board = (new OthelloViewer());
    //    board.createHTMLElement();
    //    document.body.appendChild(board.getRootElement());
    //}
} ();

