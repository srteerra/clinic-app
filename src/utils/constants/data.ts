export const gameData: any = {
  title: "Aventura Interactiva",
  description: "Un juego educativo con múltiples escenarios",

  scenarios: [
    {
      id: "scenario1",
      type: "dialog" as const,
      title: "Introducción",
      backgroundImage: "/images/image.png",
      currentDialogIndex: 0,
      dialogs: [
        {
          id: "dialog1",
          character: "Alicia",
          text: "--Hola....",
        },
        {
          id: "dialog2",
          character: "Alicia",
          text: "-Hoy tenemos un caso nuevo para ti...",
        },
        {
          id: "dialog3",
          character: "Alicia",
          text: "-Emiliano, un lactante  de 3 meses, nacido a termino con peso adecuado(3,4 kg) , presenta episodios de movimiento  tónico -clónicos generalizados que duran entre 30-60 segundos.",
        },
        {
          id: "dialog4",
          character: "Alicia",
          text: "-Han ocurrido estas en al menos cinco ocasiones durante las 48 horas.\n" +
            "Se le da un triage 1 y Emiliano es trasladado a UCIN, el pediatra receta tratamiento con fenobarbital intravenoso.",
        },
        {
          id: "dialog5",
          character: "Alicia",
          text: "-¿Preparado para esta nueva aventura de aprendizaje?",
        },
      ],
    },

    {
      id: "scenario2",
      type: "interactive" as const,
      title: "El Bosque del Conocimiento",
      backgroundImage: "/images/image.png",
      hotspots: [
        {
          id: "hotspot1",
          position: { x: 23, y: 13 },
          answered: false,
          selectedAnswer: "",
          question: {
            text: "¿Cómo se clasifican clínicamente las crisis convulsivas neonatales?",
            options: [
              { id: "a", text: "Se clasifican en crisis febriles, generalizadas y parciales, según su duración y temperatura corporal.", value: "a" },
              { id: "b", text: "Se clasifican en crisis simples, complejas y de ausencia, dependiendo de la respuesta al tratamiento.", value: "b" },
              { id: "c", text: "Se clasifican en crisis sutiles, tónicas, clónicas y mioclónicas, según sus manifestaciones clínicas.", value: "c" },
              { id: "d", text: "Se clasifican en crisis agudas, crónicas y subagudas, de acuerdo a la evolución clínica.", value: "d" },
            ],
            correctAnswer: "c",
          },
        },
        {
          id: "hotspot2",
          position: { x: 65, y: 7 },
          answered: false,
          selectedAnswer: "",
          question: {
            text: "¿Cuál es la principal razón por la que el tratamiento de convulsiones en neonatos debe ser cuidadosamente monitorizado?",
            options: [
              { id: "a", text: "Porque los fármacos anticonvulsivos pueden alterar el desarrollo neurológico si no se ajustan adecuadamente.", value: "a" },
              { id: "b", text: "Porque los neonatos metabolizan los fármacos de manera más rápida que los adultos.", value: "b" },
              { id: "c", text: "Porque el fenobarbital pierde eficacia después de 24 horas de uso.", value: "c" },
              { id: "d", text: "Porque los neonatos no presentan efectos secundarios a los anticonvulsivos.", value: "d" },
            ],
            correctAnswer: "a",
          },
        },
        {
          id: "hotspot3",
          position: { x: 80, y: 70 },
          answered: false,
          selectedAnswer: "",
          question: {
            text: "¿Qué factores influyen en la elección del medicamento anticonvulsivo de segunda línea en neonatos?",
            options: [
              { id: "a", text: "El peso corporal y el género del neonato.", value: "a" },
              { id: "b", text: "La respuesta del neonato a la vacunación previa.", value: "b" },
              { id: "c", text: "Si las convulsiones no responden al fenobarbital, pueden considerarse como segunda línea el levetiracetam o la fenitoína", value: "c" },
              { id: "d", text: "La cantidad de horas de sueño que presenta el neonato al día", value: "d" },
            ],
            correctAnswer: "c",
          },
        },
        {
          id: "hotspot4",
          position: { x: 36, y: 60 },
          answered: false,
          selectedAnswer: "",
          question: {
            text: "¿Cuál es la importancia del sueño en la evaluación neurológica de los neonatos?",
            options: [
              { id: "a", text: "Permite estimar el peso del recién nacida", value: "a" },
              { id: "b", text: "Es uno de los pocos indicadores objetivos del funcionamiento del sistema nervioso Central", value: "b" },
              { id: "c", text: "Sirve para calcular el nivel de Oxigenación Cerebral", value: "c" },
              { id: "d", text: "Determina la necesidad de intervención quirúrgica", value: "d" },
            ],
            correctAnswer: "b",
          },
        },
        {
          id: "hotspot5",
          position: { x: 55, y: 86 },
          answered: false,
          selectedAnswer: "",
          question: {
            text: "¿La epilepsia en neonatos es curable?",
            options: [
              { id: "a", text: "Sí, la epilepsia neonatal desaparece espontáneamente sin necesidad de tratamiento.", value: "a" },
              { id: "b", text: "No, puede ser controlada por medio de tratamientos adecuados teniendo en cuenta la causa y severidad de las convulsiones.", value: "b" },
              { id: "c", text: "Sí, con una breve administración de medicamentos, la epilepsia neonatal se cura definitivamente en todos los casos.", value: "c" },
              { id: "d", text: "No, la epilepsia neonatal es irreversible y no responde a ningún tipo de tratamiento.", value: "d" },
            ],
            correctAnswer: "b",
          },
        },
      ],
    },
    {
      id: "scenario3",
      type: "dialog" as const,
      title: "Transición",
      backgroundImage: "/images/image4.jpg",
      currentDialogIndex: 0,
      dialogs: [
        {
          id: "dialog1",
          character: "Alicia",
          text: "-!Perfecto! lo haz hecho super bien",
        },
        {
          id: "dialog2",
          character: "Alicia",
          text: "-Ahora estamos en el escenario de 'ADMINISTRACIÓN DE MEDICAMENTO'",
        },
        {
          id: "dialog3",
          character: "Alicia",
          text: "-Tenemos una preguntas antes, es importante que sepas todas",
        },
      ],
    },
    {
      id: "scenario4",
      type: "interactive" as const,
      title: "El Castillo del Saber",
      backgroundImage: "/images/image4.jpg",
      hotspots: [
        {
          id: "hotspot1",
          position: { x: 15, y: 40 },
          answered: false,
          selectedAnswer: "",
          question: {
            text: "¿De cuanto es la dosis de impregnación de fenobarbital en neonatos?",
            options: [
              { id: "a", text: "60 mg/kg/día", value: "a" },
              { id: "b", text: "2 -3 mg/kg/día.", value: "b" },
              { id: "c", text: "2-8 mg/kg/día", value: "c" },
              { id: "d", text: "15-20 mg/kg/día", value: "d" },
            ],
            correctAnswer: "d",
          },
        },
        {
          id: "hotspot2",
          position: { x: 50, y: 30 },
          answered: false,
          selectedAnswer: "",
          question: {
            text: "¿De cuanto es la dosis de mantenimiento de fenobarbital en neonatos y cual es?",
            options: [
              { id: "a", text: "5-6 mg/kg/ cada 2 horas", value: "a" },
              { id: "b", text: "2 -3 mg/kg/ cada 3 dias", value: "b" },
              { id: "c", text: "2-8 mg/kg/ cada 12 o 24 horas.", value: "c" },
              { id: "d", text: "15-20 mg/kg/ 5 horas", value: "d" },
            ],
            correctAnswer: "c",
          },
        },
        {
          id: "hotspot3",
          position: { x: 75, y: 60 },
          answered: false,
          selectedAnswer: "",
          question: {
            text: "¿Cómo actúa el fenobarbital en los receptores GABA?",
            options: [
              { id: "a", text: "Aumenta la actividad del receptor GABA- A prolongando la apertura  de los canales de Cl-, generando asi una hiperpolarización de la neurona.", value: "a" },
              { id: "b", text: "Estimula la liberación de glutamato, antagonizando indirectamente la excitación neuronal mediante el receptor NMDA.", value: "b" },
              { id: "c", text: "Reduce la entrada de iones de cloro (Na+) al neurona, generando despolarización y aumento de la actividad eléctrica. ", value: "c" },
            ],
            correctAnswer: "a",
          },
        },
        {
          id: "hotspot4",
          position: { x: 36, y: 71 },
          answered: false,
          selectedAnswer: "",
          question: {
            text: "¿Qué presentación IV y oral es mas usada en pediátricos en Colombia?",
            options: [
              { id: "a", text: "250mg/ 5 mL- 70 mg tabletas", value: "a" },
              { id: "b", text: "100 mg/ 20 mL - 100 mg", value: "b" },
              { id: "c", text: "40mg/ mL - 10 mg", value: "c" },
              { id: "d", text: "30mg/ 3 mL - 15 mg", value: "d" },
            ],
            correctAnswer: "c",
          },
        },
        {
          id: "hotspot5",
          position: { x: 90, y: 80 },
          answered: false,
          selectedAnswer: "",
          question: {
            text: "¿Cuál seria la dosis de impregnación  de Emiliano si pesa 6 kg?\n" +
              "Ten en cuenta que la dosis es 15-20 mg/kg/día",
            options: [
              { id: "a", text: "90mg", value: "a" },
              { id: "b", text: "100 mg", value: "b" },
              { id: "c", text: "47 mg", value: "c" },
              { id: "d", text: "87 mg", value: "d" },
            ],
            correctAnswer: "a",
          },
        },
        {
          id: "hotspot6",
          position: { x: 80, y: 10 },
          answered: false,
          selectedAnswer: "",
          question: {
            text: "¿Cuál seria la dosis de mantenimiento de Emiliano, sabiendo que pesa 6kg?\n" +
              "Recuerda que la dosis de mantenimiento es 2-8 mg/kg/día",
            options: [
              { id: "a", text: "11 mg cada 24 horas.", value: "a" },
              { id: "b", text: "13 mg cada 24 horas.", value: "b" },
              { id: "c", text: "15 mg cada 12 horas.", value: "c" },
              { id: "d", text: "12 mg cada 24 o 12 horas", value: "d" },
            ],
            correctAnswer: "d",
          },
        },
      ],
    },
    {
      id: "scenario5",
      type: "dialog" as const,
      title: "Transición",
      backgroundImage: "/images/image2.png",
      currentDialogIndex: 0,
      dialogs: [
        {
          id: "dialog1",
          character: "Alicia",
          text: "-¡Excelente trabajo! Has completado el primer escenario con éxito.",
        },
        {
          id: "dialog2",
          character: "Alicia",
          text: "-Ahora estamos en el escenario de 'OBSERVACIÓN'",
        },
        {
          id: "dialog3",
          character: "Alicia",
          text: "-Aunque no lo creas este es de vital importancia, ya que tenemos que evaluar siempre a Emilio para identificar posible efectos adversos y poder intervenir a tiempo...",
        },
      ],
    },
    {
      id: "scenario6",
      type: "interactive" as const,
      title: "El Castillo del Saber",
      backgroundImage: "/images/image2.png",
      hotspots: [
        {
          id: "hotspot1",
          position: { x: 20, y: 50 },
          answered: false,
          selectedAnswer: "",
          question: {
            text: "¿Se deben tomar los nivelas plasmaticos del fenobarbital?",
            options: [
              { id: "a", text: "Si", value: "a" },
              { id: "b", text: "No", value: "b" },
            ],
            correctAnswer: "a",
          },
        },
        {
          id: "hotspot2",
          position: { x: 50, y: 30 },
          answered: false,
          selectedAnswer: "",
          question: {
            text: "¿Cuáles de los siguientes son cuidados esenciales de enfermería en un paciente bajo tratamiento con fenobarbital? Seleccione todas las opciones correctas.",
            options: [
              { id: "a", text: "Evaluación continua del patrón respiratorio.", value: "a" },
              { id: "b", text: "Observar cambios en la reactividad y el tono muscular.", value: "b" },
              { id: "c", text: "Administrar dosis adicionales del fármaco", value: "c" },
              { id: "d", text: "Vigilar la diuresis (producción de orina) del paciente.", value: "d" },
              { id: "e", text: "Limitar la hidratación para reducir la excreción del fármaco.", value: "e" },
              { id: "f", text: "Educar a la familia sobre los posibles efectos adversos del medicamento.", value: "f" },
              { id: "g", text: "Realizar ejercicio físico intenso para estimular la actividad neurológica.", value: "g" },
              { id: "h", text: "Mantener al paciente monitorizado  (signos vitales, saturación de oxígeno).", value: "h" },
            ],
            isMulti: true,
            correctAnswers: ["a", "b", "d", "f", "h"],
          },
        },
        {
          id: "hotspot3",
          position: { x: 75, y: 60 },
          answered: false,
          selectedAnswer: "",
          question: {
            text: "¿Cúales son los valores de los niveles plasmaticos del fenobarbital?",
            options: [
              { id: "a", text: "10 - 40 mcg/mL", value: "a" },
              { id: "b", text: "30- 40 mcg/mL", value: "b" },
              { id: "c", text: "10- 12 mch/ mL", value: "c" },
              { id: "d", text: "10-40 mg/mL", value: "d" },
            ],
            correctAnswer: "a",
          },
        },
        {
          id: "hotspot4",
          position: { x: 40, y: 80 },
          answered: false,
          selectedAnswer: "",
          question: {
            text: "¿Por qué el fenobarbital tiene una vida media prolongada en neonatos?",
            options: [
              { id: "a", text: "La actividad enzimática hepática del citocromo P450 está aumentada en neonatos.", value: "a" },
              { id: "b", text: "La alta grasa corporal neonatal acelera su distribución", value: "b" },
              { id: "c", text: "Función renal reducida", value: "c" },
            ],
            correctAnswer: "c",
          },
        },
        {
          id: "hotspot5",
          position: { x: 80, y: 15 },
          answered: false,
          selectedAnswer: "",
          question: {
            text: "¿Qué parámetros deben monitorizarse para evitar toxicidad por fenobarbital en neonatos?",
            options: [
              { id: "a", text: "Solo niveles plasmáticos del fármaco.", value: "a" },
              { id: "b", text: "Función hepática y renal exclusivamente.", value: "b" },
              { id: "c", text: "Niveles plasmáticos, función hepatorrenal y signos de neurodepresión/depresión respiratoria.", value: "c" },
              { id: "d", text: "Presión arterial y frecuencia cardíaca.", value: "d" },
            ],
            correctAnswer: "c",
          },
        },
      ],
    },
    {
      id: "scenario7",
      type: "dialog" as const,
      title: "Conclusión",
      backgroundImage: "/images/neonatal.png",
      currentDialogIndex: 0,
      dialogs: [
        {
          id: "dialog1",
          character: "Alicia",
          text: "-¡Lo has hecho muy bien!",
        },
        {
          id: "dialog2",
          character: "Alicia",
          text: "-Espero que hayas disfrutado de este viaje y hayas aprendido algo nuevo en el camino.",
        },
        {
          id: "dialog3",
          character: "Alicia",
          text: "-Has completado la aventura. ¡Gracias por jugar!",
        },
      ],
    },
  ],
}
