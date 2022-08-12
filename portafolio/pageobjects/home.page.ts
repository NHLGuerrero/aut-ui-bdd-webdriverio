import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

class HomePage extends Page {
    
     public get titleProducts(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('//div[2]/span')
    }

    public get btnAddBolt(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('#add-to-cart-sauce-labs-bolt-t-shirt')
    }

    public get btnAddOnesie(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('#add-to-cart-sauce-labs-onesie')
    }

    public get btnAddBlackpack(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('#add-to-cart-sauce-labs-backpack')
    }

    public get btnShopping(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('//a[@class="shopping_cart_link"]')
    }
}

export default new HomePage();