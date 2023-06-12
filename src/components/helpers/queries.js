//llamar a mis variables de entorno

const URLUsuario = import.meta.env.VITE_API_USUARIO;
const URLProducto = import.meta.env.VITE_API_PRODUCTO;

export const login = async(usuario)=>{
    try{
        const respuesta = await fetch(URLUsuario);
        const listaUsuarios = await respuesta.json();
        //buscar cual usuario tiene el mail
        const usuarioBuscado = listaUsuarios.find((itemUsuario)=> itemUsuario.email === usuario.email);
        if(usuarioBuscado){
            console.log('email encontrado');
            if(usuarioBuscado.password === usuario.password){
                return usuarioBuscado;
            }else{
                console.log('el password es incorrecto');
                return null;
            }
        }else{
            console.log('el email no existe');
            return null
        }       
    }catch(error){
        console.log(error)
    }
}

/*
GET obtener un listado de elementos o un elemento
POST crear un elemento nuevo en la BD
PUT / PATCH editar un elemento nuevo en la BD
DELETE borra un elemento de la BD 
*/ 

export const consultaListaProductos = async () =>{
    try{
        const respuesta = await fetch(URLProducto);
        const listaProductos = await respuesta.json();
        return listaProductos;
    }catch(error){
        console.log(error);
    }
}

export const consultaBorrarProducto = async (id) =>{
    try{
        const respuesta = await fetch(`${URLProducto}/${id}`, {
            method: "DELETE"
        });
        return respuesta;
    }catch(error){
        console.log(error);
    }
}

