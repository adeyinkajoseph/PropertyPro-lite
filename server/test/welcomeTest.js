import chai, { expect, use } from 'chai';
import { describe, it } from 'mocha';
import chaiHttp from 'chai-http';
import app from '../../index';

use(chaiHttp);

describe('welcome page', () => {

        it('Main page content', (done) => {

                expect('Hello').to.equal('Hello');
                done();
            
        });
        it('Main page content', (done) => {
            chai.request(app).get('/')
            .end((err, res) => {
                expect(res.body.message).to.equal('welcome to propertypro-lite');
                
                done();
        });
        });

});