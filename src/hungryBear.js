
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
}
