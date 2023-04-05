import React from "react";
import Jason from "../Imágenes/foto.jpg";

export default function About() {
  return (
    <div className="p-10">
      <div className="lg:flex justify-between xl:flex xl:justify-center xl:space-x-96">
        <div className="flex justify-center lg:mt-10">
          <img className="rounded-full w-[200px] h-[250px] lg:w-[300px] lg:h-[350px]" src={Jason} />
        </div>
        <div className="mt-10 lg:w-96">
          <h1 className="font-semibold">
          ¡Hola! Mi nombre es Jason Valderrama, tengo 25 años y soy de Mendoza, Argentina. Me apasiona la programación web y estoy en constante crecimiento para mejorar mis habilidades. Me destaco por mi habilidad para aprender rápidamente nuevas tecnologías y trabajar en equipo de manera efectiva. Además, soy egresado del bootcamp de Henry, donde me especialicé como Full Stack Developer.
            Las tecnologías aprendidas en el bootcamp fueron las siguientes:
          </h1>
          <h1 className="mt-10 grid grid-cols-4 place-items-center">
            <img src="https://img.icons8.com/color/48/000000/html-5--v1.png" />{" "}
            <img src="https://img.icons8.com/color/48/000000/css3.png" />{" "}
            <img src="https://img.icons8.com/color/48/000000/redux.png" />{" "}
            <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" />{" "}
            <img src="https://img.icons8.com/color/48/null/react-native.png" />
            <img src="https://img.icons8.com/color/48/000000/nodejs.png" />{" "}
            <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/null/external-postgre-sql-a-free-and-open-source-relational-database-management-system-logo-color-tal-revivo.png" />{" "}
            <img src="https://img.icons8.com/color/48/000000/npm.png" />
            <img src="https://img.icons8.com/color/48/null/visual-studio-code-2019.png" />{" "}
            <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/null/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png" />{" "}
            <img src="https://img.icons8.com/color/48/null/git.png" />
            <img
              src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg"
              alt="Express.js"
              width="60px"
            />
          </h1>
        </div>
      </div>
    </div>
  );
}
