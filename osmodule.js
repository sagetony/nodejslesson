const os = require('os')

let user = os.userInfo()
console.log(user)

console.log(`My System Uptime is  ${os.uptime} seconds`)

let systemInfo = {
    name:os.type(),
    version: os.version(),
    release : os.release(),
    freemem : os.freemem(),
}
console.log(systemInfo)