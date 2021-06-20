let puppeteer=require("puppeteer");

let browserPromise=puppeteer.launch({headless:false,defaultViewport: null});

// browserPromise.then(function (browser){
//     console.log("tab opened");
//     let newTabPromise=browser.newPage();
//     newTabPromise.then(function (newTab){

//         let googleWebSearcvhPromise=newTab.goto("https://www.google.com");
//         googleWebSearcvhPromise.then(function (){
//             let searchtypesPromise=newTab.type("input.gLFyf.gsfi","pepcoding",{delay:100});
//             searchtypesPromise.then(function (){
//                 newTab.keyboard.press("Enter");
//             })
//         })
//     })
// }) 


browserPromise.then(function (browser){
    console.log("tab opened");
    let newTabPromise=browser.newPage();
    newTabPromise.then(function (newTab){

        let googleWebSearcvhPromise=newTab.goto("https://www.hackerrank.com/auth/login");
        googleWebSearcvhPromise.then(function (){
            let searchtypesPromise=newTab.type("input#input-1.input","mineh37617@greenkic.com",{delay:100});
            searchtypesPromise.then(function (){
                let searchtypesPromise1=newTab.type("input#input-2.input","123456",{delay:100});
                searchtypesPromise1.then(function (){
                     
                    
                    //let onclick=newTab.click("button[data-analytics='LoginPassword']");
                     //let click1=newTab.click('div.ui-content.align-icon-right');
                    //  onclick.then(function (){
                    //     console.log("clicked");
                    // })
                    // onclick.catch(function (err){
                    //     console.log(err);

                    // })

                    // newTab.keyboard.press("Enter");
                })
            })
        })
    })
})