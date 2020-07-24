
class Resistance {
    constructor(thisRoom) {
        this.thisRoom = thisRoom;

        this.role = 'Loyal Servant of Arthur';
        this.alliance = 'Resistance';

        this.description = 'Standard issue good guy who knows nothing.';
    }

    see() {
        return undefined;
    }

    checkSpecialMove() {

    }
}


module.exports = Resistance;
