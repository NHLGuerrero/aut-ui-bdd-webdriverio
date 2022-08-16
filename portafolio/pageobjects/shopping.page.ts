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

   public async checkout(): Promise<void> {
    await this.btnCheckout.click();
   }

   public async goToCheckout(): Promise<void>{
    await this.btnCheckout.click();    
   }
   
}

export default new ShoppingPage();