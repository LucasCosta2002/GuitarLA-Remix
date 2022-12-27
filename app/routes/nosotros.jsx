import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta(){
	return {
		title: 'GuitarLA - Sobre Nosotros',
		description: 'Venta de guitarras, blogs de musica'
	}
}

export function links(){
	return [
		{
			rel: 'stylesheet',
			href: styles
		},
		{
			rel: 'preload',
			href: imagen,
			as: 'image'
		}
	]
}


function Nosotros() {
	return (
		<main className="contenedor nosotros">
			<h2 className="heading">Nosotros</h2>

			<div className="contenido">
				<img src={imagen} alt="imagen nosotros" />

				<div className="">
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, libero consequatur rerum blanditiis quam id dolorum natus! Odit quisquam reprehenderit deleniti eaque, laborum officiis mollitia. Obcaecati repellendus natus in doloremque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sunt, vel exercitationem quae ipsa, nulla saepe iure eum cumque labore voluptas aut</p>

					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, libero consequatur rerum blanditiis quam id dolorum natus! Odit quisquam reprehenderit deleniti eaque, laborum officiis mollitia. Obcaecati repellendus natus in doloremque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sunt, vel exercitationem quae ipsa, nulla saepe iure eum cumque labore voluptas aut</p>				
				</div>
				
			</div>
		</main>
	)
}

export default Nosotros