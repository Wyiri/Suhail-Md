const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_42_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA5LFxuICAgICAgICA4MixcbiAgICAgICAgOTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjYsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQyLFxuICAgICAgICAwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAzLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTM3LFxuICAgICAgICA4NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTczLFxuICAgICAgICA4MixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNSxcbiAgICAgICAgMjM2LFxuICAgICAgICA5MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDY2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTU0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTgzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjE1LFxuICAgICAgICA3LFxuICAgICAgICA1NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODEsXG4gICAgICAgIDc5LFxuICAgICAgICA4MSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMixcbiAgICAgICAgOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgxLFxuICAgICAgICAzNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODUsXG4gICAgICAgIDU3LFxuICAgICAgICA3NixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTksXG4gICAgICAgIDczLFxuICAgICAgICA4OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTUwLFxuICAgICAgICA3MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDY0LFxuICAgICAgICA1NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTIwLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODUsXG4gICAgICAgIDM5LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDc2LFxuICAgICAgICA2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTMyLFxuICAgICAgICA5NixcbiAgICAgICAgOCxcbiAgICAgICAgMCxcbiAgICAgICAgOTksXG4gICAgICAgIDY2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDcxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTkyLFxuICAgICAgICA0LFxuICAgICAgICAxMjksXG4gICAgICAgIDk4LFxuICAgICAgICA4NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDU2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjQzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjQyLFxuICAgICAgICA4NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTksXG4gICAgICAgIDg3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJINDdML2xvR3NBdXVKTWw4YjlpWEcwTE9XckZIQVo2WHBIZ0FrSEFjUU5ZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDExMTI1MzAzMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNUU0QUI2NzJGQUMxRjA4QUEzMkVFRDEyMTUzNEI2NkFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxOTE0OTU1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlRaVXdPeDEtU3hPMm9kcDJhQ0ZsNGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiY2VmMmZiNzQtODM2ZS00MzVlLTllZjItOTRjOTY3OTEwMzJjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU2LFxuICAgICAgNDcsXG4gICAgICAxOTUsXG4gICAgICAxMzMsXG4gICAgICA4MSxcbiAgICAgIDExMCxcbiAgICAgIDc1LFxuICAgICAgMTg5LFxuICAgICAgMTgzLFxuICAgICAgMjQxLFxuICAgICAgMjEsXG4gICAgICAxOTQsXG4gICAgICAxMzMsXG4gICAgICAxNzcsXG4gICAgICAxOTAsXG4gICAgICA4MixcbiAgICAgIDE4MyxcbiAgICAgIDYsXG4gICAgICAxNDUsXG4gICAgICAyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMSxcbiAgICAgIDExMyxcbiAgICAgIDE5LFxuICAgICAgNTMsXG4gICAgICAyOSxcbiAgICAgIDE2NSxcbiAgICAgIDUzLFxuICAgICAgNjIsXG4gICAgICAxNTcsXG4gICAgICAxMDcsXG4gICAgICAxNDYsXG4gICAgICAxMjUsXG4gICAgICAxNzgsXG4gICAgICAxNDUsXG4gICAgICA0NCxcbiAgICAgIDIxMixcbiAgICAgIDE2MyxcbiAgICAgIDM2LFxuICAgICAgMTYzLFxuICAgICAgMTgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlE2VlBIS1MyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQxMTEyNTMwMzA6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQ1MjI5MzYxNTYxOTc6MTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUdRdzh3RUVNR3NpYlVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJMWE5Objc3YzlZVk9VeTBuMCsvVVczTHE2d3B6T0xFeEhSQldGVzZoWWdNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjB2SGh3S29haXlYY3dkZ1BBNFZGVjhMWXVpbC9lc1c2TE1peFZJckxMTEF1am5sUmJ3KzhJZ3k0d2hiNzZ4bUpkd3ZBaEZiSUJlcS9KeFFmN09JMEJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInE4UXBRQ0p1bnBKalpxRWtXL3BPN1NLektuWUNkUEI1NE5NVG9iK3dPNXU5Mnhmd25Fd3RjUFJlaHFnM2kwQys4ZEVaMlFCMlpxRHI3S0QybkwxSGlnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDExMTI1MzAzMDoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE5MTQ5NDksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGVVBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZVUC5qc29uIjogIntcImtleURhdGFcIjpcIkxvTFJYeXBEUFVadlpCYVoxNVVTbGV1bUVRcjRqMnlrTDN1VnlSaFZRcUk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIzNDIyNTE1MSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwzXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
