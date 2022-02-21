
exports.handler = async function (event, context) {
  console.log('netlify function called!');
  try {
    const response = await fetch(`${process.env.API_KEY}`);
    return {
      statusCode: 200,
      body: "hello world!"
    };
  } catch (err) {
    return {
      statusCode: 404,
      body: err.toString(),
    };
  }
};