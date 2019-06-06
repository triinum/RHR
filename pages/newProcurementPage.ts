import { $, element, by } from "protractor";

export class newProcurementPageObject {
    
    public myDesktop: any;
    public bodyField: any;
    public criteriaField: any;
    public nameField: any;
    public procurementName: any;
    public titleField: any;
    public searchButton: any;
    public userName: any;
    public password: any;
    public enterButton: any;
    public costField: any;
    public workBench: any;
    public fakesubmitButton: any;
    public searchProcurements: any;
    public shortDescription: any;
    public saveButton: any;
    public exclusionItem: any;
    public addExclusion: any;
    public allExclusions: any;
    public procurerItem: any;
    public menuItems: any;
    public requirementtitleField: any;
    public additionalexplanationField: any;
    public questionButton: any;
    public Procurers: any;
    public selectAll: any;
    public evaluationCriteria: any;
    public saveQuestion: any;
    public durationMonths: any;
    public selectallExclusions: any;
    public saveallExclusions: any;
    public continueActivity: any;
    public endExclusionButton: any;
    public tenderValidType: any;
    public Kirjeldus: any;
    public resultsTitle: any;
    public continueButton: any;
    public modal: any;
    public salvestaVastavus: any;
    public procurerName: any;
    public titleHeading: any;
    public registerHeading: any;
    
    constructor() {

    this.userName = element(by.id('username'));
    this.password = element(by.id('password'));
    this.enterButton = element(by.buttonText('Sisene kasutajanimega'));
    this.fakesubmitButton = element(by.id('fakeSubmitButton'));
    
    this.searchProcurements = element(by.xpath('//*[@id="ng-app"]/body/div[1]/rhr-header/header/nav[2]/div/div/ul[1]/li[3]/a'));
    this.shortDescription = element(by.id('shortDescription'));
    
    
    this.procurementName = element(by.id('procurement-name'));
    this.procurerName = element(by.id('procurer-name'));
    this.titleField = element(by.id('procurement-title'));
    this.bodyField = element(by.id('shortDescription'));
    this.costField = element(by.id('cost'));
    this.searchButton = element(by.xpath('//*[@id="ng-app"]/body/div[2]/rhr-search/rhr-main-content/main/ng-transclude/div/rhr-search-filter/div/form/div[2]/rhr-loader-button[1]/button/span'));
    this.myDesktop = element(by.buttonText('Sisene'));
    this.workBench = element(by.buttonText('Töölaud'));
    this.saveButton = element(by.xpath('//*[@id="ng-app"]/body/div[1]/div/div/div/rhr-button/button'));
    this.exclusionItem = element(by.xpath('//ul/li[position() = 3]/a'));
    this.procurerItem = element(by.xpath('//*[@id="ng-app"]/body/div[2]/rhr-procurement/rhr-main-content/main/ng-transclude/div/div[1]/rhr-procurement-menu/div/div/nav/ul[2]/li[2]/div/div/ul/li[2]/a'));
    this.addExclusion = element(by.xpath("//button[@class='btn btn-primary ng-scope' and contains(.,'Add virtual AP')]"));
    this.allExclusions = element(by.xpath('//*[@id="ng-app"]/body/div[2]/rhr-procurement/rhr-main-content/main/ng-transclude/div/div[2]/div/div/rhr-procurement-add-criteria/div/div[2]/rhr-form/form/predefined-criteria/div/div/div/predefined-criterion-row-simple/rhr-form/form/div[1]/div[1]'));
    this.requirementtitleField = element(by.id('requirementTitle'));
    this.additionalexplanationField = element(by.id('addionalExplanation'));
    this.questionButton = element(by.xpath('//*[@id="ng-app"]/body/div[2]/rhr-procurement/rhr-main-content/main/ng-'));
    this.continueButton = element(by.xpath('//*[@id="ng-app"]/body/div[1]/div/div/div[2]/rhr-loader-button/button/span'));
    this.titleHeading = element(by.css('.title-container'));
    
    
    //siit algavad hanke kopeerimise andmed
    this.Kirjeldus = element(by.xpath('//*[@id="criterion-detail-0"]'));
    
    this.resultsTitle = element(by.xpath('//*[@id="results"]/li/rhr-search-result-row/h3/a'));
    this.modal = element(by.css('modal-dialog'));  
    this.nameField = element(by.xpath('//*[@id="procurement-name"]'));
    this.registerHeading = element(by.xpath('//*[@id="ng-app"]/body/div[1]/rhr-header/header/div/rhr-procurement-header/div/div/div[2]/div[3]/div[2]/rhr-button/button/span'));

    
      
    }
    
    
    createProcurement(procurementData) {
    
    this.nameField.sendKeys(procurementData.name);
    this.bodyField.sendKeys(procurementData.text);
    this.criteriaField.sendKeys(procurementData.text);


  }
  
};
