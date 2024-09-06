import {ICard} from "./types.ts";

export function firstButtonSet(element: HTMLElement) {
  if (element.innerHTML.length > 23 && !element.innerHTML.includes('cat1')) {
    return element.innerHTML = ``
  }

  document.querySelector<HTMLElement>('#set_first')!.classList.add('active_set')
  document.querySelector<HTMLElement>('#set_second')!.classList.remove('active_set')

  const cards: ICard[] = [
    {
      id: 1,
      img: '../public/Vector.png',
      alt: "default"
    },
    {
      id: 2,
      img: '../public/Vector.png',
      alt: "default"
    },
    {
      id: 3,
      img: '../public/Vector.png',
      alt: "default"
    },
    {
      id: 4,
      img: '../public/Vector.png',
      alt: "default"
    },
  ]

  element.innerHTML = cards.map((card: ICard) => `
    <div class="w-[300px] h-[300px] flex items-center justify-center bg-white">
      <img src="${card.img}" alt="${card.alt}">
    </div>
  `).join('')

}

export const previewCards: ICard[] = []


export function secondButtonSet(element: HTMLElement) {
  if (element.innerHTML.length > 23 && !element.innerHTML.includes('Vector')) {
    element.innerHTML = ``;
    return;
  }
  document.querySelector<HTMLElement>('#set_first')!.classList.remove('active_set')
  document.querySelector<HTMLElement>('#set_second')!.classList.add('active_set')

  const cards = [
    {
      id: 1,
      img: '../public/cat1.png',
      alt: 'cat1',
    },
    {
      id: 2,
      img: '../public/cat2.png',
      alt: 'cat2',
    },
    {
      id: 3,
      img: '../public/cat3.png',
      alt: 'cat3',
    },
    {
      id: 4,
      img: '../public/cat4.png',
      alt: 'cat4',
    },
  ];

  element.innerHTML = cards
    .map(
      (card: ICard) => `
    <div id="card_${card.id}" class="relative w-[300px] h-[300px] flex items-center justify-center cursor-pointer group">
      <img src="${card.img}" alt="${card.alt}" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
    </div>
  `
    )
    .join('');

  cards.forEach((card: ICard) => {
    const cardElement = document.querySelector<HTMLElement>(`#card_${card.id}`);
    if (cardElement) {
      cardElement.addEventListener('click', () => {
        const exists = previewCards.some((previewCard: ICard) => previewCard.id === card.id);
        if (!exists) {
          previewCards.push(card);

          cardElement.classList.add('darkened');

          const overlay: HTMLDivElement | null = cardElement.querySelector('.absolute');
          if (overlay) {
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
          }

          const previewBlock = document.querySelector('#preview_card') as HTMLDivElement;
          previewBlock.innerHTML = previewCards.map((prev) => `
            <div id="card_${prev.id}" class="relative w-[100px] h-[100px] flex items-center justify-center cursor-pointer group">
              <img src="../public/delete.png" alt="delete" class="absolute left-1 top-1">
              <img src="${prev.img}" alt="${prev.alt}" class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
            </div>
          `).join('');


          previewCards.forEach((card, index) => {
            const mainCardElement = document.querySelector<HTMLElement>(`#card_${card.id}`);
            if (mainCardElement) {
              mainCardElement.setAttribute('data-number', (index + 1).toString());
            }
          });
        }
      });
    }
  });
}

