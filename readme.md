Cypress App Testing:
Testing the app using Cypress

Getting Started

1. Tool used is Cypress
2. On the terminal $ npm init
3. install Cypress on your local folder -$ npm install cypress --save-dev
4. after cypress installation run this command to open cypress - $./node_modules/.bin/cypress open
5. cypress will add the files needed to run
6. on the package.json file: add the above command in 4 under the scripts test:
"test": "/node_modules/.bin/cypress open"
7. on theterminal run $ "npm run test" to run your tests