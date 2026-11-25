import { site } from "@/config/site";
import { LegalList, LegalPage, LegalSection } from "./LegalPage";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Política de privacidad">
      <LegalSection title="Entidad">
        <p>
          La consulta de la Dra. <strong>Marta Sampil González</strong> está registrada en el
          Registro Sanitario de Galicia con el número <strong>{site.legal.healthRegistry}</strong>.
        </p>
        <p>Dirección: {site.address.full}</p>
      </LegalSection>

      <LegalSection title="Tratamiento de los datos">
        <p>
          El Usuario garantiza que los Datos Personales facilitados a la {site.doctorFullName} son
          veraces y correctos, haciéndose responsable de comunicar cualquier modificación en los
          mismos.
        </p>
      </LegalSection>

      <LegalSection title="Finalidad y cesión de datos">
        <p>
          Los datos personales serán tratados con la finalidad de gestionar, administrar y prestar
          los servicios que esta web ofrece a sus usuarios.
        </p>
      </LegalSection>

      <LegalSection title="Tratamiento de citas, consultas, dudas y/o sugerencias">
        <p>
          Los datos enviados por correo electrónico, formularios o telefónicamente con estos fines
          serán tratados con la finalidad de resolver las consultas o dudas planteadas, así como
          atender sus sugerencias.
        </p>
      </LegalSection>

      <LegalSection title="Uso de cookies">
        <p>
          Nuestra web utiliza cookies, pequeños ficheros de datos que se generan en el ordenador del
          usuario y que permiten obtener la siguiente información:
        </p>
        <LegalList>
          <li>La fecha y hora de la última vez que el usuario visitó la web.</li>
          <li>
            Elementos de seguridad que intervienen en el control de acceso a las áreas restringidas.
          </li>
        </LegalList>
        <p>
          El usuario puede impedir la generación de cookies mediante la configuración de su
          navegador. Sin embargo, el titular de la web no se responsabiliza de que la desactivación
          de las mismas impida el correcto funcionamiento del sitio.
        </p>
      </LegalSection>

      <LegalSection title="Ejercicio de derechos de acceso, rectificación, cancelación y oposición">
        <p>
          Los datos no serán almacenados en soportes distintos a las propias comunicaciones emitidas
          desde esta web (emails y formulario de contacto).
        </p>
        <p>
          Aun así, puede ejercer sus derechos dirigiéndose por escrito a la {site.doctorFullName} a
          la dirección postal de la consulta.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
