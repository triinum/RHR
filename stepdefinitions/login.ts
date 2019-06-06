import { browser, protractor, element, by, promise } from "protractor";
import { newProcurementPageObject } from "../pages/newProcurementPage";
const EC = protractor.ExpectedConditions;

import {} from 'jasmine';

const { Given, When, Then } = require("cucumber");
const faker = require('faker');

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const {setDefaultTimeout} = require('cucumber');

setDefaultTimeout(300 * 1000);

const newProcurement: newProcurementPageObject = new newProcurementPageObject();

 let procurementData = {
    //automaat on hanke pealkiri, seda muuta kui uut tüüpi hanke jaoks teha
    name: "lihthangeautomaat" + faker.lorem.word(),
    procurementnameField: faker.lorem.word(),
    procurername: faker.lorem.word(99, 99),
    title: faker.random.words(),
    text: faker.lorem.sentence(9, 99)
    
    };
    

    Given('You are on procurement registers main page', async () => {
         await expect(browser.getTitle()).to.eventually.contains("Riigihangete register");
         browser.waitForAngularEnabled(true); 
         await newProcurement.myDesktop.click();
         browser.waitForAngularEnabled(false); 
         });   



    When('The user {string} and password {string} attempt to login', async (username, password) => {
          await newProcurement.userName.sendKeys(username);  
          await newProcurement.password.sendKeys(password);    
          await newProcurement.enterButton.click();
          browser.waitForAngularEnabled(true); //will observe the ControlFlow for new promises again.
          });
   

     Then('You search for the test procurement {string}', async (string) => {
     
          await newProcurement.searchProcurements.click();
          await newProcurement.procurementName.sendKeys(string);
          await newProcurement.searchButton.click();
          browser.waitForAngular();
          browser.sleep(60 * 1000);       
          }); 
  
  
     When('You search from prepared procurements', async () => {
     
          //vajutad sellele         
          await expect(newProcurement.resultsTitle.isDisplayed()).to.eventually.equal(true);
          
          
   
          element.all(by.css('.queue.add')).get(0).click();
          
          await element(by.xpath('//*[@id="results"]/li/rhr-search-result-row/h3/a')).click();
          //element(by.css('[ng-click="cancel()"]')); 
          expect(browser.getLocationAbsUrl()).to.eventually.contains('general-info'); 
          browser.waitForAngular();
          }); 
  
  
     Then('You click on the test procurement', {timeout: 70 * 1000}, async () => {
       
          await expect(newProcurement.titleHeading.getText()).to.eventually.contains('Pakkuja');
          //await expect(newProcurement.titleHeading.isDisplayed()).to.eventually.equal(true);
          newProcurement.registerHeading.click();
           
           
           await expect(newProcurement.modal.isDisplayed()).to.eventually.equal(true);
           element(by.xpath('//*[@id="name"]/option[3]')).click();
           //await element(by.xpath("//option[. = 'Külli Gruusia Hankija']")).click();
          await element(by.cssContainingText('ng-scope', 'Lisa kontaktandmed')).click();
          await element(by.cssContainingText('ng-scope', 'Salvesta')).click();  
          
          }); 
   
    
    When('You should be redirected to this particular procurement', async () => {


         await browser.get('https://rhr.nortal.com:3443/rhr-r36-web/#/procurement/392218/overview/activities');
         expect(browser.getLocationAbsUrl()).to.eventually.contains('/overview/activities');

         await element(by.xpath('//*[@id="ng-app"]/body/div[1]/rhr-header/header/div/rhr-procurement-header/div/div/div[2]/div[3]/div[1]/ul/a')).click();
         browser.waitForAngular();
   
          }); 
  
  
     Then('You click are redirected to copied procurement', async () => {
    
         
         //hanke nimetus
         newProcurement.nameField.sendKeys(procurementData.name);
         
          //Hankija nimi
          element(by.xpath("//option[. = 'Siseministeerium']")).click();
          
          await element(by.buttonText("Jätka")).click();
          
          }); 
  
  
     When('You click are redirected to copied procurement2',  async () => {

   
          await expect(browser.getLocationAbsUrl()).to.eventually.contains('overview/activities');
          
          //lõpeta tegevus
          element(by.linkText('Tegevuse lõpetamine')).click();
          
          }); 
  
  
     Then('You click are redirected to copied procurement3', async () => {
          

          //Kas oled kindel
          element(by.buttonText("olen kindel")).click();
         
          }); 
              
  
