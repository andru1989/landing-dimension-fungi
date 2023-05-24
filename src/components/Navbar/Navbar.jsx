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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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

  const activeClassName = (sectionName) => {
    return activeSection === sectionName ? 'selected' : ''
  }

  return (
    <>
      <header>
        <img className="logo" src={Logo} alt="Dimension Fungi" />
        <nav>
          <ul className="navbar">
            <li>
              <Link
                to="#inicio"
                className={activeClassName('inicio')}
                onClick={(event) => handleSmoothScroll(event, 'inicio')}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="#beneficios"
                className={activeClassName('beneficios')}
                onClick={(event) => handleSmoothScroll(event, 'beneficios')}
              >
                Beneficios
              </Link>
            </li>
            <li>
              <Link
                to="#datos-cientificos"
                className={activeClassName('datos-cientificos')}
                onClick={(event) => handleSmoothScroll(event, 'datos-cientificos')}
              >
                Datos cientificos
              </Link>
            </li>
            <li>
              <Link
                to="#estandares"
                className={activeClassName('estandares')}
                onClick={(event) => handleSmoothScroll(event, 'estandares')}
              >
                Estandares de calidad
              </Link>
            </li>
            <li>
              <Link
                to="#testimonios"
                className={activeClassName('testimonios')}
                onClick={(event) => handleSmoothScroll(event, 'testimonios')}
              >
                Testimonios
              </Link>
            </li>
            <li>
              <Link
                to="#comprar"
                className={activeClassName('comprar')}
                onClick={(event) => handleSmoothScroll(event, 'comprar')}
              >
                Comprar
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
