
const body = document.querySelector('body');
/** создать узел */
const page = document.createElement('page');
const header = document.createElement('header');
const ul = document.createElement('ul');
const arrMenu = ['Home', 'About Us', 'Tours', 'Gallery', 'Reviews', 'Contact'];
const main = document.createElement('main');
const sectionLead = document.createElement('section');
const hFirst = document.createElement('h1');
const subtitle = document.createElement('p');
const btn = document.createElement('button');
const footer = document.createElement('footer');

/** вставить узел */
body.prepend(page);
page.prepend(header, main, footer);

header.append(ul);

function addMenu(){
  let result = []
  for(let i=0; i<6; i++){
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.textContent = arrMenu[i];
    li.append(a);
    result.push(li);

  }
  return result;
};
ul.append(...addMenu());

main.prepend(sectionLead);
sectionLead.prepend(hFirst, subtitle, btn);

/** присвоить класс */
page.classList.add('page');
header.classList.add('header');
ul.classList.add('header__menu');
main.classList.add('main');
sectionLead.classList.add('lead');
hFirst.classList.add('header__title');
subtitle.classList.add('header__subtitle');
btn.classList.add('header__btn');

/** добавить текст */
hFirst.textContent = 'Travel Time';
subtitle.textContent = "let's travel with us we will start a new adventure together with full of happiness and laughs";
btn.textContent = 'Join';

console.log(body);

