import { Link } from "react-router"
import LegalLayout from "../components/legal/LegalLayout"
import { COMPANY } from "../components/legal/companyData"

export default function PoliticaPrivacidad() {
  return (
    <LegalLayout title="Política de privacidad">
      <h2>1. Recogida, tratamiento y uso de los datos personales en la web</h2>
      <p>
        En base a lo dispuesto en el Reglamento General de Protección de Datos 2016/679 (RGPD) y en la Ley Orgánica
        3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de derechos digitales (LOPDGDD), le
        informamos que para hacer uso de algunos de los servicios que le ofrece nuestra web, puede ser necesario
        que nos suministre determinados datos de carácter personal.
      </p>
      <p>El responsable del tratamiento de los datos es:</p>
      <ul>
        <li>Denominación social: {COMPANY.name}</li>
        <li>NIF: {COMPANY.nif}</li>
        <li>Domicilio principal: {COMPANY.address}</li>
        <li>
          Correo electrónico: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
        </li>
        <li>Teléfono de contacto: {COMPANY.phone}</li>
        <li>Página web: {COMPANY.domain}</li>
      </ul>
      <p>
        Los contenidos del sitio web tienen como finalidad informar a los usuarios de los servicios ofrecidos por
        el centro. Los datos objeto de tratamiento serán aquellos que nos facilite a través del formulario de
        contacto de la web, de una llamada telefónica o de los correos electrónicos que dirija a la dirección
        indicada, así como aquellos otros que se generen durante el mantenimiento de la relación correspondiente.
      </p>
      <p>
        Los campos señalados como obligatorios en el formulario deberán cumplimentarse necesariamente, de modo que
        la omisión de alguno de ellos podrá comportar la imposibilidad de que podamos atender su solicitud.
      </p>
      <p>
        La persona que acceda a este sitio web (en adelante, el usuario) asegura que tiene la edad mínima legal
        establecida por el RGPD y la LOPDGDD (14 años) para otorgar el consentimiento en relación con los
        servicios de la sociedad de la información. Si es menor de 14 años, el consentimiento deberá otorgarlo su
        padre, madre, tutor o representante legal.
      </p>

      <h2>2. Finalidad del tratamiento de los datos personales</h2>
      <h3>2.1. ¿Con qué finalidad trataremos sus datos personales?</h3>
      <p>
        En {COMPANY.name} trataremos sus datos personales, recabados a través del sitio web, con la siguiente
        finalidad:
      </p>
      <ul>
        <li>
          Atender y responder las consultas y solicitudes de información o de cita que nos remita a través del
          formulario de contacto, por teléfono o por correo electrónico, relacionadas con los servicios que presta
          el centro.
        </li>
      </ul>
      <p>
        No elaboramos perfiles de los usuarios, no enviamos boletines ni comunicaciones comerciales y no
        adoptamos decisiones automatizadas a partir de sus datos.
      </p>
      <h3>2.2. ¿Por cuánto tiempo conservaremos sus datos?</h3>
      <p>
        Los datos personales proporcionados se conservarán mientras se gestione su consulta y/o no solicite su
        supresión, y durante el tiempo mínimo necesario para cumplir con las obligaciones legales o por si
        pudieran derivarse responsabilidades legales.
      </p>

      <h2>3. Legitimación</h2>
      <p>
        El tratamiento de sus datos se realiza con base en su consentimiento libre, específico, informado e
        inequívoco, que nos otorga al marcar la casilla de aceptación de esta política de privacidad en el
        formulario de contacto. Puede retirar su consentimiento en cualquier momento, sin que ello afecte a la
        licitud del tratamiento previo a su retirada.
      </p>
      <p>
        En caso de que no nos facilite sus datos o los facilite de forma errónea o incompleta, no podremos
        atender su solicitud.
      </p>

      <h2>4. Garantía</h2>
      <p>
        El usuario garantiza que los datos aportados son verdaderos, exactos, completos y actualizados, siendo
        responsable de cualquier daño o perjuicio, directo o indirecto, que pudiera ocasionarse como consecuencia
        del incumplimiento de tal obligación. En el caso de que los datos aportados pertenecieran a un tercero, el
        usuario garantiza que ha informado a dicho tercero y obtenido su autorización para facilitar sus datos
        personales a {COMPANY.name}.
      </p>

      <h2>5. Destinatarios</h2>
      <p>
        Sus datos serán tratados bajo estrictas medidas de seguridad que garanticen su confidencialidad. No se
        cederán a terceros, salvo obligación legal, y únicamente podrán acceder a ellos los siguientes
        proveedores que prestan servicios a {COMPANY.name} y que actúan como encargados del tratamiento:
      </p>
      <ul>
        <li>
          <strong>Supabase</strong>: alojamiento de la base de datos en la que se almacenan los mensajes del
          formulario. Los datos se alojan en servidores situados en la Unión Europea (Estocolmo, Suecia).
        </li>
        <li>
          <strong>EmailJS</strong>: servicio de envío de correo electrónico mediante el que se nos hace llegar el
          contenido del formulario.
        </li>
        <li>Organismos y entidades oficiales, en cumplimiento de las normativas y leyes vigentes.</li>
      </ul>
      <p>
        Alguno de estos proveedores puede tratar datos desde fuera del Espacio Económico Europeo. En ese caso, la
        transferencia internacional se ampara en las garantías previstas en el RGPD (decisión de adecuación de la
        Comisión Europea o cláusulas contractuales tipo). Puede solicitar más información en {COMPANY.email}.
      </p>
      <p>
        Además, si acepta las cookies de terceros, Google LLC tratará datos técnicos de su navegación al mostrar
        el mapa de ubicación. Encontrará más información en nuestra{" "}
        <Link to="/politica-de-cookies">Política de cookies</Link>.
      </p>

      <h2>6. Derechos</h2>
      <p>
        Como interesado que nos ha proporcionado sus datos personales, tiene derecho a obtener confirmación sobre
        si {COMPANY.name} está tratando sus datos personales y, en concreto, está facultado para ejercitar los
        siguientes derechos:
      </p>
      <ul>
        <li>Derecho de ACCESO a sus datos personales.</li>
        <li>Derecho de RECTIFICACIÓN de los datos inexactos.</li>
        <li>
          Derecho de SUPRESIÓN cuando, entre otros motivos, los datos ya no sean necesarios para los fines que
          fueron recogidos.
        </li>
        <li>
          Derecho a la LIMITACIÓN DEL TRATAMIENTO de sus datos en determinadas circunstancias, en cuyo caso
          únicamente los conservaremos para el ejercicio o la defensa de reclamaciones.
        </li>
        <li>
          Derecho de OPOSICIÓN al tratamiento de sus datos, por motivos relacionados con su situación particular.
          Dejaremos de tratar los datos, salvo por motivos legítimos imperiosos o el ejercicio o la defensa de
          posibles reclamaciones.
        </li>
        <li>Derecho a la PORTABILIDAD de los datos.</li>
        <li>Derecho a RETIRAR el consentimiento en cualquier momento.</li>
      </ul>
      <p>
        Podrá ejercer tales derechos o solicitar información adicional presentando copia de un documento
        identificativo y exponiendo brevemente su caso y el derecho que quiere ejercer, mediante carta dirigida a{" "}
        {COMPANY.name} a la dirección {COMPANY.address}, o a través del correo electrónico {COMPANY.email}.
      </p>
      <p>
        Además, en caso de que se haya vulnerado cualquiera de sus derechos, tiene derecho a presentar una
        reclamación ante la Agencia Española de Protección de Datos (AEPD), en C/ Jorge Juan, 6, 28001 Madrid, o a
        través de su sede electrónica:{" "}
        <a href="https://sedeagpd.gob.es/sede-electronica-web/" target="_blank" rel="noopener noreferrer">
          https://sedeagpd.gob.es/sede-electronica-web/
        </a>
        .
      </p>

      <h2>7. Duración y modificación de la política de privacidad</h2>
      <p>
        {COMPANY.name} se reserva el derecho a modificar, total o parcialmente, la presente política de
        privacidad, publicando los cambios en el sitio web. En consecuencia, se entenderán como vigentes las
        condiciones que estén publicadas en el momento en el que el usuario acceda, por lo que deberá leerlas
        periódicamente.
      </p>
    </LegalLayout>
  )
}
