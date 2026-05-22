// Функция для плавной смены вкладок (Tabs)
function switchTab(targetTabId) {
    // Находим все разделы и ссылки
    const tabs = document.querySelectorAll('.tab-content');
    const links = document.querySelectorAll('.nav-tab');

    tabs.forEach(tab => {
        tab.classList.remove('active-tab');
        if (tab.id === targetTabId) {
            // Небольшая задержка для красоты эффекта появления
            setTimeout(() => {
                tab.classList.add('active-tab');
            }, 50);
        }
    });

    // Подсвечиваем нужную кнопку в меню
    links.forEach(link => {
        if (link.getAttribute('data-target') === targetTabId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Вешаем события на клики по меню
document.querySelectorAll('.nav-tab').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('data-target');
        switchTab(target);
    });
});

// Клик по логотипу возвращает на главную
document.getElementById('nav-logo').addEventListener('click', () => {
    switchTab('home');
});

// Логика открытия и закрытия модального окна авторизации
const modal = document.getElementById('auth-modal');
const openBtn = document.getElementById('open-auth-btn');
const closeBtn = document.getElementById('close-auth-btn');

openBtn.addEventListener('click', () => modal.classList.add('open'));
closeBtn.addEventListener('click', () => modal.classList.remove('open'));

// Закрытие окна при клике в пустую область вокруг него
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('open');
    }
});

// Интерактивный выбор цвета в магазине
document.querySelectorAll('.color-dot').forEach(dot => {
    dot.addEventListener('click', function() {
        // Убираем активный класс у всех точек в этой карточке
        const parent = this.parentElement;
        parent.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
        
        // Добавляем активный класс текущей точке
        this.classList.add('active');
        
        // Меняем текст названия цвета
        const colorName = this.getAttribute('data-color');
        parent.parentElement.querySelector('.selected-color-text span').textContent = colorName;
    });
});// Функция для плавной смены вкладок (Tabs)
function switchTab(targetTabId) {
    // Находим все разделы и ссылки
    const tabs = document.querySelectorAll('.tab-content');
    const links = document.querySelectorAll('.nav-tab');

    tabs.forEach(tab => {
        tab.classList.remove('active-tab');
        if (tab.id === targetTabId) {
            // Небольшая задержка для красоты эффекта появления
            setTimeout(() => {
                tab.classList.add('active-tab');
            }, 50);
        }
    });

    // Подсвечиваем нужную кнопку в меню
    links.forEach(link => {
        if (link.getAttribute('data-target') === targetTabId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Вешаем события на клики по меню
document.querySelectorAll('.nav-tab').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('data-target');
        switchTab(target);
    });
});

// Клик по логотипу возвращает на главную
document.getElementById('nav-logo').addEventListener('click', () => {
    switchTab('home');
});

// Логика открытия и закрытия модального окна авторизации
const modal = document.getElementById('auth-modal');
const openBtn = document.getElementById('open-auth-btn');
const closeBtn = document.getElementById('close-auth-btn');

openBtn.addEventListener('click', () => modal.classList.add('open'));
closeBtn.addEventListener('click', () => modal.classList.remove('open'));

// Закрытие окна при клике в пустую область вокруг него
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('open');
    }
});

// Интерактивный выбор цвета в магазине
document.querySelectorAll('.color-dot').forEach(dot => {
    dot.addEventListener('click', function() {
        // Убираем активный класс у всех точек в этой карточке
        const parent = this.parentElement;
        parent.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
        
        // Добавляем активный класс текущей точке
        this.classList.add('active');
        
        // Меняем текст названия цвета
        const colorName = this.getAttribute('data-color');
        parent.parentElement.querySelector('.selected-color-text span').textContent = colorName;
    });
});