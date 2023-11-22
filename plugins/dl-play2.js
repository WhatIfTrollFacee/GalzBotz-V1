
import yts from 'yt-search'
import fg from 'api-dylux'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
let limit = 320
let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
  
    if (!text) throw `✳️ ${mssg.example} *${usedPrefix + command}* Lil Peep hate my life`
  let chat = global.db.data.chats[m.chat]
  let res = await yts(text)
  //let vid = res.all.find(video => video.seconds < 3600)
  let vid = res.videos[0]
  if (!vid) throw `✳️ Vídeo/Audio no encontrado`
  let isVideo = /vid$/.test(command)
  m.react('🎧') 
  


  
  let q = isVideo ? '720p' : '128kbps' 
try {
  let yt = await (isVideo ? fg.ytv : fg.yta)(vid.url, q)
  let { title, dl_url, quality, size, sizeB } = yt
  let isLimit = limit * 1024 < sizeB 

     m.reply(` ${isLimit ? `≡  *FG YTDL*\n\n▢ *⚖️${mssg.size}*: ${size}\n▢ *🎞️${mssg.quality}*: ${quality}\n\n▢ _${mssg.limitdl}_ *+${limit} MB*` : global.wait }  `)
     
	  if(!isLimit) conn.sendFile(m.chat, dl_url, title + '.mp' + (3 + /vid$/.test(command)), `
 ≡  *GalihDeveloper*
  
▢ *📌Title* : ${title}
▢ *🎞️Quality* : ${quality}
▢ *⚖️Size* : ${size}
`.trim(), m, false, { mimetype: isVideo ? '' : 'audio/mpeg'})
		m.react(done) 
  } catch {
  try {
//  let q = isVideo ? '360p' : '128kbps' 
  let yt = await (isVideo ? fg.ytmp4 : fg.ytmp3)(vid.url, q)
  let { title, dl_url, quality, size, sizeB } = yt
  let isLimit = limit * 1024 < sizeB 

     m.reply(` ${isLimit ? `≡  *FG YTDL*\n\n▢ *⚖️${mssg.size}*: ${size}\n▢ *🎞️${mssg.quality}*: ${q}\n\n▢ _${mssg.limitdl}_ *+${limit} MB*` : global.wait }  `)
	  if(!isLimit) conn.sendFile(m.chat, dl_url, title + '.mp' + (3 + /2$/.test(command)), `
 ≡  *GalihDeveloper*
  
*📌${mssg.title}* : ${title}
*🎞️${mssg.quality}* : ${quality}
*⚖️${mssg.size}* : ${size}
`.trim(), m, false, { mimetype: isVideo ? '' : 'audio/mpeg'})

		m.react(done) 
		
		 } catch (error) {
        m.reply(`❎ ${mssg.error}`)
    }
}

}
handler.help = ['play']
handler.tags = ['dl']
handler.command = ['play', 'playvid']

export default handler
