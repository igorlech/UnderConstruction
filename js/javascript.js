let i = 0;
let txt = 'This page is under construction. If you are looking for something, please visit my GitHub profile:';
let speed = 40;

function typeWriter() {
  if (i < txt.length) {
    document.querySelector("#typetext").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter()