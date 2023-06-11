class Initialization {
    constructor() {
        require('dotenv').config({
            path: __dirname + '/./../../.env'
        });
    }
}

new Initialization()