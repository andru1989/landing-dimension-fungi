import React from 'react'

function Body() {
  return (
    <>
      <section data-section id="inicio">
        <h1>Dimension Fungi</h1>
        <p>Tu camino hacia el bienestar</p>
      </section>

      <section data-section id="beneficios" className="section">
        <h2>Beneficios de las Microdosis de Psilocibina</h2>
        <ul>
          <li>Alivia la ansiedad y la depresión</li>
          <li>Reduce el estrés y mejora la calidad del sueño</li>
          <li>Ayuda a superar adicciones a sustancias</li>
          <li>Aumenta el enfoque y la creatividad</li>
        </ul>
      </section>

      <section data-section id="datos-cientificos" className="section">
        <h2>Datos Científicos</h2>
        <p>Investigaciones científicas han demostrado que las microdosis de psilocibina tienen efectos terapéuticos significativos en el tratamiento de diversas condiciones de salud mental.</p>
        <p>Entre los beneficios reportados se encuentran la reducción de los síntomas de ansiedad y depresión, así como mejoras en la calidad de vida y el bienestar psicológico en general.</p>
        <p>Investigaciones científicas han demostrado que las microdosis de psilocibina tienen efectos terapéuticos significativos en el tratamiento de diversas condiciones de salud mental.</p>
        <p>Entre los beneficios reportados se encuentran la reducción de los síntomas de ansiedad y depresión, así como mejoras en la calidad de vida y el bienestar psicológico en general.</p>
        <p>Investigaciones científicas han demostrado que las microdosis de psilocibina tienen efectos terapéuticos significativos en el tratamiento de diversas condiciones de salud mental.</p>
        <p>Entre los beneficios reportados se encuentran la reducción de los síntomas de ansiedad y depresión, así como mejoras en la calidad de vida y el bienestar psicológico en general.</p>
        <p>Investigaciones científicas han demostrado que las microdosis de psilocibina tienen efectos terapéuticos significativos en el tratamiento de diversas condiciones de salud mental.</p>
        <p>Entre los beneficios reportados se encuentran la reducción de los síntomas de ansiedad y depresión, así como mejoras en la calidad de vida y el bienestar psicológico en general.</p>
      </section>

      <section data-section id="estandares" className="section">
        <h2>Estándares de Calidad</h2>
        <p>En Dimension Fungi, nos destacamos por seguir rigurosos estándares en el cultivo y producción de nuestras microdosis de psilocibina.</p>
        <p>Contamos con cultivadores expertos y utilizamos técnicas de cultivo avanzadas para garantizar la pureza y la calidad de nuestros productos.</p>
      </section>

      <section data-section id="testimonios" className="section">
        <h1 className="main-title">Testimonios</h1>
        <div className="testimonial-carousel">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"Gracias a Dimension Fungi, he logrado superar mis problemas de ansiedad y ahora puedo disfrutar de una vida plena y equilibrada. ¡Recomendado!"</p>
              <p className="testimonial-author">- Laura Sánchez</p>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"Las microdosis de psilocibina han sido una revelación para mí. Han mejorado mi enfoque y creatividad, lo cual ha tenido un impacto positivo en mi trabajo y proyectos personales."</p>
              <p className="testimonial-author">- Juan Pérez</p>
            </div>
          </div>
        </div>
        <div className="testimonial-buttons">
          <button className="testimonial-button" id="prev-button">&larr;</button>
          <button className="testimonial-button" id="next-button">&rarr;</button>
        </div>
      </section>


      <section data-section id="comprar" className="section">
        <h2>Obtén tus Microdosis de Psilocibina</h2>
        <p>Ofrecemos frascos de microdosis para 1, 2 y 3 meses de tratamiento.</p>
        <p>Nuestro equipo de expertos proporciona una asesoría completa sobre el consumo adecuado de las microdosis. Además, contamos con psicólogos y terapeutas disponibles para brindar apoyo adicional si es necesario.</p>
        <a className="cta-button" href="#">Comprar ahora</a>
      </section>

      <a className="whatsapp-button" href="https://api.whatsapp.com/send?phone=TU_NUMERO_DE_WHATSAPP" target="_blank">
        <img src="whatsapp-icon.png" alt="WhatsApp" />
      </a>

      <footer>
        <p>Dimension Fungi &copy; 2023. Todos los derechos reservados.</p>
      </footer>
    </>
  )
}

export default Body;