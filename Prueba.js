class Persona{
    static contadorPersonas = 0;

    constructor(nombre, apellido, edad){
        this._idPersona = Persona.contadorPersonas++;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    toString(){
        return `
        Id: ${this._idPersona}
        Nombre: ${this._nombre}
        Apellido: ${this._apellido}
        Edad: ${this._edad}`;
    }
    
    get idPersona(){
        return this._idPersona;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }

    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }
}

class Empleado extends Persona{
    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._idEmpleado = Empleado.contadorEmpleados++;
        this._sueldo = sueldo;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return `
        ${super.toString()}
        Id Empleado: ${this._idEmpleado}
        Sueldo: ${this._sueldo}`;
    }
}

class Cliente extends Persona{
    static contadorClientes = 0;

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre,apellido,edad);
        this._idCliente = Cliente.contadorClientes++;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return `
        ${super.toString()}
        id Cliente: ${this._idCliente}
        Fecha de Registro: ${this._fechaRegistro}`;
    }
}

let persona1 = new Persona('Felipe','Intelangelo',21);
console.log(persona1.toString());
let persona2 = new Persona('Juan', 'Carlos', 22);
console.log(persona2.toString());

let empleado1 = new Empleado('Julian','Barreiro',22,75000);
console.log(empleado1.toString());
let empleado2 = new Empleado('kaka','kk',32,85000);
console.log(empleado2.toString());

let cliente1 = new Cliente('Marcos', 'Acuña', 31, new Date());
console.log(cliente1.toString());