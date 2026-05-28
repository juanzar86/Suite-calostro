const routes = {
    '/': '<h1>Bienvenido a la Suite Calostro</h1><p>Sistema de gestión neonatal.</p>',
    '/index.html': '<h1>Bienvenido a la Suite Calostro</h1><p>Sistema de gestión neonatal.</p>',
    '/apgar': '<h1>Cálculo de Apgar</h1>',
    '/silverman': '<h1>Cálculo de Silverman</h1>'
};

function router() {
    const path = window.location.pathname;
    const app = document.getElementById('app');
    
    // Si la ruta existe en nuestro objeto, la muestra; si no, mensaje 404
    if (routes[path]) {
        app.innerHTML = routes[path];
    } else {
        app.innerHTML = '<h1>404 - Página no encontrada</h1>';
    }
}

// Ejecutar el router al cargar la página
window.addEventListener('load', router);