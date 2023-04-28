import React from "react";
import { useNavigate } from "react-router-dom";
import photoAbout from "../../assets/photo-profile.jpg";
import stylesAbout from "./About.module.css";

const About = () => {
  const backHome = useNavigate();
  const handleBack = () => {
    backHome("/home");
  };

  const dataProfile = {
    name: "David Leonardo Garzón Piña",
    age: 29,
    prefession: "Frontend Developer",
    hobbies: [
      "codear",
      "lectura filosofica",
      "Hacer ejercicio",
      "Comer",
      "Escuchar musica",
      "Investigar",
    ],
    email: "garzondavidsorrento@gmail.com",
    skills: ["javaScript", "React", "CSS", "HTML", "JAVA", "GitHub", "Node"],
    description:
      "Soy una persona apasionada por lo que hago, entusiasta de la tecnologia con 3 años de experiencia. Busco llevar mi experiencia a proyectos de gran escala, enriqueciendola, al mismo tiempo que volverme mas proactivo con el aprendizaje continuo de nuevas tecnologias",
  };

  return (
    <>
      <div className={stylesAbout.general}>
      <button
        className={stylesAbout["aboutContainer-button"]}
        onClick={handleBack}
      >
        Back to Home
      </button>
        <section className={stylesAbout.aboutContainer}>
          <article>
            <figure>
              <img src={photoAbout} alt={dataProfile.name} />
            </figure>
            <div className={stylesAbout["aboutContainer-data"]}>
              <h3>{dataProfile.name}</h3>
              <h4>Edad: {dataProfile.age}</h4>
              <h4>Profesion: {dataProfile.prefession}</h4>
              <h4>Correo electronico: {dataProfile.email}</h4>
              <p>Descripcion: {dataProfile.description}</p>
              <p>Habilidades: {dataProfile.skills.join(", ")}</p>
              <p>Hobbies: {dataProfile.hobbies.join(", ")}</p>
            </div>
          </article>
        </section>
      </div>
    </>
  );
};

export default About;
