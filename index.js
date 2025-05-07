const image = document.getElementById('cover'),
    title = document.getElementById('music-title'),
    artist = document.getElementById('music-artist'),
    currentTimeEl = document.getElementById('current-time'),
    durationEl = document.getElementById('duration'),
    progress = document.getElementById('progress'),
    playerProgress = document.getElementById('player-progress'),
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next'),
    playBtn = document.getElementById('play'),
    background = document.getElementById('bg-img');
    loopBtn = document.getElementById('loop');
    trackContent = document.getElementById('track-content')

const music = new Audio();

const songs = [
    //Launchpoint
    {
        path: 'assets/reminisce.mp3',
        displayName: 'Reminisce',
        cover: 'assets/launchpoint_cover.png',
        artist: 'Salslinger',
        content: 'The Launchpoint Album contains some of earliest works. When I was first getting into music I struggled a lot, but these tracks are the best I\'ve made within the first I maded music. <br><br> With Reminisce I wanted to go for a sad song that had some hope'
    },
    {
        path: 'assets/dungeon_waltz.mp3',
        displayName: 'Dungeon Waltz',
        cover: 'assets/launchpoint_cover.png',
        artist: 'Salslinger',
        content: 'Test 22'
    },
    {
        path: 'assets/frolicking.mp3',
        displayName: 'Frolicking',
        cover: 'assets/launchpoint_cover.png',
        artist: 'Salslinger',
        content: 'Test 22'
    },
    {
        path: 'assets/wander.mp3',
        displayName: 'Wander',
        cover: 'assets/launchpoint_cover.png',
        artist: 'Salslinger',
        content: 'Test 22'

    },
    //Launchpoint
    //Nihilo
    {
        path: 'assets/iggys_journey.mp3',
        displayName: 'Iggy\'s Journey',
        cover: 'assets/psm_cover.png',
        artist: 'Salslinger',
        content: 'Test 22'

    },
    {
        path: 'assets/thorns_malice.mp3',
        displayName: 'Thorn\'s Malice',
        cover: 'assets/psm_cover.png',
        artist: 'Salslinger',
        content: 'Test 22'

    },
    {
        path: 'assets/maeves_past.mp3',
        displayName: 'Maeve\'s Past',
        cover: 'assets/psm_cover.png',
        artist: 'Salslinger',
        content: 'Test 22'

    },
    {
        path: 'assets/challenge_start.mp3',
        displayName: 'Challenge Start',
        cover: 'assets/ref_cover.png',
        artist: 'Salslinger (ft. ThatBooRadley)',
        content: 'Test 22'

    },
    {
        path: 'assets/millennial_brawl.mp3',
        displayName: 'Millennial Brawl',
        cover: 'assets/ref_cover.png',
        artist: 'Salslinger (ft. ThatBooRadley)',
        content: 'Test 22'

    },
    {
        path: 'assets/deadend.mp3',
        displayName: 'Deadend',
        cover: 'assets/cherubim_cover.png',
        artist: 'Salslinger',
        content: 'Test 22'

    },
    {
        path: 'assets/boss_prelude.mp3',
        displayName: 'Boss Prelude',
        cover: 'assets/cherubim_cover.png',
        artist: 'Salslinger (ft. ThatBooRadley)',
        content: 'Test 22'

    },
    {
        path: 'assets/dormant.mp3',
        displayName: 'Dormant',
        cover: 'assets/lunacy_cover.png',
        artist: 'Salslinger (ft. ThatBooRadley)',
        content: 'Test 22'

    },
    {
        path: 'assets/approach.mp3',
        displayName: 'Approach',
        cover: 'assets/lunacy_cover.png',
        artist: 'Salslinger (ft. ThatBooRadley)',
        content: 'Test 22'

    },
    //Nihilo
    //Snatched
    {
        path: 'assets/respite.mp3',
        displayName: 'Respite',
        cover: 'assets/snatched_cover.png',
        artist: 'Salslinger',
        content: 'Test 22'

    },
    {
        path: 'assets/uneasy.mp3',
        displayName: 'Uneasy',
        cover: 'assets/snatched_cover.png',
        artist: 'Salslinger',
        content: 'Test 22'

    },
    {
        path: 'assets/desolate.mp3',
        displayName: 'Desolate',
        cover: 'assets/snatched_cover.png',
        artist: 'Salslinger',
        content: 'Test 22'

    },

];

let musicIndex = 0;
let isPlaying = false;
let isLooping = false;

function togglePlay(){
    if(isPlaying){
        pauseMusic();
    }
    else{
        playMusic();
    }
}

function playMusic(){
    isPlaying = true;
    // Change play button icon
    playBtn.classList.replace('fa-play', 'fa-pause');
    // Set button hover title
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

function pauseMusic(){
    isPlaying = false;
    // Change pause button icon
    playBtn.classList.replace('fa-pause', 'fa-play');
    // Set button hover title
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

function loadMusic(song){
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src = song.cover;
    background.src = song.cover;
    trackContent.innerHTML = "<br><br>" + song.content;
}

function changeMusic(direction){
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    playMusic();
}

function updateProgressBar(){
    const {duration, currentTime} = music;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
    durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
    currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
}

function setProgressBar (e) {
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}


playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);

loopBtn.addEventListener('click', () => {
    isLooping = !isLooping;
    music.loop = isLooping;

    // Optionally toggle a visual effect on the button
    loopBtn.classList.toggle('active', isLooping);
    
    loopBtn.style.color = isLooping ? 'limegreen' : 'white';
    
    // Change the title and maybe the icon (optional)
    loopBtn.setAttribute('title', isLooping ? 'Looping On' : 'Looping Off');
});

loadMusic(songs[musicIndex]);

document.querySelector('.playlist-container').addEventListener('click', function() {
    this.classList.toggle('active');
});

document.querySelector('.track-info').addEventListener('click', function() {
    this.classList.toggle('active');

    const icon = this.querySelector('i');

    // Toggle icon direction
    if (this.classList.contains('active')) {
        icon.classList.remove('fa-angle-right');
    }
    else{
        icon.classList.add('fa-angle-right');
    }
});

const playlistContainer = document.querySelector('.playlist-container');



// Add event listeners to all songs in the playlist
document.querySelectorAll('#songs').forEach(songElement => {
    songElement.addEventListener('click', () => {
        // Get the index of the clicked song
        const songIndex = songElement.getAttribute('data-song-index');
        musicIndex = songIndex;
        const selectedSong = songs[songIndex];

        // Load and play the selected song
        loadMusic(selectedSong);
        playMusic();
    });
});
