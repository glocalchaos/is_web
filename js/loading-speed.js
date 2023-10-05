(function() {
    // Функция для добавления информации о скорости загрузки в футер
    function addLoadTimeToFooter(loadTime) {
      var footer = document.querySelector('footer');
      var loadTimeText = document.createElement('p');
      loadTimeText.textContent = 'Время загрузки страницы: ' + loadTime + ' мс';
      footer.appendChild(loadTimeText);
    }
  
    // Функция для измерения времени загрузки страницы
    function measureLoadTime() {
      var loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
      addLoadTimeToFooter(loadTime);
    }
  
    // Вызываем функцию измерения времени загрузки после полной загрузки страницы
    window.addEventListener('load', measureLoadTime);
  })();