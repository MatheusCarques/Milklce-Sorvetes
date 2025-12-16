const mobileBtn = document.querySelector('.btn-mobile');  //Seleciona o Botão do Menu
const navLinks = document.getElementById('nav-links');  //Sleciona o conteiner dos Links
const icon = document.querySelector('.btn-mobile i');  //Troca o hamburguer para X

if (mobileBtn) {
  mobileBtn.addEventListener('click', () =>{     //Quando clicar no botão alterna a 
      navLinks.classList.toggle('show');           //classe que esconde ou mostra o menu e 
      icon.classList.toggle('fa-times');            //troca o icone para X ou linhas
      icon.classList.toggle('fa-bars');
  });
}

function fecharModal() {
  document.getElementById("modal").classList.add("modal-esconde");
}

function abrirModal(urlImagem) {
  document.getElementById("modal").classList.remove("modal-esconde");
  document.getElementById("modal-img").src = urlImagem;
}
