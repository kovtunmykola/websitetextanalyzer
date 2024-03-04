// websitetextanalyzer.js

const axios = require('axios');
const cheerio = require('cheerio');
const TextAnalyzer = require('anytextanalyzer');

async function analyzeWebsite(url) {
    try {
        // Fetch the HTML content of the website
        const response = await axios.get(url);
        const html = response.data;

        // Parse the HTML content using Cheerio
        const $ = cheerio.load(html);

        // Extract text content from the HTML
        const textContent = $('body').text();

        // Create a TextAnalyzer instance
        const analyzer = new TextAnalyzer(textContent);

        // Perform analysis
        const analysisResult = analyzer.analyze();

        return analysisResult;
    } catch (error) {
        console.error("Error analyzing website:", error);
        return null;
    }
}

module.exports = analyzeWebsite;
