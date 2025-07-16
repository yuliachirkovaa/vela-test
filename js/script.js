document.addEventListener('DOMContentLoaded', function() {

    const catalogOpener = document.querySelector('.menu-catalog-opener');
    const whoOpener = document.querySelector('.menu-who-opener');
    const eventsOpener = document.querySelector('.menu-events-opener');
    const firstOpener = document.querySelector('.menu-first-opener');
    const secondOpeners = document.querySelectorAll('.menu-second-opener');
    const thirdOpeners = document.querySelectorAll('.menu-third-opener');

    const catalogMenu = document.querySelector('.menu--catalog');
    const whoMenu = document.querySelector('.menu--who');
    const eventsMenu = document.querySelector('.menu--events');
    const firstMenu = document.querySelector('.menu--first');
    const secondMenu = document.querySelector('.menu--second');
    const thirdMenu = document.querySelector('.menu--third');

    // Функция для открытия меню
    function openMenu(menu) {
        menu.classList.toggle('menu--active'); // Добавляем класс для показа меню
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

    firstOpener.addEventListener('click', function(event) {
        event.stopPropagation();
        openMenu(firstMenu);
    });

    secondOpeners.forEach(opener => {
      opener.addEventListener('click', function(event) {
        event.stopPropagation();
        openMenu(secondMenu);
    });
    });

    thirdOpeners.forEach(opener => {
      opener.addEventListener('click', function(event) {
        event.stopPropagation();
        openMenu(thirdMenu);
    });
    });

     // Переменные для отслеживания скролла
    let lastScrollTop = 0;

    // Функция для обработки скролла
    window.addEventListener('scroll', function() {
        const scrollElements = document.querySelectorAll('.scroll-hide');
        const headerBottom = document.querySelector('.header__bottom');
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        scrollElements.forEach(element => {
            if (currentScroll > lastScrollTop) { // Скролл вниз
                element.classList.add('scroll-hide--active');
            } else { // Скролл вверх
                if (currentScroll <= 0) {
                    element.classList.remove('scroll-hide--active');
                }
            }
        });

        if (currentScroll > lastScrollTop) {
          headerBottom.classList.add('header__bottom--scroll');
        } else {
          if (currentScroll <= 0) {
              headerBottom.classList.remove('header__bottom--scroll');
          }
        }

        // Обновляем последний скролл
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Для мобильных устройств или при прокрутке
    });

});
