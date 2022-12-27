import {Meta, Links, Outlet, Scripts, LiveReload, useCatch, Link} from '@remix-run/react'
import Header from '~/components/header'
import styles from '~/styles/index.css'
import Footer from '~/components/footer'

export function meta(){
    return (
        {
            charset: 'utf-8',
            title: "GuitarLA - Remix",
            viewport: "width=device-width,initial-scale=1"
        }
    )
}

export function links(){
    return [
        {
            rel: "preconnect",
            href: "https://fonts.googleapis.com",
        },
        {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossOrigin: "true"
        },
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap",
        },
        {
            rel: "stylesheet",
            href: styles
        }
    ]
}

export default function App(){
    return (
        <Document>
            <Outlet/>
        </Document>
    )
}

function Document({children}){
    return(
        <html lang="es">
            <head>
                <Meta/>
                <Links />
            </head>
            <body>
                <Header/>
                {children}
                <Footer/>
                <Scripts/>
                <LiveReload/>
            </body>
        </html>
    )
}


// manejo de errores
export function CatchBoundary(){
    const error = useCatch();

    return (
        <Document>
            <p className="error">
                {error.status} {error.statusText}
            </p>
            <Link className='error-enlace' to="/">Volver a la Página Principal</Link>
        </Document>
    )
}

export function ErrorBoundary({error}){
    return (
        <Document>
            <p className="error">
                {error.status} {error.statusText}
            </p>
            <Link className='error-enlace' to="/">Volver a la Página Principal</Link>
        </Document>
    )
}