import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

class CompletePage extends Page {

    public get titleComplete(): ChainablePromiseElement<WebdriverIO.Element> {
       return $('//div[2]/span')
   }

   public get lblGratitude(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('.complete-header')
}



}

export default new CompletePage();