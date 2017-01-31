# Snowplow-Content
Master repository for scripts/code/configs needed to standup a Snowplow environment.


###For compiling tags:
1. navigate into the tags/ folder
2. install all npm modules
3. create a directory called dist
4. open package.json to get names of build scripts
5. type `npm run packagename` example: `npm run CreditCardApplication`
6. this will create a uglified/minified file inside the dist/ folder
7. continue for remaining tags