export default function decorate(block) {
  const container = document.createElement('div');
  container.setAttribute('class', 'container');

  const navEl = document.createElement('nav');
  navEl.setAttribute('class', 'resolution_container nav_container');

  const articleEl = document.createElement('article');
  articleEl.setAttribute('class', 'nav_detail');

  const ulEl = document.createElement('ul');

  const liEl = document.createElement('li');

  const aEl = document.createElement('a');
  aEl.setAttribute('href', 'https://www.careinsurance.com/');
  aEl.textContent = 'Home';
  liEl.append(aEl);
  ulEl.append(liEl);
  articleEl.append(ulEl);
  navEl.append(articleEl);

  const articleEl2 = document.createElement('article');
  articleEl2.setAttribute('class', 'nav_links');

  const ulEl2 = document.createElement('ul');
  ulEl2.setAttribute('id', 'navscroll');

  const liEl2 = document.createElement('li');
  liEl2.setAttribute('class', 'nav-scroll');

  const aEl2 = document.createElement('a');
  aEl2.setAttribute('href', '#what-is-health-insurance');
  aEl2.setAttribute('data-link', '#what-is-health-insurance');
  aEl2.textContent = 'What is Health Insurance?';
  liEl2.append(aEl2);
  ulEl2.append(liEl2);

  const liEl3 = document.createElement('li');
  liEl3.setAttribute('class', 'nav-scroll');

  const aEl3 = document.createElement('a');
  aEl3.setAttribute('href', '#best-health-insurance-plans');
  aEl3.setAttribute('data-link', '#best-health-insurance-plans');
  aEl3.textContent = 'Best Health Insurance Plans';
  liEl3.append(aEl3);
  ulEl2.append(liEl3);

  const liEl4 = document.createElement('li');
  liEl4.setAttribute('class', 'nav-scroll');

  const aEl4 = document.createElement('a');
  aEl4.setAttribute('href', '#why-choose-care');
  aEl4.setAttribute('data-link', '#why-choose-care');
  aEl4.textContent = 'Why Choose Care?';
  liEl4.append(aEl4);
  ulEl2.append(liEl4);

  const liEl5 = document.createElement('li');
  liEl5.setAttribute('class', 'nav-scroll');

  const aEl5 = document.createElement('a');
  aEl5.setAttribute('href', '#features');
  aEl5.setAttribute('data-link', '#features');
  aEl5.textContent = 'Features';
  liEl5.append(aEl5);
  ulEl2.append(liEl5);

  const liEl6 = document.createElement('li');
  liEl6.setAttribute('class', 'nav-scroll');

  const aEl6 = document.createElement('a');
  aEl6.setAttribute('href', '#benefits');
  aEl6.setAttribute('data-link', '#benefits');
  aEl6.textContent = 'Benefits';
  liEl6.append(aEl6);
  ulEl2.append(liEl6);

  const liEl7 = document.createElement('li');
  liEl7.setAttribute('class', 'nav-scroll');

  const aEl7 = document.createElement('a');
  aEl7.setAttribute('href', '#coverage');
  aEl7.setAttribute('data-link', '#coverage');
  aEl7.textContent = 'Coverage';
  liEl7.append(aEl7);
  ulEl2.append(liEl7);

  const liEl8 = document.createElement('li');
  liEl8.setAttribute('class', 'nav-scroll');

  const aEl8 = document.createElement('a');
  aEl8.setAttribute('href', '#claim-process');
  aEl8.setAttribute('data-link', '#claim-process');
  aEl8.textContent = 'Claim Process';
  liEl8.append(aEl8);
  ulEl2.append(liEl8);

  const liEl9 = document.createElement('li');
  liEl9.setAttribute('class', 'nav-scroll');

  const aEl9 = document.createElement('a');
  aEl9.setAttribute('href', '#how-health-insurance-works');
  aEl9.setAttribute('data-link', '#how-health-insurance-works');
  aEl9.textContent = 'How Health Insurance Works?';
  liEl9.append(aEl9);
  ulEl2.append(liEl9);

  const liEl10 = document.createElement('li');
  liEl10.setAttribute('class', 'nav-scroll');

  const aEl10 = document.createElement('a');
  aEl10.setAttribute('href', '#which-plan-you-should-buy');
  aEl10.setAttribute('data-link', '#which-plan-you-should-buy');
  aEl10.textContent = 'Which Plan You Should Buy?';
  liEl10.append(aEl10);
  ulEl2.append(liEl10);

  const liEl11 = document.createElement('li');
  liEl11.setAttribute('class', 'nav-scroll');

  const aEl11 = document.createElement('a');
  aEl11.setAttribute('href', '#eligibility');
  aEl11.setAttribute('data-link', '#eligibility');
  aEl11.textContent = 'Eligibility';
  liEl11.append(aEl11);
  ulEl2.append(liEl11);

  const liEl12 = document.createElement('li');
  liEl12.setAttribute('class', 'nav-scroll');

  const aEl12 = document.createElement('a');
  aEl12.setAttribute('href', '#how-to-calculate-premium');
  aEl12.setAttribute('data-link', '#how-to-calculate-premium');
  aEl12.textContent = 'How to Calculate Premium';
  liEl12.append(aEl12);
  ulEl2.append(liEl12);

  const liEl13 = document.createElement('li');
  liEl13.setAttribute('class', 'nav-scroll');

  const aEl13 = document.createElement('a');
  aEl13.setAttribute('href', '#factors-affecting-premium');
  aEl13.setAttribute('data-link', '#factors-affecting-premium');
  aEl13.textContent = 'Factors Affecting the Premium';
  liEl13.append(aEl13);
  ulEl2.append(liEl13);

  const liEl14 = document.createElement('li');
  liEl14.setAttribute('class', 'nav-scroll');

  const aEl14 = document.createElement('a');
  aEl14.setAttribute('href', '#tax-benefits');
  aEl14.setAttribute('data-link', '#tax-benefits');
  aEl14.textContent = 'Tax Benefits';
  liEl14.append(aEl14);
  ulEl2.append(liEl14);

  const liEl15 = document.createElement('li');
  liEl15.setAttribute('class', 'nav-scroll');

  const aEl15 = document.createElement('a');
  aEl15.setAttribute('href', '#documents-required');
  aEl15.setAttribute('data-link', '#documents-required');
  aEl15.textContent = 'Documents Required';
  liEl15.append(aEl15);
  ulEl2.append(liEl15);

  const liEl16 = document.createElement('li');
  liEl16.setAttribute('class', 'nav-scroll');

  const aEl16 = document.createElement('a');
  aEl16.setAttribute('href', '#myths-about-health-insurance');
  aEl16.setAttribute('data-link', '#myths-about-health-insurance');
  aEl16.textContent = 'Myths about Health Insurance';
  liEl16.append(aEl16);
  ulEl2.append(liEl16);

  const liEl17 = document.createElement('li');
  liEl17.setAttribute('class', 'nav-scroll');

  const aEl17 = document.createElement('a');
  aEl17.setAttribute('href', '#health-insurance-portability');
  aEl17.setAttribute('data-link', '#health-insurance-portability');
  aEl17.textContent = 'Health Insurance Portability';
  liEl17.append(aEl17);
  ulEl2.append(liEl17);

  const liEl18 = document.createElement('li');
  liEl18.setAttribute('class', 'nav-scroll');

  const aEl18 = document.createElement('a');
  aEl18.setAttribute('href', '#advantages-of-buying-online');
  aEl18.setAttribute('data-link', '#advantages-of-buying-online');
  aEl18.textContent = 'Advantages of Buying Online';
  liEl18.append(aEl18);
  ulEl2.append(liEl18);

  const liEl19 = document.createElement('li');
  liEl19.setAttribute('class', 'nav-scroll');

  const aEl19 = document.createElement('a');
  aEl19.setAttribute('href', '#faqs');
  aEl19.setAttribute('data-link', '#faqs');
  aEl19.textContent = 'FAQs';
  liEl19.append(aEl19);
  ulEl2.append(liEl19);
  articleEl2.append(ulEl2);
  navEl.append(articleEl2);

  const asideEl = document.createElement('aside');
  asideEl.setAttribute('class', 'nav_btn');

  const spanEl = document.createElement('span');
  spanEl.setAttribute('onclick', 'focusOnMobileField()');
  spanEl.textContent = 'GET QUOTE IN 1 MIN';
  asideEl.append(spanEl);
  navEl.append(asideEl);
  container.append(navEl);


  block.textContent = '';
  block.append(container);
}