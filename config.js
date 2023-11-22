import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6282287694946', 'galdevz', true],
  ['6282287694946']
] //Numeros de owner 

global.mods = ['6282287694946'] 
global.prems = ['6282287694946', '6282287694946']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'BCCCzzPD' //--- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = 'OpenAi Botz Mini' 
global.author = '@gal.devz' 

//--info FG
global.botName = 'OpenAi Botz Mini'
global.fgig = 'https://www.instagram.com/gal.devz' 
global.fgsc = 'https://github.com/WhatIfTrollFacee' 
global.fgyt = 'https://youtube.com/gwinngabut'
global.fgpyp = 'https://paypal.me/fg98f'
global.fglog = 'https://i.ibb.co/1zdz2j3/logo.jpgs' 

//--- Grupos WA
global.fgcanal = 'https://whatsapp.com/channel/0029VaCeuZd6mYPQiWqxXj1F'
global.bgp = 'https://chat.whatsapp.com/BESBo5xjvIZE4YVvth6Yzr'
global.bgp2 = 'https://chat.whatsapp.com/I7bvd8XCAOUHjgkHteqFC7'
global.bgp3 = 'https://chat.whatsapp.com/.' //--GP NSFW

global.wait = '⌛ _Loading..._\n*▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
