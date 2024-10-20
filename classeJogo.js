class Hero{
    constructor(nome, idade, tipo, ataque){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = ataque;
    }

    atacar(){
        if(this.tipo ==="Mago" || this.tipo === "mago"){
            this.ataque = "magia";
          console.log( `${this.tipo} atacou usando ${this.ataque}`);
        } else if(this.tipo ==="Guerreiro" || this.tipo === "guerreiro"){
            this.ataque = "espada";
          console.log( `${this.tipo} atacou usando ${this.ataque}`);
        } else if(this.tipo ==="Monge" || this.tipo === "monge"){
            this.ataque = "artes marciais";
          console.log( `${this.tipo} atacou usando ${this.ataque}`);
        }else if(this.tipo ==="Ninja" || this.tipo === "ninja"){
            this.ataque = "shuriken";
          console.log( `${this.tipo} atacou usando ${this.ataque}`);
        }
    }
}

let heroOne = new Hero("Aragor",32, "Guerreiro");
let heroTwo = new Hero("Malder", 68,"Mago");
let heroThree = new Hero("Malikif", 28,"Ninja");
let heroFour = new Hero("Myaoge", 52,"Monge");

heroOne.atacar();
heroTwo.atacar();
heroThree.atacar();
heroFour.atacar();