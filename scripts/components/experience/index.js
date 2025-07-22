import './style.scss';

export function drawExperienceSection(data) {
  const experienceListItem = data.list.map((item, index) => `
    <li class='experience__list-item'>
      <div class='experience__header header'>
        <span
          class='header__date'
          contenteditable
          data-key='experience.item.${index}.date'
        >
          ${item.date}
        </span>
        ${index === 0 
          ? `<span class='header__badge' contenteditable data-key='experience.item.${index}.badge'>most recent</span>`
          : ''
        }
      </div>
      <div class='experience__body body'>
        <h3 
          class='body__position' 
          contenteditable 
          data-key='experience.item.${index}.position'
        >
          ${item.position}  
        </h3>
        <p 
          class='body__format' 
          contenteditable 
          data-key='experience.item.${index}.format'
        >
          ${item.format}
        </p>
        <ul class='body__description-list'>
          ${item.description.map((desc, idx) => `
            <li 
              class='body__description-list-item' 
              contenteditable 
              data-key='experience.item.${index}.desc.${idx}'
            >
              ${desc}
            </li>
          `).join('')}
        </ul>
      </div>
      </li>
  `).join('');

  return `
    <div class='experience block block_experience'>
      <h2 class='experience__title' contenteditable data-key='experience.title'>
        ${data.title}
      </h2>
      <ul class='experience__list'>
        ${experienceListItem}
      </ul>
    </div>`;
}
