class Initialization {
    constructor() {
        require('dotenv').config({
            path: __dirname + '/./../../config/.env'
        });
    }
}

new Initialization()