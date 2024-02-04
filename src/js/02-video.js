import Player from '@vimeo/player';

const vid = document.querySelector('#vimeo-player');

const player = new Player(vid, {});

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

let localStorageKey = 'videoplayer-current-time';
localStorage.getItem(
  localStorageKey,
  player.on('timeupdate', function (e) {})
);
