
const ramos = [
  {
    "nombre": "Bases Moleculares",
    "id": "bases_moleculares",
    "desbloquea": [
      "bases_moleculares_y_celulares",
      "bases_celulares"
    ],
    "semestre": 1
  },
  {
    "nombre": "M\u00e9todos de cuantificaci\u00f3n",
    "id": "m\u00e9todos_de_cuantificaci\u00f3n",
    "desbloquea": [
      "bioestad\u00edstica"
    ],
    "semestre": 1
  },
  {
    "nombre": "Introducci\u00f3n al manejo de la informaci\u00f3n",
    "id": "introducci\u00f3n_al_manejo_de_la_informaci\u00f3n",
    "desbloquea": [
      "bioestad\u00edstica"
    ],
    "semestre": 1
  },
  {
    "nombre": "Diversidad animal",
    "id": "diversidad_animal",
    "desbloquea": [
      "ecolog\u00eda"
    ],
    "semestre": 1
  },
  {
    "nombre": "Orientaci\u00f3n a la medicina veterinaria",
    "id": "orientaci\u00f3n_a_la_medicina_veterinaria",
    "desbloquea": [],
    "semestre": 1
  },
  {
    "nombre": "Bases Moleculares y celulares",
    "id": "bases_moleculares_y_celulares",
    "desbloquea": [
      "fisiolog\u00eda_i",
      "bases_inmunol\u00f3gicas",
      "agentes_biol\u00f3gicos_pat\u00f3genos"
    ],
    "semestre": 2
  },
  {
    "nombre": "Bases celulares",
    "id": "bases_celulares",
    "desbloquea": [
      "fisiolog\u00eda_i",
      "agentes_biol\u00f3gicos_pat\u00f3genos"
    ],
    "semestre": 2
  },
  {
    "nombre": "Bioestad\u00edstica",
    "id": "bioestad\u00edstica",
    "desbloquea": [
      "epidemiolog\u00eda",
      "maig"
    ],
    "semestre": 2
  },
  {
    "nombre": "Ecolog\u00eda",
    "id": "ecolog\u00eda",
    "desbloquea": [
      "conducta_animal",
      "maep"
    ],
    "semestre": 2
  },
  {
    "nombre": "Desarrollo y estructura microsc\u00f3pica del organismo animal",
    "id": "desarrollo_y_estructura_microsc\u00f3pica_del_organismo_animal",
    "desbloquea": [],
    "semestre": 2
  },
  {
    "nombre": "Estructura macrosc\u00f3pica del organismo animal",
    "id": "estructura_macrosc\u00f3pica_del_organismo_animal",
    "desbloquea": [],
    "semestre": 2
  },
  {
    "nombre": "Pr\u00e1ctica general b\u00e1sica",
    "id": "pr\u00e1ctica_general_b\u00e1sica",
    "desbloquea": [
      "pr\u00e1ctica_cl\u00ednica_b\u00e1sica",
      "pr\u00e1ctica_de_campo_b\u00e1sica"
    ],
    "semestre": 2
  },
  {
    "nombre": "Fisiolog\u00eda I",
    "id": "fisiolog\u00eda_i",
    "desbloquea": [
      "fisiolog\u00eda_ii",
      "farmacolog\u00eda_general"
    ],
    "semestre": 3
  },
  {
    "nombre": "Epidemiolog\u00eda general",
    "id": "epidemiolog\u00eda_general",
    "desbloquea": [
      "enfermedades_infecciosas_y_parasitarias"
    ],
    "semestre": 3
  },
  {
    "nombre": "Estructura macrosc\u00f3pica del organismo animal",
    "id": "estructura_macrosc\u00f3pica_del_organismo_animal",
    "desbloquea": [],
    "semestre": 3
  },
  {
    "nombre": "Desarrollo y estructura microsc\u00f3pica del organismo animal",
    "id": "desarrollo_y_estructura_microsc\u00f3pica_del_organismo_animal",
    "desbloquea": [],
    "semestre": 3
  },
  {
    "nombre": "Bases econ\u00f3micas",
    "id": "bases_econ\u00f3micas",
    "desbloquea": [],
    "semestre": 3
  },
  {
    "nombre": "Conducta animal",
    "id": "conducta_animal",
    "desbloquea": [
      "maca"
    ],
    "semestre": 3
  },
  {
    "nombre": "Pr\u00e1ctica cl\u00ednica b\u00e1sica",
    "id": "pr\u00e1ctica_cl\u00ednica_b\u00e1sica",
    "desbloquea": [],
    "semestre": 3
  },
  {
    "nombre": "Pr\u00e1ctica de campo b\u00e1sica",
    "id": "pr\u00e1ctica_de_campo_b\u00e1sica",
    "desbloquea": [],
    "semestre": 3
  },
  {
    "nombre": "Bases inmunol\u00f3gicas",
    "id": "bases_inmunol\u00f3gicas",
    "desbloquea": [
      "patolog\u00eda_i",
      "bases_de_t\u00e9cnicas_diagn\u00f3sticas"
    ],
    "semestre": 4
  },
  {
    "nombre": "Fisiolog\u00eda II",
    "id": "fisiolog\u00eda_ii",
    "desbloquea": [
      "patolog\u00eda_i",
      "nutrici\u00f3n"
    ],
    "semestre": 4
  },
  {
    "nombre": "Farmacolog\u00eda general",
    "id": "farmacolog\u00eda_general",
    "desbloquea": [],
    "semestre": 4
  },
  {
    "nombre": "Agentes biol\u00f3gicos pat\u00f3genos",
    "id": "agentes_biol\u00f3gicos_pat\u00f3genos",
    "desbloquea": [
      "enfermedades_infecciosas_y_parasitarias",
      "bases_de_t\u00e9cnicas_diagn\u00f3sticas"
    ],
    "semestre": 4
  },
  {
    "nombre": "Introducci\u00f3n a la producci\u00f3n animal",
    "id": "introducci\u00f3n_a_la_producci\u00f3n_animal",
    "desbloquea": [
      "nutrici\u00f3n",
      "maca"
    ],
    "semestre": 4
  },
  {
    "nombre": "Bases econ\u00f3micas",
    "id": "bases_econ\u00f3micas",
    "desbloquea": [
      "maplan"
    ],
    "semestre": 4
  },
  {
    "nombre": "MAEP",
    "id": "maep",
    "desbloquea": [],
    "semestre": 4
  },
  {
    "nombre": "M\u00f3dulo interno b\u00e1sico",
    "id": "m\u00f3dulo_interno_b\u00e1sico",
    "desbloquea": [],
    "semestre": 4
  },
  {
    "nombre": "Enfermedades infecciosas y parasitarias",
    "id": "enfermedades_infecciosas_y_parasitarias",
    "desbloquea": [
      "salud_p\u00fablica_veterinaria",
      "patolog\u00eda_en_explotaciones"
    ],
    "semestre": 5
  },
  {
    "nombre": "Patolog\u00eda I",
    "id": "patolog\u00eda_i",
    "desbloquea": [
      "patolog\u00eda_ii",
      "m\u00e9todos_de_exploraci\u00f3n_cl\u00ednica"
    ],
    "semestre": 5
  },
  {
    "nombre": "Nutrici\u00f3n",
    "id": "nutrici\u00f3n",
    "desbloquea": [
      "alimentaci\u00f3n"
    ],
    "semestre": 5
  },
  {
    "nombre": "Bases de t\u00e9cnicas diagn\u00f3sticas",
    "id": "bases_de_t\u00e9cnicas_diagn\u00f3sticas",
    "desbloquea": [],
    "semestre": 5
  },
  {
    "nombre": "MAIG",
    "id": "maig",
    "desbloquea": [
      "gen\u00e9tica_b\u00e1sica"
    ],
    "semestre": 5
  },
  {
    "nombre": "Gen\u00e9tica b\u00e1sica",
    "id": "gen\u00e9tica_b\u00e1sica",
    "desbloquea": [
      "biotecnolog\u00eda_reproductiva",
      "reproducci\u00f3n"
    ],
    "semestre": 6
  },
  {
    "nombre": "Patolog\u00eda II",
    "id": "patolog\u00eda_ii",
    "desbloquea": [
      "patolog\u00eda_iii",
      "patolog\u00eda_diagn\u00f3stica",
      "biotecnolog\u00eda_reproductiva",
      "reproducci\u00f3n",
      "medicina_nvl_i"
    ],
    "semestre": 6
  },
  {
    "nombre": "Alimentaci\u00f3n",
    "id": "alimentaci\u00f3n",
    "desbloquea": [
      "manejos_productivos_i",
      "manejos_productivos_ii"
    ],
    "semestre": 6
  },
  {
    "nombre": "M\u00e9todos de exploraci\u00f3n cl\u00ednica",
    "id": "m\u00e9todos_de_exploraci\u00f3n_cl\u00ednica",
    "desbloquea": [
      "medicina_nvl_i"
    ],
    "semestre": 6
  },
  {
    "nombre": "MAAT",
    "id": "maat",
    "desbloquea": [],
    "semestre": 6
  },
  {
    "nombre": "Patolog\u00eda III",
    "id": "patolog\u00eda_iii",
    "desbloquea": [],
    "semestre": 7
  },
  {
    "nombre": "Patolog\u00eda diagn\u00f3stica",
    "id": "patolog\u00eda_diagn\u00f3stica",
    "desbloquea": [
      "medicina_interna_nvl_ii",
      "anestesiolog\u00eda_y_cirug\u00eda"
    ],
    "semestre": 7
  },
  {
    "nombre": "Reproducci\u00f3n",
    "id": "reproducci\u00f3n",
    "desbloquea": [
      "manejos_productivos_i",
      "manejos_productivos_ii",
      "obstetricia_y_ginecolog\u00eda"
    ],
    "semestre": 7
  },
  {
    "nombre": "Biotecnolog\u00eda reproductiva",
    "id": "biotecnolog\u00eda_reproductiva",
    "desbloquea": [
      "obstetricia_y_ginecolog\u00eda"
    ],
    "semestre": 7
  },
  {
    "nombre": "Medicina nvl I",
    "id": "medicina_nvl_i",
    "desbloquea": [],
    "semestre": 7
  },
  {
    "nombre": "Salud p\u00fablica veterinaria",
    "id": "salud_p\u00fablica_veterinaria",
    "desbloquea": [
      "inocuidad_de_los_alimentos",
      "gesti\u00f3n_ambiental"
    ],
    "semestre": 7
  },
  {
    "nombre": "MACA",
    "id": "maca",
    "desbloquea": [],
    "semestre": 7
  },
  {
    "nombre": "Gesti\u00f3n ambiental Abre \u201cImpacto ambiental\u201d)",
    "id": "gesti\u00f3n_ambiental_abre_impacto_ambiental_",
    "desbloquea": [],
    "semestre": 8
  },
  {
    "nombre": "Inocuidad de los alimentos",
    "id": "inocuidad_de_los_alimentos",
    "desbloquea": [
      "aseguramiento_y_calidad_de_los_alimentos",
      "mabl"
    ],
    "semestre": 8
  },
  {
    "nombre": "Manejos productivos I",
    "id": "manejos_productivos_i",
    "desbloquea": [],
    "semestre": 8
  },
  {
    "nombre": "Obstetricia y ginecolog\u00eda",
    "id": "obstetricia_y_ginecolog\u00eda",
    "desbloquea": [],
    "semestre": 8
  },
  {
    "nombre": "Medicina nvl I",
    "id": "medicina_nvl_i",
    "desbloquea": [
      "medicina_interna_nvl_ii"
    ],
    "semestre": 8
  },
  {
    "nombre": "Practica pre-profesional",
    "id": "practica_pre_profesional",
    "desbloquea": [],
    "semestre": 8
  },
  {
    "nombre": "MAPLAN",
    "id": "maplan",
    "desbloquea": [],
    "semestre": 8
  },
  {
    "nombre": "M\u00f3dulo int. Ciclo pre-profesional",
    "id": "m\u00f3dulo_int_ciclo_pre_profesional",
    "desbloquea": [],
    "semestre": 8
  },
  {
    "nombre": "Impacto ambiental",
    "id": "impacto_ambiental",
    "desbloquea": [],
    "semestre": 9
  },
  {
    "nombre": "Aseguramiento y calidad de alimentos",
    "id": "aseguramiento_y_calidad_de_alimentos",
    "desbloquea": [],
    "semestre": 9
  },
  {
    "nombre": "Manejos productivos II",
    "id": "manejos_productivos_ii",
    "desbloquea": [],
    "semestre": 9
  },
  {
    "nombre": "Medicina interna nvl II",
    "id": "medicina_interna_nvl_ii",
    "desbloquea": [],
    "semestre": 9
  },
  {
    "nombre": "Anestesiolog\u00eda y cirug\u00eda",
    "id": "anestesiolog\u00eda_y_cirug\u00eda",
    "desbloquea": [],
    "semestre": 9
  },
  {
    "nombre": "Patolog\u00eda en explotaciones",
    "id": "patolog\u00eda_en_explotaciones",
    "desbloquea": [],
    "semestre": 9
  },
  {
    "nombre": "MABL",
    "id": "mabl",
    "desbloquea": [],
    "semestre": 9
  },
  {
    "nombre": "Internado medicina individual",
    "id": "internado_medicina_individual",
    "desbloquea": [],
    "semestre": 10
  },
  {
    "nombre": "Internado producci\u00f3n animal",
    "id": "internado_producci\u00f3n_animal",
    "desbloquea": [],
    "semestre": 10
  },
  {
    "nombre": "Internado medicina preventiva",
    "id": "internado_medicina_preventiva",
    "desbloquea": [],
    "semestre": 10
  },
  {
    "nombre": "Practica profesional",
    "id": "practica_profesional",
    "desbloquea": [],
    "semestre": 10
  },
  {
    "nombre": "Taller de titulaci\u00f3n",
    "id": "taller_de_titulaci\u00f3n",
    "desbloquea": [],
    "semestre": 10
  }
];

const estadoRamos = {};
ramos.forEach(r => estadoRamos[r.id] = { completado: false, desbloqueado: false });

function crearLogicaRamo(ramo) {
  const div = document.getElementById(ramo.id);
  div.onclick = () => {
    const estado = estadoRamos[ramo.id];
    estado.completado = !estado.completado;

    if (estado.completado) {
      ramo.desbloquea.forEach(id => {
        estadoRamos[id].desbloqueado = true;
      });
    }

    actualizarInterfaz();
  };
}

function actualizarInterfaz() {
  ramos.forEach(ramo => {
    const div = document.getElementById(ramo.id);
    const estado = estadoRamos[ramo.id];

    if (estado.completado) {
      div.classList.add("tachado");
    } else {
      div.classList.remove("tachado");
    }

    if (estado.desbloqueado || estado.completado) {
      div.classList.remove("disabled");
    } else {
      div.classList.add("disabled");
    }
  });
}

function iniciarMalla() {
  ramos.forEach(crearLogicaRamo);
  // Desbloquear ramos sin ser desbloqueados por otros
  const idsQueDesbloquean = new Set(ramos.flatMap(r => r.desbloquea));
  ramos.forEach(r => {
    if (!idsQueDesbloquean.has(r.id)) {
      estadoRamos[r.id].desbloqueado = true;
    }
  });
  actualizarInterfaz();
}

iniciarMalla();
