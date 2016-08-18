import Birds from 'objects/Birds';
import Gameover from 'states/Gameover'

export default class Grid {

    constructor(game, state, parent, row, col, ) {
        this._game = game;
        this._state = state;
        this.setup();
    }

    setup() {
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
    createGrid() {
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

                    },

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
                    },

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

                    },

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

                    },

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

                    },

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

                    },

                },


            };
        }
        //Create grid function end

    //Create grid array for match check
    createGridArr() {
            this.gridArr = [
                [null, null, null, null, null],
                [null, null, null, null, null],
                [null, null, null, null, null],
                [null, null, null, null, null],
                [null, null, null, null, null],
                [null, null, null, null, null]

            ];
        }
        //Grid array end
        
        /**
         * getColumn is checking for user input in reference to column position
         * @param  x{int} 'x' is user position when on grid
         */
    getColumn(x) {
            let newX = null;
            let newY = null;
            let pos = null;
            let column1 = this.grid.column1;
            let column2 = this.grid.column2;
            let column3 = this.grid.column3;
            let column4 = this.grid.column4;
            let column5 = this.grid.column5;
            let column6 = this.grid.column6;

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
    checkMatch(x, y, grid) {
        let position = {
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


        for (let i = 0; i <= this.gridArr.length - 1; i++) {

            for (let j = 0; j <= this.gridArr[i].length - 1; j++) {
                let birdC = this.gridArr[i][j];


                for (let k in position) {
                    if (this.gridArr[i + position[k].x] && this.gridArr[j + position[k].y]) {
                        let birdT = this.gridArr[i + position[k].x][j + position[k].y];
                        if (birdC && birdT) {

                            if (birdC.frameName === birdT.frameName) {
                                let ncX = (i + position[k].x) + position[k].x;
                                let ncY = (j + position[k].y) + position[k].y;
                                if (this.gridArr[ncX] && this.gridArr[ncY]) {

                                    let birdY = this.gridArr[ncX][ncY];
                                    if (birdY) {
                                        if (birdC.frameName === birdY.frameName) {

                                            let nbX = (i + position[k].x) + position[k].x + position[k].x;
                                            let nbY = (j + position[k].y) + position[k].y + position[k].y;
                                            if (this.gridArr[nbX] && this.gridArr[nbY]) {
                                                let birdB = this.gridArr[nbX][nbY];
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
    penguinGameWon() {
        // console.log(this.playerCurrent);
        if (this._game.p1Score >= localStorage.getItem('p1BestScore')) {
            localStorage.setItem('p1BestScore', this._game.p1Score);
        } else if (this._game.p1Score < localStorage.getItem('p1BestScore')) {
            localStorage.setItem('p1BestScore', this._game.p1Score);
        }
        this.p1ScoreText.content = 'P1 Score: 0 ' + localStorage.getItem('p1BestScore');
        console.log(this._game.p1Score)

        this._game.state.start('Gameover', true, false, );

    }

    //Function that is called when the "parrot" player has won the game.
    //Add 1 to local storage to keep track of that players wins.
    parrotGameWon() {
        if (this._game.p2Score >= localStorage.getItem('p2BestScore')) {
            localStorage.setItem('p2BestScore', this._game.p2Score);
        } else if (this._game.p2Score < localStorage.getItem('p2BestScore')) {
            localStorage.setItem('p2BestScore', this._game.p2Score);
        }
        this.p1ScoreText.content = 'P2 Score: 0 ' + localStorage.getItem('p2BestScore');
        console.log(this._game.p2Score)
        this._game.state.start('Gameover', true, false, );

    }


}