const request = require("request-promise");
const configEnv = require("env.json");

const url = configEnv.url;
const reqBody = configEnv.requestBody;

const options = {
    method: 'POST',
    url,
    headers: {
        Accept: '*/*',
        'X-APIKEY': 'xx'
    },
    body: reqBody,
    json: true,
    rejectUnauthorized: false, // making a request to local server for testing
    timeout: 120000
};


let all = 400;
const ts = (new Date()).getTime();

function printTime() {
    const tsNow = (new Date()).getTime();
    console.log(tsNow - ts);
}

const promiseArray = [];
for (let i = 0; i <= all; i++) {
    console.log("making the requests");
    promiseArray.push(request(options));
}

Promise.all(promiseArray).then(result => {
    printTime();
}).catch(error => {
    console.log("Finished the requests with an error");
    console.log(error);
});