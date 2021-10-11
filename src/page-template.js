
module.exports = templateData => {
  console.log(templateData);
  return `
# ${templateData.name} Readme

## Description:

${templateData.description}

## Table of Content:

* [Description](#Description)
* [Installation-Instructions](#Installation-Instructions)
* [Usage](#Usage)
* [Contribution](#Contribution)
* [License](#License)
* [Test-Instructions](#Test-Instructions)
* [Questions](#Questions)

  
## Installation Instructions:

${templateData.installation_instructions}

## Usage:

${templateData.usage}

## Contribution:

The following developers helped contribute to this project:
${templateData.contributors}

## License:

${templateData.license}

## Test Instructions:

${templateData.Testing}

## Questions?

For any questions please:
  Email us at ${templateData.email}
  Visit our GitHub: ${templateData.github}
  
`;
};
