const {
    Client,
    GatewayIntentBits,
    Partials
} = require('discord.js')

class Matthew {

    #token;

    constructor(token) {
        this.#token = token;
        this.#login(token).then(() => {
            console.log('Matthew is ready!')
        })
    }

    #login = async function(token) {
        this.client = new Client({
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.GuildMessageReactions,
                GatewayIntentBits.GuildMembers,
                GatewayIntentBits.GuildPresences,
                GatewayIntentBits.GuildMessageTyping,
                GatewayIntentBits.DirectMessages,
                GatewayIntentBits.MessageContent
            ],
            partials: [
                Partials.Message,
                Partials.GuildMember,
                Partials.Channel,
                Partials.Reaction,
                Partials.User
            ]
        })

        await this.client.login(token);
    }
}

module.exports = {
    Matthew
}