import './style.scss';

export function drawExperienceSection(data) {
  const hasExperience = data?.list?.length > 0;

  const listContent = hasExperience
    ? [...data.list]
      .reverse()
      .map((item, reversedIndex) => {
        const isEmptyItem = Object.keys(item).length === 0;
        const isMostRecent = reversedIndex === 0;
        const originalIndex = data.list.length - 1 - reversedIndex;
        const dataKey = `experience.item.${originalIndex}`;

        return !isEmptyItem ? `
          <li class='experience__list-item list-item ${isMostRecent ? 'experience__list-item_recent' : ''}'>
            <div class='list-item__header header'>
              ${item.date?.length ? `
                <span class='header__date f-w-500 text-4' contenteditable data-key='${dataKey}.date'>
                  ${item.date}
                </span>
              ` : ''}
              ${isMostRecent ? `
                <span class='header__badge f-w-500 text-4' contenteditable data-key='${dataKey}.badge'>
                  most recent
                </span>
              ` : ''}
            </div>
            <div class='list-item__body body'>
              <div class='body__description-left'>
                ${item.position?.length ? `
                  <h3
                    class='body__position text-5 f-w-500'
                    contenteditable
                    data-key='${dataKey}.position'
                    style='--line-clamp: 2'
                  >
                    ${item.position}
                  </h3>
                ` : ''}
                ${item.format?.length ? `
                  <p
                    class='body__format ${isMostRecent ? 'body__format_recent' : ''} text-4 f-w-400'
                    contenteditable
                    data-key='${dataKey}.format'
                    style='--line-clamp: 2'
                  >
                  ${item.format}
                </p>
                ` : ''}       
              </div>
              ${item.description?.length ? `
                <ul class='body__description-list'>
                  ${item.description.map((desc, descIndex) => `
                    <li
                      class='body__description-list-item text-4 f-w-400'
                      contenteditable 
                      data-key='${dataKey}.description.${descIndex}'
                      style='--line-clamp: 10'
                    >
                      ${desc}
                    </li>
                  `).join('')}
                </ul>
              ` : ''}
            </div>
          </li>
        ` : '';
      }).join('')
    : `<li class='experience__list-item experience__list-item_empty-experience'>No experience</li>`;

  return `
    <div class='experience block block_experience'>
      <h2 
        class='experience__title text-7 f-w-500' 
        contenteditable 
        data-key='experience.title'
      >
        ${!!data.title ? data.title : 'Experience'}
      </h2>
      ${!!listContent ? `
        <ul class='experience__list'>
          ${listContent}
        </ul>
      ` : ''}
    </div>
  `;
}
