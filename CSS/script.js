// Listas de palabras clave para cada categoría del FODA
const palabrasClave = {
    fortalezas: [
        "Experiencia", "Innovación", "Calidad", "Reputación", "Recursos financieros",
        "Talento humano", "Tecnología avanzada", "Eficiencia", "Liderazgo", "Productos únicos",
        "Procesos optimizados", "Marca reconocida", "Red de contactos", "Flexibilidad",
        "Capacidad de adaptación", "Cultura organizacional", "Servicio al cliente", "Certificaciones",
        "Patentes", "Infraestructura", "Lealtad del cliente", "Habilidades técnicas", "Motivación del equipo",
        "Acceso a recursos", "Tiempo en el mercado", "Relaciones sólidas con proveedores", "Precios competitivos",
        "Crecimiento sostenido", "Diversificación", "Conocimiento del mercado"
    ],
    oportunidades: [
        "Expansión del mercado", "Nuevas tecnologías", "Cambios en regulaciones", "Tendencias del mercado",
        "Alianzas estratégicas", "Demanda creciente", "Globalización", "Nuevos nichos", "Inversión extranjera",
        "Innovación abierta", "Cambios en hábitos de consumo", "Desarrollo de infraestructura", "Apoyos gubernamentales",
        "Acuerdos comerciales", "Digitalización", "Sostenibilidad", "Nuevos canales de distribución", "Competencia débil",
        "Economía en crecimiento", "Nuevos productos o servicios", "Cambios culturales", "Aumento de población",
        "Educación del consumidor", "Nuevas plataformas digitales", "Reducción de costos externos", "Acceso a nuevos mercados",
        "Cambios en preferencias", "Avances científicos", "Oportunidades de exportación", "Colaboraciones internacionales"
    ],
    debilidades: [
        "Falta de recursos", "Baja rentabilidad", "Dependencia de pocos clientes", "Falta de innovación",
        "Problemas de calidad", "Mala gestión", "Falta de capacitación", "Altos costos operativos", "Infraestructura obsoleta",
        "Baja motivación del equipo", "Falta de planificación", "Poca visibilidad de marca", "Limitaciones financieras",
        "Procesos ineficientes", "Falta de diversificación", "Dependencia de un solo producto", "Problemas de comunicación interna",
        "Baja retención de talento", "Falta de tecnología", "Competencia interna", "Baja satisfacción del cliente",
        "Falta de estrategia", "Crecimiento lento", "Problemas logísticos", "Falta de diferenciación", "Dependencia de proveedores",
        "Falta de presencia digital", "Baja productividad", "Falta de investigación", "Escasez de recursos humanos"
    ],
    amenazas: [
        "Competencia agresiva", "Cambios regulatorios", "Crisis económicas", "Fluctuaciones cambiarias", "Aumento de impuestos",
        "Cambios tecnológicos rápidos", "Pérdida de clientes", "Entrada de nuevos competidores", "Presión de precios",
        "Cambios en preferencias del consumidor", "Desastres naturales", "Inestabilidad política", "Escasez de recursos",
        "Pandemias o crisis sanitarias", "Aumento de costos externos", "Regulaciones ambientales", "Conflictos comerciales",
        "Dependencia de mercados externos", "Fuga de talento", "Piratería o imitación", "Cambios en leyes laborales",
        "Sanciones internacionales", "Recesión económica", "Aumento de la competencia", "Cambios en políticas gubernamentales",
        "Desaceleración del mercado", "Riesgos cibernéticos", "Presión de grupos activistas", "Cambios demográficos", "Crisis de reputación"
    ]
};

// Función para buscar palabras clave en el texto
function buscarPalabrasClave(texto, palabras) {
    return palabras.filter(palabra => texto.toLowerCase().includes(palabra.toLowerCase()));
}

// Función para actualizar la lista del FODA
function actualizarFODA(texto, listaId, palabras) {
    const lista = document.getElementById(listaId);
    lista.innerHTML = ""; // Limpiar la lista

    const palabrasEncontradas = buscarPalabrasClave(texto, palabras);
    palabrasEncontradas.forEach(palabra => {
        const li = document.createElement("li");
        li.textContent = palabra;
        lista.appendChild(li);
    });
}

// Escuchar cambios en los textareas
document.getElementById("fortalezas").addEventListener("input", (e) => {
    actualizarFODA(e.target.value, "fortalezas-list", palabrasClave.fortalezas);
});

document.getElementById("oportunidades").addEventListener("input", (e) => {
    actualizarFODA(e.target.value, "oportunidades-list", palabrasClave.oportunidades);
});

document.getElementById("debilidades").addEventListener("input", (e) => {
    actualizarFODA(e.target.value, "debilidades-list", palabrasClave.debilidades);
});

document.getElementById("amenazas").addEventListener("input", (e) => {
    actualizarFODA(e.target.value, "amenazas-list", palabrasClave.amenazas);
});