let times = 0;

function debounce(callback, interval = 2000){
  if(times > 0) return;

  times += 1;

  const timeout = setInterval(() => {
    times = 0;
    clearTimeout(timeout);
  }, interval);

  callback();
}

module.exports = debounce;