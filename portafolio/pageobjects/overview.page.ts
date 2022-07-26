import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

class Overview extends Page {

    public get titleOverview(): ChainablePromiseElement<WebdriverIO.Element> {
       return $('//div[2]/span')
   }

   public get btnFinish(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('#finish')
   }

   public async finish (): Promise<void> {
    await this.btnFinish.click();
   }

}

export default new Overview ();