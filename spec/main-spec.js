const main = require('../main/main');
const fs = require('fs')

describe('validate the file exist', () => {

    it('should get HELLOWORLD.md exist', () => {
        fs.exists('./HELLOWORLD.md', (isExist) => {
            expect(isExist).toBe(true);
        })
    });
});