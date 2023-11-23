// // let progress = document.getElementById("progress");
// // let song = document.getElementById("song");
// // let ctrlIcon = document.getElementById("ctrlIcon");

// // song.onloadedmetadata = function () {
// //   progress.max = song.duration;
// //   progress.value = song.currentTime;
// // };
// // function playPause() {
// //   if (ctrlIcon.classList.contains("fa-pause")) {
// //     song.pause();
// //     ctrlIcon.classList.remove("fa-pause");
// //     ctrlIcon.classList.add("fa-play");
// //   } else {
// //     song.play();
// //     ctrlIcon.classList.add("fa-pause");
// //     ctrlIcon.classList.remove("fa-play");
// //   }
// // }
// // if (song.play) {
// //   setInterval(() => {
// //     progress.value = song.currentTime;
// //   },500);
// // }
// // progress.onChange = function () {
// //   song.play();
// //   song.currentTime = progress.value;
// //   ctrlIcon.classList.add("fa-pause");
// //   ctrlIcon.classList.remove("fa-play");
// // };

// let progress = document.getElementById("progress");
// let song = document.getElementById("song");
// let ctrlIcon = document.getElementById("ctrlIcon");
// let currentSongIndex = 0;
// let songs = [
//   "media/Best_of_Celine_Dion-www.ForeignDjMixtapes.com.mp3",
//   "media/Gozie_Okeke_-_Cry_For_Mercy_1.mp3",
//   "media/Kcee-Cultural-Praise-Vol.-2-ft.-Okwesili-Eze-Group.mp3",
//   "media/Ossy_Okanume_-_Igbo_Gospel_Liberation_Worship.mp3",
// ];

// function loadSong(index) {
//   song.src = songs[index];
//   song.load();
// }

// song.onloadedmetadata = function () {
//   progress.max = song.duration;
//   progress.value = song.currentTime;
// };

// function playPause() {
//   if (ctrlIcon.classList.contains("fa-pause")) {
//     song.pause();
//     ctrlIcon.classList.remove("fa-pause");
//     ctrlIcon.classList.add("fa-play");
//   } else {
//     song.play();
//     ctrlIcon.classList.add("fa-pause");
//     ctrlIcon.classList.remove("fa-play");
//   }
// }

// song.addEventListener("timeupdate", function () {
//   progress.value = song.currentTime;
// });

// progress.addEventListener("input", function () {
//   song.currentTime = progress.value;
//   ctrlIcon.classList.add("fa-pause");
//   ctrlIcon.classList.remove("fa-play");
//   // Optional: If you want to play the song while adjusting the progress bar
//   if (song.paused) {
//     song.play();
//   }
// });

// function backward() {
//   currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
//   loadSong(currentSongIndex);
//   playPause(); // Automatically start playing the new song
// }

// function forward() {
//   currentSongIndex = (currentSongIndex + 1) % songs.length;
//   loadSong(currentSongIndex);
//   playPause(); // Automatically start playing the new song
// }

let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let currentSongIndex = 0;
let songs = [
  "media/Best_of_Celine_Dion-www.ForeignDjMixtapes.com.mp3",
  "media/Gozie_Okeke_-_Cry_For_Mercy_1.mp3",
  "media/Kcee-Cultural-Praise-Vol.-2-ft.-Okwesili-Eze-Group.mp3",
  "media/Ossy_Okanume_-_Igbo_Gospel_Liberation_Worship.mp3",
];

function loadSong(index) {
  song.src = songs[index];
  song.load();
}
console.log(songs);

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

function playPause() {
  if (song.paused) {
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
  } else {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  }
}

song.addEventListener("timeupdate", function () {
  progress.value = song.currentTime;
});

progress.addEventListener("input", function () {
  song.currentTime = progress.value;
  ctrlIcon.classList.add("fa-pause");
  ctrlIcon.classList.remove("fa-play");
  if (song.paused) {
    song.play();
  }
});

function backward() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  playPause();
}

function forward() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  playPause();
}
