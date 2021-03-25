# Job Search

A personalized job search web app, built with React, GraphQL, MongoDB, and Node.

Crawl thousands of open job positions and filter for specific qualities (by companies, keywords, and so on).

*Don't forget to add your database url and api keys in `config.js`.*

**TO LAUNCH THE SITE:**
1. run `node scraper` in the backend directory -- runs the spider to scrape the entire Indeed website for job listings based on your input parameters.
2. run `yarn start` in the backend directory -- connects to the MongoDB database and the Express API endpoint.
3. run `yarn start` in the frontend directory.
4. Go to http://localhost:3000. Your Express API endpoint is up at localhost:8080, and your GraphQL playground is up at localhost:5000.

**OPTIONAL PRE-LAUNCH SCRIPTS**
1. update `companies.js` to normalize preferred filters
2. run `scraper.js` to crawl the most current data

**IDEAS FOR EXTRA FEATURES:**\
Add optional background images to the `Login` and `Register` pages\
Add option to update preferred companies in the `MyFavorites` page\
Set up another spider (for other filters/search terms) and merge the outputs\
Separate the navbar into its own component

## Important files

**scraper.js** -- your Puppeteer spider (enter your input parameters here). The JSON output is stored in `apify_storage/`.

**filter.js** -- function to filter the scraped output through the list of companies in `companies.js`.
