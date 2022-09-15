import { ChainablePromiseElement,ChainablePromiseArray, ElementArray } from 'webdriverio';

import Page from './page';

class ShoppingPage extends Page {

    public get titleYourCart(): ChainablePromiseElement<WebdriverIO.Element> {
       return $('//div[2]/span')
   }

   public get btnCheckout(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('#checkout')
   }

   public get inventoryItemsName(): ChainablePromiseArray<ElementArray> {
    return $$('.inventory_item_name')
   }

   public get btnContinueShopping(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('#continue-shopping')
   }
   
   public async continueShopping(): Promise<void> {
    await this.btnContinueShopping.click();
   }

   public async checkout(): Promise<void> {
    await this.btnCheckout.click();
   }

   public async goToCheckout(): Promise<void>{
    await this.btnCheckout.click();    
   }

   public btn_remove(name :string) : ChainablePromiseElement<WebdriverIO.Element>  {
    const nameId = name.toLowerCase().replaceAll(' ','-');
    return $('#remove-[TEXTO]'.replace('[TEXTO]',nameId))
}

    public async removeProductToCart (productsRemove : any[]): Promise<void> {
    for (let i = 0; i< productsRemove.length; i++){
        await (await this.btn_remove(productsRemove[i].Producto)).click();
    }
}
   
}

export default new ShoppingPage();