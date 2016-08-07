import Birds from 'objects/Birds';

export default class Grid {

    constructor(game, state, parent, row, col) {
        this._game = game;
        this._state = state;
        this.setup();
    }

    setup() {
        //Call create grid function
        this.createGrid();
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

                },
                pos3: {
                    y: 523,
                    player: null,
                    sprite: null,

                },
                pos4: {
                    y: 365,
                    player: null,
                    sprite: null,

                },
                pos5: {
                    y: 204,
                    player: null,
                    sprite: null,

                },

            },
            column3: {
                x: 582,
                width: 112,
                pos1: {
                    y: 843,
                    player: null,
                    sprite: null,
                },
                pos2: {
                    y: 684,
                    player: null,
                    sprite: null,

                },
                pos3: {
                    y: 523,
                    player: null,
                    sprite: null,

                },
                pos4: {
                    y: 365,
                    player: null,
                    sprite: null,

                },
                pos5: {
                    y: 204,
                    player: null,
                    sprite: null,

                },

            },
            column4: {
                x: 743,
                width: 112,
                pos1: {
                    y: 843,
                    player: null,
                    sprite: null,
                },
                pos2: {
                    y: 684,
                    player: null,
                    sprite: null,

                },
                pos3: {
                    y: 523,
                    player: null,
                    sprite: null,

                },
                pos4: {
                    y: 365,
                    player: null,
                    sprite: null,

                },
                pos5: {
                    y: 204,
                    player: null,
                    sprite: null,

                },

            },
            column5: {
                x: 904,
                width: 112,
                pos1: {
                    y: 843,
                    player: null,
                    sprite: null,
                },
                pos2: {
                    y: 684,
                    player: null,
                    sprite: null,

                },
                pos3: {
                    y: 523,
                    player: null,
                    sprite: null,

                },
                pos4: {
                    y: 365,
                    player: null,
                    sprite: null,

                },
                pos5: {
                    y: 204,
                    player: null,
                    sprite: null,

                },

            },
            column6: {
                x: 1062,
                width: 112,
                pos1: {
                    y: 843,
                    player: null,
                    sprite: null,
                },
                pos2: {
                    y: 684,
                    player: null,
                    sprite: null,

                },
                pos3: {
                    y: 523,
                    player: null,
                    sprite: null,

                },
                pos4: {
                    y: 365,
                    player: null,
                    sprite: null,

                },
                pos5: {
                    y: 204,
                    player: null,
                    sprite: null,

                },

            },


        };
    }
    //Create grid function end

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
        /**
         * This is where the checkMatch would be called
         */
        // this.checkMatch();

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

    /**
     * checkMatch would be where a check would be made to see if you have won the game, by using a position object to see if there is a relative 'match' around that particular
     * sprite.
     */

    // checkMatch() {
    //     console.log(this.getPenguin(0, 3));
    //     let position = {
    //         0: {
    //             x: -1,
    //             y: 0
    //         },
    //         1: {
    //             x: -1,
    //             y: 1
    //         },
    //         2: {
    //             x: 0,
    //             y: 1
    //         },
    //         3: {
    //             x: 1,
    //             y: 1
    //         },
    //         4: {
    //             x: 1,
    //             y: 0
    //         },
    //         4: {
    //             x: 1,
    //             y: -1
    //         },
    //         5: {
    //             x: 0,
    //             y: -1
    //         },
    //         6: {
    //             x: -1,
    //             y: -1
    //         }

    //     };
    //     for (let column in this.grid) {
    //         //itterate over each postiion
    //         for (let position in this.grid[column]) {
    //             //on each position, check direction
    //             if (this.grid[column][position].gY !== undefined) {
    //                 let bird = this.grid[column][position];
    //                 for (let i in position) {
    //                     console.log(bird);
    //                     let newBird = this.getPenguin(bird.gX + position[i].x, bird.gY + position[i].y);
    //                     if(bird.sprite !== null && newBird.sprite !== null){
    //                         console.log(bird.sprite.frameName, newBird.sprite.frameName);
    //                     if(bird.sprite.frameName === newBird.sprite.frameName) {
    //                         console.log('Match 2');

    //                     }
    //                 }

    //                 }


    //             }


    //         }
    //     }

    // }

    /**
     * getPenguin would be the function to get the particular position of when a 'bird' is dropped
     */

    // getPenguin(x, y) {
    //     for (let column in this.grid) {
    //         for (let position in this.grid[column]) {
    //             if (this.grid[column][position].gY !== undefined) {
    //                 if (this.grid[column][position].gX === x && this.grid[column][position].gY === y) {
    //                     return this.grid[column][position];
    //                 }
    //             }
    //         }
    //     }

    // }



}