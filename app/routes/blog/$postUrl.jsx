import { getPost } from "~/models/posts.server";
import { useLoaderData } from "@remix-run/react";
import { formatearFecha } from "~/utils/helpers";

export function meta({data}){

    if(!data){
        return{
            title: "GuitarLA - Post No encontrado",
            descripcion: `Guitarras, venta de guitarras, Post no encontrado`
        }
    }

    return {
        title: `GuitarLA - ${data?.data[0].attributes.titulo}`,
        description: `Guitarras, venta de guitarras, guitarra ${data?.data[0].attributes.titulo}`
    }
}

export async function loader({params}){
	const {postUrl} = params //Extraer la url
	const post = await getPost(postUrl)
	
	if(post.data.length === 0){
		throw new Response('',{
			status: 404,
			statusText: "Blog No Encontrado"
		})
	}

	return post
}

function Post() {

	const post = useLoaderData()

	const { titulo, contenido, imagen, publishedAt} = post?.data[0]?.attributes

	return (
		<article className="post mt-3">
			<img src={imagen?.data?.attributes?.url} alt={`Imagen del blog ${titulo}`} className="imagen"/>
            <div className="contenido">
                <h3>{titulo}</h3>
                <p className="fecha">{formatearFecha(publishedAt)}</p>
                <p className="texto">{contenido}</p>
            </div>
		</article>
	)
}

export default Post