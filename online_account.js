process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
const { createBot } = require('mineflayer')
const ProxyAgent = require('proxy-agent')
const socks = require('socks').SocksClient

const bot = createBot({
  username: "benranoah1@outlook.com",
  password: "IMNOTGAY69",
  host: "skykingdoms.net",
  port: 25565,
  agent: new ProxyAgent({ protocol: 'socks5:', host: "188.74.210.207", port: 6286, username: "yopwogkp", password: "ldmbnr5ei9n6" }),
  connect: (client) => {
    socks.createConnection({
      proxy: {
        host: "188.74.210.207",
        port: 6286,
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
