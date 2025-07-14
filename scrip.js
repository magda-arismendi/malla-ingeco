const malla = {
  "1er Semestre": [
    "Introducción a la Economía",
    "Cálculo I",
    "Fundamentos de Administración",
    "Contabilidad",
    "Taller de Expresión Escrita"
  ],
  "2do Semestre": [
    "Microeconomía I",
    "Álgebra",
    "Derecho Comercial",
    "Estadística",
    "Ética y Sociedad"
  ]
};

const contenedor = document.getElementById("malla");

for (const [semestre, ramos] of Object.entries(malla)) {
  const div = document.createElement("div");
  div.className = "semestre";
  div.innerHTML = `<h2>${semestre}</h2>`;
  
  ramos.forEach(ramo => {
    const label = document.createElement("label");
    label.className = "ramo";
    label.innerHTML = `<input type="checkbox"> ${ramo}`;
    div.appendChild(label);
  });

  contenedor.appendChild(div);
}
