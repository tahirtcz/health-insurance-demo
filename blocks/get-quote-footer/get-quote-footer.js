export default function decorate(block) {
    const container = document.createElement('div');
    container.setAttribute('class', 'container');
  
    const sectionEl = document.createElement('section');
    sectionEl.setAttribute('class', 'container get_Quote');
  
      const articleEl = document.createElement('article');
  
        const h4El = document.createElement('h4');
        h4El.setAttribute('role', 'heading');
        h4El.setAttribute('aria-level', '3');
        h4El.textContent = 'Secure Your Finances Now!';
      articleEl.append(h4El);
  
        const pEl = document.createElement('p');
        pEl.textContent = 'Get the best financial security with Care Health Insurance!';
      articleEl.append(pEl);
  
        const formEl = document.createElement('form');
        formEl.setAttribute('class', 'd-flex gap');
        formEl.setAttribute('name', 'fromgetquote3');
        formEl.setAttribute('id', 'fromgetquote3');
        formEl.setAttribute('method', 'POST');
        formEl.setAttribute('action', '');
  
          const divEl = document.createElement('div');
          divEl.setAttribute('id', 'bottomQuote');
          divEl.setAttribute('class', 'new-form-group d-flex');
  
            const spanEl = document.createElement('span');
            spanEl.textContent = '+91';
          divEl.append(spanEl);
  
            const inputEl = document.createElement('input');
            inputEl.setAttribute('id', 'mobile_no');
            inputEl.setAttribute('name', 'mobile_no');
            inputEl.setAttribute('class', '');
            inputEl.setAttribute('type', 'tel');
            inputEl.setAttribute('autocomplete', 'Off');
            inputEl.setAttribute('value', '');
            inputEl.setAttribute('placeholder', ' ');
            inputEl.setAttribute('maxlength', '10');
            inputEl.setAttribute('oninput', 'return isMobNumber(event, this, 10);');
            inputEl.setAttribute('onkeyup', "triggeronHomeMobile(this ,'bottomQuote')");
            inputEl.setAttribute('required', '');
          divEl.append(inputEl);
  
            const labelEl = document.createElement('label');
            labelEl.setAttribute('for', 'mobile_no');
            labelEl.textContent = 'Mobile Number';
          divEl.append(labelEl);
        formEl.append(divEl);
  
          const buttonEl = document.createElement('button');
          buttonEl.setAttribute('class', 'new-submit-button');
          buttonEl.setAttribute('id', 'secondary_cta');
          buttonEl.setAttribute('onclick', "submitForm('fromgetquote3','bottomQuote',event)");
          buttonEl.textContent = 'Get a Quote';
        formEl.append(buttonEl);
      articleEl.append(formEl);
  
        const spanEl2 = document.createElement('span');
        spanEl2.setAttribute('class', 'success-msg');
        spanEl2.setAttribute('id', 'msgGetQuote');
      articleEl.append(spanEl2);
    sectionEl.append(articleEl);
  
      const articleEl2 = document.createElement('article');
      articleEl2.setAttribute('class', 'reachout_main');
  
        const divEl2 = document.createElement('div');
        divEl2.setAttribute('class', 'reach-out-code');
  
          const h4El2 = document.createElement('h4');
          h4El2.setAttribute('class', 'reach_out');
          h4El2.textContent = 'Reach out to us at';
        divEl2.append(h4El2);
  
          const divEl3 = document.createElement('div');
          divEl3.setAttribute('class', 'sales_number');
  
            const pEl2 = document.createElement('p');
  
              const spanEl3 = document.createElement('span');
              spanEl3.setAttribute('class', 'text');
              spanEl3.textContent = 'Sales:';
            pEl2.append(spanEl3);
  
              const svgEl = document.createElement('svg');
              svgEl.setAttribute('width', '20');
              svgEl.setAttribute('height', '20');
  
                const useEl = document.createElement('use');
                useEl.setAttribute('href', 'https://www.careinsurance.com/images/svg_icons/icons.svg#phone_in_talk');
              svgEl.append(useEl);
            pEl2.append(svgEl);
  
              const aEl = document.createElement('a');
              aEl.setAttribute('href', 'tel:1800-102-4499');
              aEl.setAttribute('style', 'text-decoration:none');
              aEl.textContent = '1800-102-4499';
            pEl2.append(aEl);
          divEl3.append(pEl2);
  
            const pEl3 = document.createElement('p');
  
              const spanEl4 = document.createElement('span');
              spanEl4.setAttribute('class', 'text');
              spanEl4.textContent = 'Services:';
            pEl3.append(spanEl4);
  
              const svgEl2 = document.createElement('svg');
              svgEl2.setAttribute('width', '19');
              svgEl2.setAttribute('height', '19');
              svgEl2.setAttribute('fill', '#25D366');
              svgEl2.setAttribute('viewBox', '0 0 32 32');
  
                const useEl2 = document.createElement('use');
                useEl2.setAttribute('href', 'https://www.careinsurance.com/images/svg_icons/social-icons.svg#whatsapp-fill');
              svgEl2.append(useEl2);
            pEl3.append(svgEl2);
  
              const aEl2 = document.createElement('a');
              aEl2.setAttribute('href', 'https://api.whatsapp.com/send?phone=918860402452&text=hi');
              aEl2.setAttribute('target', '_blank');
              aEl2.setAttribute('rel', 'noopener');
              aEl2.setAttribute('style', 'text-decoration:none');
              aEl2.textContent = '8860402452';
            pEl3.append(aEl2);
          divEl3.append(pEl3);
        divEl2.append(divEl3);
      articleEl2.append(divEl2);
  
        const hrEl = document.createElement('hr');
      articleEl2.append(hrEl);
  
        const divEl4 = document.createElement('div');
        divEl4.setAttribute('class', 'd-flex social');
  
          const h4El3 = document.createElement('h4');
          h4El3.textContent = 'Follow us on';
        divEl4.append(h4El3);
  
          const ulEl = document.createElement('ul');
          ulEl.setAttribute('class', 'd-flex');
  
            const liEl = document.createElement('li');
  
              const aEl3 = document.createElement('a');
              aEl3.setAttribute('href', 'https://www.instagram.com/careinsurancein');
              aEl3.setAttribute('class', 'instagram');
              aEl3.setAttribute('title', 'Instagram');
              aEl3.setAttribute('target', '_blank');
              aEl3.setAttribute('rel', 'noopener');
  
                const imgEl = document.createElement('img');
                imgEl.setAttribute('src', 'https://www.careinsurance.com/images/instagram-icon.webp');
                imgEl.setAttribute('class', 'lozad');
                imgEl.setAttribute('alt', 'Instagram');
                imgEl.setAttribute('width', '32');
                imgEl.setAttribute('height', '32');
                imgEl.setAttribute('data-loaded', 'true');
              aEl3.append(imgEl);
            liEl.append(aEl3);
          ulEl.append(liEl);
  
          const liEl2 = document.createElement('li');

          const aEl4 = document.createElement('a');
          aEl4.setAttribute('href', 'https://www.facebook.com/careinsuranceIN/');
          aEl4.setAttribute('class', 'facebook');
          aEl4.setAttribute('title', 'Facebook');
          aEl4.setAttribute('target', '_blank');
          aEl4.setAttribute('rel', 'noopener');
          
          const imgEl3 = document.createElement('img');
          imgEl3.setAttribute('src', 'https://i.pinimg.com/736x/42/75/49/427549f6f22470ff93ca714479d180c2.jpg');
          imgEl3.setAttribute('class', 'lozad');
          imgEl3.setAttribute('alt', 'Facebook');
          imgEl3.setAttribute('width', '32');
          imgEl3.setAttribute('height', '32');
          imgEl3.setAttribute('data-loaded', 'true');
          
          aEl4.append(imgEl3);
          liEl2.append(aEl4);
          ulEl.append(liEl2);
          
          const liEl3 = document.createElement('li');
          
          const aEl5 = document.createElement('a');
          aEl5.setAttribute('href', 'https://twitter.com/careinsuranceIN');
          aEl5.setAttribute('class', 'twitter');
          aEl5.setAttribute('title', 'Twitter');
          aEl5.setAttribute('target', '_blank');
          aEl5.setAttribute('rel', 'noopener');
          
          const imgEl4 = document.createElement('img');
          imgEl4.setAttribute('src', 'https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?semt=ais_hybrid&w=740');
          imgEl4.setAttribute('class', 'lozad');
          imgEl4.setAttribute('alt', 'Twitter');
          imgEl4.setAttribute('width', '32');
          imgEl4.setAttribute('height', '32');
          imgEl4.setAttribute('data-loaded', 'true');
          
          aEl5.append(imgEl4);
          liEl3.append(aEl5);
          ulEl.append(liEl3);
          
          const liEl4 = document.createElement('li');
          
          const aEl6 = document.createElement('a');
          aEl6.setAttribute('href', 'https://www.youtube.com/c/CareInsurance');
          aEl6.setAttribute('class', 'youtube');
          aEl6.setAttribute('title', 'YouTube');
          aEl6.setAttribute('target', '_blank');
          aEl6.setAttribute('rel', 'noopener');
          
          const imgEl5 = document.createElement('img');
          imgEl5.setAttribute('src', 'https://img.freepik.com/premium-photo/youtube-logo_1080029-105.jpg?semt=ais_hybrid&w=740');
          imgEl5.setAttribute('class', 'lozad');
          imgEl5.setAttribute('alt', 'YouTube');
          imgEl5.setAttribute('width', '32');
          imgEl5.setAttribute('height', '32');
          imgEl5.setAttribute('data-loaded', 'true');
          
          aEl6.append(imgEl5);
          liEl4.append(aEl6);
          ulEl.append(liEl4);
          
          const liEl5 = document.createElement('li');
          
          const aEl7 = document.createElement('a');
          aEl7.setAttribute('href', 'mailto:customerfirst@careinsurance.com');
          aEl7.setAttribute('class', 'outlook');
          aEl7.setAttribute('title', 'Outlook');
          aEl7.setAttribute('target', '_blank');
          aEl7.setAttribute('rel', 'noopener');
          
          const imgEl6 = document.createElement('img');
          imgEl6.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj7y_kJHNnUL830tYOa7uCLlWY54F0cwH54w&s');
          imgEl6.setAttribute('class', 'lozad');
          imgEl6.setAttribute('alt', 'Email');
          imgEl6.setAttribute('width', '32');
          imgEl6.setAttribute('height', '32');
          imgEl6.setAttribute('data-loaded', 'true');
          
          aEl7.append(imgEl6);
          liEl5.append(aEl7);
          ulEl.append(liEl5);
          
          const liEl6 = document.createElement('li');
          
          const aEl8 = document.createElement('a');
          aEl8.setAttribute('href', 'https://www.linkedin.com/company/care-health-insurance/');
          aEl8.setAttribute('title', 'LinkedIn');
          aEl8.setAttribute('class', 'linkedin');
          aEl8.setAttribute('target', '_blank');
          aEl8.setAttribute('rel', 'noopener');
          
          const imgEl7 = document.createElement('img');
          imgEl7.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsPcoXZwgRJ3Lr5sdQClJwbBbGhItn5megkg&s');
          imgEl7.setAttribute('class', 'lozad');
          imgEl7.setAttribute('alt', 'LinkedIn');
          imgEl7.setAttribute('width', '32');
          imgEl7.setAttribute('height', '32');
          imgEl7.setAttribute('data-loaded', 'true');
          
          aEl8.append(imgEl7);
          liEl6.append(aEl8);
          ulEl.append(liEl6);
          
        divEl4.append(ulEl);
      articleEl2.append(divEl4);
    sectionEl.append(articleEl2);
    container.append(sectionEl);
  
  
    block.textContent = '';
    block.append(container);
  }