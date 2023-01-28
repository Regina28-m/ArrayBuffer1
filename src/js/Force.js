import Character from './Character';

export default class Force extends Character {
  constructor(name, type) {
    super(name, type);
    this.distance = 1;
    this.stonedI = false;
  }

  get stoned() {
    return this.stonedI;
  }

  set stoned(value) {
    this.stonedI = value;
  }

  get attack() {
    let attack = this.attackNew * (1 - (this.distance - 1) / 10);
    if (this.distance === 0) {
      return;
    }
    if (this.stoned === true) {
      attack -= Math.log2(this.distance) * 5;
    }
    if (attack > 0) {
      return Math.round(attack);
    }
    if (this.attack < 0) {
      return 0;
    }
  }


  set attack(value) {
    this.attackNew = value;
  }
}
