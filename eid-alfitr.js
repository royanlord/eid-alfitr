let ramadhan = "end"
let greeting = "Selamat Hari Raya Idul Fitri 1444 H"
let adaSalah = true

const eidAlFitr = () => {
    if (ramadhan === "end") {
        console.log(greeting)
        if (adaSalah) {
            console.log("Minal aidin wal faidzin");
            console.log("Mohon maaf lahir dan batin");
        } else {
            console.log("Minal aidin wal faidzin");
            console.log("Mohon maaf lahir dan batin");
        }
    } else {
        console.log("Masih puasa woy");
    }
}

eidAlFitr()