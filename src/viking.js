// Soldier
class Soldier {
    constructor (health, strength) {
    this.health=health;
    this.strength=strength;
}
    attack () {
        return this.strength;
    }
    receiveDamage(damage){
        this.health-=damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health,strength) {
        super(health,strength);
        this.name=name;
    }

    receiveDamage(damage){
        this.health-=damage;
        console.log(this.health);
        if (this.health>0) {
            return `${this.name} has received ${damage} points of damage`
        } 
        if (this.health<=0) {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry () {
        return `Odin Owns You All!`
    }

}

// Saxon
class Saxon extends Soldier{
    constructor(health,strength){
        super(health,strength);
    }

    receiveDamage(damage){
        this.health-=damage;
        console.log(this.health);
        if (this.health>0) {
            return `A Saxon has received ${damage} points of damage`
        } 
        if (this.health<=0) {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    vikingArmy=[];
    saxonArmy=[];

    addViking(viking){
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }

vikingAttack(){
        this.chooseVik=Math.floor(Math.random()*this.vikingArmy.length);
        this.chooseSax=Math.floor(Math.random()*this.saxonArmy.length);
        console.log(this.vikingArmy);
        console.log(this.saxonArmy);
        let vikingo=this.vikingArmy[this.chooseVik];
        let saxongo=this.saxonArmy[this.chooseSax];
        console.log(vikingo);
        console.log(saxongo);
        this.saxonArmy[this.chooseSax].receiveDamage(this.vikingArmy[this.chooseVik].attack());
        if (this.saxonArmy[this.chooseSax].health<=0) {this.saxonArmy.splice(this.chooseSax,1)}
        return this.saxonArmy[this.chooseSax].receiveDamage(this.vikingArmy[this.chooseVik].attack());
}

    saxonAttack (){

    }

    showStatus () {

    }
}

const guerra = new War();

let vik2= new Viking("malador", 30, 100);
let sax1= new Saxon(20,40);

guerra.addViking(vik2);
guerra.addViking(vik2);
guerra.addSaxon(sax1);
guerra.addSaxon(sax1);

guerra.vikingAttack();


let vik1=new Viking("eldor", 30, 10);
vik1.receiveDamage(29);

let teste = Math.round(Math.random()*5);
console.log(teste);

