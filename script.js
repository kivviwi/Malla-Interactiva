
const cursos = [
    { nombre: "Bases Moleculares", id: "bases-moleculares", semestre: 1, desbloquea: ["bases-moleculares-celulares", "bases-celulares"] },
  { nombre: "Métodos de cuantificación", id: "metodos-cuantificacion", semestre: 1, desbloquea: ["bioestadistica"] },
  { nombre: "Introducción al manejo de la información", id: "manejo-info", semestre: 1, desbloquea: ["bioestadistica"], requiere: ["metodos-cuantificacion"] },
  { nombre: "Diversidad animal", id: "diversidad-animal", semestre: 1, desbloquea: ["ecologia"] },
  { nombre: "Orientación a la medicina veterinaria", id: "orientacion-medvet", semestre: 1 },

  { nombre: "Bases Moleculares y celulares", id: "bases-moleculares-celulares", semestre: 2, desbloquea: ["fisiologia-1", "bases-inmunologicas", "agentes-patogenos"], requiere: ["bases-moleculares"] },
  { nombre: "Bases celulares", id: "bases-celulares", semestre: 2, desbloquea: ["fisiologia-1", "agentes-patogenos"], requiere: ["bases-moleculares"] },
  { nombre: "Bioestadística", id: "bioestadistica", semestre: 2, desbloquea: ["epidemiologia", "maig"], requiere: ["metodos-cuantificacion", "manejo-info"] },
  { nombre: "Ecología", id: "ecologia", semestre: 2, desbloquea: ["conducta-animal", "maep"], requiere: ["diversidad-animal"] },
  { nombre: "Desarrollo y estructura microscópica del organismo animal", id: "desarrollo-microscopico", semestre: 2 },
  { nombre: "Estructura macroscópica del organismo animal", id: "estructura-macroscopica", semestre: 2, desbloquea: ["fisiologia-2", "maat"] },
  { nombre: "Práctica general básica", id: "practica-general", semestre: 2, desbloquea: ["practica-clinica", "practica-campo"] },

  { nombre: "Fisiología I", id: "fisiologia-1", semestre: 3, desbloquea: ["fisiologia-2", "farmacologia"] },
  { nombre: "Epidemiología general", id: "epidemiologia", semestre: 3, desbloquea: ["enfermedades-infecciosas"] },
  { nombre: "Estructura macroscópica del organismo animal", id: "estructura-macroscopica", semestre: 3 },
  { nombre: "Desarrollo y estructura microscópica del organismo animal", id: "desarrollo-microscopico", semestre: 3 },
  { nombre: "Bases económicas", id: "bases-economicas", semestre: 3 },
  { nombre: "Conducta animal", id: "conducta-animal", semestre: 3, desbloquea: ["maca"], requiere: ["ecologia"] },
  { nombre: "Práctica clínica básica", id: "practica-clinica", semestre: 3 },
  { nombre: "Práctica de campo básica", id: "practica-campo", semestre: 3 },

  { nombre: "Bases inmunológicas", id: "bases-inmunologicas", semestre: 4, desbloquea: ["patologia-1", "tecnicas-diagnosticas"] },
  { nombre: "Fisiología II", id: "fisiologia-2", semestre: 4, desbloquea: ["patologia-1", "nutricion"] },
  { nombre: "Farmacología general", id: "farmacologia", semestre: 4 },
  { nombre: "Agentes biológicos patógenos", id: "agentes-patogenos", semestre: 4, desbloquea: ["enfermedades-infecciosas", "tecnicas-diagnosticas"] },
  { nombre: "Introducción a la producción animal", id: "intro-produccion", semestre: 4, desbloquea: ["nutricion", "maca"] },
  { nombre: "Bases económicas", id: "bases-economicas", semestre: 4 },
  { nombre: "MAEP", id: "maep", semestre: 4 },
  { nombre: "Módulo interno básico", id: "modulo-basico", semestre: 4 },
  { nombre: "MAAT", id: "maat", semestre: 4 },

  { nombre: "Enfermedades infecciosas y parasitarias", id: "enfermedades-infecciosas", semestre: 5, desbloquea: ["salud-publica", "patologia-explotaciones"] },
  { nombre: "Patología I", id: "patologia-1", semestre: 5, desbloquea: ["patologia-2", "exploracion-clinica"] },
  { nombre: "Nutrición", id: "nutricion", semestre: 5, desbloquea: ["alimentacion"] },
  { nombre: "Bases de técnicas diagnósticas", id: "tecnicas-diagnosticas", semestre: 5, desbloquea: ["exploracion-clinica"] },
  { nombre: "MAIG", id: "maig", semestre: 5, desbloquea: ["genetica"] },

  { nombre: "Genética básica", id: "genetica", semestre: 6, desbloquea: ["biotecnologia", "reproduccion"] },
  { nombre: "Patología II", id: "patologia-2", semestre: 6, desbloquea: ["patologia-3", "patologia-diagnostica", "biotecnologia", "reproduccion", "medicina-1"] },
  { nombre: "Alimentación", id: "alimentacion", semestre: 6, desbloquea: ["productivos-1", "productivos-2"] },
  { nombre: "Métodos de exploración clínica", id: "exploracion-clinica", semestre: 6, desbloquea: ["medicina-1"] },
  { nombre: "MAAT", id: "maat", semestre: 6 },

  { nombre: "Patología III", id: "patologia-3", semestre: 7, desbloquea: ["patologia-explotaciones"] },
  { nombre: "Patología diagnóstica", id: "patologia-diagnostica", semestre: 7, desbloquea: ["medicina-2", "anestesia-cirugia"] },
  { nombre: "Reproducción", id: "reproduccion", semestre: 7, desbloquea: ["productivos-1", "productivos-2", "obstetricia"] },
  { nombre: "Biotecnología reproductiva", id: "biotecnologia", semestre: 7, desbloquea: ["obstetricia"] },
  { nombre: "Medicina nvl I", id: "medicina-1", semestre: 7, desbloquea: ["medicina-2", "anestesia-cirugia"] },
  { nombre: "Salud pública veterinaria", id: "salud-publica", semestre: 7, desbloquea: ["inocuidad", "gestion-ambiental"] },
  { nombre: "MACA", id: "maca", semestre: 7 },

  { nombre: "Gestión ambiental", id: "gestion-ambiental", semestre: 8, desbloquea: ["impacto"] },
  { nombre: "Inocuidad de los alimentos", id: "inocuidad", semestre: 8, desbloquea: ["aseguramiento", "mabl"] },
  { nombre: "Manejos productivos I", id: "productivos-1", semestre: 8 },
  { nombre: "Obstetricia y ginecología", id: "obstetricia", semestre: 8 },
  { nombre: "Práctica pre-profesional", id: "pre-profesional", semestre: 8 },
  { nombre: "MAPLAN", id: "maplan", semestre: 8 },
  { nombre: "Módulo int. Ciclo pre-profesional", id: "modulo-preprof", semestre: 8 },

  { nombre: "Impacto ambiental", id: "impacto", semestre: 9 },
  { nombre: "Aseguramiento y calidad de alimentos", id: "aseguramiento", semestre: 9 },
  { nombre: "Manejos productivos II", id: "productivos-2", semestre: 9 },
  { nombre: "Medicina interna nvl II", id: "medicina-2", semestre: 9 },
  { nombre: "Anestesiología y cirugía", id: "anestesia-cirugia", semestre: 9 },
  { nombre: "Patología en explotaciones", id: "patologia-explotaciones", semestre: 9 },
  { nombre: "MABL", id: "mabl", semestre: 9 },

  { nombre: "Internado medicina individual", id: "internado-individual", semestre: 10 },
  { nombre: "Internado producción animal", id: "internado-produccion", semestre: 10 },
  { nombre: "Internado medicina preventiva", id: "internado-preventiva", semestre: 10 },
  { nombre: "Práctica profesional", id: "practica-profesional", semestre: 10 },
  { nombre: "Taller de titulación", id: "taller-titulacion", semestre: 10 }
];

const malla = document.getElementById("malla");

function crearCurso(curso) {
  const div = document.createElement("div");
  div.className = "curso bloqueado";
  div.id = curso.id;
  div.innerText = curso.nombre;
  div.dataset.semestre = curso.semestre;
  div.onclick = () => aprobarCurso(curso.id);
  return div;
}

function dibujarMalla() {
  let semestreActual = 0;
  cursos.forEach(curso => {
    if (curso.semestre !== semestreActual) {
      semestreActual = curso.semestre;
      const titulo = document.createElement("div");
      titulo.className = "semestre";
      titulo.innerText = `Semestre ${semestreActual}`;
      malla.appendChild(titulo);
    }
    const div = crearCurso(curso);
    malla.appendChild(div);
  });
  actualizarEstado();
}

function aprobarCurso(id) {
  const div = document.getElementById(id);
  if (div.classList.contains("bloqueado")) return;
  div.classList.add("aprobado");
  localStorage.setItem(id, "aprobado");
  actualizarEstado();
}

function actualizarEstado() {
  cursos.forEach(curso => {
    const div = document.getElementById(curso.id);
    const aprobado = localStorage.getItem(curso.id) === "aprobado";
    div.classList.toggle("aprobado", aprobado);

    const requisitos = curso.requiere || [];
    const desbloqueado = requisitos.every(req => localStorage.getItem(req) === "aprobado");

    if (requisitos.length === 0 || desbloqueado) {
      div.classList.remove("bloqueado");
    } else {
      div.classList.add("bloqueado");
    }
  });
}

dibujarMalla();
