import { site } from "@/config/site";
import { LegalList, LegalPage, LegalSection } from "./LegalPage";

export default function CookiePolicyPage() {
  return (
    <LegalPage title="Política de cookies" updatedAt="02/01/2025">
      <LegalSection title="1. Introducción">
        <p>
          En la web de la <strong>{site.name}</strong> nos comprometemos a ser transparentes sobre
          los datos que recopilamos. El objetivo de esta política es informar clara y precisamente a
          los usuarios sobre el funcionamiento de las cookies en nuestro sitio web.
        </p>
      </LegalSection>

      <LegalSection title="2. ¿Qué son las cookies?">
        <p>
          Una cookie es un pequeño archivo de texto que los sitios web guardan en su ordenador o
          dispositivo móvil cuando usted los visita. Permiten al sitio web recordar sus acciones y
          preferencias durante un período de tiempo, para que no tenga que volver a configurarlas
          cada vez que regresa al sitio o navega de una página a otra.
        </p>
      </LegalSection>

      <LegalSection title="3. Uso de cookies en esta web" highlighted>
        <p className="font-medium">
          Esta página web <strong>NO utiliza cookies propias ni de terceros</strong> con fines
          publicitarios, de análisis de comportamiento, rastreo o creación de perfiles comerciales.
        </p>
        <p>
          El sitio web está diseñado con fines meramente informativos y de contacto profesional. No
          se requiere registro de usuario ni se almacenan datos de navegación persistentes.
        </p>
        <p className="text-sm">
          <em>Nota técnica:</em> Es posible que el servidor donde se aloja la web utilice pequeñas
          cookies técnicas temporales e imprescindibles para el correcto funcionamiento de la
          transmisión de comunicaciones (por ejemplo, para cargar las fuentes de letra o los
          elementos de seguridad), las cuales están exentas de la obligación de consentimiento según
          el artículo 22 de la LSSI.
        </p>
      </LegalSection>

      <LegalSection title="4. ¿Cómo puede gestionar o desactivar las cookies?">
        <p>
          Aunque nuestra web no utiliza cookies invasivas, usted siempre tiene la libertad de
          configurar su navegador para rechazar cualquier tipo de cookie o para eliminar las que ya
          se hayan almacenado.
        </p>
        <p>
          Puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la
          configuración de las opciones del navegador instalado en su ordenador:
        </p>
        <LegalList>
          <li>
            <strong>Google Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies y
            otros datos de sitios.
          </li>
          <li>
            <strong>Mozilla Firefox:</strong> Ajustes &gt; Privacidad &amp; Seguridad &gt; Cookies y
            datos del sitio.
          </li>
          <li>
            <strong>Safari:</strong> Preferencias &gt; Privacidad.
          </li>
          <li>
            <strong>Microsoft Edge:</strong> Configuración &gt; Cookies y permisos del sitio.
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection title="5. Enlaces a terceros">
        <p>
          Esta web puede contener enlaces a sitios web de terceros (como la ubicación en{" "}
          <strong>Google Maps</strong> o el enlace a <strong>WhatsApp</strong>). Si usted hace clic
          en dichos enlaces y abandona nuestra web, la {site.doctor} no se hace responsable de las
          prácticas de privacidad ni del uso de cookies que dichos terceros puedan realizar. Le
          recomendamos leer las políticas de privacidad de esas plataformas.
        </p>
        <p>
          El mapa de ubicación de la sección «Pedir cita» es un servicio de{" "}
          <strong>Google Maps</strong> que <strong>no se carga por defecto</strong>: solo se muestra
          si usted pulsa el botón «Mostrar mapa». En ese momento Google puede instalar sus propias
          cookies, conforme a su política de privacidad.
        </p>
      </LegalSection>

      <LegalSection title="6. Datos de contacto">
        <p>
          Si tiene cualquier duda acerca de esta política de cookies, puede contactar con nosotros:
        </p>
        <div className="inline-block rounded-md border border-sand-200 p-4 text-sm">
          <p>
            <strong>Titular:</strong> {site.doctorFullName}
          </p>
          <p>
            <strong>Dirección:</strong> {site.address.full}
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href={site.email.href} className="text-gold-700 hover:underline">
              {site.email.display}
            </a>
          </p>
        </div>
      </LegalSection>
    </LegalPage>
  );
}
