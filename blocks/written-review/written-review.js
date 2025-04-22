export default function decorate(block) {
  const container = document.createElement('div');
  container.setAttribute('class', 'container');

  const sectionEl = document.createElement('section');
  sectionEl.setAttribute('class', 'written-review');

  const divEl = document.createElement('div');
  divEl.setAttribute('class', 'profile-img');

  const imgEl = document.createElement('img');
  imgEl.setAttribute('src', 'https://cms.careinsurance.com/cms/public/assets/media/akhil-pillai.png');
  imgEl.setAttribute('alt', 'Akhil Pillai');
  imgEl.setAttribute('title', 'Akhil Pillai');
  imgEl.setAttribute('width', '44');
  imgEl.setAttribute('height', '44');
  divEl.append(imgEl);
  sectionEl.append(divEl);

  const articleEl = document.createElement('article');
  articleEl.setAttribute('class', 'written');

  const spanEl = document.createElement('span');
  spanEl.setAttribute('class', 'name');
  spanEl.textContent = 'Akhil Pillai';
  articleEl.append(spanEl);

  const asideEl = document.createElement('aside');
  asideEl.setAttribute('class', 'auth-detail');

  const divEl2 = document.createElement('div');
  divEl2.setAttribute('class', 'head');

  const divEl3 = document.createElement('div');
  divEl3.setAttribute('class', 'profile-img');

  const imgEl2 = document.createElement('img');
  imgEl2.setAttribute('src', 'https://cms.careinsurance.com/cms/public/assets/media/akhil-pillai.png');
  imgEl2.setAttribute('alt', 'Akhil Pillai');
  imgEl2.setAttribute('title', 'Akhil Pillai');
  imgEl2.setAttribute('width', '44');
  imgEl2.setAttribute('height', '44');
  divEl3.append(imgEl2);
  divEl2.append(divEl3);

  const divEl4 = document.createElement('div');
  divEl4.setAttribute('class', 'name');

  const smallEl = document.createElement('small');
  smallEl.textContent = 'Insurance Specialist at Care Health Insurance';
  divEl4.append(smallEl);
  divEl2.append(divEl4);
  asideEl.append(divEl2);

  const divEl5 = document.createElement('div');
  divEl5.setAttribute('class', 'desc');
  divEl5.textContent = 'Akhil is an insurance specialist with over 7 years of experience. With extensive experience in the industry, Akhil can navigate the nuances of insurance and simplify complex information. He believes in focusing on areas for growth rather than dwelling on his achievements. Akhil’s passion lies in crafting unique content that resonates with diverse audiences.';
  asideEl.append(divEl5);

  const aEl = document.createElement('a');
  aEl.setAttribute('href', 'https://www.careinsurance.com/blog/author/akhil-pillai/');
  aEl.setAttribute('target', '_blank');

  const imgEl3 = document.createElement('img');
  imgEl3.setAttribute('src', 'https://cms.careinsurance.com/cms/public/assets/media/icons-web.svg');
  imgEl3.setAttribute('alt', 'Akhil Pillai');
  imgEl3.setAttribute('title', 'Akhil Pillai');
  imgEl3.setAttribute('width', '32');
  imgEl3.setAttribute('height', '32');
  aEl.append(imgEl3);
  asideEl.append(aEl);

  const aEl2 = document.createElement('a');
  aEl2.setAttribute('href', 'https://www.linkedin.com/in/akhil-pillai-87a55928b');
  aEl2.setAttribute('target', '_blank');

  const imgEl4 = document.createElement('img');
  imgEl4.setAttribute('src', 'https://cms.careinsurance.com/cms/public/assets/media/icons-linkedin.svg');
  imgEl4.setAttribute('alt', 'Akhil Pillai linkedin');
  imgEl4.setAttribute('title', 'Akhil Pillai linkedin');
  imgEl4.setAttribute('width', '32');
  imgEl4.setAttribute('height', '32');
  aEl2.append(imgEl4);
  asideEl.append(aEl2);
  articleEl.append(asideEl);
  sectionEl.append(articleEl);

  const articleEl2 = document.createElement('article');
  articleEl2.setAttribute('class', 'review');

  const spanEl2 = document.createElement('span');
  spanEl2.setAttribute('class', 'name');
  spanEl2.textContent = 'Sundeep Desamsetti';
  articleEl2.append(spanEl2);

  const asideEl2 = document.createElement('aside');
  asideEl2.setAttribute('class', 'auth-detail');

  const divEl6 = document.createElement('div');
  divEl6.setAttribute('class', 'head');

  const divEl7 = document.createElement('div');
  divEl7.setAttribute('class', 'profile-img');

  const imgEl5 = document.createElement('img');
  imgEl5.setAttribute('src', 'https://cms.careinsurance.com/cms/public/assets/media/sundeep-desamsetti.jpg');
  imgEl5.setAttribute('alt', 'Sundeep Desamsetti');
  imgEl5.setAttribute('title', 'Sundeep Desamsetti');
  imgEl5.setAttribute('width', '44');
  imgEl5.setAttribute('height', '44');
  divEl7.append(imgEl5);
  divEl6.append(divEl7);

  const divEl8 = document.createElement('div');
  divEl8.setAttribute('class', 'name');

  const smallEl2 = document.createElement('small');
  smallEl2.textContent = 'Head Product Development at Care Health Insurance';
  divEl8.append(smallEl2);
  divEl6.append(divEl8);
  asideEl2.append(divEl6);

  const divEl9 = document.createElement('div');
  divEl9.setAttribute('class', 'desc');
  divEl9.textContent = 'Sundeep plays a major role behind creating Care Health Insurance’s most comprehensive insurance products. With over 9 years of total experience and multiple degrees specific to the insurance sector, Sundeep is yet another mastermind who ensures that you read well researched blogs and articles on our website.';
  asideEl2.append(divEl9);

  const aEl3 = document.createElement('a');
  aEl3.setAttribute('href', 'https://www.careinsurance.com/blog/author/sundeep-desamsetti/');
  aEl3.setAttribute('target', '_blank');

  const imgEl6 = document.createElement('img');
  imgEl6.setAttribute('src', 'https://cms.careinsurance.com/cms/public/assets/media/icons-web.svg');
  imgEl6.setAttribute('alt', 'Sundeep Desamsetti');
  imgEl6.setAttribute('title', 'Sundeep Desamsetti');
  imgEl6.setAttribute('width', '32');
  imgEl6.setAttribute('height', '32');
  aEl3.append(imgEl6);
  asideEl2.append(aEl3);

  const aEl4 = document.createElement('a');
  aEl4.setAttribute('href', 'https://www.linkedin.com/in/sundeep-desamsetti-4297b21a/');
  aEl4.setAttribute('target', '_blank');

  const imgEl7 = document.createElement('img');
  imgEl7.setAttribute('src', 'https://cms.careinsurance.com/cms/public/assets/media/icons-linkedin.svg');
  imgEl7.setAttribute('alt', 'Sundeep Desamsetti linkedin');
  imgEl7.setAttribute('title', 'Sundeep Desamsetti linkedin');
  imgEl7.setAttribute('width', '32');
  imgEl7.setAttribute('height', '32');
  aEl4.append(imgEl7);
  asideEl2.append(aEl4);
  articleEl2.append(asideEl2);
  sectionEl.append(articleEl2);
  container.append(sectionEl);


  block.textContent = '';
  block.append(container);
}