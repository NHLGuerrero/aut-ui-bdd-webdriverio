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

    public async selecProducts (): Promise<void> {
        await this.btnAddBolt.click();
        await this.btnAddOnesie.click();
        await this.btnAddBlackpack.click();
        await this.btnShopping.click();
    }
}

export default new HomePage();