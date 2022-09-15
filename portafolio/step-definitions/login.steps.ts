import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page';
import HomePage from '../pageobjects/home.page';

Given(/^Estoy en la pagina de inicio de sesion$/, async () => {
    await LoginPage.open();
});

Given(/^Me logueo con las credenciales (.+) y (.+)$/, async (username:string, password:string) => {
    await LoginPage.open();
    await LoginPage.login(username, password);
    await expect(await HomePage.titleProducts).toHaveTextContaining("PRODUCTS");
});

Then(/^Se muestra el titulo (.*) en la pantalla home$/, async (title:string) => {
    await expect(await HomePage.titleProducts).toHaveTextContaining(title);
});

When(/^Inicio sesion con (.+) y (.+)$/, async (username:string, password:string) => {
    if (password == "[empty]") {
        password = "";
    } else if (username == "[empty]") {
        username = "";
    }
    await LoginPage.login(username, password);
});

Then(/^Se muestra el mensaje de error (.*)$/, async (message:string) => {
    await expect(await LoginPage.errorMessage).toHaveTextContaining(message);
});