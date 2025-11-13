// Sistema de Información Unificado ESAP - JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');
    const pageTitle = document.querySelector('.page-title');
    const pageSubtitle = document.querySelector('.page-subtitle');
    
    // Estado del sidebar
    let sidebarCollapsed = false;
    
    // Toggle del sidebar
    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
        sidebarCollapsed = !sidebarCollapsed;
        
        // Animar el icono
        const icon = sidebarToggle.querySelector('i');
        icon.style.transform = sidebarCollapsed ? 'rotate(180deg)' : 'rotate(0deg)';
    });
    
    // Navegación entre secciones
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetSection = this.getAttribute('data-section');
            
            // Remover clase active de todos los nav-items
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Agregar clase active al nav-item clickeado
            this.closest('.nav-item').classList.add('active');
            
            // Ocultar todas las secciones
            contentSections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Mostrar la sección objetivo
            const targetElement = document.getElementById(targetSection);
            if (targetElement) {
                targetElement.classList.add('active');
                
                // Actualizar el título de la página
                updatePageTitle(targetSection);
                
                // Animar la entrada de la sección
                targetElement.style.opacity = '0';
                targetElement.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    targetElement.style.transition = 'all 0.3s ease';
                    targetElement.style.opacity = '1';
                    targetElement.style.transform = 'translateY(0)';
                }, 50);
            }
        });
    });
    
    // Función para actualizar el título de la página
    function updatePageTitle(sectionId) {
        const titles = {
            'dashboard': {
                title: 'Dashboard Principal',
                subtitle: 'Resumen general del sistema'
            },
            'personal': {
                title: 'Gestión de Personal',
                subtitle: 'Administración de recursos humanos'
            },
            'academico': {
                title: 'Gestión Académica',
                subtitle: 'Administración de programas y estudiantes'
            },
            'administrativo': {
                title: 'Gestión Administrativa',
                subtitle: 'Procesos administrativos internos'
            },
            'financiero': {
                title: 'Gestión Financiera',
                subtitle: 'Control financiero y presupuestario'
            },
            'investigacion': {
                title: 'Gestión de Investigación',
                subtitle: 'Proyectos y grupos de investigación'
            },
            'proyectos': {
                title: 'Gestión de Proyectos',
                subtitle: 'Seguimiento y control de proyectos'
            },
            'reportes': {
                title: 'Centro de Reportes',
                subtitle: 'Generación y descarga de reportes'
            },
            'configuracion': {
                title: 'Configuración del Sistema',
                subtitle: 'Configuración y administración'
            }
        };
        
        if (titles[sectionId]) {
            pageTitle.textContent = titles[sectionId].title;
            pageSubtitle.textContent = titles[sectionId].subtitle;
        }
    }
    
    // Simulación de datos en tiempo real para el dashboard
    function updateDashboardStats() {
        const stats = document.querySelectorAll('.stat-card h3');
        
        if (stats.length > 0) {
            // Simular cambios en las estadísticas
            setInterval(() => {
                stats.forEach(stat => {
                    const currentValue = parseInt(stat.textContent.replace(/[^0-9]/g, ''));
                    const variation = Math.floor(Math.random() * 10) - 5; // -5 a +5
                    const newValue = Math.max(0, currentValue + variation);
                    
                    if (stat.textContent.includes('$')) {
                        stat.textContent = `$${(newValue / 1000).toFixed(1)}M`;
                    } else {
                        stat.textContent = newValue.toLocaleString();
                    }
                });
            }, 30000); // Actualizar cada 30 segundos
        }
    }
    
    // Animación de las barras de progreso
    function animateProgressBars() {
        const progressBars = document.querySelectorAll('.progress-fill');
        
        progressBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0%';
            
            setTimeout(() => {
                bar.style.width = width;
            }, 500);
        });
    }
    
    // Funcionalidad de búsqueda
    const searchInput = document.querySelector('.search-box input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            if (searchTerm.length > 2) {
                // Aquí se implementaría la lógica de búsqueda
                console.log('Buscando:', searchTerm);
                
                // Simular resultados de búsqueda
                showSearchResults(searchTerm);
            }
        });
    }
    
    function showSearchResults(term) {
        // Crear dropdown de resultados (simulado)
        let searchResults = document.querySelector('.search-results');
        
        if (!searchResults) {
            searchResults = document.createElement('div');
            searchResults.className = 'search-results';
            searchResults.innerHTML = `
                <div class="search-result-item">
                    <i class="fas fa-users"></i>
                    <span>Buscar en Personal</span>
                </div>
                <div class="search-result-item">
                    <i class="fas fa-graduation-cap"></i>
                    <span>Buscar en Académico</span>
                </div>
                <div class="search-result-item">
                    <i class="fas fa-file-alt"></i>
                    <span>Generar Reporte</span>
                </div>
            `;
            
            // Estilos para los resultados
            searchResults.style.cssText = `
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: white;
                border: 1px solid #e2e8f0;
                border-radius: 8px;
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                z-index: 1000;
                margin-top: 4px;
            `;
            
            document.querySelector('.search-box').appendChild(searchResults);
        }
        
        searchResults.style.display = 'block';
        
        // Ocultar después de 3 segundos
        setTimeout(() => {
            if (searchResults) {
                searchResults.style.display = 'none';
            }
        }, 3000);
    }
    
    // Notificaciones
    const notificationBell = document.querySelector('.notifications');
    if (notificationBell) {
        notificationBell.addEventListener('click', function() {
            showNotifications();
        });
    }
    
    function showNotifications() {
        // Crear panel de notificaciones
        let notificationPanel = document.querySelector('.notification-panel');
        
        if (!notificationPanel) {
            notificationPanel = document.createElement('div');
            notificationPanel.className = 'notification-panel';
            notificationPanel.innerHTML = `
                <div class="notification-header">
                    <h4>Notificaciones</h4>
                    <button class="close-notifications">&times;</button>
                </div>
                <div class="notification-list">
                    <div class="notification-item unread">
                        <div class="notification-icon">
                            <i class="fas fa-user-plus"></i>
                        </div>
                        <div class="notification-content">
                            <p>Nuevo empleado registrado</p>
                            <span>Hace 2 horas</span>
                        </div>
                    </div>
                    <div class="notification-item unread">
                        <div class="notification-icon">
                            <i class="fas fa-file-upload"></i>
                        </div>
                        <div class="notification-content">
                            <p>Reporte mensual generado</p>
                            <span>Hace 4 horas</span>
                        </div>
                    </div>
                    <div class="notification-item">
                        <div class="notification-icon">
                            <i class="fas fa-graduation-cap"></i>
                        </div>
                        <div class="notification-content">
                            <p>Nuevo programa académico aprobado</p>
                            <span>Ayer</span>
                        </div>
                    </div>
                </div>
            `;
            
            // Estilos para el panel
            notificationPanel.style.cssText = `
                position: fixed;
                top: 80px;
                right: 20px;
                width: 350px;
                background: white;
                border-radius: 12px;
                box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
                z-index: 1000;
                border: 1px solid #e2e8f0;
                animation: slideInRight 0.3s ease;
            `;
            
            document.body.appendChild(notificationPanel);
            
            // Cerrar notificaciones
            notificationPanel.querySelector('.close-notifications').addEventListener('click', function() {
                notificationPanel.remove();
            });
        }
    }
    
    // Funcionalidad de módulos (simulada)
    const moduleButtons = document.querySelectorAll('.module-card .btn-secondary, .config-card .btn-secondary');
    moduleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const moduleName = this.closest('.module-card, .config-card').querySelector('h3').textContent;
            showModuleModal(moduleName);
        });
    });
    
    function showModuleModal(moduleName) {
        // Crear modal simulado
        const modal = document.createElement('div');
        modal.className = 'module-modal';
        modal.innerHTML = `
            <div class="modal-overlay"></div>
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Acceder a ${moduleName}</h3>
                    <button class="close-modal">&times;</button>
                </div>
                <div class="modal-body">
                    <p>Esta es una vista previa del módulo <strong>${moduleName}</strong>.</p>
                    <p>En la implementación real, aquí se cargaría la interfaz específica del módulo.</p>
                    <div class="module-features">
                        <h4>Características principales:</h4>
                        <ul>
                            <li>Gestión completa de datos</li>
                            <li>Reportes en tiempo real</li>
                            <li>Interfaz intuitiva</li>
                            <li>Integración con otros módulos</li>
                        </ul>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary close-modal">Cancelar</button>
                    <button class="btn btn-primary">Acceder al Módulo</button>
                </div>
            </div>
        `;
        
        // Estilos para el modal
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 2000;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        
        document.body.appendChild(modal);
        
        // Cerrar modal
        modal.querySelectorAll('.close-modal').forEach(closeBtn => {
            closeBtn.addEventListener('click', function() {
                modal.remove();
            });
        });
        
        modal.querySelector('.modal-overlay').addEventListener('click', function() {
            modal.remove();
        });
    }
    
    // Responsive behavior
    function handleResize() {
        if (window.innerWidth <= 768) {
            sidebar.classList.add('mobile');
            
            // En móvil, el sidebar se oculta automáticamente
            if (!sidebar.classList.contains('active')) {
                sidebar.style.transform = 'translateX(-100%)';
            }
        } else {
            sidebar.classList.remove('mobile');
            sidebar.style.transform = 'translateX(0)';
        }
    }
    
    // Event listeners
    window.addEventListener('resize', handleResize);
    handleResize(); // Ejecutar al cargar
    
    // Inicializar animaciones
    setTimeout(() => {
        animateProgressBars();
        updateDashboardStats();
    }, 1000);
    
    // Agregar estilos CSS dinámicos
    const dynamicStyles = document.createElement('style');
    dynamicStyles.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        .notification-panel {
            max-height: 500px;
            overflow-y: auto;
        }
        
        .notification-header {
            padding: 1rem 1.5rem;
            border-bottom: 1px solid #e2e8f0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .notification-header h4 {
            margin: 0;
            color: #1f2937;
        }
        
        .close-notifications {
            background: none;
            border: none;
            font-size: 1.5rem;
            color: #6b7280;
            cursor: pointer;
        }
        
        .notification-list {
            padding: 1rem;
        }
        
        .notification-item {
            display: flex;
            gap: 1rem;
            padding: 1rem;
            border-radius: 8px;
            margin-bottom: 0.5rem;
            transition: background-color 0.3s ease;
        }
        
        .notification-item:hover {
            background: #f9fafb;
        }
        
        .notification-item.unread {
            background: #eff6ff;
            border-left: 4px solid #3b82f6;
        }
        
        .notification-icon {
            width: 40px;
            height: 40px;
            background: #dbeafe;
            color: #1e40af;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .notification-content p {
            margin: 0 0 0.25rem 0;
            font-weight: 500;
            color: #1f2937;
        }
        
        .notification-content span {
            font-size: 0.75rem;
            color: #6b7280;
        }
        
        .search-result-item {
            padding: 0.75rem 1rem;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        
        .search-result-item:hover {
            background: #f9fafb;
        }
        
        .search-result-item i {
            color: #3b82f6;
        }
        
        .modal-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(4px);
        }
        
        .modal-content {
            position: relative;
            background: white;
            border-radius: 12px;
            max-width: 500px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        .modal-header {
            padding: 1.5rem;
            border-bottom: 1px solid #e2e8f0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .modal-header h3 {
            margin: 0;
            color: #1f2937;
        }
        
        .close-modal {
            background: none;
            border: none;
            font-size: 1.5rem;
            color: #6b7280;
            cursor: pointer;
        }
        
        .modal-body {
            padding: 1.5rem;
        }
        
        .modal-footer {
            padding: 1.5rem;
            border-top: 1px solid #e2e8f0;
            display: flex;
            gap: 1rem;
            justify-content: flex-end;
        }
        
        .module-features {
            margin-top: 1rem;
            padding: 1rem;
            background: #f9fafb;
            border-radius: 8px;
        }
        
        .module-features h4 {
            margin: 0 0 0.5rem 0;
            color: #1f2937;
        }
        
        .module-features ul {
            margin: 0;
            padding-left: 1.5rem;
        }
        
        .module-features li {
            color: #4b5563;
            margin-bottom: 0.25rem;
        }
    `;
    
    document.head.appendChild(dynamicStyles);
    
    console.log('Sistema de Información Unificado ESAP - Inicializado correctamente');
});