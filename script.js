let current = 0;
let songs = ['Little Do You Know','littledoyouknow.mp3', 'Alex & Siera'
]

const music = document.querySelector('#audio');

const bar = document.querySelector('#bar');
const songname = document.querySelector('#song');
const currentTime = document.querySelector('#current-time');
const artist = document.querySelector('#artist');
const playbtn = document.querySelector('.play-btn');

playbtn.addEventListener('click',()=>{
    if(playbtn.className.includes('pause')){
        music.play();
    }
    else{
        music.pause();
    }
    playbtn.classList.toggle('pause');
})

function setmusic(){
    bar.value = 0;
    music.src = songs[1];
    songname.innerHTML = songs[0];
    artist.innerHTML = songs[2];

}
setInterval(()=>{
    bar.value = music.currentTime;
    currentTime.innerHTML = formatTime(music.currentTime);

},500)
bar.addEventListener('change',()=>{
    music.currentTime=bar.value;
})
setmusic();
