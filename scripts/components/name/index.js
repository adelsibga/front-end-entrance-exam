import './style.scss';

export function drawNameSection(data) {
  return `
    <div class='name block block_name'>
      <p class='name__pretitle text-5 f-w-500' contenteditable data-key='name.pretitle'>
        ${data.pretitle}
      </p>
      <h1 class='name__title text-7 f-w-600' contenteditable data-key='name.title'>
          ${data.title}  
      </h1>
      <p class='name__subtitle text-6 f-w-500' contenteditable data-key='name.subtitle'>
        ${data.subtitle}
      </p>
    </div>`;
}
