export function setEditableListener() {
  const editableElements = document.querySelectorAll('[contenteditable]');

  editableElements.forEach(el => {
    const key = el.dataset.key;
    const savedValue = localStorage.getItem(key);
    if (savedValue) {
      el.innerHTML = savedValue;
    }
  });

  editableElements.forEach(el => {
    el.addEventListener('blur', () => {
      const key = el.dataset.key;
      const value = el.innerHTML.trim();

      if (value) {
        localStorage.setItem(key, value);
      }
      else {
        localStorage.removeItem(key);
      }
    });

    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        el.blur();
      }
    });
  });
}
