const redis = require('redis');

const client = redis.createClient('//redis-19539.c8.us-east-1-3.ec2.cloud.redislabs.com:19539',
                                    {password:'5s7CxgAi4X5zEYw'});

client.on('ready', ()=>{console.log('ready');});
client.on('error', (err)=>{console.log('error: ' + err);});
client.on('connect', ()=>{console.log('connect');});
client.on('end', ()=>{console.log('end');});

console.time('SET');
for(let n = 1; n<=10000; n++) {
    client.set(n, 'set' + n);
}
console.timeEnd('SET');

console.time('GET');
for(let n = 1; n<=10000; n++) {
    client.get(n);
}
console.timeEnd('GET');


console.time('DEL');
for(let n = 1; n<=10000; n++) {
    client.del(n);
}
console.timeEnd('DEL');

client.quit();