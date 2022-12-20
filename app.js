
const body = document.querySelector('body');
const page = document.createElement('page');
const header = document.createElement('header');
const ul = document.createElement('ul');
const arrMenu = ['Home', 'About Us', 'Tours', 'Gallery', 'Reviews', 'Contact'];
const main = document.createElement('main');
const sectionLead = document.createElement('section');
const titleFirst = document.createElement('h1');
const subtitle = document.createElement('p');
const btn = document.createElement('button');
const img = document.createElement('img');
const sectionGallery = document.createElement('section');
const titleSecond = document.createElement('h2');
const div = document.createElement('div');
const imgGallery = document.createElement('img');
const cardTemplate = document.querySelector('#card');
const sectionAboutUs = document.createElement('section')
const footer = document.createElement('footer');
const arrCard = [
  {
    img: 'https://images.unsplash.com/photo-1593884523372-80aba5210ea3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    title: 'Ocean',
    subtitle: "The ocean (also the sea or the world ocean) is the body of salt water that covers approximately 70.8% of the surface of Earth and contains 97% of Earth's water."
  },
  {
    img: 'https://images.unsplash.com/photo-1666388685523-92c0c11c921d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    title: 'Mountain',
    subtitle: "A mountain is an elevated portion of the Earth's crust, generally with steep sides that show significant exposed bedrock. Although definitions vary, a mountain may differ from a plateau in having a limited summit area, and is usually higher than a hill, typically rising at least 300 metres (1,000 feet) above the surrounding land."
  },
  {
    img: 'https://images.unsplash.com/photo-1667888614073-25c65dbeadff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Forest',
    subtitle: 'A forest is an area of land dominated by trees.[1] Hundreds of definitions of forest are used throughout the world, incorporating factors such as tree density, tree height, land use, legal standing, and ecological function.'
  },
  {
    img: 'https://images.unsplash.com/photo-1670406072263-74c556e5ecf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Desert',
    subtitle: 'A desert is a barren area of landscape where little precipitation occurs and, consequently, living conditions are hostile for plant and animal life. The lack of vegetation exposes the unprotected surface of the ground to denudation. About one-third of the land surface of the Earth is arid or semi-arid.'
  }
]

body.prepend(page);
page.prepend(header, main, footer);
header.append(ul);

/** наполнить header */
function addMenu(){
  let result = []
  for(let i=0; i<6; i++){
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.textContent = arrMenu[i];
    li.append(a);
    result[i] = li; //аналогично result.push(li);

  }
  return result;
};
ul.append(...addMenu());

main.prepend(sectionLead, sectionGallery, sectionAboutUs);
sectionLead.prepend(img, titleFirst, subtitle, btn);
sectionGallery.prepend(imgGallery, titleSecond, div);

/** наполнить галерею карточек */
function addCard(){
  arrCard.forEach((item)=>{

    let card = cardTemplate.content.cloneNode(true);
    let img = card.querySelector('.card__img');
    let title = card.querySelector('.card__title');
    let subtitle = card.querySelector('.card__subtitle');

    img.src = item.img;
    img.alt = item.title;
    title.textContent = item.title;
    subtitle.textContent = item.subtitle;

    div.append(card);
  })
};
addCard();

/** наполнить секцию с помощью cloneNode*/
function addSectionAboutUs(){
  const img = imgGallery.cloneNode(true);
  img.classList.add('gallery__img');
  img.src = 'https://images.unsplash.com/photo-1598362651567-e72621ef29f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
  const title = titleSecond.cloneNode(true);
  title.classList.add('gallery__title', 'about__title');
  title.textContent = 'About US';
  const subtitleAbout = subtitle.cloneNode(true);
  subtitleAbout.classList.add('lead__subtitle', 'aboutUs__subtitle');
  subtitleAbout.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.';
  sectionAboutUs.prepend(img, title, subtitleAbout);
};
addSectionAboutUs();

/** присвоить класс */
page.classList.add('page');
header.classList.add('header');
ul.classList.add('header__menu');
main.classList.add('main');
sectionLead.classList.add('lead');
titleFirst.classList.add('lead__title');
subtitle.classList.add('lead__subtitle');
btn.classList.add('lead__btn');
img.classList.add('lead__img');
sectionGallery.classList.add('gallery');
imgGallery.classList.add('gallery__img');
titleSecond.classList.add('gallery__title');
div.classList.add('gallery__container');
sectionAboutUs.classList.add('aboutUs', 'gallery');

/** установить атрибут */
btn.setAttribute('type', 'button')

/** добавить текст */
titleFirst.textContent = 'Travel Time';
subtitle.textContent = "let's travel with us we will start a new adventure together with full of happiness and laughs";
btn.textContent = 'Join';
titleSecond.textContent = 'Where do you want to go';

/** добавить изображение */
img.src = 'https://images.unsplash.com/photo-1671030970219-b7b0984a970b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1156&q=80'
imgGallery.src = 'https://images.unsplash.com/photo-1670171336433-1cf9b6124068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1123&q=80';
