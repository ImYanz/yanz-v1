let handler = async (m, { conn }) => {
    let wm = `${thumb}`

    let nanz = `mode santuy
    `.trim()
conn.sendMessage(m.chat, {
text: nanz,
contextInfo: {
externalAdReply: {
title: "",
body: uptimex,
thumbnailUrl: `${thumb}`,
sourceUrl: "",
mediaType: 1,
renderLargerThumbnail: true
}}})
}
handler.help = ['mode']
handler.tags = ['main']
handler.customPrefix = /^(mode)$/i 
handler.command = new RegExp
handler.limit = false