import {MyUtilsModule} from './MyUtilsModule';

describe('Test MyUtils', () => {
  it('test', () => {
    const r = MyUtilsModule.addNum(1, 2);
    expect(r).toBe(3);
  });
});
