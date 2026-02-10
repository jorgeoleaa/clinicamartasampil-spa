import Footer from "../components/footer";
import Header from "../components/header";
import Whatsapp from "../components/whatsapp";

export default function CookiesPolitica() {

  return (
    <>
      {/* HEADER */}
      <Header />

      {/* CONTENIDO PRINCIPAL */}
      <main className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-[#2E2E2E] leading-relaxed">
          <h1 className="text-3xl font-semibold mb-8 text-[#B39B7C]">
            Política de Cookies
          </h1>
          
          <p className="text-sm text-[#7A7A7A] mb-8">
            Última actualización: 02/01/2025
          </p>

          {/* INTRODUCCIÓN */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-2 text-[#8A7356]">
              1. Introducción
            </h2>
            <p>
              En la web de la <strong>Clínica Oftalmológica Dra. Marta Sampil</strong> nos comprometemos a ser transparentes sobre los datos que recopilamos. 
              El objetivo de esta política es informar clara y precisamente a los usuarios sobre el funcionamiento de las cookies en nuestro sitio web.
            </p>
          </section>

          {/* QUÉ SON */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-2 text-[#8A7356]">
              2. ¿Qué son las cookies?
            </h2>
            <p>
              Una cookie es un pequeño archivo de texto que los sitios web guardan en su ordenador o dispositivo móvil cuando usted los visita. 
              Permiten al sitio web recordar sus acciones y preferencias durante un período de tiempo, para que no tenga que volver a configurarlas cada vez que regresa al sitio o navega de una página a otra.
            </p>
          </section>

          {/* DECLARACIÓN DE NO USO */}
          <section className="mb-10 p-6 bg-[#FAF8F4] border-l-4 border-[#B39B7C] rounded-r-md">
            <h2 className="text-xl font-semibold mb-4 text-[#8A7356]">
              3. Uso de cookies en esta web
            </h2>
            <p className="font-medium mb-2">
              Esta página web <strong>NO utiliza cookies propias ni de terceros</strong> con fines publicitarios, de análisis de comportamiento, rastreo o creación de perfiles comerciales.
            </p>
            <p>
              El sitio web está diseñado con fines meramente informativos y de contacto profesional. No se requiere registro de usuario ni se almacenan datos de navegación persistentes.
            </p>
            <p className="mt-4 text-sm">
              <em>Nota técnica:</em> Es posible que el servidor donde se aloja la web utilice pequeñas cookies técnicas temporales e imprescindibles para el correcto funcionamiento de la transmisión de comunicaciones (por ejemplo, para cargar las fuentes de letra o los elementos de seguridad), las cuales están exentas de la obligación de consentimiento según el artículo 22 de la LSSI.
            </p>
          </section>

          {/* GESTIÓN */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-2 text-[#8A7356]">
              4. ¿Cómo puede gestionar o desactivar las cookies?
            </h2>
            <p>
              Aunque nuestra web no utiliza cookies invasivas, usted siempre tiene la libertad de configurar su navegador para rechazar cualquier tipo de cookie o para eliminar las que ya se hayan almacenado.
            </p>
            <p className="mt-3">
              Puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                <strong>Google Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies y otros datos de sitios.
              </li>
              <li>
                <strong>Mozilla Firefox:</strong> Ajustes &gt; Privacidad & Seguridad &gt; Cookies y datos del sitio.
              </li>
              <li>
                <strong>Safari:</strong> Preferencias &gt; Privacidad.
              </li>
              <li>
                <strong>Microsoft Edge:</strong> Configuración &gt; Cookies y permisos del sitio.
              </li>
            </ul>
          </section>

          {/* ENLACES EXTERNOS */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-2 text-[#8A7356]">
              5. Enlaces a terceros
            </h2>
            <p>
              Esta web puede contener enlaces a sitios web de terceros (como la ubicación en <strong>Google Maps</strong> o el enlace a <strong>WhatsApp</strong>). 
              Si usted hace clic en dichos enlaces y abandona nuestra web, la Dra. Marta Sampil no se hace responsable de las prácticas de privacidad ni del uso de cookies que dichos terceros puedan realizar. Le recomendamos leer las políticas de privacidad de esas plataformas.
            </p>
          </section>

          {/* CONTACTO */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-2 text-[#8A7356]">
              6. Datos de contacto
            </h2>
            <p>
              Si tiene cualquier duda acerca de esta política de cookies, puede contactar con nosotros:
            </p>
            <div className="mt-4 p-4 border border-[#EDE7DE] rounded-md inline-block text-sm">
               <p><strong>Titular:</strong> Dra. Marta Sampil González</p>
               <p><strong>Dirección:</strong> R. Roberto Baamonde, 24, 1º B, 27400 Monforte de Lemos, Lugo</p>
               <p><strong>Email:</strong> <a href="mailto:contacto@clinicamartasampil.com" className="hover:underline text-[#8A7356]">contacto@clinicamartasampil.com</a></p>
            </div>
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