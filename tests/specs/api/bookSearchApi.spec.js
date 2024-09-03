describe('openLib api', () => {
    context('search endpoint', () => {
        var books;
        var query = { qs: { q:'michaelas choice'} };

        before(() => openLib.getBooks(query)
        .then(response => { books = response.docs; }));
        
        it('returns expected number of items', () => {
            expect(books.length).to.eq(5);
        });

        it('returns expected book by edition', () => {
            var params = { edition_key: 'OL3475116M' };
            var book = openLib.getBookEdition(books, params)

            expect(book[0].edition_key[0]).to.eq(params.edition_key);
        });
    });

    context('books endpoint', () => {
        var bookDetails;
        var params = { edition_key: 'OL3475116M' };

        before(() => openLib.getBookDetails(params)
        .then(response => { bookDetails = response; }));

        it('returns details for known book', () => {
            expect(bookDetails.number_of_pages).to.eq(170);
        });

    });

    context('cover art endpoint', () => {
        var coverArt;
        var params = { edition_key: 'OL8896398M' };

        before(() => openLib.getCoverArt(params)
        .then(response => { coverArt = response; }));

        it('returns cover art for known book', () => {
            expect(coverArt).to.not.eql(null);
        });

    });
});