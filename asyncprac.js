

const timeKiller = new Promise((resolve, reject) => {
  console.log('timeKiller 1 started');
  setTimeout(() => {resolve('time killed 1');}, 2000)
}).then(data => console.log(data));


(async () => {
  console.log('timeKiller 2 started');
  const timeKiller2 = await new Promise((resolve, reject) => {
    setTimeout(() => {resolve('time killed 2');}, 4000)
  });
  console.log(timeKiller2);
})()



