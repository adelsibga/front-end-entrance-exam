import './style.scss';

export function drawToolsSection(data) {
  const TOOLS_ICONS_DIR = '/images/tools/';

  const renderItem = (icon, iconIndex) => `
    <li class='tools__list-item'>
      <img class='tools__list-item-img' 
         src='${TOOLS_ICONS_DIR}${icon}' 
         alt='${icon.replace('.svg', '')} icon'
         loading='lazy'
         data-index='${iconIndex}'
       >  
    </li>
  `;

  const renderToolCategory = (categoryData, categoryIndex) => {
    const { category, icons = [] } = categoryData;
    return `
      <div class='tools__list-wrapper'>
        ${category ? `
          <p class='tools__list-category f-w-500' 
             contenteditable 
             data-key='tools.list.${categoryIndex}.category'
          >
            ${category}
          </p>
        ` : ''}
        <ul class='list-type-none tools__list'>
          ${icons.map((icon, iconIndex) =>
      renderItem(icon, iconIndex, categoryIndex),
    ).join('')}
        </ul>
      </div>
    `;
  };

  return `
    <div class='tools block block_tools'>
        <h2 
          class='tools__title text-7 f-w-500'
          contenteditable 
          data-key='tools.title'
        >
        ${!!data.title ? data.title : 'Tools'}
        </h2>
        <div class='tools__wrapper'>
          ${data.list?.length
    ? data.list.map((item, index) => renderToolCategory(item, index)).join('')
    : '<p class="tools__empty text-4 f-w-500">No tools available</p>'
  }
      </div>
    </div>
  `;
}
