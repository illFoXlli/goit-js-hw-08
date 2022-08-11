

import Player from '@vimeo/player';
// import {add, throttle} from 'lodash';
import  'lodash.throttle';
// var _ = require('lodash');

const videoIframe = document.querySelector('#vimeo-player');
const player = new Player(videoIframe);
const SAVE_CURRENT_TIME_VIDEO = "videoplayer-current-time";

player.on('timeupdate', function (even) {
  console.log(even);
localStorage.setItem(SAVE_CURRENT_TIME_VIDEO, even.seconds);
});


player
  .setCurrentTime(localStorage.getItem(SAVE_CURRENT_TIME_VIDEO))
  // .catch(function (error) {
  //   switch (error.name) {
  //     case 'RangeError':
  //       // the time was less than 0 or greater than the video’s duration
  //       console.log("Видео еще не воспроизводилось!");
  //       break;

  //     default:
  //       // some other error occurred
  //       console.log("какаята ошибка неизвестная");
  //       break;
  //   }
  // }
  // );;


const result = add(2, 3);
console.log(result);


//   .then(function (seconds) {
//     // seconds = the actual time that the player seeked to
//   })
//   .catch(function (error) {
//     switch (error.name) {
//       case 'RangeError':
//         // the time was less than 0 or greater than the video’s duration
//         break;

//       default:
//         // some other error occurred
//         break;
//     }
//   });



