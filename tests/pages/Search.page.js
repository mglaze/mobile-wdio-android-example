import BasePage from './Base.page';
const { by } = require('../helpers/custom.locators');

const resourceIdNamespace = 'com.codepath.android.booksearch:id/';
const text = '';

class SearchPage extends BasePage {
    constructor() {
        super();
        this.searchButton = by.resourceId(`${resourceIdNamespace}action_search`)
        this.progressBar = by.resourceId(`${resourceIdNamespace}progress`)
        this.bookTitle = by.resourceId(`${resourceIdNamespace}tvTitle`)
        this.shareButton = by.resourceId(`${resourceIdNamespace}action_share`)
    }

    performSearch(query) {
        $(this.searchButton).click();
        browser.keys(query)
        .pause(5000);
    }

    selectFromSearchResults(bookSelection) {
        var selector = $(this.searchResultsList = by.text(`${bookSelection}`)).selector
        browser
        .touchAction(selector, 'tap');
    }
    
}


export default new SearchPage();