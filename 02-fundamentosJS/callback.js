
// setTimeout(() =>{ 
//     console.log("hola mundo")
// }, 1000);

const getUserById = ( id, callback ) =>{
    const usuario= {
        id,
        user: "Laura",
    }
    setTimeout(() => {
        callback(usuario)
    }, 1500);
}

getUserById(10, ( usuario, id)=>{
    console.log(usuario.user.toLowerCase());
    console.log(usuario.id);
});