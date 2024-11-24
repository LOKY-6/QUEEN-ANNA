import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'

import dotenv from 'dotenv'
dotenv.config()

const ownervb = process.env.OWNERS;
if (!ownervb){
   throw new Error("OWNERS env is not set");
}

const ownerlist = ownervb.split(';');

global.owner = [];
for (let i = 0; i < ownerlist.length; i += 2) {
    const owner = [
        ownerlist[i],            
        ownerlist[i + 1],         
        true                        
    ];
    global.owner.push(owner);
}

//----------------------------------------------------------------------------

global.mods = ['24104856910'] 
global.prems = ['24104856910']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['BrunoSobrino']

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = '𝚯𝐊𝐋𝚳𝚩𝚯𝐘 𝐃𝚵𝚫𝚻𝚮 𝚳𝚯𝚯𝚴'
global.premium = 'true'
global.packname = '_🪽𝑬𝒏𝒕𝒆𝒏𝒅𝒆𝒛 𝒍'𝒂𝒑𝒑𝒆𝒍 𝒅𝒆 𝑳𝒂 𝑪𝒊𝒕𝒆́ 𝒅𝒆𝒔 𝑨𝒏𝒈𝒆𝒔, 𝒍𝒂̀ 𝒐𝒖̀ 𝒍𝒂 𝒍𝒖𝒎𝒊𝒆̀𝒓𝒆 𝒔𝒆 𝒎𝒆̂𝒍𝒆 𝒂𝒖𝒙 𝒕𝒆́𝒏𝒆̀𝒃𝒓𝒆𝒔 ! 𝑼𝒏 𝒔𝒂𝒏𝒄𝒕𝒖𝒂𝒊𝒓𝒆 𝒐𝒖̀ 𝒄𝒉𝒂𝒒𝒖𝒆 𝒂̂𝒎𝒆 𝒆𝒔𝒕 𝒖𝒏 𝒄𝒐𝒎𝒃𝒂𝒕𝒕𝒂𝒏𝒕, 𝒄𝒉𝒂𝒒𝒖𝒆 𝒄œ𝒖𝒓 𝒃𝒂𝒕 𝒂𝒗𝒆𝒄 𝒍𝒂 𝒑𝒖𝒊𝒔𝒔𝒂𝒏𝒄𝒆 𝒅𝒆𝒔 𝒂𝒏𝒄𝒊𝒆𝒏𝒔. 𝑰𝒄𝒊, 𝒍𝒆𝒔 𝒂𝒏𝒈𝒆𝒔 𝒏𝒆 𝒔𝒆 𝒄𝒐𝒏𝒕𝒆𝒏𝒕𝒆𝒏𝒕 𝒑𝒂𝒔 𝒅𝒆 𝒗𝒆𝒊𝒍𝒍𝒆𝒓 ; 𝒊𝒍𝒔 𝒔𝒆 𝒃𝒂𝒕𝒕𝒆𝒏𝒕 𝒑𝒐𝒖𝒓 𝒍𝒆𝒖𝒓 𝒉𝒆́𝒓𝒊𝒕𝒂𝒈𝒆, 𝒑𝒐𝒖𝒓 𝒍𝒆𝒖𝒓 𝒇𝒊𝒆𝒓𝒕𝒆́. 𝑳𝒆𝒔 𝒎𝒖𝒓𝒔 𝒓𝒆́𝒔𝒐𝒏𝒏𝒆𝒏𝒕 𝒅𝒆𝒔 𝒆́𝒄𝒉𝒐𝒔 𝒅𝒆 𝒃𝒂𝒕𝒂𝒊𝒍𝒍𝒆𝒔 𝒑𝒂𝒔𝒔𝒆́𝒆𝒔, 𝒆𝒕 𝒄𝒉𝒂𝒒𝒖𝒆 𝒑𝒊𝒆𝒓𝒓𝒆 𝒑𝒐𝒓𝒕𝒆 𝒍𝒆 𝒑𝒐𝒊𝒅𝒔 𝒅𝒆𝒔 𝒔𝒂𝒄𝒓𝒊𝒇𝒊𝒄𝒆𝒔. 𝑳𝒆𝒔 𝒎𝒆𝒎𝒃𝒓𝒆𝒔 𝒅𝒆 𝑳𝒂 𝑪𝒊𝒕𝒆́ 𝒅𝒆𝒔 𝑨𝒏𝒈𝒆𝒔 𝒏𝒆 𝒓𝒆𝒄𝒖𝒍𝒆𝒏𝒕 𝒅𝒆𝒗𝒂𝒏𝒕 𝒓𝒊𝒆𝒏, 𝒄𝒂𝒓 𝒊𝒍𝒔 𝒔𝒐𝒏𝒕 𝒍𝒆𝒔 𝒈𝒂𝒓𝒅𝒊𝒆𝒏𝒔 𝒅𝒆 𝒍𝒆𝒖𝒓 𝒅𝒆𝒔𝒕𝒊𝒏, 𝒍𝒆𝒔 𝒂𝒓𝒄𝒉𝒊𝒕𝒆𝒄𝒕𝒆𝒔 𝒅’𝒖𝒏 𝒆𝒎𝒑𝒊𝒓𝒆 𝒅𝒆 𝒈𝒍𝒐𝒊𝒓𝒆. 𝑪𝒆𝒖𝒙 𝒒𝒖𝒊 𝒐𝒔𝒆𝒏𝒕 𝒍𝒆𝒔 𝒅𝒆́𝒇𝒊𝒆𝒓 𝒓𝒆𝒏𝒄𝒐𝒏𝒕𝒓𝒆𝒏𝒕 𝒍𝒂 𝒇𝒖𝒓𝒊𝒆 𝒅𝒆 𝒍𝒂 𝒕𝒆𝒎𝒑𝒆̂𝒕𝒆, 𝒄𝒂𝒓 𝒊𝒄𝒊, 𝒍𝒆𝒔 𝒄𝒊𝒆𝒖𝒙 𝒔’𝒆𝒎𝒃𝒓𝒂𝒔𝒆𝒏𝒕 𝒆𝒕 𝒍𝒂 𝒗𝒆𝒏𝒈𝒆𝒂𝒏𝒄𝒆 𝒔𝒆 𝒅𝒆́𝒄𝒉𝒂𝒊̂𝒏𝒆. 𝑽𝒐𝒖𝒔 𝒆̂𝒕𝒆𝒔 𝒑𝒓𝒆́𝒗𝒆𝒏𝒖𝒔 : 𝒅𝒂𝒏𝒔 𝑳𝒂 𝑪𝒊𝒕𝒆́ 𝒅𝒆𝒔 𝑨𝒏𝒈𝒆𝒔, 𝒍𝒂 𝒍𝒐𝒚𝒂𝒖𝒕𝒆́ 𝒆𝒔𝒕 𝒔𝒂𝒄𝒓𝒆́𝒆, 𝒆𝒕 𝒍𝒆𝒔 𝒕𝒓𝒂𝒊̂𝒕𝒓𝒆𝒔 𝒏'𝒐𝒏𝒕 𝒑𝒂𝒔 𝒍𝒆𝒖𝒓 𝒑𝒍𝒂𝒄𝒆 !_🪽🪶' 
global.author = '🗿' 
global.igfg = '▢ Follow on Instagram\nhttps://www.instagram.com/lawliet.kfx\n' 
global.dygp = 'https://chat.whatsapp.com/GpsTju4MUAbJmmZhHU8zAR'
global.fgsc = 'https://github.com/toge012345/QUEEN-ANNA' 
global.fgyt = 'https://youtube.com/@kenzo3146'
global.fgpyp = 'https://youtube.com/@kenzo3146'
global.fglog = 'ANNA.jpg' 

//imagen
global.imagen1 = fs.readFileSync('./Assets/ANNA.jpg')

//Dont Edit Danger Zone⚠️
global.wait = '*⌛ _Please Wait..._*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.mlc = '📃'
global.sdc = '🎶'
global.xmoji = '🔥' 
global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
