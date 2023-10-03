class MotorBlock {
    constructor() {
        this._posicion = 50;
    }

    moverBlock() {
        let desplazamiento = Math.floor(Math.random() * 101) - 50; // Rango: -50 a 50
        this._posicion += desplazamiento;
        console.log(`Posición desplazamiento: ${this._posicion}`);
    }

    buscarPosicion(posicion) {
        let init = this._posicion - posicion;
        let end = this._posicion + posicion;
        for (let i = init; i <= end; i++) {
            if (i === this._posicion) {
                return i;
            }
        }
        return -1; 
    }

    get posicion() {
        return this._posicion;
    }

    
    static get instancia() {
        if (!MotorBlock._instancia) {
            MotorBlock._instancia = new MotorBlock();
        }
        return MotorBlock._instancia;
    }
}

const motor = MotorBlock.instancia;

motor.moverBlock();
const posicionDescubierta = motor.buscarPosicion(5);

if (posicionDescubierta === -1) {
    console.log("No se encontró la posición del bloque.");
}