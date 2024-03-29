/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
     public async open(path?: string): Promise<void> {
        await browser.url('/')
        // await browser.maximizeWindow()
        await browser.setWindowSize(1920*1.6, 1080*1.8)
    }
}