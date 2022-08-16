import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

class OverviewPage extends Page {

    public get titleOverview(): ChainablePromiseElement<WebdriverIO.Element> {
       return $('//div[2]/span')
   }

   public get btnFinish(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('#finish')
   }

   public async finishPurchase(): Promise<void> {
    await this.btnFinish.click();
   }

}

export default new OverviewPage ();