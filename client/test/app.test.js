/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

global.fetch = require('jest-fetch-mock');
let app

describe('app', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
        app = require('../script.js')
    })

    afterEach(() => {
        fetch.resetMocks();
    })

    describe('requests', () => {

        test('it makes a request to /', () => {
            app.search();
            expect(fetch).toHaveBeenCalled();
        })
    })
        
})