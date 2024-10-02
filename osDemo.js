import os from 'os';

//helps to get the information about the operating system

//userInfo()
const user = os.userInfo();
console.log(user);

//totalmem()
const totalmem = os.totalmem();
console.log(totalmem);

//freemem()
const freemem = os.freemem();
console.log(freemem);

//cpuu()
const cpu = os.cpus();
console.log(cpu);