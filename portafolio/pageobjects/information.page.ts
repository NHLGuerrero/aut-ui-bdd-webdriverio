import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

class InfoCheckout extends Page {

    public get titleYourInformation(): ChainablePromiseElement<WebdriverIO.Element> {
       return $('//div[2]/span')
    }

   public get inputFirtsName(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('#first-name');
    }

    public get inputLastName(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('#last-name');
    }

    public get inputPostalCode(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('#postal-code');
    }

    public get btnContinue(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('#continue');
    }

    public async information (firtsname: string, lastname: string, postalcode: number): Promise<void> {
        await this.inputFirtsName.setValue(firtsname);
        await this.inputLastName.setValue(lastname);
        await this.inputPostalCode.setValue(postalcode)
        await this.btnContinue.click();
    }

}

export default new InfoCheckout();