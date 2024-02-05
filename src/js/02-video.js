import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vid = document.querySelector('#vimeo-player');

const player = new Player(vid, {});

// player.on('play', function () {
//   console.log('played the video!');
// });

player.on('timeupdate', function (data) {
  console.log(data.seconds);
  localStorage.setItem('videoplayer-current-time', data.seconds);
});

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
