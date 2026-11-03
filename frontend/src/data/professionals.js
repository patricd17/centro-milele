import patriciaCard from "../assets/images/patricia1.webp"
import patriciaPerfil from "../assets/images/patricia2.webp"
import silviaCard from "../assets/images/silvia2.webp"
import silviaPerfil from "../assets/images/silvia1.webp"
import luciaCard from "../assets/images/lucia2.webp"
import luciaPerfil from "../assets/images/lucia1.webp"

// Única fuente de datos del equipo. Quiénes somos y cada perfil se generan desde aquí.
// Para añadir una profesional: copiar una ficha, cambiar los datos y las fotos. No hay que tocar nada más.
//   area      -> filtro de Quiénes somos (solo aparece cuando hay más de 4 profesionales)
//   specialties -> etiquetas del perfil; en la tarjeta se ven las 3 primeras
//   sections  -> bloques desplegables del perfil (open: true se muestra abierto). Cada texto es una lista de párrafos
export const professionals = [
  {
    id: "patricia",
    name: "Patricia García Díaz",
    firstName: "Patricia",
    role: "Logopeda",
    area: "Logopedia",
    license: "29/2333",
    photoCard: patriciaCard,
    photoProfile: patriciaPerfil,
    quote: "Cada avance, por pequeño que parezca, es una gran victoria que celebramos juntos.",
    summary:
      "Trabajo el habla, el lenguaje, la voz y la deglución, siempre en equipo con el resto de profesionales del centro y con las familias.",
    specialties: [
      "Habla y lenguaje",
      "Deglución",
      "Atención temprana",
      "Terapia vocal",
      "TDAH",
    ],
    sections: [
      {
        title: "Mi enfoque",
        open: true,
        text: [
          "Me baso en la atención personalizada y en el trabajo multidisciplinar. Colaboro de cerca con otros profesionales para que el tratamiento se adapte a lo que necesita cada paciente.",
          "Mi objetivo es que cada persona desarrolle sus habilidades de comunicación y se sienta mejor.",
        ],
      },
      {
        title: "Por qué elegí ser logopeda",
        text: [
          "Cada caso es único y me apasiona acompañar a los pacientes y a sus familias, con compromiso y empatía, que para mí son esenciales en la terapia.",
          "Ayudar a alguien a superar una barrera para comunicarse es de lo más gratificante que me ha pasado.",
        ],
      },
      {
        title: "Lo que me apasiona de mi trabajo",
        text: [
          "Lo que más me emociona es esa primera palabra clara, esa frase completa o la sonrisa de alguien que consigue contar lo que siente. Cada avance, por pequeño que parezca, es una gran victoria que celebramos juntos.",
          "Y me encanta trabajar en equipo con el resto del centro: creo que es esencial para abordar cualquier dificultad de forma integral.",
        ],
      },
      {
        title: "Fuera de la consulta",
        text: [
          "En mi tiempo libre disfruto de mi familia, de la playa, de pasear con la brisa del mar, de la fotografía, de pintar y de los animales. Siempre intento meter en mi día a día algo que me haga desconectar de la rutina y conectar conmigo misma, porque la mente y el cuerpo necesitan cuidado.",
          "Y, por supuesto, me encanta seguir formándome: la logopedia está en constante evolución.",
        ],
      },
    ],
  },
  {
    id: "silvia",
    name: "Silvia Cabello Domínguez",
    firstName: "Silvia",
    role: "Psicóloga Sanitaria",
    area: "Psicología",
    license: "AO11742",
    photoCard: silviaCard,
    photoProfile: silviaPerfil,
    quote: "Acompañar a las familias en cada uno de los progresos de los peques.",
    summary:
      "Psicóloga especializada en Atención Temprana y en Trastorno del Espectro Autista. Acompaño a los niños y a sus familias en cada paso.",
    specialties: [
      "Atención temprana",
      "Trastorno del Espectro Autista (TEA)",
      "Parálisis cerebral",
      "Apego",
      "Psicología perinatal",
      "Musicoterapia",
    ],
    sections: [
      {
        title: "Por qué elegí ser psicóloga sanitaria",
        open: true,
        text: [
          "Desde pequeña sentía una llamada natural a ayudar a los demás, y descubrí que la terapia es una de las formas más bonitas de acompañar a las personas en sus momentos más vulnerables.",
        ],
      },
      {
        title: "Mi historia",
        text: [
          "Siempre me ha gustado ayudar y acompañar a los demás, tanto en sus desafíos como en sus fortalezas. Recuerdo con mucho cariño a una niña con necesidades especiales que estaba en mi clase de primaria. Durante esos años aprendimos mucho la una de la otra, y sin darnos cuenta ella me enseñó cariño, paciencia, comprensión y empatía.",
          "Con los cursos las materias se complicaron y tuve que esforzarme mucho. De hecho, no sabía qué estudiar. Una persona muy especial me llevó «a rastras» a hacer la selectividad y a elegir varias opciones (economía, psicología, trabajo social… sí, economía no tiene sentido ahí, lo sé, jajaja) y terminé entrando en psicología.",
          "Casi al final de la carrera me enamoré de la Atención Temprana gracias a la mujer que daba la asignatura, y volví a encontrarme con ese cariño y esa paciencia de primaria. Tras varios años trabajando hice el Máster en Atención Temprana, donde aprendí una barbaridad en las prácticas gracias a unas tutoras maravillosas. Allí me enamoré del TEA, y decidí especializarme aún más.",
        ],
      },
      {
        title: "Lo que me apasiona de mi trabajo",
        text: [
          "Acompañar a las familias en cada progreso de los peques, disfrutar de las sesiones, sacar la niña que llevo dentro y compartir su inocencia y su alegría.",
          "No todo son buenos momentos, también los hay muy duros, pero esos son los que me hacen sacar fuerzas para seguir luchando por todos ellos.",
        ],
      },
      {
        title: "Fuera de la consulta",
        text: [
          "Lo que más disfruto es estar con mis animales: me recargan de energía en cuanto los veo correr hacia mí al llegar a casa. También me encanta comer, y qué mejor compañía que mi pareja, mi familia y mis amigos. Y la naturaleza, ya sea playa o montaña.",
          "Aquí donde me veis, fui una niña tímida, introvertida y con poca confianza en mí misma (algo en lo que sigo trabajando cada día). Hoy soy quien soy gracias a toda mi trayectoria y a unas personitas muy especiales a las que siempre estaré agradecida. ¿Te unes a esta aventura llamada Milele?",
        ],
      },
    ],
  },
  {
    id: "lucia",
    name: "Lucía Miñagorri Bandera",
    firstName: "Lucía",
    role: "Pedagoga Terapéutica",
    area: "Pedagogía",
    license: "4079",
    photoCard: luciaCard,
    photoProfile: luciaPerfil,
    quote: "Me he convertido en la maestra que necesité cuando era pequeña.",
    summary:
      "Maestra de Pedagogía Terapéutica. Trabajo con niños y niñas con necesidades educativas especiales, dificultades de aprendizaje o TDAH, desde la conexión, la emoción y el movimiento.",
    specialties: [
      "Necesidades educativas especiales",
      "Dificultades de aprendizaje",
      "TDAH",
      "Problemas de conducta",
      "Escuela inclusiva",
      "Disciplina positiva",
    ],
    sections: [
      {
        title: "Mi enfoque",
        open: true,
        text: [
          "Me centro en la atención individualizada de cada niño y niña, creando una red de apoyo entre los distintos profesionales y las familias para abordar sus necesidades de forma integral.",
          "En las sesiones construimos el aprendizaje sobre tres pilares: la conexión con el alumnado, permitirnos ser con todas nuestras emociones y aprender a través del movimiento. Con metodologías adaptadas a cada niño, para fomentar su autonomía, su confianza y su motivación por aprender.",
          "Defiendo la pedagogía del amor, para que todo mi alumnado se sienta comprendido, valorado y capaz.",
        ],
      },
      {
        title: "¿Y por qué maestra?",
        text: [
          "Ser maestra no estaba en mis planes. De hecho, siempre me consideraron una estudiante de «fracaso escolar». Pero creo que ahí está la clave de todo: me he convertido en la maestra que necesité cuando era pequeña, alguien que sabe mirar más allá de una dificultad de aprendizaje, que prioriza las emociones y que acompaña para hacer el camino más sencillo.",
          "Estudié el Grado Superior de Integración Social y hice las prácticas en el Aula Hospitalaria del Materno Infantil de Málaga, con cuatro familias. No sé si ellos aún me recuerdan, pero para mí fueron los protagonistas de mi historia: Jose, Alejandra, Jesús y Kevin. Todos tenían enfermedades raras y graves. Jose me permitió lo más importante: acompañarle durante sus últimos años. Me enseñó el valor del tiempo, el arte de acompañar, a vivir el presente, a respetar el ritmo de cada alumno, el poder de ser diferentes y de luchar por los sueños. Me llenó la vida de colores. Él fue el motivo por el que quise ser maestra de Pedagogía Terapéutica.",
        ],
      },
      {
        title: "Lo que me apasiona de mi trabajo",
        text: [
          "Cada familia y cada historia me han traído hasta Milele. Parte de mi personalidad alegre y paciente se la debo a ellos, porque me han enseñado a valorar cada logro y cada pequeño avance que conseguimos juntos.",
          "Lo que más valoro es ser un equipo con mis compañeras y con las familias, y seguir creciendo y formándome para ofrecer un servicio lo más completo posible y mejorar la calidad de vida de mis niños y niñas.",
        ],
      },
      {
        title: "Fuera de la consulta",
        text: [
          "Disfruto del equilibrio de pasar tiempo conmigo misma, reconectar y recargar energía. Mi familia y mis amigos son una fuente constante de inspiración y alegría. Me apasionan la música, el mar, el deporte, la montaña y, por supuesto, mis gatos.",
        ],
      },
    ],
  },
]

export const getProfessional = (id) => professionals.find((p) => p.id === id)
