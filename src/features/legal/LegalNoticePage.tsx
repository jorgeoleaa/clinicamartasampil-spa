import { site } from "@/config/site";
import { LegalList, LegalPage, LegalSection } from "./LegalPage";

export default function LegalNoticePage() {
  return (
    <LegalPage title="Aviso legal">
      <LegalSection title="Identidad del titular" highlighted>
        <p>
          <strong>{site.domain}</strong> es una web gestionada y propiedad de la{" "}
          <strong>{site.doctorFullName}</strong>.
        </p>
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Domicilio social:</strong> {site.address.full} (España).
          </li>
          <li>
            <strong>Registro Sanitario:</strong> La consulta de la {site.doctorFullName} está
            registrada en el Registro Sanitario de Galicia con el número{" "}
            <strong>{site.legal.healthRegistry}</strong>.
          </li>
          <li>
            <strong>Colegiada nº:</strong> {site.legal.medicalLicense}
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Objeto y aceptación">
        <p>
          Este sitio web ha sido creado con carácter exclusivamente informativo y para uso de los
          usuarios/as. A través de este Aviso Legal, se pretende regular el acceso y uso de este
          sitio web, así como la relación entre el sitio web y sus usuarios.
        </p>
        <p>Accediendo a este sitio web se aceptan los siguientes términos y condiciones:</p>
      </LegalSection>

      <LegalSection title="Términos y condiciones de uso">
        <LegalList>
          <li>El acceso a este sitio web es responsabilidad exclusiva de los usuarios/as.</li>
          <li>
            El simple acceso a este sitio web no supone entablar ningún tipo de relación comercial
            entre la {site.doctorFullName} y el/la usuario/a.
          </li>
          <li>
            El acceso y la navegación en este sitio web supone aceptar y conocer las advertencias
            legales, condiciones y términos de uso contenidas en ella.
          </li>
          <li>
            El titular del sitio web puede ofrecer servicios que podrán encontrarse sometidos a unas
            condiciones particulares propias que, según los casos, sustituyan, completen y/o
            modifiquen las presentes condiciones, y sobre las cuales se informará al usuario en cada
            caso concreto.
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection title="Propiedad intelectual e industrial">
        <p>
          Todos los contenidos del sitio web (incluyendo, sin carácter limitativo, bases de datos,
          imágenes y fotografías, dibujos, gráficos y archivos de texto) son propiedad de la{" "}
          {site.doctorFullName} o de los proveedores de contenidos, habiendo sido, en este último
          caso, objeto de licencia o cesión por parte de los mismos, y están protegidos por las
          normas nacionales e internacionales de propiedad intelectual.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
