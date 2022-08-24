import { Given, When, Then, DataTable } from '@wdio/cucumber-framework';

import homePage from '../pageobjects/home.page';
import shoppingPage from '../pageobjects/shopping.page';

let productsRemove;

Given(/^Elimino los productos del carrito$/, async (dataTable : DataTable) => {
    //    1) Mapear los productos
    //    2) Hacer click en el boton de REMOVE
    productsRemove = dataTable.hashes();
    await shoppingPage.removeProductToCart(productsRemove);
});

Given(/^Dejo de visualizar el producto en la plantalla$/, async () => {
    // Esto quiere decir que:
    // 1) Tengo que mapear los elementos y no encontrarlos
    // Duda: como validar una negacion ? "No encontrarlos"
    
});

Given(/^Utilizo la funcion \"(.*?)\"$/, async () => {
    // Esto quiere decir que:
    // 1) Estoy parado en el carrito de compras
    // 2) Hago click en el boton CONTINUE SHOPPING
    await homePage.goToCartShopping();
    await shoppingPage.continueShopping();

});

Given(/^Regreso la pantalla de home$/, async (title) => {
    // Esto quiere decir que:
    // 1) Visualizo el titutlo PRODUCTC
    await expect(await homePage.titleProducts).toHaveTextContaining(title);
});