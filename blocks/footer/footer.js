export default function decorate(block) {
  const container = document.createElement('div');
  container.setAttribute('class', 'container');

  const footerEl = document.createElement('footer');

    const navEl = document.createElement('nav');
    navEl.setAttribute('class', 'container d-flex');
    navEl.setAttribute('style', 'content-visibility: auto; ');

      const ulEl = document.createElement('ul');

        const liEl = document.createElement('li');
        liEl.textContent = 'Our Products';
      ulEl.append(liEl);

        const liEl2 = document.createElement('li');

          const aEl = document.createElement('a');
          aEl.setAttribute('href', 'https://www.careinsurance.com/health-insurance/');
          aEl.textContent = 'Health Insurance';
        liEl2.append(aEl);
      ulEl.append(liEl2);

        const liEl3 = document.createElement('li');

          const aEl2 = document.createElement('a');
          aEl2.setAttribute('href', 'https://www.careinsurance.com/health-insurance/family-health-insurance');
          aEl2.textContent = 'Family Health Insurance';
        liEl3.append(aEl2);
      ulEl.append(liEl3);

        const liEl4 = document.createElement('li');

          const aEl3 = document.createElement('a');
          aEl3.setAttribute('href', 'https://www.careinsurance.com/health-insurance/health-insurance-for-senior-citizens');
          aEl3.textContent = 'Senior Citizen Health Insurance';
        liEl4.append(aEl3);
      ulEl.append(liEl4);

        const liEl5 = document.createElement('li');

          const aEl4 = document.createElement('a');
          aEl4.setAttribute('href', 'https://www.careinsurance.com/health-insurance/critical-illness-insurance');
          aEl4.textContent = 'Critical Illness Insurance';
        liEl5.append(aEl4);
      ulEl.append(liEl5);

        const liEl6 = document.createElement('li');

          const aEl5 = document.createElement('a');
          aEl5.setAttribute('href', 'https://www.careinsurance.com/health-insurance/1-crore-health-insurance');
          aEl5.setAttribute('class', 'highlighted_link');
          aEl5.textContent = '1 Crore Health Insurance Policy';
        liEl6.append(aEl5);
      ulEl.append(liEl6);

        const liEl7 = document.createElement('li');

          const aEl6 = document.createElement('a');
          aEl6.setAttribute('href', 'https://www.careinsurance.com/health-insurance/maternity-health-insurance-plan');
          aEl6.textContent = 'Maternity Health Insurance';
        liEl7.append(aEl6);
      ulEl.append(liEl7);

        const liEl8 = document.createElement('li');

          const aEl7 = document.createElement('a');
          aEl7.setAttribute('href', 'https://www.careinsurance.com/product/care-supreme');
          aEl7.textContent = 'Care Supreme';
        liEl8.append(aEl7);
      ulEl.append(liEl8);

        const liEl9 = document.createElement('li');

          const aEl8 = document.createElement('a');
          aEl8.setAttribute('href', 'https://www.careinsurance.com/product/senior-health-advantage');
          aEl8.textContent = 'Senior Health Advantage';
        liEl9.append(aEl8);
      ulEl.append(liEl9);

        const liEl10 = document.createElement('li');

          const aEl9 = document.createElement('a');
          aEl9.setAttribute('href', 'https://www.careinsurance.com/travel-insurance/');
          aEl9.textContent = 'Travel Insurance';
        liEl10.append(aEl9);
      ulEl.append(liEl10);

        const liEl11 = document.createElement('li');

          const aEl10 = document.createElement('a');
          aEl10.setAttribute('href', 'https://www.careinsurance.com/corporate-insurance/');
          aEl10.textContent = 'Corporate Insurance';
        liEl11.append(aEl10);
      ulEl.append(liEl11);

        const liEl12 = document.createElement('li');

          const aEl11 = document.createElement('a');
          aEl11.setAttribute('href', 'https://www.careinsurance.com/product/care-senior');
          aEl11.textContent = 'Care Senior Product';
        liEl12.append(aEl11);
      ulEl.append(liEl12);

        const liEl13 = document.createElement('li');

          const aEl12 = document.createElement('a');
          aEl12.setAttribute('href', 'https://www.careinsurance.com/product/care-supreme-emi');
          aEl12.textContent = 'Supreme EMI';
        liEl13.append(aEl12);
      ulEl.append(liEl13);
    navEl.append(ulEl);

      const ulEl2 = document.createElement('ul');

        const liEl14 = document.createElement('li');
        liEl14.textContent = 'Download';
      ulEl2.append(liEl14);

        const liEl15 = document.createElement('li');

          const aEl13 = document.createElement('a');
          aEl13.setAttribute('href', 'https://cms.careinsurance.com/cms/public/uploads/claimsprocedurepdf/Claims_Procedure.pdf');
          aEl13.setAttribute('target', '_blank');
          aEl13.setAttribute('rel', 'noopener');
          aEl13.textContent = 'Claim Procedure';
        liEl15.append(aEl13);
      ulEl2.append(liEl15);

        const liEl16 = document.createElement('li');

          const aEl14 = document.createElement('a');
          aEl14.setAttribute('href', 'https://www.careinsurance.com/health-insurance-brochure.html');
          aEl14.textContent = 'Brochure & Prospectus';
        liEl16.append(aEl14);
      ulEl2.append(liEl16);

        const liEl17 = document.createElement('li');

          const aEl15 = document.createElement('a');
          aEl15.setAttribute('href', 'https://www.careinsurance.com/health-insurance-claim-forms.html');
          aEl15.textContent = 'Claim Form';
        liEl17.append(aEl15);
      ulEl2.append(liEl17);

        const liEl18 = document.createElement('li');

          const aEl16 = document.createElement('a');
          aEl16.setAttribute('href', 'https://www.careinsurance.com/health-insurance-proposal-forms.html');
          aEl16.textContent = 'Proposal Form';
        liEl18.append(aEl16);
      ulEl2.append(liEl18);

        const liEl19 = document.createElement('li');

          const aEl17 = document.createElement('a');
          aEl17.setAttribute('href', 'https://www.careinsurance.com/cpproject/rhiclfrontend/assets/ncdpdf/change-request-form-with-ncd.pdf');
          aEl17.setAttribute('download', 'Change Request Form with NCD');
          aEl17.textContent = 'Change Request Form & NCD';
        liEl19.append(aEl17);
      ulEl2.append(liEl19);

        const liEl20 = document.createElement('li');

          const aEl18 = document.createElement('a');
          aEl18.setAttribute('href', 'https://www.careinsurance.com/other-downloads.html');
          aEl18.textContent = 'Policy Terms and Conditions';
        liEl20.append(aEl18);
      ulEl2.append(liEl20);

        const liEl21 = document.createElement('li');

          const aEl19 = document.createElement('a');
          aEl19.setAttribute('href', 'https://www.careinsurance.com/tools.html');
          aEl19.textContent = 'Hand books and Exclusion';
        liEl21.append(aEl19);
      ulEl2.append(liEl21);

        const liEl22 = document.createElement('li');

          const aEl20 = document.createElement('a');
          aEl20.setAttribute('href', 'https://www.careinsurance.com/cms/public/uploads/download_center/irdas-health-handbook---in-english.pdf?rv=0.55507000%201606915975');
          aEl20.textContent = 'IRDA\'s Health Handbook';
        liEl22.append(aEl20);
      ulEl2.append(liEl22);

        const liEl23 = document.createElement('li');

          const aEl21 = document.createElement('a');
          aEl21.setAttribute('href', 'https://www.careinsurance.com/policy-usage-guide.html');
          aEl21.textContent = 'Policy Usage Guide';
        liEl23.append(aEl21);
      ulEl2.append(liEl23);

        const liEl24 = document.createElement('li');

          const aEl22 = document.createElement('a');
          aEl22.setAttribute('href', 'https://www.careinsurance.com/customer-information-sheet.html');
          aEl22.textContent = 'Customer Information Sheet';
        liEl24.append(aEl22);
      ulEl2.append(liEl24);

        const liEl25 = document.createElement('li');

          const aEl23 = document.createElement('a');
          aEl23.setAttribute('href', 'https://selfcare.careinsurance.com/premium-revision');
          aEl23.textContent = 'ANNOUNCEMENT';
        liEl25.append(aEl23);
      ulEl2.append(liEl25);
    navEl.append(ulEl2);

      const ulEl3 = document.createElement('ul');

        const liEl26 = document.createElement('li');
        liEl26.textContent = 'Already a Customer';
      ulEl3.append(liEl26);

        const liEl27 = document.createElement('li');

          const aEl24 = document.createElement('a');
          aEl24.setAttribute('href', 'https://www.careinsurance.com/rhicl/login/register');
          aEl24.textContent = 'Customer Login';
        liEl27.append(aEl24);
      ulEl3.append(liEl27);

        const liEl28 = document.createElement('li');

          const aEl25 = document.createElement('a');
          aEl25.setAttribute('href', 'https://www.careinsurance.com/health-insurance-claim-center.html');
          aEl25.textContent = 'Claims';
        liEl28.append(aEl25);
      ulEl3.append(liEl28);

        const liEl29 = document.createElement('li');

          const aEl26 = document.createElement('a');
          aEl26.setAttribute('href', 'https://www.careinsurance.com/self-help-portal.html');
          aEl26.textContent = 'Self Help';
        liEl29.append(aEl26);
      ulEl3.append(liEl29);

        const liEl30 = document.createElement('li');

          const aEl27 = document.createElement('a');
          aEl27.setAttribute('href', 'https://www.careinsurance.com/rhicl/proposalcp/renew/index-care');
          aEl27.textContent = 'Policy Renewal';
        liEl30.append(aEl27);
      ulEl3.append(liEl30);

        const liEl31 = document.createElement('li');

          const aEl28 = document.createElement('a');
          aEl28.setAttribute('href', 'https://www.careinsurance.com/get-policy-list.html');
          aEl28.textContent = 'OTP Verification';
        liEl31.append(aEl28);
      ulEl3.append(liEl31);

        const liEl32 = document.createElement('li');

          const aEl29 = document.createElement('a');
          aEl29.setAttribute('href', 'https://www.careinsurance.com/rhicl/hospital-empanelment');
          aEl29.textContent = 'Hospital Empanelment';
        liEl32.append(aEl29);
      ulEl3.append(liEl32);
    navEl.append(ulEl3);

      const ulEl4 = document.createElement('ul');

        const liEl33 = document.createElement('li');
        liEl33.textContent = 'Contact Us';
      ulEl4.append(liEl33);

        const liEl34 = document.createElement('li');

          const aEl30 = document.createElement('a');
          aEl30.setAttribute('href', 'https://www.careinsurance.com/contact-us.html');
          aEl30.textContent = 'Customer Support';
        liEl34.append(aEl30);
      ulEl4.append(liEl34);

        const liEl35 = document.createElement('li');

          const aEl31 = document.createElement('a');
          aEl31.setAttribute('href', 'https://www.careinsurance.com/rhicl/careers');
          aEl31.textContent = 'Careers';
        liEl35.append(aEl31);
      ulEl4.append(liEl35);

        const liEl36 = document.createElement('li');

          const aEl32 = document.createElement('a');
          aEl32.setAttribute('href', 'https://www.careinsurance.com/health-insurance-agents.html');
          aEl32.textContent = 'Agent/Partner';
        liEl36.append(aEl32);
      ulEl4.append(liEl36);

        const liEl37 = document.createElement('li');

          const aEl33 = document.createElement('a');
          aEl33.setAttribute('href', 'https://www.careinsurance.com/health-insurance-branch-locator.html');
          aEl33.textContent = 'Branch Locator';
        liEl37.append(aEl33);
      ulEl4.append(liEl37);

        const liEl38 = document.createElement('li');

          const aEl34 = document.createElement('a');
          aEl34.setAttribute('href', 'https://www.careinsurance.com/customer-grievance-redressal.html');
          aEl34.textContent = 'Grievance Redressal';
        liEl38.append(aEl34);
      ulEl4.append(liEl38);

        const liEl39 = document.createElement('li');

          const aEl35 = document.createElement('a');
          aEl35.setAttribute('href', 'https://www.careinsurance.com/health-plan-network-hospitals.html');
          aEl35.textContent = 'Network Locator';
        liEl39.append(aEl35);
      ulEl4.append(liEl39);

        const liEl40 = document.createElement('li');

          const aEl36 = document.createElement('a');
          aEl36.setAttribute('href', 'https://protect2.fireeye.com/v1/url?k=31323334-501d2dca-313381e4-454455534531-15e9dce1b35a8fa1&q=1&e=95da6693-9d37-4023-a5bb-8b5ef02b447b&u=https%3A%2F%2Fbit.ly%2F3K9TjrA');
          aEl36.setAttribute('target', '_blank');
          aEl36.setAttribute('rel', 'noopener');
          aEl36.textContent = 'Be-fit Network Locator';
        liEl40.append(aEl36);
      ulEl4.append(liEl40);
    navEl.append(ulEl4);

      const ulEl5 = document.createElement('ul');

        const liEl41 = document.createElement('li');
        liEl41.textContent = 'Other Links';
      ulEl5.append(liEl41);

        const liEl42 = document.createElement('li');

          const aEl37 = document.createElement('a');
          aEl37.setAttribute('href', 'https://www.careinsurance.com/product/care');
          aEl37.setAttribute('rel', 'nofollow');
          aEl37.textContent = 'Care';
        liEl42.append(aEl37);
      ulEl5.append(liEl42);

        const liEl43 = document.createElement('li');

          const aEl38 = document.createElement('a');
          aEl38.setAttribute('href', 'https://www.careinsurance.com/about-care-health-insurance.html');
          aEl38.textContent = 'About Care Health';
        liEl43.append(aEl38);
      ulEl5.append(liEl43);

        const liEl44 = document.createElement('li');

          const aEl39 = document.createElement('a');
          aEl39.setAttribute('href', 'https://www.careinsurance.com/blog/');
          aEl39.textContent = 'Blog';
        liEl44.append(aEl39);
      ulEl5.append(liEl44);

        const liEl45 = document.createElement('li');

          const aEl40 = document.createElement('a');
          aEl40.setAttribute('href', 'https://faveo.careinsurance.com/NewFaveo/#auth/login');
          aEl40.setAttribute('rel', 'noopener');
          aEl40.textContent = 'Partner Login';
        liEl45.append(aEl40);
      ulEl5.append(liEl45);

        const liEl46 = document.createElement('li');

          const aEl41 = document.createElement('a');
          aEl41.setAttribute('href', 'https://www.careinsurance.com/product/care-supreme');
          aEl41.textContent = 'Portability';
        liEl46.append(aEl41);
      ulEl5.append(liEl46);

        const liEl47 = document.createElement('li');

          const aEl42 = document.createElement('a');
          aEl42.setAttribute('href', 'https://www.careinsurance.com/cpproject/complete-proposal-journey');
          aEl42.setAttribute('rel', 'nofollow');
          aEl42.textContent = 'Complete Proposal Journey';
        liEl47.append(aEl42);
      ulEl5.append(liEl47);

        const liEl48 = document.createElement('li');

          const aEl43 = document.createElement('a');
          aEl43.setAttribute('href', 'https://www.careinsurance.com/know-your-customer');
          aEl43.setAttribute('rel', 'nofollow');
          aEl43.setAttribute('class', 'update-kyc');

            const strongEl = document.createElement('strong');

              const iEl = document.createElement('i');
              iEl.textContent = 'Imp';
            strongEl.append(iEl);
          aEl43.append(strongEl);
        liEl48.append(aEl43);
      ulEl5.append(liEl48);

        const liEl49 = document.createElement('li');

          const aEl44 = document.createElement('a');
          aEl44.setAttribute('href', 'https://www.careinsurance.com/rhicl/claim/login');
          aEl44.textContent = 'Track Claim';
        liEl49.append(aEl44);
      ulEl5.append(liEl49);

        const liEl50 = document.createElement('li');

          const aEl45 = document.createElement('a');
          aEl45.setAttribute('href', 'https://www.careinsurance.com/health-bmi-calculator.html');
          aEl45.setAttribute('rel', 'nofollow');
          aEl45.textContent = 'BMI Calculator';
        liEl50.append(aEl45);
      ulEl5.append(liEl50);

        const liEl51 = document.createElement('li');

          const aEl46 = document.createElement('a');
          aEl46.setAttribute('href', 'https://www.careinsurance.com/abha');
          aEl46.setAttribute('rel', 'nofollow');
          aEl46.textContent = 'ABHA';
        liEl51.append(aEl46);
      ulEl5.append(liEl51);

        const liEl52 = document.createElement('li');

          const aEl47 = document.createElement('a');
          aEl47.setAttribute('href', 'https://bimabharosa.irdai.gov.in/Home/Home');
          aEl47.setAttribute('target', '_blank');
          aEl47.setAttribute('rel', 'noopener');

            const strongEl2 = document.createElement('strong');
            strongEl2.textContent = 'Bima Bharosa';
          aEl47.append(strongEl2);
        liEl52.append(aEl47);
      ulEl5.append(liEl52);
    navEl.append(ulEl5);
  footerEl.append(navEl);

    const sectionEl = document.createElement('section');
    sectionEl.setAttribute('class', 'copyright container d-flex');

      const articleEl = document.createElement('article');

        const aEl48 = document.createElement('a');
        aEl48.setAttribute('href', 'https://www.careinsurance.com/');

          const imgEl = document.createElement('img');
          imgEl.setAttribute('src', 'https://www.careinsurance.com/images/care_health_insurance_logo.svg');
          imgEl.setAttribute('alt', 'Care Insurance');
          imgEl.setAttribute('width', '130');
          imgEl.setAttribute('height', '40');
        aEl48.append(imgEl);
      articleEl.append(aEl48);
    sectionEl.append(articleEl);

      const articleEl2 = document.createElement('article');

        const aEl49 = document.createElement('a');
        aEl49.setAttribute('href', 'https://www.careinsurance.com/disclaimer.html');
        aEl49.textContent = 'Disclaimer |';
      articleEl2.append(aEl49);

        const aEl50 = document.createElement('a');
        aEl50.setAttribute('href', 'https://www.careinsurance.com/privacy.html');
        aEl50.textContent = 'Privacy Statement |';
      articleEl2.append(aEl50);

        const aEl51 = document.createElement('a');
        aEl51.setAttribute('href', 'https://www.careinsurance.com/terms_conditions.html');
        aEl51.textContent = 'Terms & Conditions |';
      articleEl2.append(aEl51);

        const aEl52 = document.createElement('a');
        aEl52.setAttribute('href', 'https://www.careinsurance.com/care-health-insurance-in-media.html');
        aEl52.textContent = 'Media Center |';
      articleEl2.append(aEl52);

        const aEl53 = document.createElement('a');
        aEl53.setAttribute('href', 'https://www.careinsurance.com/public-disclosures.html');
        aEl53.textContent = 'Public Disclosures |';
      articleEl2.append(aEl53);

        const aEl54 = document.createElement('a');
        aEl54.setAttribute('href', 'https://www.careinsurance.com/unclaimed-amount.php');
        aEl54.textContent = 'Unclaimed Amount |';
      articleEl2.append(aEl54);

        const aEl55 = document.createElement('a');
        aEl55.setAttribute('href', 'https://www.careinsurance.com/wellness-corner.html');
        aEl55.textContent = 'Wellness |';
      articleEl2.append(aEl55);

        const aEl56 = document.createElement('a');
        aEl56.setAttribute('href', 'https://www.irdai.gov.in');
        aEl56.setAttribute('target', '_blank');
        aEl56.setAttribute('rel', 'noopener');
        aEl56.textContent = 'IRDAI |';
      articleEl2.append(aEl56);

        const aEl57 = document.createElement('a');
        aEl57.setAttribute('href', 'https://www.policyholder.gov.in/');
        aEl57.setAttribute('target', '_blank');
        aEl57.setAttribute('rel', 'noopener');
        aEl57.textContent = 'Consumer Education |';
      articleEl2.append(aEl57);

        const aEl58 = document.createElement('a');
        aEl58.setAttribute('href', 'https://www.careinsurance.com/do-not-call');
        aEl58.textContent = 'Do not call |';
      articleEl2.append(aEl58);

        const aEl59 = document.createElement('a');
        aEl59.setAttribute('href', 'https://www.careinsurance.com/about-care-health-insurance.html');
        aEl59.textContent = 'About Us';
      articleEl2.append(aEl59);

        const pEl = document.createElement('p');

          const brEl = document.createElement('br');
        pEl.append(brEl);
      articleEl2.append(pEl);
    sectionEl.append(articleEl2);

      const articleEl3 = document.createElement('article');
      articleEl3.setAttribute('class', 'm-hide');

        const imgEl2 = document.createElement('img');
        imgEl2.setAttribute('class', 'lozad');
        imgEl2.setAttribute('src', 'https://www.careinsurance.com/images/POC/QR_Code.png');
        imgEl2.setAttribute('alt', 'QR Code');
        imgEl2.setAttribute('title', 'QR Code');
        imgEl2.setAttribute('width', '90');
        imgEl2.setAttribute('height', '90');
      articleEl3.append(imgEl2);

        const spanEl = document.createElement('span');
        spanEl.textContent = 'Scan QR code';
      articleEl3.append(spanEl);
    sectionEl.append(articleEl3);

      const articleEl4 = document.createElement('article');
      articleEl4.setAttribute('class', 'app-store m-show');

        const aEl60 = document.createElement('a');
        aEl60.setAttribute('href', 'https://apps.apple.com/in/app/care-health-customer-app/id1451697831');
        aEl60.setAttribute('target', '_blank');
        aEl60.setAttribute('rel', 'noopener');
        aEl60.setAttribute('class', 'apple_button');
        aEl60.setAttribute('alt', 'App Store link to download app');
        aEl60.setAttribute('aria-label', 'App Store link to download app');
        aEl60.setAttribute('loading', 'defer');

          const svgEl = document.createElement('svg');
          svgEl.setAttribute('width', '132');
          svgEl.setAttribute('height', '45');
          svgEl.setAttribute('viewBox', '0 0 180 60');

            const useEl = document.createElement('use');
            useEl.setAttribute('href', 'https://www.careinsurance.com/images/svg_icons/social-icons.svg#apple-play-button');
          svgEl.append(useEl);
        aEl60.append(svgEl);
      articleEl4.append(aEl60);

        const aEl61 = document.createElement('a');
        aEl61.setAttribute('href', 'https://play.google.com/store/apps/details?id=com.religare.healthinsurance');
        aEl61.setAttribute('target', '_blank');
        aEl61.setAttribute('rel', 'noopener');
        aEl61.setAttribute('class', 'android_button');
        aEl61.setAttribute('alt', 'google play link to download app');
        aEl61.setAttribute('aria-label', 'google play link to download app');
        aEl61.setAttribute('loading', 'defer');

          const svgEl2 = document.createElement('svg');
          svgEl2.setAttribute('width', '132');
          svgEl2.setAttribute('height', '45');
          svgEl2.setAttribute('viewBox', '0 0 180 60');

            const useEl2 = document.createElement('use');
            useEl2.setAttribute('href', 'https://www.careinsurance.com/images/svg_icons/social-icons.svg#google-play-button');
          svgEl2.append(useEl2);
        aEl61.append(svgEl2);
      articleEl4.append(aEl61);
    sectionEl.append(articleEl4);
  footerEl.append(sectionEl);
  container.append(footerEl);


  block.textContent = '';
  block.append(container);
}