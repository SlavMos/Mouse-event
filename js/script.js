//event -- ЭТО СОБЫТИЕ (ОБЪЕКТ) КОТОРЫЙ СОДЕРЖИТ ВСЮ ИНФОРМАЦИЮ О СОБЫТИИ
document.querySelector(".one").onclick = (e) => {
  console.log(e);
  console.log("click");
};

document.querySelector(".two").onclick = () => {
  console.log("hello");
};

//ONDBLCLICK  работает при дабл кликеъ

document.querySelector(".two").ondblclick = () => {
  console.log("hello");
};

//oncotextmenu работает при правой клике мыши

document.querySelector(".two").oncontextmenu = () => {
  console.log("right button");
  return false; // не показывает констекстное меню
};

// mousemove -- при наведение мыши  на блок увеличивется "+"

document.querySelector(".three").onmousemove = () => {
  console.log("+");
};
