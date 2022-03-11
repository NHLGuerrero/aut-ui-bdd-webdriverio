import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page';
import HomePage from '../pageobjects/home.page';

Given(/^Estoy en la pagina de inicio de sesion$/, async () => {
    await LoginPage.open();
});

When(/^Inicio sesion con (.+) y (.+)$/, async (username:string, password:string) => {
    //await browser.debug();
    await LoginPage.login(username, password)
});

Then(/^Se muestra el titulo (.*) en la pantalla home$/, async (titulo:string) => {
    await expect(await HomePage.titleProducts).toHaveTextContaining(titulo);
});