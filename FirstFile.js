// const testerName='sagar';
// let numOfYearsExperience=10;
// console.log('This is' + testerName + 'with' + numOfYearsExperience +' years of exp');

const { chromium } = require("playwright");
const { expect } = require("playwright/test");

// let framework = "Selenium";
// console.log(`I use ${framework} for testing.`); // "I use Selenium for testing."

// let name='sagar';
// let num=26;
// let isTrue=false;
// console.log(typeof name);
// console.log(typeof num);
// console.log(typeof isTrue);

// console.log(`This is ${testerName} with ${numOfYearsExperience} years of exp`);

// function greet(name){
// return `hello, ${name}`;
// }
// console.log(greet('john'));

// const greetConst= function(name){
//     return `hello, ${name}`;
// }
// console.log(greetConst('james'));


// function greetDefault(name='dafaultName'){
//     return `hello , ${name}`;
// }

// console.log(greetDefault('not default name'));


// function calculateExperience( startYear , currentyear){
//     return currentyear-startYear;
// }
// console.log(calculateExperience(2016,2026));

// const  isEligibleForRole=(yearsOfExperience)=> {
//     if(yearsOfExperience>=3){
//         return true;
//     }
//     return false;
// }

// console.log(isEligibleForRole(calculateExperience(2016,2026)));


// function greet(name = "tester") {
//   return `Welcome, ${name}!`;
// }
// console.log(greet("Sagar"));
// console.log(greet());


// for(let i=1;i<=10;i++){
//     if(i%3==0)continue;
//     console.log(i);
// }

// const testers = ["Sagar", "Priya", "Amit", "Neha"];

// for(let i=0;i<testers.length;i++){
//     console.log(`${i+1}: ${testers[i]}`)
// }


// let number=1;

// while(number<=100){
//     number=number*2;
//     console.log(number);
// }


// const testersAgain = ["Sagar", "Priya", "Amit", "Neha"];
// testersAgain.forEach((test,index)=>{
//     console.log(`${index+1}: ${test}`);
// })

 

// const testCases = [12, 45, 3, 67, 22, 89, 5];

// const testCasesGreater20=testCases.filter((test)=> test >20).map((test)=> test+10);
// console.log(testCasesGreater20);


// console.log("A");
// setTimeout(() => {
//   console.log("B");
// }, 1000);
// console.log("C");

// console.log('break');

// console.log("A");
// setTimeout(() => {
//   console.log("B");
// }, 0);
// console.log("C");


// function checkEligibility(years){
//    return  new Promise((resolve, reject) => {
 
//   if (years>=3) {
//     resolve("Eligible");
//   } else {
//     reject("Not eligible");
//   }
// });
// }


// const result = checkEligibility(2)
// .then((age)=>console.log(`age is: ${age}`))
// .catch((error) => console.log(`Order failed: ${error}`));



    // async  function checkEligibility(years){
    // return await new Promise((resolve, reject) => {
    
    // if (years>=3) {
    //     resolve("Eligible");
    // } else {
    //     reject("Not eligible");
    // }
    // });
    // }

    // checkEligibility(5);
    // console.log(checkEligibility(5));


// function checkEligibilityFromServer(years) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => { // simulating a slow network call — takes 2 real seconds
//       if (years >= 3) {
//         resolve("Eligible");
//       } else {
//         reject("Not eligible");
//       }
//     }, 2000);
//   });
// }


// function checkEligibilityFromServer(years) {
//   return new Promise((resolve, reject) => {
//     console.log("Checking with server...");
//     setTimeout(() => {
//       if (years >= 3) {
//         resolve("Eligible");
//       } else {
//         reject("Not eligible");
//       }
//     }, 2000); // simulating a real 2-second server delay
//   });
// }

// async function runCheck(years) {
//   try {
//     console.log("Starting check...");
//     const result = await checkEligibilityFromServer(years);
//     console.log(`Result: ${result}`);
//   } catch (error) {
//     console.log(`Error: ${error}`);
//   }
//   console.log("Check complete.");
// }

// runCheck(2);
// runCheck(5);
// console.log("This prints immediately, before the server responds.");


// function wait(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function stepA() {
//     console.log('A starting');
//     await stepB();
//     console.log('A Done');
// }

// async function stepB() {
//     console.log('B starting');
//     await stepC();
//     console.log('B Done');
// }

// async function stepC() {
//     console.log('C starting');
//     await wait(1000); // this properly waits
//     console.log('C Done');
// }   

// stepA();
// A start , B start , c start , b done , c done, a done

// (async ()=>{

//   const browser = await chromium.launch({
//   headless: false,
//   args: ['--start-maximized'],
// });
// const context = await browser.newContext({ viewport: null }); // null tells Playwright: don't override the window size, use whatever the OS window actually is
// const page = await context.newPage();

// await page.goto('https://demo.automationtesting.in/Frames.html');

//  const firstIframe= page.frameLocator('#singleframe');

//  await firstIframe.locator("xpath=//input[@type ='text']").waitFor();


//  await firstIframe.locator("xpath=//input[@type ='text']").fill('test input 1');
//     console.log('1st input here');
//  await page.locator("xpath=//a[text()='Iframe with in an Iframe']").click();

//  const nested1stIframe=  page.frameLocator("xpath=//iframe[@src='MultipleFrames.html']");

//  const nested2ndIframe= nested1stIframe.frameLocator("xpath=//iframe[@src='SingleFrame.html']");

//  await nested2ndIframe.locator("xpath=//input[@type ='text']").waitFor();

//  await nested2ndIframe.locator("xpath=//input[@type ='text']").fill('test input 2');
//  console.log('2nd input here');
// })();


// (async () => {
//   const browser = await chromium.launch({ headless: false });
//   const page = await browser.newPage();

//   await page.route('*/**/api/v1/fruits', async (route) => {
//     const json = [{ name: 'Strawberry', id: 21 },{ name: 'Strawberry', id: 21 }];
//     await route.fulfill({ json });
//   });

//   await page.goto('https://demo.playwright.dev/api-mocking');

//   await page.waitForTimeout(10000); // just to visually see the result before it closes
//   await browser.close();
// })();


// (async()=>{

//     const browser= await chromium.launch({headless:false});
//     const page = await browser.newPage();

//         page.goto('https://the-internet.herokuapp.com/login');

//         await page.locator('#username').waitFor();
//         await page.locator('#username').fill('tomsmith');

//         await page.locator('#password').waitFor();
//         await page.locator('#password').fill('SuperSecretPassword!');

//         await page.locator("//button[@type='submit']").click();
//         await page.waitForURL("https://the-internet.herokuapp.com/secure");

//         await page.context().storageState({path :'auth.json'});
//         await browser.close();


// })();

// (async()=>{


//     const browser = await chromium.launch({ headless: false });
//   const page = await browser.newPage();
//   await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

//   // 1. ALERT — just accept
//   page.on('dialog', async (dialog) => {
//     console.log('Type:', dialog.type(), '| Message:', dialog.message());
//     await dialog.accept();
//   });
//   await page.locator("//button[@onclick='jsAlert()']").click();
//   console.log('Result text:', await page.locator('#result').textContent());

//   page.removeAllListeners('dialog');


//    page.on('dialog', async (dialog) => {
//     console.log('Type:', dialog.type(), '| Message:', dialog.message());
//     await dialog.dismiss();
//   });

  
//   await page.locator("//button[@onclick='jsConfirm()']").click();
//   console.log('Result text:', await page.locator('#result').textContent());
//   page.removeAllListeners('dialog');


//   page.on('dialog', async(dialog)=>{
//     console.log('Type:', dialog.type(), '| Message:', dialog.message());
//     await dialog.accept('sagar');
//  //   dialog.accept();
//   });
  
//   await page.locator("//button[@onclick='jsPrompt()']").click();
//   console.log('Result text:', await page.locator('#result').textContent());



// })();


    // (async()=>{

    //     const browser= await chromium.launch({headless:false});
    //     const context = await browser.newContext(); // now you HAVE a reference to it
    //     const page= await context.newPage();

    //     await page.goto('https://the-internet.herokuapp.com/windows');

        

    //     const [newPage] = await Promise.all([
    //         context.waitForEvent('page'),                    // start waiting for a NEW tab to open
    //         page.locator("//a[text()='Click Here']").click(),     // the action that triggers it
    //         ]);

    //       await newPage.waitForLoadState();
    //       console.log(await newPage.title());

    // })();


    (async()=>{

        const browser= await chromium.launch({headless:false});
        const page= await browser.newPage();

        await page.goto('https://the-internet.herokuapp.com/upload');

        const fileButton=page.locator('#file-upload');
     //   await fileButton.setInputFiles('C:/Users/91855/Downloads/report.html');

     const path = require('path');

const filePath = path.join(__dirname, 'test-file.txt'); // absolute path, built from THIS script file's own folder
await fileButton.setInputFiles(filePath);
        console.log(filePath);
        await page.locator('#file-submit').click();
        await expect(page.locator('h3')).toHaveText('File Uploaded!');
        

    })();