import './style.scss';

export function drawInterestsSection(data) {
  const hasInterests = data?.list?.length > 0;

  const renderInterestsList = (item, index) => {
    return `
      <li
        class='interests__list-item text-5 f-w-400'
        contenteditable
        data-key='interests.item.${index}'
      >
        ${item}
      </li>
    `;
  };

  return `
    <div class='interests block block_interests'>
      <h2 class='interests__title text-7 f-w-500' contenteditable data-key='interests.title'>
        ${!!data.title ? data.title : 'Interests'}
      </h2>
      <ul class='interests__list list-type-none'>
      ${hasInterests
    ? data.list.map((item, index) => renderInterestsList(item, index)).join('')
    : '<li class="interests__list-item interests__list-item_empty text-5 f-w-400">No interests</li>'
  }
      </ul>
    </div>
  `;
}
