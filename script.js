// Initialize the variable 
let songIndex = 0;
let audioElement = new Audio("./Assets/Songs/Gulabi-Sadi.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif')
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


//Here we have to start from tommarow
let songs = [
    { songName: "Gulabi Sadi - Gajanan Joshi", filePath: "./Assets/Songs/Gulabi-Sadi.mp3"},
    { songName: "Arambha Hai Prachand - Piyush Mishra", filePath: "./Assets/Songs/Arambha-Hai-Prachand.mp3"},
    { songName: "Sam Dam Dandh Bhed - Kumar Wayadande", filePath: "./Assets/Songs/Sam-Dam-Dandh-Bhed.mp3"},
    { songName: "Maula Maula", filePath: "./Assets/Songs/Maula-Maula.mp3"},
    { songName: "Aale Maratha", filePath: "./Assets/Songs/Aale-Maratha.mp3"},
    { songName: "Jalwa Re Jalwa - Kumar Wayadande", filePath: "./Assets/Songs/Jalwa-Re-Jalwa.mp3"},
    { songName: "Milne hain mujhse aayi - Riyan Shaikh", filePath: "./Assets/Songs/_Milne Hai Mujhse Aayi Aashiqui 2_ Full Video Song _ Aditya Roy Kapur_ Shraddha Kapoor(MP3_70K).mp3"},
    { songName: "Tu jo mila", filePath: "./Assets/Songs/_Tu Jo Mila_ Full Song with LYRICS - K.K. Pritam _ Salman Khan_ Harshaali _ Bajrangi Bhaijaan(MP3_70K).mp3"},
    { songName: "Besabariyaan", filePath: "./Assets/Songs/BESABRIYAAN Full Video Song _ M. S. DHONI - THE UNTOLD STORY _ Sushant Singh Rajput(MP3_70K).mp3"},
    { songName: "Bol do na zara - Riyan ashleel", filePath: "./Assets/Songs/BOL DO NA ZARA Full Video Song _ AZHAR _ Emraan Hashmi_ Nargis Fakhri _ Armaan Malik_ Amaal Mallik(MP3_70K).mp3"}
]

//Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play()
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    } else {
        audioElement.pause()
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

// Listen to music
audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');
    // Update seeker
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        // audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 5) {
        songIndex = 0
    } else {
        songIndex += 1;
    }
    // audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    } else {
        songIndex -= 1;
    }
    // audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})