const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'flex') => {
  const header = document.querySelector(headerSelector);
  const tabsElements = document.querySelectorAll(tabSelector);
  const content = document.querySelectorAll(contentSelector);

  function hideTabContent() {
    content.forEach((item) => {
      item.style.display = 'none';
    });

    tabsElements.forEach((item) => {
      item.classList.remove(activeClass);
    });
  }

  function showTabContent(index = 0) {
    content[index].style.display = display;
    tabsElements[index].classList.add(activeClass);
  }

  function formatClasses(str) {
    return str.replace(/\./, '');
  }

  hideTabContent();
  showTabContent();

  header.addEventListener('click', (e) => {
    const { target } = e;

    if (target
      && (target.classList.contains(formatClasses(tabSelector))
    || target.parentNode.classList.contains(formatClasses(tabSelector)))) {
      tabsElements.forEach((item, index) => {
        if (target === item || target.parentNode === item) {
          hideTabContent();
          showTabContent(index);
        }
      });
    }
  });
};

export default tabs;
