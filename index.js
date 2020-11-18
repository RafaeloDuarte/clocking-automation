const {Builder, By, Key, until} = require('selenium-webdriver');
const { Keyboard } = require('selenium-webdriver/lib/input');
const chrome = require('selenium-webdriver/chrome');
var robot = require("robotjs");

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

          driver.sleep(2000).then(function(){
            return driver.findElement(By.xpath('//*[@id="m_ver_menu"]/ul/li[2]/a/span')).click()
          })

          driver.sleep(2500).then(function(){
            return driver.findElement(By.xpath('//*[@id="m_ver_menu"]/ul/li[2]/div/ul/li[2]/a/span')).click()
          })

          driver.sleep(350000).then(function(){
            return driver.findElement(By.xpath('//*[@id="id_btnCamPerson"]')).click()
          })

      })
  })
})();