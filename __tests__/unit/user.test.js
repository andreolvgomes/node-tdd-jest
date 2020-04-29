const bcrypt = require('bcryptjs');
//const { User } = require('../../src/app/models');
const trucante = require('../utils/truncate');
const factory = require('../factories');

describe('User', () => {
    // beforeEach(async() => {
    //     await trucante();
    // });

    it('Should encrypt user password', async() => {
        const user = await factory.create('User', {
            password: "123456"
        });

        const compare_has = await bcrypt.compare('123456', user.password_hash)
        expect(compare_has).toBe(true);
    });
});