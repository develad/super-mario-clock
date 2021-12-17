const clock = document.querySelector('#clock');
const mlLeft = document.querySelector('.ml-left');
const mlRight = document.querySelector('.ml-right');
const seconds = document.querySelector('.seconds');
const oneUp = new Audio('./smb_fireball.wav');

mlLeft.addEventListener('click', () => jump(mlLeft));
mlRight.addEventListener('click', () => jump(mlRight));

function jump(jumpItem) {
  jumpItem.classList.toggle('jump');
  seconds.classList.toggle('bang');
  oneUp.play();
  setTimeout(() => {
    jumpItem.classList.toggle('jump');
    seconds.classList.toggle('bang');
  }, 350);
}

function getTime() {
  const dateTime = new Date();
  const currentTime = moment(dateTime).format('HH:mm:ss').split(':');
  const [hours, minutes, seconds_str] = currentTime;
  clock.innerHTML = `${hours}:${minutes}`;
  seconds.innerHTML = `${seconds_str}`;
}

getTime();
setInterval(getTime, 1000);

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
setInterval(moveMarios, 20000);
