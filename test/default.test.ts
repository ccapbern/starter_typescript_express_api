import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import chaiAsPromise = require('chai-as-promised');

import app from '../src/App';

chai.use(chaiHttp);
chai.use(chaiAsPromise);
const should = chai.should();

describe('Default', () => {
    describe('#sayHello()', () => {
        it('should return \'Hello, World!\'', () => {
            return chai.request(app)
                .get('/')
                .then(res => {
                    res.body.message.should.be.equal('Hello, World!');
                });
        });
    });
});