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
            'documental': {
                title: 'Gestión Documental',
                subtitle: 'Sistema integral de gestión documental'
            },
            'rendicion': {
                title: 'Rendición de Cuentas',
                subtitle: 'Transparencia e información ciudadana'
            },
            'acreditacion': {
                title: 'Acreditación Institucional',
                subtitle: 'Gestión del proceso de acreditación y calidad'
            },
            'personal': {
                title: 'Gestión de Personal',
                subtitle: 'Administración de recursos humanos'
            },
            'reportes': {
                title: 'Centro de Reportes',
                subtitle: 'Generación y análisis de reportes institucionales'
            },
            'transparencia': {
                title: 'Transparencia y Acceso a la Información',
                subtitle: 'Cumplimiento normativo y gobierno abierto'
            },
            'interoperabilidad': {
                title: 'Interoperabilidad',
                subtitle: 'Integración con sistemas externos y plataformas'
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
    
    console.log('INFESAP - Sistema de Información Unificado ESAP - Inicializado correctamente');
});

// Chatbot functionality
class ChatBot {
    constructor() {
        this.isOpen = false;
        this.responses = {
            'documentos': {
                keywords: ['documento', 'documentos', 'archivo', 'archivos', 'pdf', 'acceso'],
                response: 'Para acceder a tus documentos, ve a la sección "Documentos" en el menú lateral. Allí podrás ver, subir y gestionar todos tus archivos. ¿Necesitas ayuda con algún documento específico?'
            },
            'reportes': {
                keywords: ['reporte', 'reportes', 'informe', 'informes', 'estadística', 'datos'],
                response: 'En la sección "Reportes" encontrarás informes financieros, académicos, administrativos y estratégicos. También puedes generar reportes personalizados. ¿Qué tipo de reporte necesitas?'
            },
            'transparencia': {
                keywords: ['transparencia', 'información', 'público', 'ciudadano', 'acceso información'],
                response: 'La sección "Transparencia" contiene toda la información pública de ESAP, indicadores de transparencia y herramientas de acceso ciudadano. ¿Buscas algo específico?'
            },
            'acreditacion': {
                keywords: ['acreditación', 'acreditar', 'calidad', 'certificación'],
                response: 'En "Acreditación" puedes consultar el estado de los procesos de acreditación, documentos requeridos y cronogramas. ¿Necesitas información sobre algún programa específico?'
            },
            'usuarios': {
                keywords: ['usuario', 'usuarios', 'perfil', 'cuenta', 'acceso', 'login'],
                response: 'Para gestionar usuarios, ve a la sección "Usuarios" donde podrás crear, editar y administrar perfiles. ¿Necesitas ayuda con permisos o roles?'
            },
            'rendicion': {
                keywords: ['rendición', 'cuentas', 'rendición de cuentas', 'accountability'],
                response: 'En "Rendición de Cuentas" encontrarás informes de gestión, indicadores de desempeño y documentos de accountability. ¿Buscas algún período específico?'
            },
            'personal': {
                keywords: ['personal', 'empleado', 'trabajador', 'nómina', 'recursos humanos'],
                response: 'La "Gestión de Personal" incluye información de empleados, nóminas, evaluaciones y desarrollo profesional. ¿En qué puedo ayudarte?'
            },
            'soporte': {
                keywords: ['soporte', 'ayuda', 'problema', 'error', 'ticket', 'apoyo'],
                response: 'Para soporte técnico, ve a la sección "Soporte" donde puedes crear tickets, consultar FAQs y contactar al equipo técnico. ¿Tienes algún problema específico?'
            },
            'interoperabilidad': {
                keywords: ['interoperabilidad', 'integración', 'klic', 'active document', 'sistemas externos', 'plataformas'],
                response: 'La sección "Interoperabilidad" muestra las integraciones con sistemas externos como KLIC y Active Document. Puedes acceder directamente a estas plataformas y sincronizar datos. ¿Necesitas ayuda con alguna integración específica?'
            },
            'configuracion': {
                keywords: ['configuración', 'configurar', 'ajustes', 'preferencias', 'settings'],
                response: 'En "Configuración" puedes ajustar las preferencias del sistema, gestionar usuarios y personalizar tu experiencia. ¿Qué configuración necesitas modificar?'
            },
            'default': {
                keywords: [],
                response: 'Entiendo tu consulta. Puedo ayudarte con información sobre documentos, reportes, transparencia, acreditación, usuarios, rendición de cuentas, gestión de personal, interoperabilidad, configuración y soporte técnico. ¿Sobre qué sección específica necesitas información?'
            }
        };
        this.init();
    }

    init() {
        this.chatbotToggle = document.getElementById('chatbotToggle');
        this.chatbotContainer = document.getElementById('chatbotContainer');
        this.chatbotClose = document.getElementById('chatbotClose');
        this.chatbotInput = document.getElementById('chatbotInput');
        this.chatbotSend = document.getElementById('chatbotSend');
        this.chatbotMessages = document.getElementById('chatbotMessages');
        this.suggestionBtns = document.querySelectorAll('.suggestion-btn');
        this.notificationBadge = document.querySelector('.notification-badge');

        this.bindEvents();
    }

    bindEvents() {
        this.chatbotToggle.addEventListener('click', () => this.toggleChat());
        this.chatbotClose.addEventListener('click', () => this.closeChat());
        this.chatbotSend.addEventListener('click', () => this.sendMessage());
        this.chatbotInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });

        this.suggestionBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const message = btn.dataset.message;
                this.addUserMessage(message);
                this.processMessage(message);
                this.hideSuggestions();
            });
        });
    }

    toggleChat() {
        if (this.isOpen) {
            this.closeChat();
        } else {
            this.openChat();
        }
    }

    openChat() {
        this.chatbotContainer.classList.add('active');
        this.isOpen = true;
        this.notificationBadge.style.display = 'none';
        this.chatbotInput.focus();
    }

    closeChat() {
        this.chatbotContainer.classList.remove('active');
        this.isOpen = false;
    }

    sendMessage() {
        const message = this.chatbotInput.value.trim();
        if (message) {
            this.addUserMessage(message);
            this.processMessage(message);
            this.chatbotInput.value = '';
            this.hideSuggestions();
        }
    }

    addUserMessage(message) {
        const messageEl = document.createElement('div');
        messageEl.className = 'message user-message';
        messageEl.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-user"></i>
            </div>
            <div class="message-content">
                <p>${message}</p>
                <span class="message-time">${this.getCurrentTime()}</span>
            </div>
        `;
        this.chatbotMessages.appendChild(messageEl);
        this.scrollToBottom();
    }

    addBotMessage(message) {
        // Add typing indicator
        this.showTypingIndicator();
        
        setTimeout(() => {
            this.hideTypingIndicator();
            const messageEl = document.createElement('div');
            messageEl.className = 'message bot-message';
            messageEl.innerHTML = `
                <div class="message-avatar">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="message-content">
                    <p>${message}</p>
                    <span class="message-time">${this.getCurrentTime()}</span>
                </div>
            `;
            this.chatbotMessages.appendChild(messageEl);
            this.scrollToBottom();
        }, 1000 + Math.random() * 1000); // Random delay for realism
    }

    showTypingIndicator() {
        const typingEl = document.createElement('div');
        typingEl.className = 'typing-indicator';
        typingEl.id = 'typingIndicator';
        typingEl.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="typing-dots">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        `;
        this.chatbotMessages.appendChild(typingEl);
        this.scrollToBottom();
    }

    hideTypingIndicator() {
        const typingIndicator = document.getElementById('typingIndicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    processMessage(message) {
        const lowerMessage = message.toLowerCase();
        let response = this.responses.default.response;

        // Find matching response
        for (const [key, data] of Object.entries(this.responses)) {
            if (key === 'default') continue;
            if (data.keywords.some(keyword => lowerMessage.includes(keyword))) {
                response = data.response;
                break;
            }
        }

        // Special handling for greetings
        if (lowerMessage.includes('hola') || lowerMessage.includes('buenos') || lowerMessage.includes('buenas')) {
            response = '¡Hola! Bienvenido a INFESAP. Estoy aquí para ayudarte con cualquier consulta sobre el sistema. ¿En qué puedo asistirte?';
        }

        // Special handling for thanks
        if (lowerMessage.includes('gracias') || lowerMessage.includes('thank')) {
            response = '¡De nada! Estoy aquí para ayudarte cuando lo necesites. ¿Hay algo más en lo que pueda asistirte?';
        }

        this.addBotMessage(response);
    }

    hideSuggestions() {
        const suggestions = document.querySelector('.chatbot-suggestions');
        suggestions.style.display = 'none';
    }

    getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString('es-ES', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: false 
        });
    }

    scrollToBottom() {
        setTimeout(() => {
            this.chatbotMessages.scrollTop = this.chatbotMessages.scrollHeight;
        }, 100);
    }
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ChatBot();
});

// Integration functions for Interoperabilidad section
function openKlicIntegration() {
    showNotification('🎓 Redirigiendo a KLIC...', 'info');
    setTimeout(() => {
        window.open('#', '_blank'); // Replace with actual KLIC URL
    }, 1000);
}

function openActiveDocument() {
    showNotification('📄 Redirigiendo a Active Document...', 'info');
    setTimeout(() => {
        window.open('#', '_blank'); // Replace with actual Active Document URL
    }, 1000);
}

function syncKlic() {
    const btn = event.target;
    const originalContent = btn.innerHTML;
    
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sincronizando...';
    
    setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = originalContent;
        showNotification('✓ KLIC sincronizado correctamente', 'success');
    }, 2000);
}

function syncActiveDocument() {
    const btn = event.target;
    const originalContent = btn.innerHTML;
    
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sincronizando...';
    
    setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = originalContent;
        showNotification('✓ Active Document sincronizado correctamente', 'success');
    }, 2000);
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    if (!document.querySelector('#notificationStyles')) {
        const styles = document.createElement('style');
        styles.id = 'notificationStyles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: white;
                border-radius: 8px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.15);
                z-index: 9999;
                animation: slideIn 0.3s ease;
                border-left: 4px solid;
                max-width: 400px;
            }
            .notification-info { border-left-color: #3b82f6; }
            .notification-success { border-left-color: #10b981; }
            .notification-content {
                padding: 1rem 1.5rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 1rem;
            }
            .notification-close {
                background: none; border: none; color: #6b7280; cursor: pointer; padding: 0.25rem;
            }
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(notification);
    setTimeout(() => {
        if (notification.parentElement) notification.remove();
    }, 3000);
}

// Integration functions for Interoperabilidad section
function openKlicIntegration() {
    // Simulate opening KLIC platform
    showNotification('🎓 Redirigiendo a KLIC...', 'info');
    setTimeout(() => {
        window.open('#', '_blank'); // Replace with actual KLIC URL
    }, 1000);
}

function openActiveDocument() {
    // Simulate opening Active Document platform
    showNotification('📄 Redirigiendo a Active Document...', 'info');
    setTimeout(() => {
        window.open('#', '_blank'); // Replace with actual Active Document URL
    }, 1000);
}

function syncKlic() {
    // Simulate KLIC synchronization
    const btn = event.target;
    const originalContent = btn.innerHTML;
    
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sincronizando...';
    
    setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = originalContent;
        showNotification('✓ KLIC sincronizado correctamente', 'success');
        
        // Update last sync time
        const syncTime = document.querySelector('.platform-card.featured .metric-value:last-of-type');
        if (syncTime) {
            syncTime.textContent = 'Hace 1 min';
        }
    }, 2000);
}

function syncActiveDocument() {
    // Simulate Active Document synchronization
    const btn = event.target;
    const originalContent = btn.innerHTML;
    
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sincronizando...';
    
    setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = originalContent;
        showNotification('✓ Active Document sincronizado correctamente', 'success');
        
        // Update last sync time
        const syncTimes = document.querySelectorAll('.platform-card.featured .metric-value');
        if (syncTimes.length > 2) {
            syncTimes[5].textContent = 'Hace 1 min'; // Active Document sync time
        }
    }, 2000);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add styles if not exists
    if (!document.querySelector('#notificationStyles')) {
        const styles = document.createElement('style');
        styles.id = 'notificationStyles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: white;
                border-radius: 8px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.15);
                z-index: 9999;
                animation: slideIn 0.3s ease;
                border-left: 4px solid;
                max-width: 400px;
            }
            
            .notification-info {
                border-left-color: #3b82f6;
            }
            
            .notification-success {
                border-left-color: #10b981;
            }
            
            .notification-content {
                padding: 1rem 1.5rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 1rem;
            }
            
            .notification-close {
                background: none;
                border: none;
                color: #6b7280;
                cursor: pointer;
                padding: 0.25rem;
            }
            
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(styles);
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 3000);
}