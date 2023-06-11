require('./utils/Initialization')
const VersionInfo = require('./VersionInfo')

console.log(`Matthew v${VersionInfo.VERSION} is starting...`)
if (VersionInfo.DEVELOPMENT_MODE) {
    console.warn('This is a development build. Do not use this in production.')
}
console.log('Loading Matthew...')

const {
    Matthew
} = require('./Matthew')

new Matthew(process.env.DISCORD_TOKEN)