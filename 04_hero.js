/**
 * It's time to create a hero to dispatch these pesky monsters.
 *
 * Copy your code from the previous exercise.
 *
 * Add a SETTER method to your LivingThing class named 'setHealth' that lets you update the value
 * of the 'health' property.
 *
 * Now, create a NEW object called 'Hero' that EXTENDS the LivingThing class.
 *
 * NOTE: Check out the following to figure out how to extend an object
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance
 *
 * Add a method to the Hero class named 'attack' that takes as a parameter a LivingThing object.
 * The method should do three things:
 * 1. Reduce the LivingThing object's health by a random value between 0 and 10.
 * 2. Reduce the hero's health by a random value between 0 and 10.
 * 3. Print out how much damage the monster and hero did to each other.
 *
 * NOTE: To point you in the right direction: check out
 * the getRandomInt function on this page:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 *
 * Give the Hero object another method named 'fight' that takes as a parameter an array of LivingThing objects
 * and does the following:
 *  - For each LivingThing object in the array, call the 'attack' method so the hero can attack the monster.
 *     - But, don't attack if the LivingThing is already dead!
 *  - Repeat the process until all the monsters or the hero is dead.
 *
 * Finally, you will need to instantiate your hero object with the name into a variable named 'hero'. Give them 100 health and a
 * name of your choice.
 */


 (function(){
    //@see https://stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it
    'use strict';

    function LivingThing(name, health){

      var name = name;
      var health = health;


      this.getName = function(){
          return name;
      }

      this.getHealth = function(){
          return health;
      }


    this.isAlive = function(){

      if (this.getHealth() < 1) {
        return false;
      } else {
        return true;
      }

    }

      this.setHealth = function(x){
          health = health - x;
      }

    }

    function Hero(name, health){

        LivingThing.call(this, name, health);

        this.attack = function(attackingMonster){

            let monsterDmg = getRandomInt(10, 0);
            let heroDmg = getRandomInt(10, 0);

            attackingMonster.getHealth(attackingMonster.setHealth(heroDmg));
            this.setHealth(monsterDmg);

            console.log('\t' + 'Monster dealt ' + monsterDmg + '! ' + this.getName() + ' now has a health of ' + this.getHealth() + '.');
            console.log('\t' + 'Hero dealt ' + heroDmg + '! ' + attackingMonster.getName() + ' now has a health of ' + attackingMonster.getHealth() + '.');

            if (attackingMonster.isAlive() == false) {
                console.log('\n' + attackingMonster.getName() + ' has been defeated! Onto the next challenge!');
            }
        }

        this.fight = function(monsterBrigade){

            for (var i = 0; i < monsterBrigade.length; i++) {

                console.log('\n' + 'A wild ' + monsterBrigade[i].getName() + ' appeared! ' + this.getName() + ' currently has ' + this.getHealth() + ' HP. Will he win?' + '\n');

                while (this.getHealth() > 0 && monsterBrigade[i].getHealth() > 0) {

                        this.attack(monsterBrigade[i]);

                }
            }
        }

    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    let monster1 = new LivingThing('Rat', 5);
    let monster2 = new LivingThing('Goblin', 30);
    let monster3 = new LivingThing('Ogre', 80);

    let hero = new Hero('Eric', 10);

    let monsters = [monster1, monster2, monster3];


    //The code below should work when you are done
    console.log('\n' + 'A hero emerges!');

    console.log('The noble ' + hero.getName() + ' has vowed to defeat the monsters and save the realm.');
    console.log('Will they be victorious?');

    hero.fight(monsters);

    if (hero.isAlive()) {
        console.log('\n' + 'The hero, ' + hero.getName() + ', prevailed!');
    }
    else {
        console.log(hero.getName() + ' was bested by the monsters. We are doomed' + '\n');
    }

})();
