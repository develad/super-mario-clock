const pageTitle = document.querySelector('title');
const clock = document.querySelector('#clock');
const mlLeft = document.querySelector('.ml-left');
const mlRight = document.querySelector('.ml-right');
const seconds = document.querySelector('.seconds');
const ONEUP_AUDIO = new Audio('./smb_fireball.wav');

mlLeft.addEventListener('click', () => jump(mlLeft));
mlRight.addEventListener('click', () => jump(mlRight));

function jump(jumpItem) {
  jumpItem.classList.toggle('jump');
  seconds.classList.toggle('bang');
  ONEUP_AUDIO.play();
  setTimeout(() => {
    jumpItem.classList.toggle('jump');
    seconds.classList.toggle('bang');
  }, 350);
}

function getTime() {
  const dateTime = new Date();
  const timeString = dateTime.toLocaleTimeString();
  let [hours, minutes, seconds_str] = timeString.split(':');
  // const hhmmss = timeString.split(':');
  // console.log(+hours);
  +hours < 10 ? (hours = `0${hours}`) : hours;
  // clock.innerHTML = `${hours} : ${minutes}<span class="seconds">${seconds_str}</span>`;
  clock.innerHTML = `${hours} : ${minutes}`;
  +seconds_str < 10 ? (seconds_str = `0${+seconds_str}`) : +seconds_str;
  // console.log(seconds_str.split(' '));
  seconds.innerHTML = `${seconds_str.split(' ')[0]}`;
  // seconds.innerHTML = `${hhmmss[2]}`;
  pageTitle.innerHTML = `${hours} : ${minutes}`;
}

getTime();
setInterval(getTime, 1000);

// function moveMarios() {
//   mlLeft.style.animationPlayState = 'running';
//   mlRight.style.animationPlayState = 'paused';
//   setTimeout(() => {
//     mlLeft.style.animationPlayState = 'paused';
//     mlRight.style.animationPlayState = 'running';
//   }, 10000);
// }
function moveMarios() {
  mlLeft.classList.add('.ml-left');
  mlLeft.style.display = 'block';
  mlRight.classList.remove('.ml-right');
  mlRight.style.display = 'none';
  setTimeout(() => {
    mlLeft.classList.remove('.ml-left');
    mlLeft.style.display = 'none';
    mlRight.classList.add('.ml-right');
    mlRight.style.display = 'block';
  }, 10000);
}

moveMarios();
setInterval(moveMarios, 20000); // double Time from the setTimeout above
