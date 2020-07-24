class Oberon {
    constructor(thisRoom) {
        this.thisRoom = thisRoom;

        this.role = 'Oberon';
        this.alliance = 'Spy';

        this.description = 'Oberon and Spies do not know each other.';
        this.orderPriorityInOptions = 50;
    }

    // Oberon only sees him/herself
    // rq hax: Oberon sees everyone, but they don't see him
    see() {
        if (this.thisRoom.gameStarted === true) {
            const obj = {};
            const array = [];

            for (let i = 0; i < this.thisRoom.playersInGame.length; i++) {
                if (this.thisRoom.playersInGame[i].alliance === 'Spy') {
                    if (this.thisRoom.playersInGame[i].role === 'Oberon') {
                        // don't add oberon
                    } else {
                        // add the spy
                        array.push(this.thisRoom.playersInGame[i].username);
                    }
                }
            }

            obj.spies = array;
            return obj;
        }
    }

    checkSpecialMove() {

    }
}


module.exports = Oberon;
