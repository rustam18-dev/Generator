export function firstButtonSet(element: HTMLElement) {
  if (element.innerHTML.length > 23 && !element.innerHTML.includes('cat1')) {
    return element.innerHTML = ``
  }

  const cards = [
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

  element.innerHTML = cards.map(card => `
    <div class="w-[300px] h-[300px] flex items-center justify-center bg-white">
      <img src="${card.img}" alt="${card.alt}">
    </div>
  `).join('')

}

export function secondButtonSet(element: HTMLElement) {
  if (element.innerHTML.length > 23 && !element.innerHTML.includes('Vector')) {
    return element.innerHTML = ``
  }

  const cards = [
    {
      id: 1,
      img: '../public/cat1.png',
      alt: "default"
    },
    {
      id: 2,
      img: '../public/cat2.png',
      alt: "default"
    },
    {
      id: 3,
      img: '../public/cat3.png',
      alt: "default"
    },
    {
      id: 4,
      img: '../public/cat4.png',
      alt: "default"
    },
  ]

  element.innerHTML = cards.map(card => `
    <div id="card_${card.id}" class="relative w-[300px] h-[300px] flex items-center justify-center cursor-pointer group">
      <img src="${card.img}" alt="${card.alt}" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
    </div>
  `).join('')
}

