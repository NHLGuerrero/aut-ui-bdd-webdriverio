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


    public btn_add_to_cart_item(name :string) : ChainablePromiseElement<WebdriverIO.Element>  {
        const nameId = name.toLowerCase().replaceAll(' ','-');
        return $('#add-to-cart-[TEXTO]'.replace('[TEXTO]',nameId))
    }

    public async addProductToCart (products : any[]): Promise<void> {
        for (let i = 0; i< products.length; i++){
            await (await this.btn_add_to_cart_item(products[i].Producto)).click();
        }
    }

    public async goToCartShopping() : Promise<void> {
        await this.btnShopping.click();
    }
}

export default new HomePage();