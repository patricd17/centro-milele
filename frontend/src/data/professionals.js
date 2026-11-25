import patriciaCard from "../assets/images/patricia1.webp"
import patriciaPerfil from "../assets/images/patricia2.webp"
import silviaCard from "../assets/images/silvia2.webp"
import silviaPerfil from "../assets/images/silvia1.webp"
import luciaCard from "../assets/images/lucia2.webp"
import luciaPerfil from "../assets/images/lucia1.webp"
import miriamCard from "../assets/images/miriam-tarjeta.webp"
import miriamPerfil from "../assets/images/miriam-perfil.webp"
import andreaCard from "../assets/images/andrea-tarjeta.webp"
import andreaPerfil from "../assets/images/andrea-perfil.webp"

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
        title: "Cómo trabajo",
        open: true,
        text: [
          "Me baso en la atención personalizada y en el trabajo multidisciplinar. Colaboro de cerca con otros profesionales para que el tratamiento se adapte a lo que necesita cada paciente.",
          "Mi objetivo es que cada persona desarrolle sus habilidades de comunicación y se sienta mejor.",
        ],
      },
      {
        title: "Mi historia",
        text: [
          "Cada caso es único y me apasiona acompañar a los pacientes y a sus familias, con compromiso y empatía, que para mí son esenciales en la terapia.",
          "Ayudar a alguien a superar una barrera para comunicarse es de lo más gratificante que me ha pasado.",
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
        title: "Mi historia",
        open: true,
        text: [
          "Desde pequeña sentía una llamada natural a ayudar a los demás, y descubrí que la terapia es una de las formas más bonitas de acompañar a las personas en sus momentos más vulnerables.",
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
        title: "Cómo trabajo",
        open: true,
        text: [
          "Me centro en la atención individualizada de cada niño y niña, creando una red de apoyo entre los distintos profesionales y las familias para abordar sus necesidades de forma integral.",
          "En las sesiones construimos el aprendizaje sobre tres pilares: la conexión con el alumnado, permitirnos ser con todas nuestras emociones y aprender a través del movimiento. Con metodologías adaptadas a cada niño, para fomentar su autonomía, su confianza y su motivación por aprender.",
          "Defiendo la pedagogía del amor, para que todo mi alumnado se sienta comprendido, valorado y capaz.",
        ],
      },
      {
        title: "Mi historia",
        text: [
          "Ser maestra no estaba en mis planes. De hecho, siempre me consideraron una estudiante de «fracaso escolar». Pero creo que ahí está la clave de todo: me he convertido en la maestra que necesité cuando era pequeña, alguien que sabe mirar más allá de una dificultad de aprendizaje, que prioriza las emociones y que acompaña para hacer el camino más sencillo.",
          "Estudié el Grado Superior de Integración Social y hice las prácticas en el Aula Hospitalaria del Materno Infantil de Málaga, con cuatro familias. No sé si ellos aún me recuerdan, pero para mí fueron los protagonistas de mi historia: Jose, Alejandra, Jesús y Kevin. Todos tenían enfermedades raras y graves. Jose me permitió lo más importante: acompañarle durante sus últimos años. Me enseñó el valor del tiempo, el arte de acompañar, a vivir el presente, a respetar el ritmo de cada alumno, el poder de ser diferentes y de luchar por los sueños. Me llenó la vida de colores. Él fue el motivo por el que quise ser maestra de Pedagogía Terapéutica.",
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
  {
    id: "miriam",
    name: "Miriam Ramírez Sevilla",
    firstName: "Miriam",
    role: "Logopeda",
    area: "Logopedia",
    license: "29/2897",
    photoCard: miriamCard,
    photoProfile: miriamPerfil,
    quote: "No todos avanzamos al mismo ritmo, y eso está bien: cada pequeño paso cuenta.",
    summary:
      "Acompaño a niños, adolescentes y adultos, adaptando cada sesión a la persona que tengo delante.",
    specialties: ["Terapia miofuncional", "Dislexia", "Niños, adolescentes y adultos"],
    sections: [
      {
        title: "Cómo trabajo",
        open: true,
        text: [
          "Durante mi trayectoria he trabajado con niños, adolescentes y adultos, y he descubierto que cada uno tiene una manera diferente de aprender, comunicarse y enfrentarse a sus dificultades. Por eso preparo cada intervención pensando en la persona que tengo delante, adaptándome a sus necesidades y buscando siempre la mejor manera de ayudarla.",
          "En las sesiones me gusta crear un ambiente de confianza, en el que cada persona pueda sentirse cómoda, escuchada y, sobre todo, sin miedo a equivocarse. Para mí, aprender también significa disfrutar, probar, equivocarse y volver a intentarlo. No todos avanzamos al mismo ritmo, y eso está bien: cada pequeño paso cuenta.",
        ],
      },
      {
        title: "Mi historia",
        text: [
          "Soy graduada en Logopedia y, desde que terminé la carrera, he seguido formándome y aprendiendo para continuar creciendo como profesional. He realizado cursos de formación en terapia miofuncional y dislexia, dos áreas que me han permitido ampliar mis conocimientos y conocer nuevas formas de trabajar y acompañar a cada persona.",
          "Lo que más me gusta de mi profesión es poder acompañar a las personas en sus pequeños y grandes avances. Ver cómo van ganando confianza, superando dificultades y descubriendo todo lo que son capaces de conseguir es, sin duda, una de las partes más bonitas de mi trabajo.",
          "Estoy muy feliz de poder dedicarme a algo que me gusta tanto y de tener la oportunidad de formar parte, aunque sea un poquito, del camino de cada persona que pasa por consulta.",
        ],
      },
      {
        title: "Fuera de la consulta",
        text: [
          "Fuera de la consulta, soy una persona sensible y generosa. Me encanta disfrutar de los atardeceres, los animales y pasar tiempo con las personas que quiero. También disfruto aprendiendo cosas nuevas y buscando siempre algo que me ilusione.",
        ],
      },
    ],
  },
  {
    id: "andrea",
    name: "Andrea Acacio Morales",
    firstName: "Andrea",
    role: "Psicóloga Sanitaria",
    area: "Psicología",
    license: "AO13801",
    photoCard: andreaCard,
    photoProfile: andreaPerfil,
    quote: "Entiendo la terapia como un espacio seguro, cálido y libre de juicios.",
    summary:
      "Acompaño a población infantil, juvenil y adulta desde una mirada cercana, integradora y respetuosa.",
    specialties: ["Psicología perinatal", "Trauma", "Ansiedad", "Infancia, juventud y adultos"],
    sections: [
      {
        title: "Cómo trabajo",
        open: true,
        text: [
          "Mi forma de entender la psicología parte de una mirada cercana, integradora y respetuosa, entendiendo que detrás de cada persona hay una historia, un contexto y unas necesidades propias que merecen ser escuchadas y comprendidas.",
          "Entiendo la terapia como un espacio seguro, cálido y libre de juicios, donde cada persona pueda sentirse escuchada, comprendida y acompañada, respetando sus tiempos y su propio proceso.",
        ],
      },
      {
        title: "Mi historia",
        text: [
          "Desde pequeña he tenido dos grandes pasiones: la psicología y la gimnasia rítmica. Mientras estudiaba la carrera, compaginaba mi formación con el deporte, que también ha formado parte de mi vida y de quien soy hoy.",
          "Tras graduarme y completar mi formación de máster, he seguido formándome en diferentes ámbitos de la psicología, como la psicología perinatal, el trauma y la ansiedad, entre otros. Me encanta aprender, descubrir nuevas herramientas y seguir creciendo tanto personal como profesionalmente, porque creo que nunca dejamos de aprender.",
          "A lo largo de mi trayectoria he podido especializarme y adquirir experiencia acompañando tanto a población infantil y juvenil como adulta.",
          "Mi vocación nace de la sensibilidad, la empatía y, sobre todo, de la ilusión por poder ayudar a las personas que lo necesitan.",
        ],
      },
      {
        title: "Fuera de la consulta",
        text: [
          "Fuera de mi faceta como psicóloga, soy una persona sensible, trabajadora y amante de los animales, los atardeceres, los viajes y, especialmente, del mar, mi lugar seguro y de calma.",
        ],
      },
    ],
  },
]

export const getProfessional = (id) => professionals.find((p) => p.id === id)
