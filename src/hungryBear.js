
export class HungryBear {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
  }//constructor can contains properties don't need users to input

  setHunger() {
      setInterval(() => {
        this.foodLevel--;
      }, 1000);
    }

  didYouGetEaten() {
  if (this.foodLevel > 0) {
    return false;
    } else {
    return true;
    }
  }

  feed() {
    this.foodLevel = 10;
  }
}
//what's the relationship of class/constructor/methods/prototype?
