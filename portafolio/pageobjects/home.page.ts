import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

class HomePage extends Page {
    
     public get titleProducts(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('//div[2]/span')
    }
}

export default new HomePage();