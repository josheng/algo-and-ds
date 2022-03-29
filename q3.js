async function getArticleTitles(author) {
  const https = require("https");
  const options = {
    hostname: "https://jsonmock.hackerrank.com/",
    port: 443,
    path: `/api/articles?author=${author}`,
    method: "GET",
  };

  const req = https.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on("data", (d) => {
      process.stdout.write(d);
    });
  });

  req.on("error", (error) => {
    console.error(error);
  });

  req.end();
}

getArticleTitles('epaga');
