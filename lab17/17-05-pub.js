const redis = require('redis');

const pub_client = redis.createClient('//redis-19539.c8.us-east-1-3.ec2.cloud.redislabs.com:19539',
                                    {password:'5s7CxgAi4X5zEYw'});

pub_client.publish('channel-01', 'message 1 from pub-client');
pub_client.publish('channel-01', 'message 2 from pub-client');

setTimeout(() => {pub_client.publish('channel-01', 'message 3 from pub-client');}, 10000);
setTimeout(() => {pub_client.publish('channel-01', 'message 4 from pub-client');}, 20000);
setTimeout(() => {pub_client.publish('channel-01', 'message 5 from pub-client');}, 30000);
setTimeout(() => {pub_client.publish('channel-01', 'message 6 from pub-client');}, 40000);

setTimeout(()=>pub_client.quit(), 60000);