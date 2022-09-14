import { Given, When, Then, DataTable } from '@wdio/cucumber-framework';

import homePage from '../pageobjects/home.page';
import shoppingPage from '../pageobjects/shopping.page';

let productsRemove;

Given(/^Elimino los productos del carrito$/, async (dataTable : DataTable) => {
    productsRemove = dataTable.hashes();
    await shoppingPage.removeProductToCart(productsRemove);
});

Then(/^Dejo de visualizar los productos en el carrito$/, async () => {
    const elem = await $$('.inventory_item_name')
    await expect(elem).not.toBeDisplayed()
});

When(/^Ingreso al carrito de compras$/, async () => {
    await homePage.goToCartShopping();
});

When(/^Utilizo la opcion CONTINUE SHOPPING$/, async () => {
    await shoppingPage.continueShopping();
});

Then(/^Regreso a la pantalla de home$/, async () => {
    await expect(await homePage.titleProducts).toHaveTextContaining("PRODUCTS");
});