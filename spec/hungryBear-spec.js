import { HungryBear } from './../src/hungryBear.js';

describe('hungryBear', function() {
   let fuzzy = new HungryBear("Fuzzy");

   beforeEach(function() {
  jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  }); // save typing?

  it('should have a name and a food level of 10 when it is created', function() {
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.foodLevel).toEqual(10);
  });
});
