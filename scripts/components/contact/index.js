import './style.scss';

export function drawContactSection(data) {
  return `
    <div class='contact block block_contact'>
      <h2 
        class='contact__title text-7 f-w-500'
        contenteditable
        data-key='contact.title'
        style='--line-clamp: 3;'
      >
        ${!!data.title ? data.title : 'Let´s chat! I´m ready to work on exciting projects'}
      </h2>
      ${!!data.email ? `
        <span 
          class='contact__email text-5 f-w-400'
          contenteditable
          data-key='contact.email'
        >
          ${data.email}
        </span>
      ` : ''}
    </div>
  `;
}
