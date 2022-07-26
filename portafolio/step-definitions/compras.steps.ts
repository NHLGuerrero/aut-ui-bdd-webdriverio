import { Given, When, Then } from '@wdio/cucumber-framework';

import HomePage from '../pageobjects/home.page';
import ContentShopping from '../pageobjects/shopping.page';
import InfoCheckout from '../pageobjects/information.page';
import Overview from '../pageobjects/overview.page';
import Complete from '../pageobjects/complete.page';

When (/^Ordeno los productos con el (.*)$/, async (criterion:string) => {
    (await (HomePage.selectSort)).click
    await (await HomePage.optSortCriterion(criterion)).click
});

Then (/^Se muestra el titulo (.*) en la pantalla de compras$/, async (title:string) => {
    await expect(await ContentShopping.titleYourCart).toHaveTextContaining(title);
});

Then (/^Se muestra el titulo (.*)$/, async (title:string) => {
    await expect(await InfoCheckout.titleYourInformation).toHaveTextContaining(title);
});

When (/^Completo los campos con (.+), (.+) y (.+)$/, async (firtsname:string, lastname:string, postalcode:number) => {
    await InfoCheckout.information(firtsname, lastname, postalcode);
});

Then (/^Se muestra el titulo (.*)$/, async (title:string) => {
    await expect(await Overview.titleOverview).toHaveTextContaining(title);
});

Then (/^Se muestra el titulo (.*)$/, async (title:string) => {
    await expect(await Complete.titleComplete).toHaveTextContaining(title);
});