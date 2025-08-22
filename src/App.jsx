import Navbar from './navbar.jsx'

export default function App() {
  return (
    <div>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-16 ">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-ocean-700 font-serif">
          Bienvenido 
        </h1>
       <p className="mt-4 text-lg text-White-900 sm:max-w-xl">
  Bienvenido
  a nuestra plataforma, donde la innovación y la tecnología se unen para ofrecerte soluciones excepcionales. Explora nuestros servicios y descubre cómo podemos ayudarte a alcanzar tus objetivos con eficiencia y creatividad.
 </p>
      </main>
    </div>
  )
}

