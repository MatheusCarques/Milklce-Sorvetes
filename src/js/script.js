
// menu mobile 
const mobileBtn = document.querySelector('.btn-mobile');  //Seleciona o Botão do Menu
const navLinks = document.getElementById('nav-links');  //Sleciona o conteiner dos Links
const icon = document.querySelector('.btn-mobile i');  //Troca o hamburguer para X
const hash = window.location.hash;

if (mobileBtn) {
  mobileBtn.addEventListener('click', () =>{     //Quando clicar no botão alterna a 
      navLinks.classList.toggle('show');           //classe que esconde ou mostra o menu e 
      icon.classList.toggle('fa-times');            //troca o icone para X ou linhas
      icon.classList.toggle('fa-bars');
  });
}

function goToAbout(){
  const sobre = document.getElementById ('sobre');
  sobre.scrollIntoView({
    behavior: "smooth" , 
    block: "start"
  })

}

if(hash == "#about"){
  goToAbout()
}

/* ========== CARROSSEL CONTROLADO ========== */
(function() {
  const carrossel = document.getElementById("carrosselSabores");          //Todo o código do carrossel está dentro 
  const btnLeft = document.querySelector(".seta.esquerda");                 //de uma IIFE (função auto–executada)
  const btnRight = document.querySelector(".seta.direita");                  //Isso evita conflitos com outras funções no site.

  if (!carrossel || !btnLeft || !btnRight) return;         //Se algum não existir, o código é encerrado:

  // quantos items queremos mostrar por vez (ajusta via largura)
  function itemsPerPage() {
    const w = window.innerWidth;
    if (w <= 480) return 1;
    if (w <= 768) return 2;
    if (w <= 1024) return 3;
    return 4; // desktop = 4
  }

  // calcula largura de rolagem com base na área visível (garante que sempre role "uma página")
  function scrollAmount() {
    return Math.floor(105);
  }

  // rola para a direita
  function scrollRight() {
    const amount = scrollAmount();
    carrossel.scrollBy({ left: amount, behavior: 'smooth' });
    // atualiza estado das setas após animação (tente atualizar após 300ms)
    setTimeout(updateButtons, 350);
  }

  // rola para a esquerda
  function scrollLeft() {
    const amount = scrollAmount();
    carrossel.scrollBy({ left: -amount, behavior: 'smooth' });
    setTimeout(updateButtons, 350);
  }

  // ativa/desativa setas se estamos no início ou fim
  function updateButtons() {
    // usamos Math.round por causa de frações em alguns navegadores
    const maxScrollLeft = carrossel.scrollWidth - carrossel.clientWidth;
    const cur = Math.round(carrossel.scrollLeft);

    if (cur <= 5) {
      btnLeft.classList.add('disabled');
      btnLeft.setAttribute('aria-disabled', 'true');
    } else {
      btnLeft.classList.remove('disabled');
      btnLeft.setAttribute('aria-disabled', 'false');
    }

    if (cur >= maxScrollLeft - 5) {
      btnRight.classList.add('disabled');
      btnRight.setAttribute('aria-disabled', 'true');
    } else {
      btnRight.classList.remove('disabled');
      btnRight.setAttribute('aria-disabled', 'false');
    }
  }

  // listeners
  btnLeft.addEventListener('click', () => {
    if (!btnLeft.classList.contains('disabled')) scrollLeft();
  });
  btnRight.addEventListener('click', () => {
    if (!btnRight.classList.contains('disabled')) scrollRight();
  });

  // atualiza os botões quando o usuário der scroll manualmente (touch/trackpad)
  carrossel.addEventListener('scroll', () => {
    // chama com debounce curto para não rodar demais
    if (this._t) clearTimeout(this._t);
    this._t = setTimeout(updateButtons, 80);
  });

  // recalcula quando a tela muda de tamanho
  window.addEventListener('resize', () => {
    // garante que o carrocel esteja sempre "encaixado" após redimensionar
    setTimeout(updateButtons, 200);
  });

  // inicializa cores das bolinhas se estiver usando data-color (mantive seu código anterior)
  document.querySelectorAll(".bola").forEach(bola => {
      const cor = bola.getAttribute("data-color");
      if (cor) bola.style.backgroundColor = cor;
  });

  // estado inicial das setas
  updateButtons();

})();


