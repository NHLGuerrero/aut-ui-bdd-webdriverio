import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

class HomePage extends Page {
    
    public get titleProducts(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('//div[2]/span') // esta mapeando dos elementos distintos
    }

    public get selectSort(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('//select[1]')
    } 

    public optSortCriterion(criterion:string): ChainablePromiseElement<WebdriverIO.Element> {
        return $("//*[text()='[criterio]']".replace("[criterio]", criterion))
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

    // public async home (): Promise<void> {
    //     // await this.btnSort.click();
    //     // await this.btnLowToHigh.click();
    //     await this.btnAddBolt.click();
    //     await this.btnAddOnesie.click();
    //     await this.btnAddBlackpack.click();
    //     await this.btnShopping.click();
    // }

}

export default new HomePage();