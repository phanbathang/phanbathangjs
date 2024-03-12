class Pet {
    constructor(name) {
      this.name = name;
    }
  
    introduce() {
      console.log(`Tôi tên là ${this.name}`);
    }
  
    talk(sound) {
      console.log(sound);
    }
  }
  
  class Dog extends Pet {
    constructor(name, animal) {
      super(name);
      this.animal = animal;
    }
  
    introduce() {
      console.log(`Tôi tên là ${this.name}`);
      this.animalMess();
    }
  
    animalMess() {
      console.log(`Tôi là động vật ${this.animal}`);
    }
  }
  
  const pet = new Pet("mimi");
  pet.introduce();
  pet.talk("Meo");
  
  const dog = new Dog("dog", "chó");
  dog.introduce();
  dog.talk("gâu gâu"); 