export default class LocalStorage {

    constructor() {
        this.gameData = null;
        if (localStorage.getItem('gameData') !== null) {
            this.fetchGameData();
        } else {
            this.createNewGame();
        }
    }

    createNewGame() {
        let newGameData = {
            'levelData': {
                0: {
                    completed: false,
                    moves: 0,
                    score: 0,
                    gameScore: 0,
                    time: 0,
                    attempts: 0
                }
            },
            playerData: {
                totalPlays: 0,
                coins: 0
            }
        };

        localStorage.setItem('gameData', JSON.stringify(newGameData));
        this.gameData = JSON.parse(localStorage.getItem('gameData'));
    }

    fetchGameData() {
        this.gameData = JSON.parse(localStorage.getItem('gameData'));
    }

    saveGameData() {
        localStorage.setItem('gameData', JSON.stringify(this.gameData));
    }

    addCoins(val) {
        this.gameData.playerData.coins += val;
        this.saveGameData();
    }

    removeCoins(val) {
        this.gameData.playerData.totalPlays -= val;
        this.saveGameData();
    }

    attempts(id) {
        return this.gameData.levelData[id - 1].attempts;
    }

    gameScore(id) {
        console.log(this.gameData.levelData[id-1].gameScore);
        return this.gameData.levelData[id-1].gameScore;
    }

    gamePlayed(id) {
        this.gameData.playerData.totalPlays++;
        this.gameData.levelData[id - 1].attempts++;
        this.lastCoinsAdded = 0;
        this.lastScore = 0;
        this.saveGameData();
    }

    levelComplete(level, moves, score, time, complete) {
        // check if the player has complete this level on this play through
        if (complete) {
            let coinsGained = 0;
            if (this.gameData.levelData[level].completed === false) {
                // this level has not been completed before
                if (this.gameData.levelData[level].attempts < 10) {
                    // if the level hasn't been attempted more than 10 times 
                    coinsGained = 11 - this.gameData.levelData[level].attempts;
                    this.addCoins(coinsGained);
                    this.lastCoinsAdded = coinsGained;
                    this.gameData.levelData[level].gameScore = 100;
                }
            }
            this.gameData.levelData[level].completed = true;
            let newMoves, newScore, newTime;

            // check if better moves
            if (this.gameData.levelData[level].moves < moves) {
                newMoves = moves;
            } else {
                newMoves = this.gameData.levelData[level].moves;
            }

            // check if better score
            if (this.gameData.levelData[level].score < score) {
                newScore = score;
            } else {
                newScore = this.gameData.levelData[level].score;
            }

            // check if better time
            if (this.gameData.levelData[level].time < time) {
                newTime = time
            } else {
                newTime = this.gameData.levelData[level].time;
            }

            // input the correct data to levelData
            this.gameData.levelData[level].moves = newMoves;
            this.gameData.levelData[level].score = newScore;
            this.gameData.levelData[level].time = newTime;

            // unlock the next level if it hasn't already been unlocked
            if (this.gameData.levelData[level + 1]) {
                // level already exists, don't overwrite it
            } else {
                // level doesn't exist, create an empty level field for it
                this.gameData.levelData[level + 1] = {
                    completed: false,
                    moves: 0,
                    score: 0,
                    gameScore: 0,
                    time: 0,
                    attempts: 0
                }
            }
        } else {
            if (this.gameData.levelData[level].complete === true) {
                // failed the level, but player has completed it before
            } else {
                // failed the level and player has not completed it yet
                this.gameData.levelData[level].complete = false;
                let newMoves, newScore, newTime;

                // check if better moves
                if (this.gameData.levelData[level].moves < moves) {
                    newMoves = moves;
                } else {
                    newMoves = this.gameData.levelData[level].moves;
                }

                // check if better score
                if (this.gameData.levelData[level].score < score) {
                    newScore = score;
                } else {
                    newScore = this.gameData.levelData[level].score;
                }

                // check if better time
                if (this.gameData.levelData[level].time < time) {
                    newTime = time
                } else {
                    newTime = this.gameData.levelData[level].time;
                }
                this.gameData.levelData[level].moves = newMoves;
                this.gameData.levelData[level].score = newScore;
                this.gameData.levelData[level].time = newTime;
            }
        }
        this.saveGameData();
    }

    get levels() {
        return this.gameData.levelData;
    }

    get lastCoins() {
        return this.lastCoinsAdded;
    }

    get previousScore() {
        return this.lastScore;
    }
}
