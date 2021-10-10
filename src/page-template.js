
module.exports = templateData => {
  console.log(templateData);

  return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${templateData.name} Readme</title>
  </head>

  <body>
    <section id="title">
      <h1>#${templateData.name}</h1>
    </section>

    <section id="description">
      <h3>##Description:</h3>
        <h4>${templateData.description}</h4>
    </section>

    <section id="table-of-content">
      <h3>##Table of Content:</h3>
        <nav>
          <ul>
            <li> 
              <a href="#description">Description</a>
            </li>
            <li>
              <a href="#installation-instructions">Installation Instructions</a>
            </li>
            <li> 
              <a href="#usage">Usage</a>
            </li>
            <li>
              <a href="#contribution">Contributors</a>
            </li>
            <li>
              <a href="#license">License</a>
            </li>
            <li>
              <a href="#test-instructions">Test Instructions</a>
            </li>
            <li>
              <a href="#questions">Questions</a>
          </ul>
        </nav>
    </section>
  
    <section id="installation-instructions">
      <h3>##Installation Instructions:</h3>
        <h4>${templateData.installation_instructions}</h4>
    </section>

    <section id="usage">
      <h3>##Usage:</h3>
        <h4>${templateData.usage}</h4>
    </section>

    <section id="contribution">
      <h3>##Contribution:</h3>
        <h4><a href="https://github.com/${templateData.contributors}"></a>
    </section>

    <section id="license">
      <h3>License:</h3>
        <h4>${templateData.license}</h4>
    </section>

    <section id="testing-instructions">
      <h3>##Test Instructions:</h3>
        <h4>${templateData.Testing}</h4>
    </section>

    <section id="questions">
      <h3>##Questions?</h3>
        <h4>For any questions please:</h4>
        <nav>
          <ul>
            <li> Email us at ${templateData.email}</li>
            <li> Visit our <a href="https://github.com/${templateData.github}">Github</a> page.</li>
    </section>

  </body>
  </html>
  `;
};
