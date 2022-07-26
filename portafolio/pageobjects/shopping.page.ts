import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

class ContentShopping extends Page {

    public get titleYourCart(): ChainablePromiseElement<WebdriverIO.Element> {
       return $('//div[2]/span')
   }

   public get btnRemove(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('#remove-sauce-labs-onesie')
   }

   public get btnCheckout(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('#checkout')
   }

}

export default new ContentShopping();