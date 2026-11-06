import {test} from 'node:test';import assert from 'node:assert/strict';import * as c from '../src/core.js';
test('3 against 4 has seven events and shared downbeat',()=>{const e=c.events(3,4);assert.equal(e.length,7);assert.equal(e.filter(x=>x.time===0).length,2);assert.equal(c.events(2,5,3).length,21);assert.throws(()=>c.events(0,4))});
