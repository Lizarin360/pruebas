const {By, Builder} = require('selenium-webdriver');
require('dotenv').config();

// especificamos el navegador a utilizar
const driver = new Builder().forBrowser('chrome').build();


const inicio = async () => {

    //abrimos el sitio con la url
    await driver.get(process.env.URL);

    //timepo de espera para que termine de cargar
    await driver.manage().setTimeouts({implicit: 2000});

    // credenciales del sitio
    const usuario = await process.env.USUARIO;
    const password = await process.env.PASSWORD;

    let user = await driver.findElement(By.id('ingUsuario'));
    user.sendKeys(usuario);
    let pass = await driver.findElement(By.id('ingPassword'));
    pass.sendKeys(password);
    
    let loginForm = await driver.findElement(By.id('loginSubmit'));
    loginForm.click();

    await driver.manage().setTimeouts({implicit: 2000});

    let caja = await driver.findElement(By.id('caja'));
    caja.click();

    caja.findElement(By.css("option[value='1']")).click();
    await driver.manage().setTimeouts({implicit: 200});

    let cerrarCaja = await driver.findElement(By.id('caja_guardar'));
    cerrarCaja.click();
    cerrarCaja.click();

    //link
    let link = await driver.findElement(By.xpath("//a[@href='alumnos']"));
    link.click();

    await driver.manage().setTimeouts({implicit: 50000});

    let cuantaAlumno = await driver.findElement(By.id('cuenta')).sendKeys('23219');
    let buscarAlumno = await driver.findElement(By.id('buscarAlumnos')).click();

    
    // await driver.quit();
}


inicio();
