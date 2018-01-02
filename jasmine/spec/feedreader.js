/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?   
            1 Failure on "RSS Feeds are defined"  Expected 0 not to be 0
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);

        });


        /* 'has a URL defined and is not empty' test
         * that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('has a URL defined and is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).toBeTruthy();
            });
            
        }); 
        /* 'has a name defined and is not empty' test
         *  that loops through each feed in the allFeeds object and ensures it has a name defined
         *  and that the name is not empty.
         */
        it('has a name defined and is not empty', function() {
            allFeeds.forEach(function(name) {
                expect(name.url).toBeDefined();
                expect(name.url.length).not.toBe(0);
                //TODO:  test that URL is valid;  
                /*var regex = /_^(?:(?:https?|ftp)://)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\x{00a1}-\x{ffff}0-9]+-?)*[a-z\x{00a1}-\x{ffff}0-9]+)(?:\.(?:[a-z\x{00a1}-\x{ffff}0-9]+-?)*[a-z\x{00a1}-\x{ffff}0-9]+)*(?:\.(?:[a-z\x{00a1}-\x{ffff}]{2,})))(?::\d{2,5})?(?:/[^\s]*)?$_iuS/;
                var url = name.url;
                var urlCheck =  regex.search(url);
                console.log(urlCheck);*/
            });
            
        });  
    });


    /* test suite for menu functions */
    describe('The menu', function() {
   
        /* 'menu is hidden by default' test
         *  that ensures the menu element is hidden by default
         */
        it('menu is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        }); 

         /* 'menu changes visibility when menu icon clicked' test
          *  that ensures the menu changes visibility when the menu icon is clicked.
          */
        it('menu changes visibility when menu icon clicked', function() {
            $('a.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('a.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
           
        });  
     });
    /* test suite for initial RSS Feeds */
    describe('Initial Entries', function() {
        beforeEach(function(done) {
                loadFeed(0,done) 
            });

        /* 'should have a .entry element within the .feed container' test
         *  that ensures when the loadFeed function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        it('should have a .entry element within the .feed container', function(done) {
             expect($('.feed').length).toBeGreaterThan(0);
             expect($('.feed .entry').length).toBeGreaterThan(0);
             done();
        }); 
    }); 
    /* test suite for new RSS Feeds */
    describe('New Feed Selection', function() {
        var currentFeed;
        var newFeed;

        beforeEach(function(done) {

            loadFeed(0, function(){
                currentFeed = $('.feed').html();
                loadFeed(1, function() {
                    newFeed = $('.feed').html();
                    done();
                });
            }); 
            
        });

        /* 'feed changes when a new feed is loaded' test 
         *  that ensures when a new feed is loaded by the loadFeed function that the content actually changes.
         */
        it('feed changes when a new feed is loaded', function(done) {
            expect(currentFeed).not.toEqual(newFeed);
            done();
        }); 

    });    
}());
