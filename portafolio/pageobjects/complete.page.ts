import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

class Complete extends Page {

    public get titleComplete(): ChainablePromiseElement<WebdriverIO.Element> {
       return $('//div[2]/span')
   }

}

export default new Complete();