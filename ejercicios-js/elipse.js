
var console = requiere ("console")

class Form {
	constructor (id, x, y ){
		this.id = id
		this.move(x,y)
	}
	move(x, y){
		this.x=x
		this.y = y
	}
}

class Elipse extends Shape {
	constructor (id, x, y, rx, ry, ar, ap, af){
		super (id, x, y)
		this.rx = rx
		this.ry = ry
		this.ar = ar
		this.ap = ap
		this.af = af
	}

}

var elipse = new Elipse ();
console.log ("El id de un elpse es" + Elipse.id);
console.log ("El x del elipse es " + Elipse.x);
console.log ("El y de un elpse es" + Elipse.y);
console.log ("El rx del elipse es " + Elipse.rx);
console.log ("El ry  de un elpse es" + Elipse.ry);
console.log ("El ar del elipse es " + Elipse.ar);
console.log ("El  ap del elipse es " + Elipse.ap);
console.log ("El  af de un elpse es" + Elipse.af);
