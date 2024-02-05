import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vid = document.querySelector('#vimeo-player');

const player = new Player(vid, {});

// test

const test = function (data) {
  console.log(data.seconds);
  localStorage.setItem('videoplayer-current-time', data.seconds);
};
player.on('timeupdate', throttle(test, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
