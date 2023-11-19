var timerStart = Date.now()
 window.onload = function() {
    loadTime = Date.now() - timerStart

    addLoadTimeToFooter(loadTime);
 }

 function addLoadTimeToFooter(loadTime) {
  var footer = document.querySelector('footer');
  var loadTimeText = document.createElement('p');
  loadTimeText.textContent = 'Время загрузки страницы: ' + loadTime + ' мс';
  footer.appendChild(loadTimeText);
}