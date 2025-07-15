// Datos de la malla curricular
const curriculum = {
    semesters: [
        {
            number: 1,
            courses: [
                { id: "fundamentos-ti", name: "Fundamentos de TI", credits: 3, icon: "fas fa-server" },
                { id: "fundamentos-prog", name: "Fundamentos de Programación", credits: 3, icon: "fas fa-code" },
                { id: "matematica-i", name: "Matemática I", credits: 3, icon: "fas fa-square-root-alt" },
                { id: "fisica-i", name: "Física I", credits: 2, icon: "fas fa-atom" },
                { id: "redaccion", name: "Redacción de Informes", credits: 3, icon: "fas fa-file-alt" },
                { id: "realidad-nacional", name: "Realidad Nacional", credits: 1, icon: "fas fa-globe-americas" }
            ]
        },
        {
            number: 2,
            courses: [
                { id: "matematica-ii", name: "Matemática II", credits: 3, dependsOn: ["matematica-i"], icon: "fas fa-calculator" },
                { id: "fisica-ii", name: "Física II", credits: 3, dependsOn: ["fisica-i"], icon: "fas fa-microscope" },
                { id: "estadistica", name: "Estadística", credits: 3, dependsOn: ["matematica-i"], icon: "fas fa-chart-bar" },
                { id: "fundamentos-digitales", name: "Fund. Sistemas Digitales", credits: 3, dependsOn: ["fundamentos-ti"], icon: "fas fa-microchip" },
                { id: "poo", name: "Programación Orientada a Objetos", credits: 3, dependsOn: ["fundamentos-prog"], icon: "fas fa-cubes" }
            ]
        },
        {
            number: 3,
            courses: [
                { id: "estructura-datos", name: "Estructura de Datos", credits: 3, dependsOn: ["poo"], icon: "fas fa-database" },
                { id: "bases-datos", name: "Bases de Datos", credits: 3, dependsOn: ["fundamentos-prog"], icon: "fas fa-table" },
                { id: "sistemas-digitales", name: "Sistemas Digitales", credits: 3, dependsOn: ["fundamentos-digitales"], icon: "fas fa-microchip" },
                { id: "instalaciones", name: "Instalaciones Eléctricas", credits: 3, dependsOn: ["fisica-ii"], icon: "fas fa-bolt" },
                { id: "metodologia", name: "Metodología de Investigación", credits: 3, dependsOn: ["redaccion"], icon: "fas fa-search" }
            ]
        },
        {
            number: 4,
            courses: [
                { id: "admin-so", name: "Administración de SO", credits: 3, dependsOn: ["sistemas-digitales"], icon: "fas fa-tasks" },
                { id: "sistemas-operativos", name: "Sistemas Operativos", credits: 3, dependsOn: ["admin-so"], icon: "fas fa-desktop" },
                { id: "redes", name: "Redes de Computadoras", credits: 3, dependsOn: ["sistemas-digitales"], icon: "fas fa-network-wired" },
                { id: "emprendimiento", name: "Emprendimiento", credits: 3, dependsOn: ["metodologia"], icon: "fas fa-lightbulb" },
                { id: "redaccion-cientifica", name: "Redacción Científica", credits: 3, dependsOn: ["metodologia"], icon: "fas fa-pen-fancy" }
            ]
        },
        {
            number: 5,
            courses: [
                { id: "admin-bd", name: "Administración de BD", credits: 3, dependsOn: ["bases-datos"], icon: "fas fa-database" },
                { id: "ingenieria-software", name: "Ingeniería de Software", credits: 3, dependsOn: ["estructura-datos"], icon: "fas fa-laptop-code" },
                { id: "apps-moviles", name: "Aplicaciones Móviles", credits: 3, dependsOn: ["poo"], icon: "fas fa-mobile-alt" },
                { id: "sistemas-embebidos", name: "Sistemas Embebidos", credits: 4, dependsOn: ["sistemas-digitales"], icon: "fas fa-microchip" },
                { id: "deontologia", name: "Deontología Profesional", credits: 2, icon: "fas fa-gavel" }
            ]
        },
        {
            number: 6,
            courses: [
                { id: "ihc", name: "Interacción Humano-Computador", credits: 3, dependsOn: ["ingenieria-software"], icon: "fas fa-user-astronaut" },
                { id: "conmutacion", name: "Tec. Conmutación", credits: 3, dependsOn: ["redes"], icon: "fas fa-route" },
                { id: "desarrollo-web", name: "Desarrollo Web", credits: 3, dependsOn: ["ingenieria-software"], icon: "fas fa-globe" },
                { id: "redes-inalambricas", name: "Redes Inalámbricas", credits: 3, dependsOn: ["redes"], icon: "fas fa-wifi" },
                { id: "practicas-comunitarias", name: "Prácticas Comunitarias", credits: 3, dependsOn: ["60-creditos"], icon: "fas fa-hands-helping" }
            ]
        },
        {
            number: 7,
            courses: [
                { id: "sistemas-distribuidos", name: "Sistemas Distribuidos", credits: 3, dependsOn: ["redes"], icon: "fas fa-server" },
                { id: "mineria-datos", name: "Minería de Datos", credits: 3, dependsOn: ["bases-datos"], icon: "fas fa-chart-line" },
                { id: "escalabilidad", name: "Escalabilidad de Redes", credits: 3, dependsOn: ["redes"], icon: "fas fa-expand-arrows-alt" },
                { id: "legislacion", name: "Legislación Informática", credits: 2, icon: "fas fa-balance-scale" },
                { id: "practicas-i", name: "Prácticas Laborales I", credits: 1, dependsOn: ["60-creditos"], icon: "fas fa-briefcase" },
                { id: "gestion-proyectos", name: "Gestión de Proyectos TI", credits: 3, dependsOn: ["ingenieria-software"], icon: "fas fa-project-diagram" }
            ]
        },
        {
            number: 8,
            courses: [
                { id: "gestion-ti", name: "Gestión y Gobierno de TI", credits: 3, dependsOn: ["ingenieria-software"], icon: "fas fa-chess" },
                { id: "seguridad", name: "Seguridad Informática", credits: 3, dependsOn: ["redes"], icon: "fas fa-shield-alt" },
                { id: "titulacion", name: "Unidad de Titulación", credits: 6, dependsOn: ["todas-materias"], icon: "fas fa-graduation-cap" },
                { id: "practicas-ii", name: "Prácticas Laborales II", credits: 3, dependsOn: ["practicas-i"], icon: "fas fa-user-tie" }
            ]
        }
    ],
    dependencies: {
        "60-creditos": {
            description: "Haber aprobado al menos 60 créditos",
            check: function(approvedCourses) {
                const totalCredits = curriculum.semesters.flatMap(s => s.courses)
                    .filter(c => approvedCourses.includes(c.id))
                    .reduce((sum, c) => sum + c.credits, 0);
                return totalCredits >= 60;
            }
        },
        "todas-materias": {
            description: "Haber aprobado todas las asignaturas anteriores",
            check: function(approvedCourses) {
                const allCourses = curriculum.semesters.flatMap(s => s.courses)
                    .filter(c => c.id !== "titulacion")
                    .map(c => c.id);
                return allCourses.every(c => approvedCourses.includes(c));
            }
        }
    }
};

// Variables globales
let progressChart, semesterChart;
let approvedCourses = {};

// Cargar progreso guardado
function loadProgress() {
    const saved = localStorage.getItem('mallaProgress');
    if (saved) {
        approvedCourses = JSON.parse(saved);
    } else {
        // Todas las materias del primer semestre están desbloqueadas por defecto
        curriculum.semesters[0].courses.forEach(course => {
            approvedCourses[course.id] = false;
        });
    }
    return approvedCourses;
}

// Guardar progreso
function saveProgress() {
    localStorage.setItem('mallaProgress', JSON.stringify(approvedCourses));
}

// Verificar si una materia está desbloqueada
function isCourseUnlocked(courseId) {
    const course = findCourseById(courseId);
    
    // Materias del primer semestre siempre están desbloqueadas
    if (curriculum.semesters[0].courses.some(c => c.id === courseId)) {
        return true;
    }
    
    // Si no tiene dependencias, está desbloqueada
    if (!course.dependsOn) {
        return true;
    }
    
    // Verificar dependencias normales
    for (const depId of course.dependsOn) {
        if (depId === "60-creditos" || depId === "todas-materias") {
            // Dependencias especiales
            if (!curriculum.dependencies[depId].check(Object.keys(approvedCourses).filter(id => approvedCourses[id]))) {
                return false;
            }
        } else {
            // Dependencias normales
            if (!approvedCourses[depId]) {
                return false;
            }
        }
    }
    
    return true;
}

// Buscar curso por ID
function findCourseById(id) {
    for (const semester of curriculum.semesters) {
        for (const course of semester.courses) {
            if (course.id === id) return course;
        }
    }
    return null;
}

// Renderizar la malla curricular
function renderMalla() {
    const container = document.getElementById('malla-container');
    container.innerHTML = '';
    
    // Agrupar semestres de 2 en 2
    for (let i = 0; i < curriculum.semesters.length; i += 2) {
        const pairContainer = document.createElement('div');
        pairContainer.className = 'semester-pair';
        
        // Semestre actual (impar)
        const semester1 = curriculum.semesters[i];
        const semesterEl1 = createSemesterElement(semester1);
        pairContainer.appendChild(semesterEl1);
        
        // Semestre siguiente (par) si existe
        if (i + 1 < curriculum.semesters.length) {
            const semester2 = curriculum.semesters[i + 1];
            const semesterEl2 = createSemesterElement(semester2);
            pairContainer.appendChild(semesterEl2);
        }
        
        container.appendChild(pairContainer);
    }
}

// Añade esta NUEVA función auxiliar (después de renderMalla)
function createSemesterElement(semester) {
    const semesterEl = document.createElement('div');
    semesterEl.className = 'semester';
    semesterEl.innerHTML = `<div class="semester-title">Semestre ${semester.number}</div>`;
    
    semester.courses.forEach(course => {
        const isApproved = approvedCourses[course.id] || false;
        const isUnlocked = isCourseUnlocked(course.id);
        
        const courseEl = document.createElement('div');
        courseEl.className = `course ${isUnlocked ? 'unlocked' : 'locked'} ${isApproved ? 'approved' : ''}`;
        courseEl.dataset.id = course.id;
        courseEl.innerHTML = `
            <div class="course-name">
                <i class="${course.icon || 'fas fa-book'}"></i>
                ${course.name}
            </div>
            <div class="course-credits">
                <i class="fas fa-star"></i>
                ${course.credits} créditos
            </div>
        `;
        
        if (isUnlocked) {
            courseEl.addEventListener('click', () => {
                approvedCourses[course.id] = !approvedCourses[course.id];
                saveProgress();
                renderMalla();
                updateCharts();
            });
        }
        
        semesterEl.appendChild(courseEl);
    });
    
    return semesterEl;
}
    const container = document.getElementById('malla-container');
    container.innerHTML = '';
    
    curriculum.semesters.forEach(semester => {
        const semesterEl = document.createElement('div');
        semesterEl.className = 'semester';
        semesterEl.innerHTML = `
            <div class="semester-title">Semestre ${semester.number}</div>
        `;
        
        semester.courses.forEach(course => {
            const isApproved = approvedCourses[course.id] || false;
            const isUnlocked = isCourseUnlocked(course.id);
            
            const courseEl = document.createElement('div');
            courseEl.className = `course ${isUnlocked ? 'unlocked' : 'locked'} ${isApproved ? 'approved' : ''}`;
            courseEl.dataset.id = course.id;
            courseEl.innerHTML = `
                <div class="course-name">
                    <i class="${course.icon || 'fas fa-book'}"></i>
                    ${course.name}
                </div>
                <div class="course-credits">
                    <i class="fas fa-star"></i>
                    ${course.credits} créditos
                </div>
            `;
            
            if (isUnlocked) {
                courseEl.addEventListener('click', () => {
                    approvedCourses[course.id] = !approvedCourses[course.id];
                    saveProgress();
                    renderMalla();
                    updateCharts();
                });
            }
            
            semesterEl.appendChild(courseEl);
        });
        
        container.appendChild(semesterEl);
    });


// Actualizar gráficos
function updateCharts() {
    const approvedCount = Object.values(approvedCourses).filter(Boolean).length;
    const totalCourses = curriculum.semesters.flatMap(s => s.courses).length;
    const approvedPercent = Math.round((approvedCount / totalCourses) * 100);
    
    const totalCredits = curriculum.semesters.flatMap(s => s.courses)
        .reduce((sum, c) => sum + c.credits, 0);
    const approvedCredits = curriculum.semesters.flatMap(s => s.courses)
        .filter(c => approvedCourses[c.id])
        .reduce((sum, c) => sum + c.credits, 0);
    const creditsPercent = Math.round((approvedCredits / totalCredits) * 100);
    
    // Actualizar gráfico de progreso general
    progressChart.data.datasets[0].data = [approvedPercent, 100 - approvedPercent];
    progressChart.update();
    
    // Actualizar gráfico por semestre
    curriculum.semesters.forEach((semester, index) => {
        const approved = semester.courses.filter(c => approvedCourses[c.id]).length;
        const pending = semester.courses.length - approved;
        
        semesterChart.data.datasets[0].data[index] = approved;
        semesterChart.data.datasets[1].data[index] = pending;
    });
    semesterChart.update();
    
    // Actualizar estadísticas
    document.getElementById('total-approved').textContent = `${approvedCount}/${totalCourses}`;
    document.getElementById('total-credits').textContent = `${approvedCredits}/${totalCredits}`;
    document.getElementById('progress-percent').textContent = `${approvedPercent}%`;
}

// Inicializar gráficos
function initCharts() {
    const progressCtx = document.getElementById('progress-chart').getContext('2d');
    const semesterCtx = document.getElementById('semester-chart').getContext('2d');
    
    progressChart = new Chart(progressCtx, {
        type: 'doughnut',
        data: {
            labels: ['Aprobadas', 'Pendientes'],
            datasets: [{
                data: [0, 100],
                backgroundColor: ['#2ecc71', '#ecf0f1'],
                borderWidth: 0
            }]
        },
        options: {
            cutout: '75%',
            plugins: {
                legend: { display: false },
                tooltip: { enabled: false }
            }
        }
    });
    
    semesterChart = new Chart(semesterCtx, {
        type: 'bar',
        data: {
            labels: curriculum.semesters.map(s => `Sem ${s.number}`),
            datasets: [
                {
                    label: 'Aprobadas',
                    data: Array(8).fill(0),
                    backgroundColor: '#2ecc71'
                },
                {
                    label: 'Pendientes',
                    data: curriculum.semesters.map(s => s.courses.length),
                    backgroundColor: '#3498db'
                }
            ]
        },
        options: {
            scales: {
                x: { stacked: true },
                y: { 
                    stacked: true,
                    max: Math.max(...curriculum.semesters.map(s => s.courses.length)) + 1,
                    ticks: { stepSize: 1 }
                }
            },
            plugins: { legend: { display: false } }
        }
    });
}

// Reiniciar progreso
function resetProgress() {
    if (confirm('¿Estás seguro de querer reiniciar todo tu progreso?')) {
        approvedCourses = {};
        // Solo desbloquear materias del primer semestre
        curriculum.semesters[0].courses.forEach(course => {
            approvedCourses[course.id] = false;
        });
        saveProgress();
        renderMalla();
        updateCharts();
    }
}

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    initCharts();
    renderMalla();
    updateCharts();
    
    document.getElementById('reset-btn').addEventListener('click', resetProgress);
});

// AGREGA esto al final de tu archivo JS
document.getElementById('printBtn').addEventListener('click', () => {
    window.print();
});

// Si quieres animaciones al cargar logs:
function addLog(message) {
    const logEntry = document.createElement('div');
    logEntry.style.animation = 'fadeIn 0.5s';
    // ... tu lógica actual para logs
}
