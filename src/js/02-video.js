import throttle from "lodash.throttle";
import Player from '@vimeo/player';
console.log(throttle);
console.log(Player);

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onTimeupdate = function ({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
};

player.on('timeupdate', throttle(onTimeupdate, 1000));
const timeStart = localStorage.getItem('videoplayer-current-time');

if (timeStart) {
  player
    .setCurrentTime(timeStart)
    .then(function (seconds) {
    })
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          break;

        default:
          break;
      }
    });
}