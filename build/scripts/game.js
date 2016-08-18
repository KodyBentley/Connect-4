(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _statesBoot = require('states/Boot');

var _statesBoot2 = _interopRequireDefault(_statesBoot);

var _statesPreload = require('states/Preload');

var _statesPreload2 = _interopRequireDefault(_statesPreload);

var _statesMenu = require('states/Menu');

var _statesMenu2 = _interopRequireDefault(_statesMenu);

var _statesGame = require('states/Game');

var _statesGame2 = _interopRequireDefault(_statesGame);

var _statesGameover = require('states/Gameover');

var _statesGameover2 = _interopRequireDefault(_statesGameover);

var Game = (function (_Phaser$Game) {
	_inherits(Game, _Phaser$Game);

	function Game() {
		_classCallCheck(this, Game);

		_get(Object.getPrototypeOf(Game.prototype), 'constructor', this).call(this, 1600, 960, Phaser.Canvas, 'content', null, true);
		this.state.add('Boot', _statesBoot2['default'], false);
		this.state.add('Preload', _statesPreload2['default'], false);
		this.state.add('Menu', _statesMenu2['default'], false);
		this.state.add('Game', _statesGame2['default'], false);
		this.state.add('Gameover', _statesGameover2['default'], false);
		this.state.start('Boot');
	}

	return Game;
})(Phaser.Game);

new Game();

},{"states/Boot":7,"states/Game":8,"states/Gameover":9,"states/Menu":10,"states/Preload":11}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Birds = (function (_Phaser$Sprite) {
    _inherits(Birds, _Phaser$Sprite);

    function Birds(game, x, y, frame, parent, pos) {
        _classCallCheck(this, Birds);

        _get(Object.getPrototypeOf(Birds.prototype), "constructor", this).call(this, game, x, 150, frame);
        this._game = game;
        this._parent = parent;
        this._position = pos;
        this.initSetup(y);
    }

    _createClass(Birds, [{
        key: "initSetup",
        value: function initSetup(y) {
            this.anchor.setTo(0.5);
            this.scale.setTo(0.5);
            this._position.sprite = this;
            this.game.add.tween(this).to({
                y: y
            }, 500, Phaser.Easing.Bounce.Out, true);
        }
    }]);

    return Birds;
})(Phaser.Sprite);

exports["default"] = Birds;
module.exports = exports["default"];

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StateChange = (function () {
    function StateChange(game) {
        _classCallCheck(this, StateChange);

        this._game = game;
    }

    _createClass(StateChange, [{
        key: "fadeOut",
        value: function fadeOut(group, key) {
            var clearWorld = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

            var _this = this;

            var clearCache = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
            var parameter = arguments.length <= 4 || arguments[4] === undefined ? null : arguments[4];

            if (group) {
                var fadeOutTween = this._game.add.tween(group).to({ alpha: 0 }, 300, Phaser.Easing.Linear.InOut, true);
                fadeOutTween.onComplete.add(function () {
                    _this._game.state.start(key, clearWorld, clearCache, parameter);
                });
            } else {
                this._game.time.events.add(1000, function () {
                    _this._game.state.start(key, clearWorld, clearCache, parameter);
                });
            }
        }
    }]);

    return StateChange;
})();

exports["default"] = StateChange;
module.exports = exports["default"];

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _objectsBirds = require('objects/Birds');

var _objectsBirds2 = _interopRequireDefault(_objectsBirds);

var _statesGameover = require('states/Gameover');

var _statesGameover2 = _interopRequireDefault(_statesGameover);

var Grid = (function () {
    function Grid(game, state, parent, row, col) {
        _classCallCheck(this, Grid);

        this._game = game;
        this._state = state;
        this.setup();
    }

    _createClass(Grid, [{
        key: 'setup',
        value: function setup() {
            //Call create grid function
            this.createGrid();

            //Call create grid array function
            this.createGridArr();

            //Game won text
            this.gamesWon = this._game.add.text(635, 20, 'Games Won', {
                fontSize: '32px',
                fill: 'white'
            });

            //Check to see if player penguin best score is not null, if so add their best score so far from local storage
            //Else it is null and just display their empty score
            if (localStorage.getItem('p1BestScore') !== null) {
                this.p1ScoreText = this._game.add.text(400, 50, 'Penguin Score: ' + localStorage.getItem('p1BestScore'), {
                    fontSize: '32px',
                    fill: 'white'
                });
            } else {
                this.p1ScoreText = this._game.add.text(400, 50, 'Penguin Score: 0', {
                    fontSize: '32px',
                    fill: 'white'
                });
            }

            //Check to see if player parrot best score is not null, if so add their best score so far from local storage
            //Else it is null and just display their empty score
            if (localStorage.getItem('p2BestScore') !== null) {
                this.p2ScoreText = this._game.add.text(800, 50, 'Parrot Score: ' + localStorage.getItem('p2BestScore'), {
                    fontSize: '32px',
                    fill: 'white'
                });
            } else {
                this.p2ScoreText = this._game.add.text(800, 50, 'Parrot Score: 0 ', {
                    fontSize: '32px',
                    fill: 'white'
                });
            }
        }

        //Create grid function start
    }, {
        key: 'createGrid',
        value: function createGrid() {
            /**
             * Creating an grid object
             * @type {Object}
             * Defining different properties for grid object
             */
            this.grid = {
                column1: {
                    x: 263,
                    width: 112,
                    pos1: {
                        y: 843,
                        player: null,
                        sprite: null,
                        gX: 0,
                        gY: 0
                    },
                    pos2: {
                        y: 684,
                        player: null,
                        sprite: null,
                        gX: 0,
                        gY: 1

                    },
                    pos3: {
                        y: 523,
                        player: null,
                        sprite: null,
                        gX: 0,
                        gY: 2

                    },
                    pos4: {
                        y: 365,
                        player: null,
                        sprite: null,
                        gX: 0,
                        gY: 3

                    },
                    pos5: {
                        y: 204,
                        player: null,
                        sprite: null,
                        gX: 0,
                        gY: 4

                    }

                },
                column2: {
                    x: 427,
                    width: 112,
                    pos1: {
                        y: 843,
                        player: null,
                        sprite: null,
                        gX: 1,
                        gY: 0
                    },
                    pos2: {
                        y: 684,
                        player: null,
                        sprite: null,
                        gX: 1,
                        gY: 1

                    },
                    pos3: {
                        y: 523,
                        player: null,
                        sprite: null,
                        gX: 1,
                        gY: 2
                    },
                    pos4: {
                        y: 365,
                        player: null,
                        sprite: null,
                        gX: 1,
                        gY: 3
                    },
                    pos5: {
                        y: 204,
                        player: null,
                        sprite: null,
                        gX: 1,
                        gY: 4
                    }

                },
                column3: {
                    x: 582,
                    width: 112,
                    pos1: {
                        y: 843,
                        player: null,
                        sprite: null,
                        gX: 2,
                        gY: 0
                    },
                    pos2: {
                        y: 684,
                        player: null,
                        sprite: null,
                        gX: 2,
                        gY: 1

                    },
                    pos3: {
                        y: 523,
                        player: null,
                        sprite: null,
                        gX: 2,
                        gY: 2

                    },
                    pos4: {
                        y: 365,
                        player: null,
                        sprite: null,
                        gX: 2,
                        gY: 3

                    },
                    pos5: {
                        y: 204,
                        player: null,
                        sprite: null,
                        gX: 2,
                        gY: 4

                    }

                },
                column4: {
                    x: 743,
                    width: 112,
                    pos1: {
                        y: 843,
                        player: null,
                        sprite: null,
                        gX: 3,
                        gY: 0
                    },
                    pos2: {
                        y: 684,
                        player: null,
                        sprite: null,
                        gX: 3,
                        gY: 1

                    },
                    pos3: {
                        y: 523,
                        player: null,
                        sprite: null,
                        gX: 3,
                        gY: 2

                    },
                    pos4: {
                        y: 365,
                        player: null,
                        sprite: null,
                        gX: 3,
                        gY: 3

                    },
                    pos5: {
                        y: 204,
                        player: null,
                        sprite: null,
                        gX: 3,
                        gY: 4

                    }

                },
                column5: {
                    x: 904,
                    width: 112,
                    pos1: {
                        y: 843,
                        player: null,
                        sprite: null,
                        gX: 4,
                        gY: 0
                    },
                    pos2: {
                        y: 684,
                        player: null,
                        sprite: null,
                        gX: 4,
                        gY: 1

                    },
                    pos3: {
                        y: 523,
                        player: null,
                        sprite: null,
                        gX: 4,
                        gY: 2

                    },
                    pos4: {
                        y: 365,
                        player: null,
                        sprite: null,
                        gX: 4,
                        gY: 3

                    },
                    pos5: {
                        y: 204,
                        player: null,
                        sprite: null,
                        gX: 4,
                        gY: 4

                    }

                },
                column6: {
                    x: 1062,
                    width: 112,
                    pos1: {
                        y: 843,
                        player: null,
                        sprite: null,
                        gX: 5,
                        gY: 0
                    },
                    pos2: {
                        y: 684,
                        player: null,
                        sprite: null,
                        gX: 5,
                        gY: 1

                    },
                    pos3: {
                        y: 523,
                        player: null,
                        sprite: null,
                        gX: 5,
                        gY: 2

                    },
                    pos4: {
                        y: 365,
                        player: null,
                        sprite: null,
                        gX: 5,
                        gY: 3

                    },
                    pos5: {
                        y: 204,
                        player: null,
                        sprite: null,
                        gX: 5,
                        gY: 4

                    }

                }

            };
        }

        //Create grid function end

        //Create grid array for match check
    }, {
        key: 'createGridArr',
        value: function createGridArr() {
            this.gridArr = [[null, null, null, null, null], [null, null, null, null, null], [null, null, null, null, null], [null, null, null, null, null], [null, null, null, null, null], [null, null, null, null, null]];
        }

        //Grid array end

        /**
         * getColumn is checking for user input in reference to column position
         * @param  x{int} 'x' is user position when on grid
         */
    }, {
        key: 'getColumn',
        value: function getColumn(x) {
            var newX = null;
            var newY = null;
            var pos = null;
            var column1 = this.grid.column1;
            var column2 = this.grid.column2;
            var column3 = this.grid.column3;
            var column4 = this.grid.column4;
            var column5 = this.grid.column5;
            var column6 = this.grid.column6;

            if (x >= column1.x && x <= column1.x + column1.width) {
                newX = column1.x + column1.width / 2;
                if (column1.pos1.sprite === null) {
                    newY = column1.pos1.y;
                    pos = column1.pos1;
                } else if (column1.pos2.sprite === null) {
                    newY = column1.pos2.y;
                    pos = column1.pos2;
                } else if (column1.pos3.sprite === null) {
                    newY = column1.pos3.y;
                    pos = column1.pos3;
                } else if (column1.pos4.sprite === null) {
                    newY = column1.pos4.y;
                    pos = column1.pos4;
                } else if (column1.pos5.sprite === null) {
                    newY = column1.pos5.y;
                    pos = column1.pos5;
                } else {
                    return false;
                }
            } else if (x >= column2.x && x <= column2.x + column2.width) {
                newX = column2.x + column2.width / 2;
                if (column2.pos1.sprite === null) {
                    newY = column2.pos1.y;
                    pos = column2.pos1;
                } else if (column2.pos2.sprite === null) {
                    newY = column2.pos2.y;
                    pos = column2.pos2;
                } else if (column2.pos3.sprite === null) {
                    newY = column2.pos3.y;
                    pos = column2.pos3;
                } else if (column2.pos4.sprite === null) {
                    newY = column2.pos4.y;
                    pos = column2.pos4;
                } else if (column2.pos5.sprite === null) {
                    newY = column2.pos5.y;
                    pos = column2.pos5;
                } else {
                    return false;
                }
            } else if (x >= column3.x && x <= column3.x + column3.width) {
                newX = column3.x + column3.width / 2;
                if (column3.pos1.sprite === null) {
                    newY = column3.pos1.y;
                    pos = column3.pos1;
                } else if (column3.pos2.sprite === null) {
                    newY = column3.pos2.y;
                    pos = column3.pos2;
                } else if (column3.pos3.sprite === null) {
                    newY = column3.pos3.y;
                    pos = column3.pos3;
                } else if (column3.pos4.sprite === null) {
                    newY = column3.pos4.y;
                    pos = column3.pos4;
                } else if (column3.pos5.sprite === null) {
                    newY = column3.pos5.y;
                    pos = column3.pos5;
                } else {
                    return false;
                }
            } else if (x >= column4.x && x <= column4.x + column4.width) {
                newX = column4.x + column4.width / 2;
                if (column4.pos1.sprite === null) {
                    newY = column4.pos1.y;
                    pos = column4.pos1;
                } else if (column4.pos2.sprite === null) {
                    newY = column4.pos2.y;
                    pos = column4.pos2;
                } else if (column4.pos3.sprite === null) {
                    newY = column4.pos3.y;
                    pos = column4.pos3;
                } else if (column4.pos4.sprite === null) {
                    newY = column4.pos4.y;
                    pos = column4.pos4;
                } else if (column4.pos5.sprite === null) {
                    newY = column4.pos5.y;
                    pos = column4.pos5;
                } else {
                    return false;
                }
            } else if (x >= column5.x && x <= column5.x + column5.width) {
                newX = column5.x + column4.width / 2;
                if (column5.pos1.sprite === null) {
                    newY = column5.pos1.y;
                    pos = column5.pos1;
                } else if (column5.pos2.sprite === null) {
                    newY = column5.pos2.y;
                    pos = column5.pos2;
                } else if (column5.pos3.sprite === null) {
                    newY = column5.pos3.y;
                    pos = column5.pos3;
                } else if (column5.pos4.sprite === null) {
                    newY = column5.pos4.y;
                    pos = column5.pos4;
                } else if (column5.pos5.sprite === null) {
                    newY = column5.pos5.y;
                    pos = column5.pos5;
                } else {
                    return false;
                }
            } else if (x >= column6.x && x <= column6.x + column6.width) {
                newX = column6.x + column4.width / 2;
                if (column6.pos1.sprite === null) {
                    newY = column6.pos1.y;
                    pos = column6.pos1;
                } else if (column6.pos2.sprite === null) {
                    newY = column6.pos2.y;
                    pos = column6.pos2;
                } else if (column6.pos3.sprite === null) {
                    newY = column6.pos3.y;
                    pos = column6.pos3;
                } else if (column6.pos4.sprite === null) {
                    newY = column6.pos4.y;
                    pos = column6.pos4;
                } else if (column6.pos5.sprite === null) {
                    newY = column6.pos5.y;
                    pos = column6.pos5;
                } else {
                    return false;
                }
            }

            return {
                x: newX,
                y: newY,
                pos: pos
            };
        }

        //getColumn end

        //Function to check if there is a match by iterating through the grid array then using the position
        //object to check if any sprites next to each other are the same
        //If they are call the game won function for that particular sprite
    }, {
        key: 'checkMatch',
        value: function checkMatch(x, y, grid) {
            var position = {
                0: {
                    x: -1,
                    y: 0
                },
                1: {
                    x: -1,
                    y: 1
                },
                2: {
                    x: 0,
                    y: 1
                },
                3: {
                    x: 1,
                    y: 1
                },
                4: {
                    x: 1,
                    y: 0
                },
                5: {
                    x: 1,
                    y: -1
                },
                6: {
                    x: 0,
                    y: -1
                },
                7: {
                    x: -1,
                    y: -1
                }

            };

            for (var i = 0; i <= this.gridArr.length - 1; i++) {

                for (var j = 0; j <= this.gridArr[i].length - 1; j++) {
                    var birdC = this.gridArr[i][j];

                    for (var k in position) {
                        if (this.gridArr[i + position[k].x] && this.gridArr[j + position[k].y]) {
                            var birdT = this.gridArr[i + position[k].x][j + position[k].y];
                            if (birdC && birdT) {

                                if (birdC.frameName === birdT.frameName) {
                                    var ncX = i + position[k].x + position[k].x;
                                    var ncY = j + position[k].y + position[k].y;
                                    if (this.gridArr[ncX] && this.gridArr[ncY]) {

                                        var birdY = this.gridArr[ncX][ncY];
                                        if (birdY) {
                                            if (birdC.frameName === birdY.frameName) {

                                                var nbX = i + position[k].x + position[k].x + position[k].x;
                                                var nbY = j + position[k].y + position[k].y + position[k].y;
                                                if (this.gridArr[nbX] && this.gridArr[nbY]) {
                                                    var birdB = this.gridArr[nbX][nbY];
                                                    if (birdB) {
                                                        if (birdC.frameName === birdB.frameName) {
                                                            birdC.alpha = 0.5;
                                                            birdY.alpha = 0.5;
                                                            birdT.alpha = 0.5;
                                                            birdB.alpha = 0.5;
                                                            console.log(birdC.frameName);
                                                            if (birdC.frameName === 'assets/main/penguin.png') {
                                                                this._game.p1Score += 0.5;
                                                                this.p1ScoreText.text = 'P1 Score: ' + this._game.p1Score;
                                                                this.penguinGameWon();

                                                                console.log('penguin won');
                                                            }
                                                            if (birdC.frameName === 'assets/main/parrot.png') {
                                                                this._game.p2Score += 0.5;
                                                                this.p2ScoreText.text = 'P2 Score: ' + this._game.p2Score;
                                                                console.log('Parrot Won');
                                                                this.parrotGameWon();
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        //checkMatch end

        //Function that is called when the "penguin" player has won the game.
        //Add 1 to local storage to keep track of that players wins.
    }, {
        key: 'penguinGameWon',
        value: function penguinGameWon() {
            // console.log(this.playerCurrent);
            if (this._game.p1Score >= localStorage.getItem('p1BestScore')) {
                localStorage.setItem('p1BestScore', this._game.p1Score);
            } else if (this._game.p1Score < localStorage.getItem('p1BestScore')) {
                localStorage.setItem('p1BestScore', this._game.p1Score);
            }
            this.p1ScoreText.content = 'P1 Score: 0 ' + localStorage.getItem('p1BestScore');
            console.log(this._game.p1Score);

            this._game.state.start('Gameover', true, false);
        }

        //Function that is called when the "parrot" player has won the game.
        //Add 1 to local storage to keep track of that players wins.
    }, {
        key: 'parrotGameWon',
        value: function parrotGameWon() {
            if (this._game.p2Score >= localStorage.getItem('p2BestScore')) {
                localStorage.setItem('p2BestScore', this._game.p2Score);
            } else if (this._game.p2Score < localStorage.getItem('p2BestScore')) {
                localStorage.setItem('p2BestScore', this._game.p2Score);
            }
            this.p1ScoreText.content = 'P2 Score: 0 ' + localStorage.getItem('p2BestScore');
            console.log(this._game.p2Score);
            this._game.state.start('Gameover', true, false);
        }
    }]);

    return Grid;
})();

exports['default'] = Grid;
module.exports = exports['default'];

},{"objects/Birds":2,"states/Gameover":9}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuButton = (function (_Phaser$Sprite) {
	_inherits(MenuButton, _Phaser$Sprite);

	function MenuButton(game, x, y, key, state) {
		_classCallCheck(this, MenuButton);

		_get(Object.getPrototypeOf(MenuButton.prototype), "constructor", this).call(this, game, x, y, key);
		this._game = game;
		this._state = state;
		this._game.add.existing(this);
		this.setup();
	}

	_createClass(MenuButton, [{
		key: "setup",
		value: function setup() {
			this.anchor.setTo(0.5);
			this.frame = 1;
			this.inputEnabled = true;
			this.scale.setTo(2, 2);
			this.events.onInputUp.add(function () {
				this._game.state.start(this._state);
			}, this);
		}
	}]);

	return MenuButton;
})(Phaser.Sprite);

exports["default"] = MenuButton;
module.exports = exports["default"];

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var gridOverlay = (function (_Phaser$Sprite) {
	_inherits(gridOverlay, _Phaser$Sprite);

	function gridOverlay(parent) {
		_classCallCheck(this, gridOverlay);

		_get(Object.getPrototypeOf(gridOverlay.prototype), 'constructor', this).call(this, parent, 800, 500, 'gridOverlay12');
		this._parent = parent;
		this._parent.add.existing(this);
		this.setup();
	}

	_createClass(gridOverlay, [{
		key: 'setup',
		value: function setup() {
			this._parent.physics.arcade.enable(this);
			this.inputEnabled = true;
			this.anchor.setTo(0.5);
		}
	}]);

	return gridOverlay;
})(Phaser.Sprite);

exports['default'] = gridOverlay;
module.exports = exports['default'];

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _objectsGUIStateChange = require('objects/GUI/StateChange');

var _objectsGUIStateChange2 = _interopRequireDefault(_objectsGUIStateChange);

var Boot = (function (_Phaser$State) {
    _inherits(Boot, _Phaser$State);

    function Boot() {
        _classCallCheck(this, Boot);

        _get(Object.getPrototypeOf(Boot.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Boot, [{
        key: 'init',
        value: function init() {
            var _this = this;

            this.game.orientation = 'landscape';
            this.game.scale.trackParentInterval = 1;
            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;

            window.addEventListener('resize', function () {
                return _this.customScale();
            });

            this.game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
            this.game.stage.disableVisibilityChange = true;

            this.customScale();

            this.game.time.advancedTiming = true;
            this.game.time.desiredFps = 60;
        }
    }, {
        key: 'customScale',
        value: function customScale() {
            var w = window.innerWidth;
            var h = window.innerHeight;

            var widthScale = w / this.game.width;
            var heightScale = h / this.game.height;

            if (widthScale > heightScale) {
                this.game.scale.setUserScale(heightScale, heightScale, 0, 0);
            } else {
                this.game.scale.setUserScale(widthScale, widthScale, 0, 0);
            }
            //By default if the browser tab loses focus the game will pause. You can stop that behaviour by setting this property to true.
            this.game.scale.refresh();
        }
    }, {
        key: 'create',
        value: function create() {
            this.game.stateChange = new _objectsGUIStateChange2['default'](this.game);
            this.game.state.start('Preload');
        }
    }]);

    return Boot;
})(Phaser.State);

exports['default'] = Boot;
module.exports = exports['default'];

},{"objects/GUI/StateChange":3}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _objectsGridOverlay = require('objects/gridOverlay');

var _objectsGridOverlay2 = _interopRequireDefault(_objectsGridOverlay);

var _objectsBirds = require('objects/Birds');

var _objectsBirds2 = _interopRequireDefault(_objectsBirds);

var _objectsGrid = require('objects/Grid');

var _objectsGrid2 = _interopRequireDefault(_objectsGrid);

var Game = (function (_Phaser$State) {
	_inherits(Game, _Phaser$State);

	function Game() {
		_classCallCheck(this, Game);

		_get(Object.getPrototypeOf(Game.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(Game, [{
		key: 'init',
		value: function init() {}
	}, {
		key: 'create',
		value: function create() {
			var _this = this;

			//Create background image
			var background = this.add.image(0, 0, 'gameBackground');

			//Create object to hold birds
			this.birds = {
				0: {
					type: 'penguin',
					value: 0,
					frame: 'penguin'
				},
				1: {
					type: 'parrot',
					value: 0,
					frame: 'parrot'
				}
			};

			//Create variable to hold player counter
			this.playerCurrent = 0;

			//Create bird group
			this.birdsGroup = this.game.add.group();

			//Adding input of cursor on x, y
			this.game.input.onDown.add(function () {
				var x = _this.game.input.x;
				var y = _this.game.input.y;
				_this.addBird(x);
			});

			//Create grid from Grid.js
			this.grid = new _objectsGrid2['default'](this.game, this);

			//Create grid overlay from gridoverlay.js
			this.gridOverlay = new _objectsGridOverlay2['default'](this, 'gridOverlay12');

			//Create penguin drop sound and set volume
			this.penguinFx = this.game.add.audio('penguinFx');
			this.penguinFx.volume = 5;

			//Create parrot drop sound, and set volume
			this.parrotFx = this.game.add.audio('parrotFx');
			this.parrotFx.volume = 2;
		}

		//Function to add bird to particular column that has been clicked
	}, {
		key: 'addBird',
		value: function addBird(x) {
			//Checking to see if any one column is full and if not add a bird to that column
			var data = this.grid.getColumn(x);

			//Switching bird by adding 1 to counter when 'penguin' is dropped and subtracting 1 from counter when 'parrot' is dropped
			if (this.playerCurrent === 0) {
				var bird = this.birdsGroup.add(new _objectsBirds2['default'](this.game, data.x, data.y, this.birds[0].frame, this, data.pos));
				this.grid.gridArr[data.pos.gX][data.pos.gY] = bird;
				console.log(this.grid.gridArr);

				this.penguinFx.play();
				this.playerCurrent += 1;
			} else {
				var bird = this.birdsGroup.add(new _objectsBirds2['default'](this.game, data.x, data.y, this.birds[1].frame, this, data.pos));
				this.grid.gridArr[data.pos.gX][data.pos.gY] = bird;
				console.log(this.grid.gridArr);

				this.parrotFx.play();
				this.playerCurrent -= 1;
			}

			//Call checMatch function from Grid.js
			this.grid.checkMatch();
		}
	}]);

	return Game;
})(Phaser.State);

exports['default'] = Game;
module.exports = exports['default'];

},{"objects/Birds":2,"objects/Grid":4,"objects/gridOverlay":6}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _objectsMenuButton = require('objects/MenuButton');

var _objectsMenuButton2 = _interopRequireDefault(_objectsMenuButton);

var Gameover = (function (_Phaser$State) {
	_inherits(Gameover, _Phaser$State);

	function Gameover() {
		_classCallCheck(this, Gameover);

		_get(Object.getPrototypeOf(Gameover.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(Gameover, [{
		key: 'init',
		value: function init() {}
	}, {
		key: 'create',
		value: function create() {
			//Add back ground image
			this.add.image(0, 0, 'gameBackground');

			//Create "Winner" sprite for game over state
			var gameOverTitle = this.game.add.sprite(795, 475, "winner");
			gameOverTitle.alpha = 0;
			gameOverTitle.anchor.set(0.5);

			//Tween to flash game over text
			this.game.add.tween(gameOverTitle).to({
				alpha: 1
			}, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);

			//Add play button for this state
			var buttonPlay = new _objectsMenuButton2['default'](this.game, this.game.width * 0.5, 800, 'playButton', 'Game');

			//Added onOver and onOut tweens for play button
			buttonPlay.events.onInputOver.add(this.onOver, this);
			buttonPlay.events.onInputOut.add(this.onOut, this);
		}

		//Tween play button when the mouse is over
	}, {
		key: 'onOver',
		value: function onOver(buttonPlay) {
			this.game.add.tween(buttonPlay.scale).to({
				x: 2.5,
				y: 2.5
			}, 350, Phaser.Easing.Linear.In).start();
		}

		//Tween play button when mouse is no longer over
	}, {
		key: 'onOut',
		value: function onOut(buttonPlay) {
			this.game.add.tween(buttonPlay.scale).to({
				x: 2,
				y: 2
			}, 350, Phaser.Easing.Linear.In).start();
		}
	}]);

	return Gameover;
})(Phaser.State);

exports['default'] = Gameover;
module.exports = exports['default'];

},{"objects/MenuButton":5}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _objectsMenuButton = require('objects/MenuButton');

var _objectsMenuButton2 = _interopRequireDefault(_objectsMenuButton);

var Menu = (function (_Phaser$State) {
	_inherits(Menu, _Phaser$State);

	function Menu() {
		_classCallCheck(this, Menu);

		_get(Object.getPrototypeOf(Menu.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(Menu, [{
		key: 'create',
		value: function create() {
			//Create background
			var background = this.game.add.image(0, 0, 'menuBackground');

			//Create menu button
			var buttonPlay = new _objectsMenuButton2['default'](this.game, this.game.width * 0.5, 800, 'playButton', 'Game');

			//Create sound button and set the tint
			var soundToggle = this.game.add.button(1450, 10, 'soundButton');
			soundToggle.tint = null;

			//Create player images on menu screen
			var penguin = this.game.add.sprite(100, -200, 'penguin');
			var parrot = this.game.add.sprite(1205, -200, 'parrot');

			//Create title sprite and set anchor and alpha
			var title = this.game.add.sprite(800, 250, 'menuText');
			title.alpha = 0;
			title.anchor.set(0.5);

			//Add tweens for title fade and player images
			this.game.add.tween(title).to({
				alpha: 1
			}, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);

			this.game.add.tween(parrot).to({
				y: 300
			}, 1000, Phaser.Easing.Bounce.Out).to({
				x: 815
			}, 500, Phaser.Easing.Linear.In).to({
				x: 1205
			}, 500, Phaser.Easing.Linear.In, true);

			this.game.add.tween(penguin).to({
				y: 300
			}, 1000, Phaser.Easing.Bounce.Out).to({
				x: 585
			}, 500, Phaser.Easing.Linear.In).to({
				x: 100
			}, 500, Phaser.Easing.Linear.In, true);;

			//Added onOver and onOut tweens for play button
			buttonPlay.events.onInputOver.add(this.onOver, this);
			buttonPlay.events.onInputOut.add(this.onOut, this);

			//Event for sound button click to mute game sound
			soundToggle.onInputDown.add(this.muteSound, this);

			//Add background music for menu screen
			this.menuFx = this.game.add.audio('menuFx');
			this.menuFx.loopFull();
		}

		//Tween play button when the mouse is over
	}, {
		key: 'onOver',
		value: function onOver(buttonPlay) {
			this.game.add.tween(buttonPlay.scale).to({
				x: 2.5,
				y: 2.5
			}, 350, Phaser.Easing.Linear.In).start();
		}

		//Tween play button when mouse is no longer over
	}, {
		key: 'onOut',
		value: function onOut(buttonPlay) {
			this.game.add.tween(buttonPlay.scale).to({
				x: 2,
				y: 2
			}, 350, Phaser.Easing.Linear.In).start();
		}

		//Function to mute sound when sound button is clicked
	}, {
		key: 'muteSound',
		value: function muteSound(soundToggle) {
			if (this.game.sound.mute === false) {
				this.game.sound.mute = true;
				soundToggle.tint = 16711680;
			} else {
				this.game.sound.mute = false;
				soundToggle.tint = null;
			}
		}
	}]);

	return Menu;
})(Phaser.State);

exports['default'] = Menu;
module.exports = exports['default'];

},{"objects/MenuButton":5}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Preload = (function (_Phaser$State) {
    _inherits(Preload, _Phaser$State);

    function Preload() {
        _classCallCheck(this, Preload);

        _get(Object.getPrototypeOf(Preload.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Preload, [{
        key: 'create',
        value: function create() {
            this.game.load.onLoadStart.add(this.loadStart, this);
            this.game.load.onFileComplete.add(this.fileComplete, this);
            this.game.load.onLoadComplete.add(this.loadComplete, this);

            //Had to define the scores globally to have access to them across the objects and states
            //There is a more efficient way to do this
            this.game.p1Score = 0;
            this.game.p2Score = 0;

            this.start();
        }
    }, {
        key: 'start',
        value: function start() {
            //load game buttons
            this.game.load.spritesheet('playButton', 'assets/main/playButton2.png', 300, 102, 2);
            this.game.load.image('soundButton', 'assets/main/soundButton.png');

            //Load background images
            this.game.load.image('menuBackground', 'assets/main/bg.png');
            this.game.load.image('gameBackground', 'assets/main/gameBackground2.png');

            //Load grid overlay
            this.game.load.image('gridOverlay12', 'assets/main/gridOverlay12.png');

            //Load Birds
            this.game.load.image('penguin', 'assets/main/penguin.png');
            this.game.load.image('parrot', 'assets/main/parrot.png');

            //load audio
            this.load.audio('penguinFx', 'assets/main/penguin.wav');
            this.load.audio('parrotFx', 'assets/main/parrot.wav');
            this.load.audio('menuFx', 'assets/main/menuFx.mp3');
            this.load.audio('gameOverFx', 'assets/main/gameOverFx.mp3');

            //Load menu title image
            this.game.load.image('menuText', 'assets/main/menuText.png');

            //Gameover winner image
            this.game.load.image('winner', 'assets/main/winnerText.png');

            this.loadStart();
        }
    }, {
        key: 'loadStart',
        value: function loadStart() {
            this.game.load.start();
        }
    }, {
        key: 'fileComplete',
        value: function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {
            console.log("File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles);
        }
    }, {
        key: 'loadComplete',
        value: function loadComplete() {
            console.log('preload complete');

            this.game.stateChange.fadeOut(null, 'Menu');
        }
    }]);

    return Preload;
})(Phaser.State);

exports['default'] = Preload;
module.exports = exports['default'];

},{}]},{},[1])
//# sourceMappingURL=game.js.map
