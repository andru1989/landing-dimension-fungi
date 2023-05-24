// import React, { useState, useEffect, useRef } from 'react';
// import Logo from '../../assets/logo.png';
// import './Navbar.css'

// function Navbar() {
//   const [activeSection, setActiveSection] = useState(null);
//   const [initialized, setInitialized] = useState(false);
//   const sectionsRef = useRef([]);

//   const handleScroll = () => {
//     const pageYOffset = window.pageYOffset;
//     let newActiveSection = null;

//     sectionsRef.current.forEach((section) => {
//       const sectionHeight = section.offsetHeight;
//       const sectionOffsetTop = section.offsetTop - 101;
//       // console.log('sectionOffsetTop ' + section.id, sectionOffsetTop)
//       // console.log('sectionHeight ' + section.id, sectionHeight)
//       // console.log('suma', sectionOffsetTop + sectionHeight)
//       // console.log('pageYOffset', pageYOffset)
//       // console.log('pageYOffset >= sectionOffsetTop', pageYOffset >= sectionOffsetTop)

//       if (pageYOffset >= sectionOffsetTop && pageYOffset < sectionOffsetTop + sectionHeight) {
//         newActiveSection = section.id;
//       }
//     });

//     setActiveSection(newActiveSection);
//   }

//   useEffect(() => {
//     sectionsRef.current = document.querySelectorAll('[data-section]');
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     if (!initialized) {
//       const sectionId = window.location.hash.slice(1);
//       if (sectionId) {
//         setActiveSection(sectionId);
//       }
//       setInitialized(true);
//     }
//   }, [initialized]);

//   const handleSmoothScroll = (event, sectionId) => {
//     event.preventDefault();
//     setActiveSection(sectionId);
//     const sectionsArray = Array.from(sectionsRef.current); // Convertir en un arreglo
//     const section = sectionsArray.find((section) => section.id === sectionId);
//     if (section) {
//       const topOffset = section.offsetTop - 100; // Restar el margen superior
//       window.scrollTo({
//         top: topOffset,
//         behavior: 'smooth',
//       });
//     }
//   };

//   return (
//     <header>
//       <img className="logo" src={Logo} alt="Dimension Fungi" />
//       <nav>
//         <ul className="navbar">
//           <li><a href="#inicio" className={activeSection === 'inicio' ? 'selected' : ''} onClick={(event) => handleSmoothScroll(event, 'inicio')}>Inicio</a></li>
//           <li><a href="#beneficios" className={activeSection === 'beneficios' ? 'selected' : ''} onClick={(event) => handleSmoothScroll(event, 'beneficios')}>Beneficios</a></li>
//           <li><a href="#datos-cientificos" className={activeSection === 'datos-cientificos' ? 'selected' : ''} onClick={(event) => handleSmoothScroll(event, 'datos-cientificos')}>Datos Científicos</a></li>
//           <li><a href="#estandares" className={activeSection === 'estandares' ? 'selected' : ''} onClick={(event) => handleSmoothScroll(event, 'estandares')}>Estándares de Calidad</a></li>
//           <li><a href="#testimonios" className={activeSection === 'testimonios' ? 'selected' : ''} onClick={(event) => handleSmoothScroll(event, 'testimonios')}>Testimonios</a></li>
//           <li><a href="#comprar" className={activeSection === 'comprar' ? 'selected' : ''} onClick={(event) => handleSmoothScroll(event, 'comprar')}>Comprar</a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Navbar;


import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './Navbar.css';

function Navbar() {
  const [activeSection, setActiveSection] = useState(null);
  const sectionsRef = useRef([]);

  const handleScroll = () => {
    const pageYOffset = window.pageYOffset;
    let newActiveSection = null;

    sectionsRef.current.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionOffsetTop = section.offsetTop - 101;

      if (pageYOffset >= sectionOffsetTop && pageYOffset < sectionOffsetTop + sectionHeight) {
        newActiveSection = section.id;
      }
    });

    setActiveSection(newActiveSection);
  };

  useEffect(() => {
    sectionsRef.current = Array.from(document.querySelectorAll('[data-section]'));
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const currentHash = window.location.hash.slice(1);
    const targetSection = sectionsRef.current.find((section) => section.id === currentHash);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 100,
        behavior: 'smooth',
      });

      setActiveSection(currentHash);
    } else {
      setActiveSection('inicio');
    }
  }, []);

  const handleSmoothScroll = (event, sectionId) => {
    event.preventDefault();
    setActiveSection(sectionId);
    const section = sectionsRef.current.find((section) => section.id === sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header>
        <img className="logo" src={Logo} alt="Dimension Fungi" />
        <nav>
          <ul className="navbar">
            <li>
              <Link
                to="#inicio"
                className={activeSection === 'inicio' ? 'selected' : ''}
                onClick={(event) => handleSmoothScroll(event, 'inicio')}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="#beneficios"
                className={activeSection === 'beneficios' ? 'selected' : ''}
                onClick={(event) => handleSmoothScroll(event, 'beneficios')}
              >
                Beneficios
              </Link>
            </li>
            <li>
              <Link
                to="#datos-cientificos"
                className={activeSection === 'datos-cientificos' ? 'selected' : ''}
                onClick={(event) => handleSmoothScroll(event, 'datos-cientificos')}
              >
                Datos cientificos
              </Link>
            </li>
            <li>
              <Link
                to="#estandares"
                className={activeSection === 'estandares' ? 'selected' : ''}
                onClick={(event) => handleSmoothScroll(event, 'estandares')}
              >
                Estandares de calidad
              </Link>
            </li>
            <li>
              <Link
                to="#testimonios"
                className={activeSection === 'testimonios' ? 'selected' : ''}
                onClick={(event) => handleSmoothScroll(event, 'testimonios')}
              >
                Testimonios
              </Link>
            </li>
            <li>
              <Link
                to="#comprar"
                className={activeSection === 'comprar' ? 'selected' : ''}
                onClick={(event) => handleSmoothScroll(event, 'comprar')}
              >
                Comprar
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Resto del contenido de la página */}
    </>
  );
}

export default Navbar;
