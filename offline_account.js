process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
const { createBot } = require('mineflayer')
const socks = require('socks').SocksClient

const bot = createBot({
  host: "skykingdoms.net",
  username: 'ZRockie',
  skipValidation: true,
  connect: (client) => {
    socks.createConnection({
      proxy: {
        host: "188.74.183.10",
        port: 8279,
        type: 5,
        userId: "yopwogkp",
        password: "ldmbnr5ei9n6"
      },
      command: 'connect',
      destination: {
        host: "skykingdoms.net",
        port: 25565
      }
    }, (err, info) => {
      if (err) {
        console.log(err)
        return
      }
      client.setSocket(info.socket)
      client.emit('connect')
    })
  }
})

bot.once('spawn', () => console.log('spawned'))
