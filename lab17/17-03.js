const redis = require('redis');

const client = redis.createClient('//redis-19539.c8.us-east-1-3.ec2.cloud.redislabs.com:19539',
                                    {password:'5s7CxgAi4X5zEYw'});

client.on('ready', ()=>{console.log('ready');});
client.on('error', (err)=>{console.log('error: ' + err);});
client.on('connect', ()=>{console.log('connect');});
client.on('end', ()=>{console.log('end');});

// console.time('DEL');
// for(let n = 1; n<=10000; n++) {
//     client.del('incr');
// }
// console.timeEnd('DEL');

console.time('INCR');
client.incr('incr', (err, result)=>console.log('err = ', err, 'result = ', result));
for(let n = 1; n<=9999; n++) {
    client.incr('incr');
}
console.timeEnd('INCR');

console.time('DECR');
client.decr('decr', (err, result)=>console.log('err = ', err, 'result = ', result));
for(let n = 1; n<=10000; n++) {
    client.decr('decr');
}
console.timeEnd('DECR');

client.quit();