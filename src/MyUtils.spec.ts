import {addNum} from './MyUtils';

describe('Test MyUtils', () => {
  it('test', () => {
    const r = addNum(1, 2);
    expect(r).toBe(3);
  });
});
