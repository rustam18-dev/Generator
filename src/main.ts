import './style.css'
import {firstButtonSet, secondButtonSet} from "./set.ts";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="bg-[#2f2f2f] text-white h-screen w-full flex">
    <div class="flex flex-col justify-between z-10 bg-[#565555] w-[20%] h-screen p-7 shadow-[5px_-1px_35px_-4px_rgba(0,0,0,1)]">
        <div class="flex flex-col ">
          <h1 class="text-[#4bc81e]  text-3xl font-bold mb-8">Creator AI</h1>
          <div id="set_first" class="bg-[#8e8e8e] text-white rounded-lg px-2 py-1 w-[110px] text-center cursor-pointer">
              Набор 1
          </div>
          <div id="set_second" class="bg-[#8e8e8e] text-white rounded-lg px-2 py-1 w-[110px] text-center cursor-pointer mt-3">
              Набор 2
          </div>
        </div>
        <div>
            <button disabled class="bg-[#154a01] text-white font-bold rounded-lg px-2 py-1 w-[160px] text-center cursor-pointer">Сгенерировать</button>
        </div>
    </div>
    <div class="flex flex-col justify-between w-full">
        <div id="card"  class="p-7 flex gap-[30px] flex-wrap overflow-auto">
            
        </div>
        <div class="bg-[#8e8e8e] h-[13%]">
        
        </div>
    </div>
  </div>
`

document.querySelector<HTMLElement>('#set_first')?.addEventListener('click', () => {
  firstButtonSet(document.querySelector<HTMLElement>('#card')!);
});

document.querySelector<HTMLElement>('#set_second')?.addEventListener('click', () => {
  secondButtonSet(document.querySelector<HTMLElement>('#card')!);
});

