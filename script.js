const ramos = {
  "Semestre I": {
    "Bases Moleculares": ["Bases Moleculares y celulares", "Bases celulares"],
    "Métodos de cuantificación": ["Bioestadística"],
    "Introducción al manejo de la información": ["Bioestadística"],
    "Diversidad animal": ["Ecología"],
    "Orientación a la medicina veterinaria": []
  },
  "Semestre II": {
    "Bases Moleculares y celulares": ["Fisiología I", "Bases inmunológicas", "Agentes biológicos patógenos"],
    "Bases celulares": ["Fisiología I", "Agentes biológicos patógenos"],
    "Bioestadística": ["Epidemiología general", "MAIG"],
    "Ecología": ["Conducta animal", "MAEP"],
    "Desarrollo y estructura microscópica del organismo animal": [],
    "Estructura macroscópica del organismo animal": ["Fisiología II", "MAAT"],
    "Práctica general básica": ["Práctica clínica básica", "Práctica de campo básica"]
  },
  "Semestre III": {
    "Fisiología I": ["Fisiología II", "Farmacología general"],
    "Epidemiología general": ["Enfermedades infecciosas y parasitarias"],
    "Estructura macroscópica del organismo animal": [],
    "Desarrollo y estructura microscópica del organismo animal": [],
    "Bases económicas": [],
    "Conducta animal": ["MACA"],
    "Práctica clínica básica": [],
    "Práctica de campo básica": []
  },
  "Semestre IV": {
    "Bases inmunológicas": ["Patología I", "Bases de técnicas diagnósticas"],
    "Fisiología II": ["Patología I", "Nutrición"],
    "Farmacología general": [],
    "Agentes biológicos patógenos": ["Enfermedades infecciosas y parasitarias", "Bases de técnicas diagnósticas"],
    "Introducción a la producción animal": ["Nutrición", "MACA"],
    "Bases económicas": ["MAPLAN"],
    "MAEP": [],
    "Módulo interno básico": []
  },
  "Semestre V": {
    "Enfermedades infecciosas y parasitarias": ["Salud pública veterinaria", "Patología en explotaciones"],
    "Patología I": ["Patología II", "Métodos de exploración clínica"],
    "Nutrición": ["Alimentación"],
    "Bases de técnicas diagnósticas": ["Métodos de exploración clínica"],
    "MAIG": ["Genética básica"]
  },
  "Semestre VI": {
    "Genética básica": ["Biotecnología reproductiva", "Reproducción"],
    "Patología II": ["Patología III", "Patología diagnóstica", "Biotecnología reproductiva", "Reproducción", "Medicina nvl I"],
    "Alimentación": ["Manejos productivos I", "Manejos productivos II"],
    "Métodos de exploración clínica": ["Medicina nvl I"],
    "MAAT": []
  },
  "Semestre VII": {
    "Patología III": ["Patología en explotaciones"],
    "Patología diagnóstica": ["Medicina interna nvl II", "Anestesiología y cirugía"],
    "Reproducción": ["Manejos productivos I", "Manejos productivos II", "Obstetricia y ginecología"],
    "Biotecnología reproductiva": ["Obstetricia y ginecología"],
    "Medicina nvl I": ["Medicina interna nvl II", "Anestesiología y cirugía"],
    "Salud pública veterinaria": ["Inocuidad de los alimentos", "Gestión ambiental"],
    "MACA": []
  },
  "Semestre VIII": {
    "Gestión ambiental": ["Impacto ambiental"],
    "Inocuidad de los alimentos": ["Aseguramiento y calidad de alimentos", "MABL"],
    "Manejos productivos I": [],
    "Obstetricia y ginecología": [],
    "Medicina nvl I": [],
    "Practica pre-profesional": [],
    "MAPLAN": [],
    "Módulo int. Ciclo pre-profesional": []
  },
  "Semestre IX": {
    "Impacto ambiental": [],
    "Aseguramiento y calidad de alimentos": [],
    "Manejos productivos II": [],
    "Medicina interna nvl II": [],
    "Anestesiología y cirugía": [],
    "Patología en explotaciones": [],
    "MABL": []
  },
  "Semestre X": {
    "Internado medicina individual": [],
    "Internado producción animal": [],
    "Internado medicina preventiva": [],
    "Practica profesional": [],
    "Taller de titulación": []
  }
};

const aprobados = new Set();

function crearMalla() {
  const contenedor = document.getElementById("malla");
  for (const [semestre, cursos] of Object.entries(ramos)) {
    const divSemestre = document.createElement("div");
    divSemestre.className = "semestre";
    const titulo = document.createElement("h2");
    titulo.textContent = semestre;
    divSemestre.appendChild(titulo);

    for (const curso of Object.keys(cursos)) {
      const divRamo = document.createElement("div");
      divRamo.className = "ramo locked";
      divRamo.textContent = curso;
      divRamo.dataset.nombre = curso;
      divRamo.addEventListener("click", aprobarRamo);
      divSemestre.appendChild(divRamo);
    }

    contenedor.appendChild(divSemestre);
  }

  desbloquearIniciales();
}

function desbloquearIniciales() {
  document.querySelectorAll(".ramo").forEach(div => {
    const nombre = div.dataset.nombre;
    const requisitos = obtenerRequisitos(nombre);
    if (requisitos.length === 0) {
      div.classList.remove("locked");
    }
  });
}

function obtenerRequisitos(curso) {
  const requisitos = [];
  for (const cursos of Object.values(ramos)) {
    for (const [ramo, dependientes] of Object.entries(cursos)) {
      if (dependientes.includes(curso)) {
        requisitos.push(ramo);
      }
    }
  }
  return requisitos;
}

function aprobarRamo(e) {
  const div = e.currentTarget;
  const nombre = div.dataset.nombre;
  if (div.classList.contains("locked")) return;

  if (!div.classList.contains("approved")) {
    div.classList.add("approved");
    aprobados.add(nombre);
    actualizarDesbloqueos();
  } else {
    div.classList.remove("approved");
    aprobados.delete(nombre);
    actualizarDesbloqueos();
  }
}

function actualizarDesbloqueos() {
  document.querySelectorAll(".ramo").forEach(div => {
    const nombre = div.dataset.nombre;
    const requisitos = obtenerRequisitos(nombre);
    const desbloqueado = requisitos.every(r => aprobados.has(r));

    if (requisitos.length === 0 || desbloqueado) {
      div.classList.remove("locked");
    } else {
      if (!div.classList.contains("approved")) {
        div.classList.add("locked");
      }
    }
  });
}

crearMalla();
