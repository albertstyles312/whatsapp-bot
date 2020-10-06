function help() {
    return `
Selamat Datang di *ZeroTwo Bot*🤖 
Berikut adalah beberapa fitur yang ada pada *ZeroTwo Bot*🤖!
sebelum menggunakan BOT
Bacalah S&K *!snk*
Menelfon nomer bot = Block!
┯┷ ☾ Info ☽
╽
┠> *!info [Untuk Informasi Bot]*
┠> *!readme [Menegetahui fungsi]*
┠> *!donasi [UNTUK DONASI]*
┠> *!snk [Syarat dan Ketentuan]*
╿
┷┯ ☾ Group Commands ☽
   ╽_Admin group only_
   ╽
   ┠> *!add 62858xxxxx*
   ┠> *!kick @tagmember*
   ┠> *!promote @tagmember*
   ┠> *!demote @tagadmin*
   ┠> *!mentionAll*
   ┠> *!adminList*
   ┠> *!ownerGroup*
   ┠> *!leave*
   ┠> *!linkGroup*
   ┠> *!delete [replyChatBot]*
   ┠> *!kickAll*
   ╿
┯┷ ☾ Downloader Commands ☽
╽
┠> *!ytmp3 [linkYt]*
┠> *!ytmp4 [linkYt]*
┠> *!ig [linkIg]*_[MT]_
┠> *!fb [linkFb]*
╿
┷┯ ☾ Others Commands ☽
   ╽
   ┠> *!join [linkGroup]*
   ┠> *!sticker*
   ┠> *!jadwalShalat [daerah]*
   ┠> *!jadwalTv [channel]*
   ┠> *!listChannel*
   ┠> *!cuaca [tempat]*
   ┠> *!tts [kode bhs] [teks]*
   ┠> *!igStalk [@username]*
   ┠> *!wiki [query]*
   ┠> *!infoGempa*_[MT]_
   ┠> *!quotemaker [|teks|author|theme]*
   ┠> *!nulis [teks]*_[MT]_
   ┠> *!lirik [optional]*
   ┠> *!cord [optional]*
   ┠> *!shrtlink [Link]*
   ╽
   ┠> *!randomNekoNime*
   ┠> *!randomTraNnime*
   ┠> *!randomAnime*
   ┠> *!waifu*
   ┠> *!husbu*
   ┠> *!quotes*
   ┠> *!quotesnime*
   ┠> *!wait*
   ┠> *!neko*
   ┠> *!pokemon*
   ┠> *!inu*
   ╿
   ╿
   ╰╼> Kirim perintah *!readme* untuk mengetahui fungsi dan cara penggunaan perintah di atas, WAJIB BACA!!.`
}
exports.help = help()
function readme() {
    return `
*[linkYt]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *!ytmp3 https://youtu.be/Bskehapzke8*

*[linkYt]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *!ytmp4 https://youtu.be/Bskehapzke8*

*[linkIg]* Diisi dengan link Instagram yang valid tanpa tanda “[” dan “]”
Contoh : *!ig https://www.instagram.com/p/CFqRZTlluAi/?igshid=1gtxkbdqhnbbe*

*[linkFb]* Diisi dengan link Facebook yang valid tanpa tanda “[” dan “]”
Contoh : *!fb https://www.facebook.com/EpochTimesTrending/videos/310155606660409*

*[daerah]* Diisi dengan daerah yang valid, tanpa tanda “[” dan “]”
Contoh : *!jadwalShalat Tangerang*

*[channel]* Diisi dengan channel televisi yang valid, tanpa tanda “[” dan “]”
Contoh : *!jadwalTv Indosiar*

*[tempat]* Diisi dengan tempat/lokasi yang valid, tanpa tanda “[” dan “]“
Contoh : *!cuaca tangerang*

*[kode bhs]* Diisi dengan kode bahasa, contoh *id*, *en*, dll. Dan *[teks]* Diisi dengan teks yang ingin di jadikan voice, Masih sama seperti di atas tanpa tanda “[” dan “]”
Contoh : *!tts id Test*
Note : Max 250 huruf

*[@username]* Diisi dengan username Instagram yang valid, tanpa tanda “[” dan “]”
Contoh : *!igStalk @duar_amjay*

*[|teks|author|theme]* Diisi dengan teks, author, dan theme, tanpa tanda “[” dan “]”
Contoh : *!quotemaker |Odading|Mang Oleh|Shark*

*[linkGroup]* Diisi dengan link group whatsapp yang valid, tanpa tanda “[” dan “]”.
Contoh : *!join https://chat.whatsapp.com/Bhhw77d5t2gjao8*

*[optional]* Diisi dengan teks|title lirik lagu, tanpa tanda “[” dan “]”.
Contoh : *!lirik aku bukan boneka*`
}
exports.readme = readme()
function info() {
    return `Bot ini di buat dengan bahasa pemrograman Node.js / JavaScript
Owner Bot : wa.me/6285866040557`
}
exports.info = info()
function snk() {
    return `Syarat dan Ketentuan Bot *ZeroTwo Bot*
1. Teks dan nama pengguna WhatsApp anda akan kami simpan di dalam server selama bot aktif
2. Data anda akan di hapus ketika bot Offline
3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim
4. Kami tidak akan pernah meminta anda untuk memberikan informasi pribadi
5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot
6. Apapun yang anda perintah pada bot ini, KAMI TIDAK AKAN BERTANGGUNG JAWAB!

Thanks !`
}
exports.snk = snk()
function donate() {
    return `Merasa terbantu saat menggunakan bot ini? Atau sekedar kasihan sama owner yang jarang makan ini?
Kamu bisa merealisasikan perasaan itu dengan cara donasi! Uang yang kalian pakai akan saya gunakan untuk memperpanjang masa aktif bot dan sisanya buat makan.
    
Kalo mau donate langsung ae ke :
DANA/GOPAY : 085866040557

Belum Premium ?
Bisa Scan Lewat QRIS di Bawah Daling

Thanks !`
}
exports.donate = donate()
function listChannel() {
    return `Daftar channel: 
1. ANTV
2. GTV
3. Indosiar
4. iNewsTV
5. KompasTV
6. MNCTV
7. METROTV
8. NETTV
9. RCTI
10. SCTV
11. RTV
12. Trans7
13. TransTV`
}
exports.listChannel = listChannel()
