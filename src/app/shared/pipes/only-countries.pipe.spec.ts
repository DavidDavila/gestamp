import { OnlyCountriesPipe } from './only-countries.pipe';

describe('OnlyCountriesPipe', () => {
  it('create an instance', () => {
    const pipe = new OnlyCountriesPipe();
    expect(pipe).toBeTruthy();
  });
});
