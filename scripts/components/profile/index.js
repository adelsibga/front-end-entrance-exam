import './style.scss';

export function drawProfileSection(data) {
  return `
    <img
      class='profile block block_profile'
      src='${data.imgUrl}'
      alt='${data.alt}'
    >`;
}
