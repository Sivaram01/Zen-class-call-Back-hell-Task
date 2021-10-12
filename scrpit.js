
setTimeout(() => {
  document.querySelector(".happy").innerText = "10";
  setTimeout(() => {
    document.querySelector(".happy").innerText = "9";
  }, 1000*2);
  setTimeout(() => {
    document.querySelector(".happy").innerText = "8"
  }, 1000*3);
  setTimeout(() => {
    document.querySelector(".happy").innerText = "7";
  }, 1000*4);
  setTimeout(() => {
    document.querySelector(".happy").innerText = "6";
  }, 1000*5);
  setTimeout(() => {
    document.querySelector(".happy").innerText = "5";
  }, 1000*6);
  setTimeout(() => {
    document.querySelector(".happy").innerText = "4";
  }, 1000*7);
  setTimeout(() => {
    document.querySelector(".happy").innerText = "3";
  }, 1000*8);
  setTimeout(() => {
    document.querySelector(".happy").innerText = "2";
  }, 1000*9);
  setTimeout(() => {
    document.querySelector(".happy").innerText = "1";
  }, 1000*10);
  setTimeout(() => {
    document.querySelector(".happy").innerText = "Happy Independence Day";
  }, 1000*11);
}, 1000*1)