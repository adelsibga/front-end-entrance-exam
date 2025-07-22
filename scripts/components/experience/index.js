import './style.scss';

export function drawExperienceSection(data) {
  const hasExperience = data?.list?.length > 0;

  const listContent = hasExperience
    ? [...data.list]
      .reverse()
      .map((item, reversedIndex) => {
        const isMostRecent = reversedIndex === 0;
        const originalIndex = data.list.length - 1 - reversedIndex;
        const dataKey = `experience.item.${originalIndex}`;

        return `
          <li class='experience__list-item ${isMostRecent ? 'experience__list-item_recent' : ''}'>
            <div class='experience__header header'>
              ${item.date?.length ? `
                <span class='header__date' contenteditable data-key='${dataKey}.date'>
                  ${item.date}
                </span>
              ` : ''}
              ${isMostRecent ? `
                <span class='header__badge' contenteditable data-key='${dataKey}.badge'>
                  most recent
                </span>
              ` : ''}
            </div>
            <div class='experience__body body'>
              ${item.position?.length ? `
                <h3 class='body__position' contenteditable data-key='${dataKey}.position'>
                  ${item.position}
                </h3>
              ` : ''}
              ${item.format?.length ? `
                <p class='body__format' contenteditable data-key='${dataKey}.format'>
                ${item.format}
              </p>
              ` : ''}
              ${item.description?.length ? `
                <ul class='body__description-list'>
                  ${item.description.map((desc, descIndex) => `
                    <li class='body__description-list-item' contenteditable 
                        data-key='${dataKey}.description.${descIndex}'>
                      ${desc}
                    </li>
                  `).join('')}
                </ul>
              ` : ''}
            </div>
          </li>
        `;
      }).join('')
    : `<li class='experience__list-item experience__list-item_empty-experience'>No experience</li>`;

  return `
    <div class='experience block block_experience'>
      <h2 
        class='experience__title' 
        contenteditable 
        data-key='experience.title'
      >
        ${data.title}
      </h2>
      
      <ul class='experience__list'>
        ${listContent}
      </ul>
    </div>
  `;
}
