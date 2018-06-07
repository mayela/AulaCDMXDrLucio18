class Forma {
    constructor(id,x,y,g)
    this.id
    this.mover(x,y,g)
}
mover(x,y){
    this.x=x
    this.y=y
    this.g=g
}
class pentagono extends Forma{
    constructor(id,x,y,g,lado){
        super(id.x.y,g,)
        this.lado
    }
}

var pentagono=new pentagono(1,4,5,60,10);
console.log("id",+ pentagono.id)
console.log("x",+ pentagono.x)
console.log("y",+ pentagono.y)
console.log("Lados",+ pentagono.lado)