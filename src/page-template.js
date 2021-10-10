const generatePage = (name, github) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Professional Readme</title>
    </head>
  
    <body>
      <h1>${name}</h1>
      <h2>Description:</h2>
      <h2>Table of Content:</h2>
      <h2>Installation Instructions:</h2>
      <h2>Usage:</h2>
      <h2>Contribution:</h2>
      <h2>License:</h2>
      <h2>Test Instructions:</h2>
      <h2>Questions?</h2>
      <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    </html>
    `;
};

module.exports = generatePage;