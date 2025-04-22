export default function decorate(block) {
  const container = document.createElement('div');
  container.setAttribute('class', 'container');

  const articleEl = document.createElement('article');
  articleEl.setAttribute('class', 'container d-flex');

  const pEl = document.createElement('p');
  pEl.setAttribute('class', 'mobile_hide');

  const spanEl = document.createElement('span');

  const supEl = document.createElement('sup');
  supEl.textContent = '~';
  spanEl.append(supEl);
  pEl.append(spanEl);
  articleEl.append(pEl);

  const asideEl = document.createElement('aside');
  asideEl.setAttribute('class', 'request-a-callback d-flex');

  const svgEl = document.createElement('svg');
  svgEl.setAttribute('width', '24');
  svgEl.setAttribute('height', '24');

  const useEl = document.createElement('use');
  useEl.setAttribute('href', 'https://www.careinsurance.com/images/svg_icons/icons.svg#phone_in_talk');
  svgEl.append(useEl);
  asideEl.append(svgEl);

  const aEl = document.createElement('a');
  aEl.setAttribute('href', 'tel:1800-102-4499');
  aEl.setAttribute('id', 'buypolicy_tollfree');
  aEl.textContent = '1800-102-4499';
  asideEl.append(aEl);
  articleEl.append(asideEl);
  container.append(articleEl);


  block.textContent = '';
  block.append(container);
}