//process object
//process.argv
console.log(process.argv[3]);

//process.env
console.log(process.env);
console.log(process.env.COMPUTERNAME);

//process.cwd()
console.log(process.cwd());
//process.exit()
//process.exit();
//process.nextTick()
console.log('start');
console.log(process.pid);
process.nextTick(() => {
    console.log('nextTick');
});
console.log('end');
//process.on()
process.on('exit', () => {
    console.log('exit');
});
//process.pid
