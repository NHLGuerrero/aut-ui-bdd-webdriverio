import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

class CheckoutPage extends Page {

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

    public async completeCheckout (datosPersonales : any[]): Promise<void> {
        await this.inputFirtsName.setValue(datosPersonales[0].Nombre);
        await this.inputLastName.setValue(datosPersonales[0].Apellido);
        await this.inputPostalCode.setValue(datosPersonales[0].CodigoPostal)
    }

}

export default new CheckoutPage();