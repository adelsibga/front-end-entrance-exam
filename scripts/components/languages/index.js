import './style.scss';

export function drawLanguagesSection(data) {
  const languagesItem = data.list.map((item, index) => {
    const dataKey = `languages.item.${index}`;

    return `
      <li 
        class='languages__list-item'
      >
        <span 
          class='text-5 f-w-500' 
          contenteditable 
          data-key='${dataKey}.label'
        >
          ${item.label}
        </span>
        <div class='languages__list-item-level' style='--lang-level: ${item.level}'></div>
      </li>
    `;
  }).join('');

  return `
    <div class='languages block block_languages'>
      <h2 class='languages__title text-7 f-w-500' contenteditable data-key='languages.title'>
        ${!!data.title ? data.title : 'Languages'}
      </h2>
      <ul class='languages__list list-type-none'>
        ${languagesItem}
      </ul>
    </div>`;
}
