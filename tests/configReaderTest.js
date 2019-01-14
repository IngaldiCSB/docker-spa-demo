expect = require ('chai').expect;

ConfigReader = require ('../src/config/configReader');

describe('configReader', () => {

    beforeEach(()=>
    {

    })

    it('should return value of the given key', () => {


        let configReader = new ConfigReader({foo : "foofy" } )
        
        let result = configReader.get('foo' , 'notright')

        expect(result).to.eq('foofy');
    });

    it('should return default value if no key has been found' , () => 
    {
        let configReader = new ConfigReader({foo : "foofy" } )
        
        let result = configReader.get('bar' , 'right')

        expect(result).to.eq('right');
    })



});