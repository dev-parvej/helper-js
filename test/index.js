const assert = require('assert');
const helpers = require('./../build/index');

describe('helpers-js', function(){
	describe('addDate', function(){
        it(`should return ${ new Date().getDate() + 1 } after adding 1 day to to current date`, function(){
            assert.equal(helpers.addDate(new Date(), 1).getDate(), new Date().getDate() + 1);
        });
    });
    describe('subDate', function() {
        it(`it should return ${ new Date().getDate() -1 } after subtracting 1 day to current date`, function(){
            assert.equal(helpers.subDate(new Date(), 1).getDate(), new Date().getDate() -1);
        });
    });
    describe('count', function(){
        it('It should return length of this array', function(){
            assert.equal(helpers.count([1, 2, 3]), 3);
        });
    });
    describe('count', function(){
        it('It should return length of this object', function(){
            assert.equal(helpers.count({first: 'first',  second: 'second', third: 'third'}), 3);
        });
    });
    describe('count', function(){
        it('It should return length of this string', function(){
            assert.equal(helpers.count("Akash"), 5);
        });
    });
    describe('count', function(){
        it('It should return length of this number', function(){
            assert.equal(helpers.count(20000), 5);
        });
    });
    describe('fix', function(){
        it('should return 2.45', function(){
            assert.equal(helpers.fix(2.4545151545), 2.45);
        });
    });

    describe('optional', function(){
        it("should return null", function(){
            assert.equal(helpers.optional({aj: "Akash"}, 'ak'), null);
        })
    })
});
