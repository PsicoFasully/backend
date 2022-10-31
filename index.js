class Users{
    constructor(nombre, apellido, libros=[], mascotas=[]){

        this.nombre=nombre;
        this.apellido=apellido;
        this.libros=libros;
        this.mascotas=mascotas;
        
    
    }

    getFullName(){
    
            return(`el nombre completo es ${this.nombre} ${this.apellido}`)
            
    }
    
    addMascotas(nuevaMascota){
        this.mascotas.push(nuevaMascota)
    }
    countmascotas(){
        return (`la cantidad de mascotas que tiene: ${this.mascotas.length}`)
    }

    addBook(titulo, autor){
        this.libros.push({titulo,autor})

    }
    getBookNames(){
        return this.libros.map(libro => libro.titulo)
    }
        
}


const user1 = new Users("falopa", "markito", libros, mascotas=["perro","gato"])

user1.getFullName();

