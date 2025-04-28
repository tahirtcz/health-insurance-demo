export default function decorate(block) {
  const container = document.createElement('div');
  container.setAttribute('class', 'container');

  const divEl = document.createElement('div');
  divEl.setAttribute('class', 'sub-footer');

    const divEl2 = document.createElement('div');
    divEl2.setAttribute('class', 'custom_container');

      const h2El = document.createElement('h2');
      h2El.setAttribute('class', 'ins_heading common_btn accordian_btn');
      h2El.textContent = 'Popular Searches';
    divEl2.append(h2El);

      const ulEl = document.createElement('ul');

        const liEl = document.createElement('li');

          const aEl = document.createElement('a');
          aEl.setAttribute('href', 'https://www.careinsurance.com/health-insurance/');
          aEl.textContent = 'Health Insurance';
        liEl.append(aEl);
      ulEl.append(liEl);

        const liEl2 = document.createElement('li');

          const aEl2 = document.createElement('a');
          aEl2.setAttribute('href', 'https://www.careinsurance.com/health-insurance/family-health-insurance');
          aEl2.textContent = 'Family Health Insurance';
        liEl2.append(aEl2);
      ulEl.append(liEl2);

        const liEl3 = document.createElement('li');

          const aEl3 = document.createElement('a');
          aEl3.setAttribute('href', 'https://www.careinsurance.com/health-insurance/maternity-health-insurance-plan');
          aEl3.textContent = 'Maternity Insurance';
        liEl3.append(aEl3);
      ulEl.append(liEl3);

        const liEl4 = document.createElement('li');

          const aEl4 = document.createElement('a');
          aEl4.setAttribute('href', 'https://www.careinsurance.com/health-insurance/1-crore-health-insurance');
          aEl4.textContent = '1 Crore Health Insurance Plan';
        liEl4.append(aEl4);
      ulEl.append(liEl4);

        const liEl5 = document.createElement('li');

          const aEl5 = document.createElement('a');
          aEl5.setAttribute('href', 'https://www.careinsurance.com/health-insurance/health-insurance-for-parents');
          aEl5.textContent = 'Health Insurance for Parents';
        liEl5.append(aEl5);
      ulEl.append(liEl5);

        const liEl6 = document.createElement('li');

          const aEl6 = document.createElement('a');
          aEl6.setAttribute('href', 'https://www.careinsurance.com/health-insurance/health-insurance-for-senior-citizens');
          aEl6.textContent = 'Health Insurance for Senior Citizens';
        liEl6.append(aEl6);
      ulEl.append(liEl6);

        const liEl7 = document.createElement('li');

          const aEl7 = document.createElement('a');
          aEl7.setAttribute('href', 'https://www.careinsurance.com/health-insurance/critical-illness-insurance');
          aEl7.textContent = 'Critical Illness Insurance';
        liEl7.append(aEl7);
      ulEl.append(liEl7);

        const liEl8 = document.createElement('li');

          const aEl8 = document.createElement('a');
          aEl8.setAttribute('href', 'https://www.careinsurance.com/health-insurance/mediclaim-policy');
          aEl8.textContent = 'Mediclaim Policy';
        liEl8.append(aEl8);
      ulEl.append(liEl8);

        const liEl9 = document.createElement('li');

          const aEl9 = document.createElement('a');
          aEl9.setAttribute('href', 'https://www.careinsurance.com/health-insurance/heart-health-insurance');
          aEl9.textContent = 'Health Insurance For Heart Patients';
        liEl9.append(aEl9);
      ulEl.append(liEl9);

        const liEl10 = document.createElement('li');

          const aEl10 = document.createElement('a');
          aEl10.setAttribute('href', 'https://www.careinsurance.com/health-insurance/operation-insurance');
          aEl10.textContent = 'Surgery Insurance';
        liEl10.append(aEl10);
      ulEl.append(liEl10);

        const liEl11 = document.createElement('li');

          const aEl11 = document.createElement('a');
          aEl11.setAttribute('href', 'https://www.careinsurance.com/health-insurance/cancer-insurance');
          aEl11.textContent = 'Cancer Insurance';
        liEl11.append(aEl11);
      ulEl.append(liEl11);

        const liEl12 = document.createElement('li');

          const aEl12 = document.createElement('a');
          aEl12.setAttribute('href', 'https://www.careinsurance.com/health-insurance/top-up-medical-insurance-policy');
          aEl12.textContent = 'Super Top Up Health Insurance';
        liEl12.append(aEl12);
      ulEl.append(liEl12);

        const liEl13 = document.createElement('li');

          const aEl13 = document.createElement('a');
          aEl13.setAttribute('href', 'https://www.careinsurance.com/health-insurance/health-insurance-at-an-early-age');
          aEl13.textContent = 'Health Insurance for Youth';
        liEl13.append(aEl13);
      ulEl.append(liEl13);


        const liEl15 = document.createElement('li');

          const aEl15 = document.createElement('a');
          aEl15.setAttribute('href', 'https://www.careinsurance.com/health-insurance/health-insurance-for-diabetes');
          aEl15.textContent = 'Health Insurance for Diabetic Patients';
        liEl15.append(aEl15);
      ulEl.append(liEl15);


        const liEl33 = document.createElement('li');
        liEl33.setAttribute('class', 'show_all_links');
        liEl33.textContent = '+17';
      ulEl.append(liEl33);
    divEl2.append(ulEl);
  divEl.append(divEl2);
  container.append(divEl);


  block.textContent = '';
  block.append(container);
}