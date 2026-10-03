import LegalLayout from "../components/legal/LegalLayout"
import { COMPANY } from "../components/legal/companyData"

export default function AvisoLegal() {
  return (
    <LegalLayout title="Aviso legal">
      <p>
        {COMPANY.name} se reserva el derecho de modificar cualquier tipo de información que pudiera aparecer en el
        sitio web, sin que exista obligación de preavisar o poner en conocimiento de los usuarios dichas
        modificaciones, entendiéndose como suficiente con la publicación en el sitio web de {COMPANY.name}.
      </p>
      <p>
        En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
        Información y Comercio Electrónico, a continuación se exponen los datos identificativos de la empresa
        propietaria del dominio {COMPANY.domain}:
      </p>

      <h2>1. Datos identificativos</h2>
      <ul>
        <li>Nombre de dominio: {COMPANY.domain}</li>
        <li>Denominación social: {COMPANY.name}</li>
        <li>NIF: {COMPANY.nif}</li>
        <li>Domicilio social: {COMPANY.address}</li>
        <li>Teléfono: {COMPANY.phone}</li>
        <li>
          E-mail: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
        </li>
        <li>Datos registrales: {COMPANY.registry}</li>
      </ul>

      <h2>2. Derechos de propiedad intelectual e industrial</h2>
      <p>
        El sitio web, incluyendo a título enunciativo pero no limitativo su programación, edición, compilación y
        demás elementos necesarios para su funcionamiento, los diseños, logotipos, texto y/o gráficos, son
        propiedad del responsable o, si es el caso, dispone de licencia o autorización expresa por parte de los
        autores.
      </p>
      <p>
        Todos los contenidos del sitio web se encuentran debidamente protegidos por la normativa de propiedad
        intelectual e industrial, así como inscritos en los registros públicos correspondientes. Independientemente
        de la finalidad para la que fueran destinados, la reproducción total o parcial, uso, explotación,
        distribución y comercialización, requiere en todo caso de la autorización escrita previa por parte del
        responsable. Cualquier uso no autorizado previamente se considera un incumplimiento grave de los derechos
        de propiedad intelectual o industrial del autor. Los diseños, logotipos, texto y/o gráficos ajenos al
        responsable y que pudieran aparecer en el sitio web, pertenecen a sus respectivos propietarios, siendo
        ellos mismos responsables de cualquier posible controversia que pudiera suscitarse respecto a los mismos.
      </p>
      <p>
        El responsable reconoce a favor de sus titulares los correspondientes derechos de propiedad intelectual e
        industrial, no implicando su sola mención o aparición en el sitio web la existencia de derechos o
        responsabilidad alguna sobre los mismos, como tampoco respaldo, patrocinio o recomendación por parte del
        mismo.
      </p>
      <p>
        Para realizar cualquier tipo de observación respecto a posibles incumplimientos de los derechos de
        propiedad intelectual o industrial, así como sobre cualquiera de los contenidos del sitio web, puede
        hacerlo a través del correo electrónico {COMPANY.email} o a la siguiente dirección postal:{" "}
        {COMPANY.address}.
      </p>

      <h2>3. Navegación, acceso y seguridad</h2>
      <p>
        El acceso, navegación y utilización de esta página web implica por parte del usuario la aceptación expresa
        y sin reservas de todos los términos del presente aviso legal, la Política de privacidad y la Política de
        cookies, teniendo la misma validez y eficacia que cualquier contrato celebrado por escrito y firmado. En
        este sentido, se entenderá por usuario a la persona que acceda, navegue, utilice o participe en los
        servicios y actividades, gratuitas u onerosas, desarrolladas en el sitio web.
      </p>
      <p>
        {COMPANY.name} realiza los máximos esfuerzos para que la navegación se realice en las mejores condiciones
        y evitar los perjuicios de cualquier tipo que pudiesen ocasionarse durante la misma. {COMPANY.name} no se
        responsabiliza ni garantiza que el acceso a este sitio web sea ininterrumpido o que esté libre de error.
        Tampoco se responsabiliza o garantiza que el contenido o software al que pueda accederse a través de este
        sitio web esté libre de error o cause un daño. En ningún caso {COMPANY.name} será responsable por las
        pérdidas, daños o perjuicios de cualquier tipo que surjan por el acceso y el uso de la página web,
        incluyéndose, pero no limitándose, a los ocasionados a los sistemas informáticos o los provocados por la
        introducción de virus, ni se hace responsable de los daños que pudiesen ocasionarse a los usuarios por un
        uso inadecuado de este sitio web. Los servicios ofertados en este sitio web sólo pueden ser utilizados
        correctamente si se cumplen las especificaciones técnicas para las que ha sido diseñado.
      </p>
      <p>
        Queda prohibido el acceso a este sitio web por parte de menores de 14 años, salvo que cuenten con la
        autorización previa y expresa de sus padres, tutores o representantes legales, los cuales serán
        considerados como responsables de los actos que lleven a cabo los menores a su cargo, conforme a la
        normativa vigente. En todo caso, se presumirá que el acceso realizado por un menor al sitio web se ha
        realizado con autorización previa y expresa de sus padres, tutores o representantes legales.
      </p>

      <h2>4. Exención de responsabilidades del responsable</h2>
      <p>
        Se exime de cualquier tipo de responsabilidad derivada de la información publicada en su sitio web siempre
        que esta información haya sido manipulada o introducida por un tercero ajeno al mismo.
      </p>
      <p>
        Política de enlaces: desde el sitio web es posible que se redirija a contenidos de terceros sitios web.
        Dado que el responsable no puede controlar siempre los contenidos introducidos por los terceros en sus
        respectivos sitios web, no asume ningún tipo de responsabilidad respecto a dichos contenidos. En todo
        caso, procederá a la retirada inmediata de cualquier contenido que pudiera contravenir la legislación
        nacional o internacional, la moral o el orden público, procediendo a la retirada inmediata de la
        redirección a dicho sitio web, poniendo en conocimiento de las autoridades competentes el contenido en
        cuestión.
      </p>
      <p>
        En cumplimiento de lo dispuesto en los artículos 11 y 16 de la LSSICE, se pone a disposición de todos los
        usuarios, autoridades y fuerzas de seguridad, colaborando de forma activa en la retirada o, en su caso,
        bloqueo de todos aquellos contenidos que puedan afectar o contravenir la legislación nacional o
        internacional, los derechos de terceros o la moral y el orden público. En caso de que el usuario considere
        que existe en el sitio web algún contenido que pudiera ser susceptible de esta clasificación, se ruega lo
        notifique de forma inmediata al administrador del sitio web.
      </p>
      <p>
        Este sitio web ha sido revisado y probado para que funcione correctamente. En principio, puede
        garantizarse el correcto funcionamiento los 365 días del año, 24 horas al día. Sin embargo, el responsable
        no descarta la posibilidad de que existan ciertos errores de programación, o que acontezcan causas de
        fuerza mayor, catástrofes naturales, huelgas o circunstancias semejantes que hagan imposible el acceso a
        la página web.
      </p>

      <h2>5. Condiciones adicionales</h2>
      <p>
        El usuario que introduce los datos es el responsable único y final de la veracidad de la información
        suministrada en el servicio y en las modificaciones de los mismos que pueda realizar hasta la finalización
        del mismo.
      </p>

      <h2>6. Actualización y modificación de la información</h2>
      <p>
        La información que aparece en este sitio web es la vigente en la fecha de su última actualización.{" "}
        {COMPANY.name} se reserva el derecho a actualizar, modificar o eliminar la información de este sitio web,
        pudiendo limitar o no permitir el acceso al mismo. No se podrá alterar, cambiar, modificar o adaptar este
        sitio web. Sin embargo, {COMPANY.name} se reserva la facultad de efectuar, en cualquier momento, cuantos
        cambios y modificaciones estime convenientes, pudiendo hacer uso de tal facultad en cualquier momento y
        sin previo aviso.
      </p>

      <h2>7. Ley aplicable y jurisdicción</h2>
      <p>
        Las presentes condiciones se regirán e interpretarán de acuerdo con la legislación común española. Para
        cuantas cuestiones pudieran surgir sobre la interpretación, cumplimiento, rescisión o resolución de las
        condiciones generales, las partes se someten a la jurisdicción y competencia de los Juzgados y Tribunales
        de la ciudad de Málaga. No obstante lo anterior, de conformidad con la legislación española, para cuantas
        cuestiones pudieran surgir en relación con estas condiciones generales serán competentes los juzgados y
        tribunales del domicilio que resulte de aplicación, de conformidad con el artículo 52 de la Ley de
        Enjuiciamiento Civil o norma sustitutiva aplicable en cada momento.
      </p>
    </LegalLayout>
  )
}
