import SearchPage from '../../pages/Search.page';

describe('_search', () => {
    let query = 'Michaela\'s choice ' + ' \n';
    let bookSelection = 'Massachusetts Brides';

    it('allows user to return to search results', () => {
        SearchPage.performSearch(query);
        SearchPage.selectFromSearchResults(bookSelection);
        expect(browser.isVisible(SearchPage.bookTitle)).to.be.true;
    });

    it('allows user to share a book', () => {
        SearchPage.performSearch(query);
        SearchPage.selectFromSearchResults(bookSelection);
        browser.click(SearchPage.shareButton);
        expect(browser.isVisible('android.widget.ShareActionProvider')).to.be.true;
    });

    // it('displays a blank screen for no results', () => {

    // });

    // it('user can scroll and make a selection', () => {

    // });

});