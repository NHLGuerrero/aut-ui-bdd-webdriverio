import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

class LoginPage extends Page {
    
     public get inputUsername(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('#user-name');
    }

    public get inputPassword(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('#password');
    }

    public get btnSubmit(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('#login-button');
    }

    public get errorMessage(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('//div[@class="error-message-container error"]')
    }

    public async login (username: string, password: string): Promise<void> {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    public async open(): Promise<void> {
        await super.open('login');
    }

}

export default new LoginPage();