const redis = require("redis");

const client = redis.createClient('//redis-19539.c8.us-east-1-3.ec2.cloud.redislabs.com:19539',
                                    {password:'5s7CxgAi4X5zEYw'});

client.on("ready", () =>{ console.log("ready");});
client.on("error", (err) =>{ console.log("error " + err);});
client.on("connect", () =>{ console.log("connect ");});
client.on("end", () =>{ console.log("end");});

client.quit();