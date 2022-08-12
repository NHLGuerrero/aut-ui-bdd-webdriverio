import { Given, When, Then } from '@wdio/cucumber-framework';

import loginPage from '../pageobjects/login.page';
import homePage from '../pageobjects/home.page';
import contentShopping from '../pageobjects/shopping.page';
import infoCheckout from '../pageobjects/information.page';
import overview from '../pageobjects/overview.page';
import complete from '../pageobjects/complete.page';

Given(/^Estoy en la pagina de home$/, async (title: string) => {
    await loginPage.open();
    await expect(await homePage.titleProducts).toHaveTextContaining(title);
});

Then (/^Visualizo el titulo \"(.*?)\" en la pantalla de compras$/, async (title:string) => {
    await expect(await contentShopping.titleYourCart).toHaveTextContaining(title);
    await expect(await infoCheckout.titleYourInformation).toHaveTextContaining(title);
    await expect(await overview.titleOverview).toHaveTextContaining(title);
    await expect(await complete.titleComplete).toHaveTextContaining(title);
});

When (/^Completo los campos con (.+), (.+) y (.+)$/, async (firtsname:string, lastname:string, postalcode:number) => {
    await infoCheckout.information(firtsname, lastname, postalcode);
});