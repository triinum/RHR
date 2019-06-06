<p align="center">
<img src= "./images/protractor-typescript-cucumber.png" height=300 alt="titleImage.png"/>
</p>

<p align="center">
   <i><strong>RHR
</strong></i>
<p>

<p align="center">
<a href="https://circleci.com/gh/igniteram/protractor-cucumber-typescript/tree/master"><img alt="circleCI Status" src="https://circleci.com/gh/igniteram/protractor-cucumber-typescript/tree/master.svg?style=shield"></a>
<a href="https://david-dm.org/igniteram/protractor-cucumber-typescript"><img alt="dependencies status" src="https://david-dm.org/igniteram/protractor-cucumber-typescript.svg"></a>
<a href=""><img alt="typescript" src="https://badges.frapsoft.com/typescript/code/typescript.svg?v=101">
<a href="https://opensource.org/licenses/MIT"><img alt="MIT License" src="https://img.shields.io/dub/l/vibe-d.svg"></a>
</p>

---


### Protractor-Cucumber-TypeScript Setup Guide   


```
   npm install 
```
* All the dependencies from package.json and ambient typings would be installed in node_modules folder.

#### Run Scripts

* First step is to fire up the selenium server which could be done in many ways,  **webdriver-manager** proves very handy for this.The below command should download the **chrome & gecko driver** binaries locally for you!

```
npm run webdriver-update
``` 

* Then you should start your selenium server!
```
npm run webdriver-start
```

* The below command would create an output folder named 'typeScript' and transpile the .ts files to .js.
```
npm run build
```

* Now just run the test command which launches the Chrome Browser and runs the scripts.
```
npm test
```
