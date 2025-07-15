document.addEventListener('DOMContentLoaded', function() {
    const catalogOpener = document.querySelector('.menu-catalog-opener');
    const whoOpener = document.querySelector('.menu-who-opener');
    const eventsOpener = document.querySelector('.menu-events-opener');

    const catalogMenu = document.querySelector('.menu--catalog');
    const whoMenu = document.querySelector('.menu--who');
    const eventsMenu = document.querySelector('.menu--events');

    // Функция для открытия меню
    function openMenu(menu) {
        menu.classList.toggle('active'); // Добавляем класс для показа меню
    }

    // Открытие меню по клику на кнопку
    catalogOpener.addEventListener('click', function(event) {
        event.stopPropagation(); // Остановить всплытие события
        openMenu(catalogMenu);
    });

    whoOpener.addEventListener('click', function(event) {
        event.stopPropagation();
        openMenu(whoMenu);
    });

    eventsOpener.addEventListener('click', function(event) {
        event.stopPropagation();
        openMenu(eventsMenu);
    });

    // Закрытие всех меню при клике вне их области
    document.addEventListener('click', function() {
        catalogMenu.classList.remove('active');
        whoMenu.classList.remove('active');
        eventsMenu.classList.remove('active');
    });
});
