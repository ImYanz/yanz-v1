/*
Thanks to Botcahx
Thanks to Betabotz
Thanks to DyLux-FG
Thanks to Subscriber
*/

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6281239303460', 'Yanz', true],
  ['6283853787406']
] // Nomor Owner

global.mods = ['6281239303460'] 
global.prems = ['6281239303460', '6283853787406']

// apikey
global.lann = 'GwhiKY3t'
// apikeylu di ganti menggunakan apikey yang di dapatkan di website https://api.betabotz.org. contohnya global.lann = 'nans' (contoh). cara mendapatkan apikey. masuk website > scroll ke bawah dan cari harga yang kamu mau ada juga yang free dan tekan > otomatis akan di arahkan untuk registrasi, isi data diri email dll. > kalo sudah klik profil dan di situ akan muncul apikey mu. terima kasih.

global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api-fgmods.ddns.net': 'gdBP6YBm',
  'https://api.betabotz.org': 'GwhiKY3t'
}

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
  lann: 'https://api.betabotz.org'
}

// Watermark
global.nama = 'AR Only' // nama owner
global.nomor = '6281239303460' // nomor owner
global.nans = 'AR Only' // nama bot 
global.thumb = 'https://telegra.ph/file/59fe5f54157cea4fe224b.jpg'
global.dygp = 'https://chat.whatsapp.com' // link group yang ada di menu

// Sticker wm
global.packname = 'AR Only' 
global.author = '@yanzzz115' 
global.fgig = 'https://www.instagram.com/yanzzz115' // bebas tapi jangan kosong 
global.fgsc = 'https://github.com/Yanzente' // bebas tapi jangan kosong
global.fgyt = 'https://chat.whatsapp.com/BZLiBbIzQuBFbTXJMrJDNf' // bebas tapi jangan kosong
global.fgpyp = 'https://chat.whatsapp.com/BZLiBbIzQuBFbTXJMrJDNf' // bebas tapi jangan kosong
global.fglog = 'https://telegra.ph/file/eff7e60a01384f5c4fb8c.jpg'

// Other
global.dana = '6285880029379'
global.qris = 'https://telegra.ph/file/ef730ab5062b5daf772ea.png'
global.web = 'https://chat.whatsapp.com/BZLiBbIzQuBFbTXJMrJDNf'
global.email = 'nansoffc@gmail.com'
global.lastm = 'ꜱɪᴍᴘʟᴇ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ʙʏ ʏᴀɴᴢ ᴇɴᴛᴇ'

global.wait = 'Tunggu sebentar....'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // Peringatan maksimum

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})