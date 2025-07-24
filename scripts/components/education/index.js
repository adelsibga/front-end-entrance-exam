import './style.scss';

export function drawEducationSection(data) {
  const hasEducation = data?.list?.length > 0;

  const listContent = hasEducation
    ? [...data.list]
      .reverse()
      .map((item, reversedIndex) => {
        const isEmptyItem = Object.keys(item).length === 0;
        const isMostRecent = reversedIndex === 0;
        const originalIndex = data.list.length - 1 - reversedIndex;
        const dataKey = `education.item.${originalIndex}`;

        return !isEmptyItem ? `
          <li class='education__list-item list-item ${isMostRecent ? 'list-item_recent' : ''}'>
            ${item.date?.length ? `
              <span 
                class='list-item__date text-5 f-w-500 ${isMostRecent ? 'list-item__date_recent' : ''}' 
                contenteditable 
                data-key='${dataKey}.date'
              >
                ${item.date}
              </span>
            ` : ''}
            ${item.title?.length ? `
              <h3 
                class='list-item__title text-5 f-w-500'
                contenteditable
                data-key='${dataKey}.title'
              >
                ${item.title}
              </h3>
            ` : ''}
            ${item.tags?.length ? `
              <ul class='list-item__tag-list tag-list list-type-none'>
                ${item.tags.map((tag, tagIndex) => `
                  <li 
                    class='tag-list__item text-4 f-w-400 ${isMostRecent ? 'tag-list__item_recent' : ''}'
                    contenteditable
                    data-key='${dataKey}.tags.${tagIndex}'
                  >
                    #${tag}
                  </li>
                `).join('')}
              </ul>
            ` : ''}
            ${item.place?.length ? `
              <span 
                class='list-item__place text-4 f-w-400'
                contenteditable
                data-key='${dataKey}.place'
              >
                ${item.place}
              </span>
            ` : ''}
          </li>
        ` : '';
      }).join('')
    : `<li class='education__list-item education__list-item_empty text-4 f-w-500'>No education</li>`;

  return `
    <div class='education block block_education'>
      <h2
        class='education__title text-7 f-w-500'
        contenteditable 
        data-key='education.title'
      >
        ${!!data.title ? data.title : 'Education'}      
      </h2>
      ${!!listContent ? `
        <ul class='education__list list-type-none'>
          ${listContent}
        </ul>
      ` : ''}
    </div>
  `;
}
