export function initRippleEffect() {
  document.addEventListener('click', (e) => {
    const target = e.target.closest('[contenteditable]');
    if (!target) return;

    const ripple = document.createElement('span');
    ripple.classList.add('ripple');

    target.appendChild(ripple);

    const rect = target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    ripple.style.setProperty('--scale', '1');
    ripple.style.opacity = '0';

    setTimeout(() => {
      ripple.remove();
    }, 300);
  });
}
