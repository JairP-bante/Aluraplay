

async function listaVideos(){

    const conexion = await fetch('http://localhost:3000/videos');
       
    const conexionConvertida =  await conexion.json();
   
    return conexionConvertida;
    
};





async function enviarVideo(titulo,descripcion,url,imagen){

    const conexion = await fetch('http://localhost:3000/videos', {

        method: "POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({
            titulo:titulo,
            descripcion:`${descripcion} mil visualizaciones`,
            url:url,
            imagen:imagen
        })
    })

    const conexionConvertida = conexion.json();
   
    if(!conexion.ok){
        throw new Error("Ha ocurrido un error al enviar el video");
    }

    return conexionConvertida;

};




async function buscarVideos(palabraClave){
    const conexion = await fetch(`http://localhost:3000/videos?q=${palabraClave}`);
    const conexionConvertida = conexion.json();

    return conexionConvertida
}









export const conexionAPI={
    listaVideos, enviarVideo, buscarVideos
}



























//listaVideos();