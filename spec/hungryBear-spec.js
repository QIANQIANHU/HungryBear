import { HungryBear } from './../src/hungryBear.js';

describe('hungryBear', function() {
   let fuzzy = new HungryBear("Fuzzy");

   beforeEach(function() {
     jasmine.clock().install();
     fuzzy.setHunger();// utilize setHunger()
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  }); // save typing?

  it('should have a name and a food level of 10 when it is created', function() {
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.foodLevel).toEqual(10);
  });
  it('should have a food level of 6 after 4001 milliseconds', function() {
    jasmine.clock().tick(4001);
    expect(fuzzy.foodLevel).toEqual(6);//what is this?
  });
  it('should get very hungry if the food level drops below zero', function() {
  fuzzy.foodLevel = 0;
  expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  it('should get very hungry if 10 seconds pass without feeding', function() {
    jasmine.clock().tick(10001);
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  it('should have a food level of ten if it is fed', function() {
    jasmine.clock().tick(9001);
    fuzzy.feed();
    expect(fuzzy.foodLevel).toEqual(10);
  });
});
