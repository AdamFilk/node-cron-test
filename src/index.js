const app = require('express')();
const port = process.env.PORT || 3000;
const cron = require('node-cron');
const os = require('node-os-utils');
const cpu = os.cpu;
const mem = os.mem;

cron.schedule("*/5  * * * * *", function () {
    console.log("---------------------");
    cpu.free()
    .then(info => {
        console.log(`CPU Free Percentage ${info}%`)
    })
    mem.info()
    .then(info => {
        console.log(`Free Mem Percent ${info.freeMemPercentage}%`)
    })
    console.log("running a task every 15 seconds");
});

app.listen(port,()=>{
    console.log(`Server is listening on ${port}\n`);
})
