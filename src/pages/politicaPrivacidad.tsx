import Header from "../components/header";
import Footer from "../components/footer";
import Whatsapp from "../components/whatsapp";

export default function PoliticaPrivacidad() {
  return (
    <>
      {/* HEADER */}
      <Header />

      {/* CONTENIDO */}
      <main className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-[#2E2E2E] leading-relaxed">
          <h1 className="text-3xl font-semibold mb-8 text-[#B39B7C]">
            Política de privacidad
          </h1>

          {/* ENTIDAD */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-2 text-[#8A7356]">
              Entidad
            </h2>
            <p>
              La consulta de la Dra. <strong>Marta Sampil González</strong> está
              registrada en el Registro Sanitario de Galicia con el número{" "}
              <strong>C-27-001390</strong>.
            </p>
            <p>
              Dirección: R. Roberto Baamonde, 24, 1º B, 27400 Monforte de Lemos,
              Lugo
            </p>
          </section>

          {/* TRATAMIENTO DE DATOS */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-2 text-[#8A7356]">
              Tratamiento de los datos
            </h2>
            <p>
              El Usuario garantiza que los Datos Personales facilitados a la Dra.
              Marta Sampil González son veraces y correctos, haciéndose
              responsable de comunicar cualquier modificación en los mismos.
            </p>
          </section>

          {/* FINALIDAD */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-2 text-[#8A7356]">
              Finalidad y cesión de datos
            </h2>
            <p>
              Los datos personales serán tratados con la finalidad de gestionar,
              administrar y prestar los servicios que esta web ofrece a sus
              usuarios.
            </p>
          </section>

          {/* CITAS */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-2 text-[#8A7356]">
              Tratamiento de citas, consultas, dudas y/o sugerencias
            </h2>
            <p>
              Los datos enviados por correo electrónico, formularios o
              telefónicamente con estos fines serán tratados con la finalidad de
              resolver las consultas o dudas planteadas, así como atender sus
              sugerencias.
            </p>
          </section>

          {/* COOKIES */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-2 text-[#8A7356]">
              Uso de cookies
            </h2>
            <p>
              Nuestra web utiliza cookies, pequeños ficheros de datos que se
              generan en el ordenador del usuario y que permiten obtener la
              siguiente información:
            </p>

            <ul className="list-disc pl-6 mt-3">
              <li>
                La fecha y hora de la última vez que el usuario visitó la web.
              </li>
              <li>
                Elementos de seguridad que intervienen en el control de acceso a
                las áreas restringidas.
              </li>
            </ul>

            <p className="mt-4">
              El usuario puede impedir la generación de cookies mediante la
              configuración de su navegador. Sin embargo, el titular de la web no
              se responsabiliza de que la desactivación de las mismas impida el
              correcto funcionamiento del sitio.
            </p>
          </section>

          {/* DERECHOS */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-2 text-[#8A7356]">
              Ejercicio de derechos de acceso, rectificación, cancelación y
              oposición
            </h2>
            <p>
              Los datos no serán almacenados en soportes distintos a las propias
              comunicaciones emitidas desde esta web (emails y formulario de
              contacto).
            </p>
            <p className="mt-3">
              Aun así, puede ejercer sus derechos dirigiéndose por escrito a la
              Dra. Marta Sampil González a la dirección postal de la consulta.
            </p>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />

      {/* WHATSAPP FLOATING */}
      <Whatsapp />
    </>
  );
}