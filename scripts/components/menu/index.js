import './style.scss';

export function drawMenu() {
  return `
    <header class='menu'>
      <div class='menu__wrapper'>
        <button class='menu__button' id='save-pdf'>Save PDF</button>
      </div>
    </header>
  `;
}
