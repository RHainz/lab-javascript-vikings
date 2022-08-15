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
        let mort = this.saxonArmy[this.chooseSax].receiveDamage(this.vikingArmy[this.chooseVik].attack());
        if (this.saxonArmy[this.chooseSax].health<=0) {this.saxonArmy.splice(this.chooseSax,1)}
        return mort
}

    saxonAttack (){
        this.chooseVik=Math.floor(Math.random()*this.vikingArmy.length);
        this.chooseSax=Math.floor(Math.random()*this.saxonArmy.length);
        let mort = this.vikingArmy[this.chooseVik].receiveDamage(this.saxonArmy[this.chooseSax].attack());
        if (this.vikingArmy[this.chooseVik].health<=0) {this.vikingArmy.splice(this.chooseVik,1)}
        return mort
    }

    showStatus () {
        console.log(this.vikingArmy);
        console.log(this.saxonArmy);
        if (this.vikingArmy.length==0) {return `Saxons have fought for their lives and survived another day...`}
        if (this.saxonArmy.length==0) { return `Vikings have won the war of the century!`}
        if (this.saxonArmy.length>0 && this.vikingArmy.length>0) { return `Vikings and Saxons are still in the thick of battle.`}
    }
}

const guerra = new War();

let vik2= new Viking("malador", 60, 100);
let vik3= new Viking("maladores", 80, 100);
let sax1= new Saxon(20,40);
let sax2= new Saxon(20,50);

guerra.addViking(vik2);
guerra.addViking(vik3);
guerra.addSaxon(sax1);
guerra.addSaxon(sax2);
guerra.vikingAttack();
guerra.showStatus();
guerra.saxonAttack();
guerra.showStatus();
guerra.vikingAttack();
guerra.showStatus();
guerra.saxonAttack();
guerra.showStatus();


let vik1=new Viking("eldor", 30, 10);
vik1.receiveDamage(29);

let teste = Math.round(Math.random()*5);
console.log(teste);

