
export async function getCurso(){
    const respuesta = await fetch(`${process.env.API_URL}/curso?populate=imagen`);
	const resultado = await respuesta.json()

    return resultado
}

// export async function getGuitarra(url){
//     const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)

//     return respuesta.json()
// }