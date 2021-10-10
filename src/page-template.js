
module.exports = templateData => {
  console.log(templateData);

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
    <h1>${templateData.name}</h1>
    <h2>Description:
      <h3>${templateData.description}</h3>
    </h2>
    <h2>Table of Content:</h2>
    <h2>Installation Instructions:
      <h3>${templateData.installation_instructions}</h3>
    </h2>
    <h2>Usage:</h2>
      <h3>${templateData.usage}</h3>
    <h2>Contribution:</h2>
      <h3>${templateData.contributors}</h3>
    <h2>License:</h2>
      <h3>${templateData.license}</h3>
    <h2>Test Instructions:</h2>
      <h3>${templateData.Testing}</h3>
    <h2>Questions?</h2>
      <h3>For any questions please email us at ${templateData.email}, or visit our <a href="https://github.com/${templateData.github}">Github</a> github page.</h3>
    <h2>
  </body>
  </html>
  `;
};
