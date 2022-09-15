import { Given, When, Then, DataTable } from '@wdio/cucumber-framework';

import overviewPage from '../pageobjects/overview.page';
import homePage from '../pageobjects/home.page';
import shoppingPage from '../pageobjects/shopping.page';
import checkoutPage from '../pageobjects/checkout.page';
import completePage from '../pageobjects/complete.page';

let products; 

When (/^Añado al carrito los productos$/, async (dataTable : DataTable) => {
    products = dataTable.hashes();
    await homePage.addProductToCart(products)
    await homePage.goToCartShopping();
    for (let i = 0; i< (await shoppingPage.inventoryItemsName).length; i++ ) {
        await expect((await shoppingPage.inventoryItemsName)[i]).toHaveTextContaining(products[i].Producto);
    }
});

When (/^Completo los datos de compra$/, async (dataTable : DataTable) => {
    const datosPersonales = dataTable.hashes();
    await shoppingPage.goToCheckout();
    await checkoutPage.completeCheckout(datosPersonales);
});

When (/^Visualizo el resumen de compra$/, async () => {
    await checkoutPage.btnContinue.click();
    for (let i = 0; i< (await shoppingPage.inventoryItemsName).length; i++ ) {
        await expect((await shoppingPage.inventoryItemsName)[i]).toHaveTextContaining(products[i].Producto);
    }
});


Then (/^Finalizo la compra y visualizo el mensaje de compra exitosa \"(.*?)\"$/, async (mensaje : string) => {
    await overviewPage.finishPurchase()
    await expect((await completePage.lblGratitude)).toHaveTextContaining(mensaje);
});