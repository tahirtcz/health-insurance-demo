export default function decorate(block) {
    const container = document.createElement('div');
    container.setAttribute('class', 'container');
  
    const sectionEl = document.createElement('section');
    sectionEl.setAttribute('class', 'JFM_Banner d-flex');
    sectionEl.setAttribute('style', 'content-visibility: auto; ');
  
      const articleEl = document.createElement('article');
      articleEl.setAttribute('class', 'container d-flex');

        const pEl = document.createElement('p');
        pEl.setAttribute('class', 'mobile_hide');
  
          const spanEl = document.createElement('span');
          spanEl.textContent = 'Save tax up to ₹75,000~ u/s 80D';
            const supEl = document.createElement('sup');
            supEl.textContent = '';
          spanEl.append(supEl);
        pEl.append(spanEl);
      articleEl.append(pEl);
  
        const asideEl = document.createElement('aside');
        asideEl.setAttribute('class', 'request-a-callback d-flex');
  
          const svgEl = document.createElement('img');
          svgEl.setAttribute('width', '24');
          svgEl.setAttribute('height', '24');
  
          svgEl.setAttribute('src', "https://cdn3.iconfinder.com/data/icons/pyconic-icons-1-2/512/phone-call-active-1024.png");
        asideEl.append(svgEl);
  
          const aEl = document.createElement('a');
          aEl.setAttribute('href', 'tel:1800-102-4499');
          aEl.setAttribute('id', 'buypolicy_tollfree');
          aEl.textContent = 'Buy New Policy :1800-102-4499';
        asideEl.append(aEl);
      articleEl.append(asideEl);
    sectionEl.append(articleEl);
    container.append(sectionEl);
  
  
    block.textContent = '';
    block.append(container);
  }