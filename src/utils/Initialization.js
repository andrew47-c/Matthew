class Initialization {
    constructor() {
        require('dotenv').config({
            path: './config/.env'
        });
    }
}

new Initialization()