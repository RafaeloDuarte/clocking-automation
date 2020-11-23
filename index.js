const {Builder, By, until} = require('selenium-webdriver');
const robot = require("robotjs");
const config = require("./config");

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();

  driver.get(config.url)
    .then(function() {
      return driver.wait(until.elementLocated(By.name("email")), 20000)
        .then(function(){
          
          driver.sleep(500)
            .then(function(){
              return driver.findElement(By.name("email")).sendKeys(config.email);
            })
          driver.sleep(500)
            .then(function(){
              return driver.findElement(By.name("password")).sendKeys(config.password);
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

          driver.sleep(3000).then(function(){
            robot.moveMouse(300,190)
          })

          driver.sleep(4000).then(function(){
            robot.mouseClick()
            robot.mouseClick()
          })

          driver.sleep(5500).then(function(){
            return driver.findElement(By.id('id_btnCamPerson')).click()
          })

      //    driver.sleep(8000).then(function(){
      //      return driver.findElement(By.xpath('//*[@id="myBody"]/div[2]/div/div[1]/div/div/div/div/div/div/div[2]/div[2]/div/button')).click()
      //    })

      })
  })
})();