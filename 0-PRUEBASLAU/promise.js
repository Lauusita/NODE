
const juegos =[
    {
    id:1,
    juego: "mario bros",
    ano: 1985

    },
    {
    id:2,
    juego : "hitman",  
    ano: 1995 
},
]


const getJuego= (id)=>{

    return new Promise((resolve, reject)=>{

        const game = juegos.find((g)=> g.id == id)?.juego;
        (game)
            ? resolve(game)
            : reject`No se ha encontrado juego para el id ${id}`
    })
}

const getAno = (id)=>{

        return new Promise((resolve, reject)=>{

        const ano = juegos.find((a)=> a.id == id)?.ano;
        (ano)
            ? resolve(ano)
            : reject(`No se ha encontrado año para el id ${id}`);

});
};


const getInfo = async(id)=>{

    try {
        
        const juego = await getJuego(id);
        const ano = await getAno(id);
        return `Se tiene el juego de ${juego} creado en el año ${ano}`;
    } catch (error) {
        throw error;
    }

}


const id = 4;
getInfo(id)
    .then((msg)=>{
        console.log("TODO BN")
        console.log(msg)
    })
    .catch((error=>{
        console.log("TODO MAL");
        console.log(error);
    }));