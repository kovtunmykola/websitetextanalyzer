# WebsiteTextAnalyzer

WebsiteTextAnalyzer is a simple npm package for analyzing the text content of a website. It utilizes the AnyTextAnalyzer module for text analysis.

## Installation

You can install the package via npm:

\`\`\`bash
npm install websitetextanalyzer
\`\`\`

## Usage

```javascript
const analyzeWebsite = require('websitetextanalyzer');

const url = 'https://example.com';

analyzeWebsite(url)
    .then(analysisResult => {
        console.log("Analysis Result:", analysisResult);
    })
    .catch(error => {
        console.error("Error:", error);
    });
```

The `analyzeWebsite(url)` function takes a URL of the website as input and returns a Promise that resolves to the analysis result. The analysis result includes information about the number of words, characters, sentences, and paragraphs in the text content of the website.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
