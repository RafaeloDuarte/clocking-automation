const {Builder, By, Key, until} = require('selenium-webdriver');
const { Keyboard } = require('selenium-webdriver/lib/input');
 
(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  driver.get("https://rhid.com.br/v2/#/login")
    .then(function() {
      return driver.wait(until.elementLocated(By.name("email")), 20000)
        .then(function(){
          
          driver.sleep(500)
            .then(function(){
              return driver.findElement(By.name("email")).sendKeys("rafaelduarte@sisconsultoria.com.br");
            })
          driver.sleep(500)
            .then(function(){
              return driver.findElement(By.name("password")).sendKeys("454545");
            })
          
          driver.sleep(500).then(function(){
            return driver.findElement(By.id("m_login_signin_submit")).click()
          })
      })
  })
})();