import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

class ContentShopping extends Page {

    public get titleYourCart(): ChainablePromiseElement<WebdriverIO.Element> {
       return $('//div[2]/span')
   }

   public get btnCheckout(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('#checkout')
   }

   public async checkout(): Promise<void> {
    await this.btnCheckout.click();
   }
   
}

export default new ContentShopping();