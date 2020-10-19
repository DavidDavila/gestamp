import { FilterCountriesByPipe } from './filter-countries-by.pipe';

describe('FilterCountriesByPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterCountriesByPipe();
    expect(pipe).toBeTruthy();
  });
});
