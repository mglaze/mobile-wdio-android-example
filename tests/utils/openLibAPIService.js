const rp = require('request-promise');
const config = require('./config.json');

var options = {
    url: config.openLib.search_uri,
    headers: config.openLib.headers,
    qs: { q: '' },
    json: true,
};

class openLibApiService {

    //function to search for books
    getBooks(query){
        this.mergeOptions = { ...options, qs: query.qs };

        try {
            var res = rp(this.mergeOptions);
            return res;
          } catch (err) {
            return err;
        }
    }
    
    //function to use books obj to find a particular book
    getBookEdition(books, params){
        return books.filter( (books) => { 
            return books.edition_key == params.edition_key
        });
    }

    //function to use books obj to get book details
    getBookDetails(params){
        this.mergeOptions = {...options, 
            url: config.openLib.books_uri + params.edition_key 
        };

        try {
            var res = rp(this.mergeOptions);
            return res;
          } catch (err) {
            return err;
        }
    }

    //function to use books obj get cover art
    getCoverArt(params){
        this.mergeOptions = {...options,
            url: config.openLib.coverArt_uri.concat(params.edition_key.concat('-M.jpg?default=false'))
        };

        try {
            var res = rp(this.mergeOptions);
            return res;
          } catch (err) {
            return err;
        }
    }

}

module.exports = openLibApiService;