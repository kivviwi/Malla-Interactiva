
const cursos = [
  { nombre: "Bases Moleculares", id: "bases-moleculares", semestre: 1, desbloquea: ["bases-moleculares-celulares", "bases-celulares"] },
  { nombre: "Bases Moleculares y celulares", id: "bases-moleculares-celulares", semestre: 2, requiere: ["bases-moleculares"] },
  { nombre: "Bases celulares", id: "bases-celulares", semestre: 2, requiere: ["bases-moleculares"] }
  // ... (debes añadir aquí todos los demás cursos de I a X, como definimos anteriormente)
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
