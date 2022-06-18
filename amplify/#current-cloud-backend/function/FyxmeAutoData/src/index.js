const data = require('./output.json') //this will cache the JSON as long as the Lambda is up
let response = null;
let ctx = null;

function sendResponse() {
  ctx.done(null, response ? response : "Something went wrong"); // SUCCESS with message
}

function generateResponseObject(type, data) {
  return { type, data }
}

exports.handler = function ({ year, make }, context) { //eslint-disable-line
  ctx = context
  if (!year && !make) {//return all years available
    console.log("return all years available");

    let years = Object.keys(data).sort().map(year => {
      return { value: year, label: year, isLeaf: true }
    })

    response = generateResponseObject("years", years)

    sendResponse()
  }

  if (year && !make) { //return makes for the year
    console.log("return makes for the year");

    let makes = Object.keys(data[year]).sort().map(make => {
      return { value: make, label: make, isLeaf: true }
    })

    response = generateResponseObject("makes", makes)

    sendResponse()
  }

  if (year && make) { //return models for the year and make
    console.log('return models for the year and make');

    let models = data[year][make].sort().map(model => {
      return { value: model, label: model, isLeaf: true }
    })

    response = generateResponseObject("models", models)

    sendResponse()
  }
};
