function atrasar(funcao, tempo) {
    const delay = setTimeout(() => {
      funcao();
    }, tempo);
    return delay;
  }
  
  function minhaFuncao() {
    alert("Erro desconhecido");
    volta()
  }
  
  const delay = atrasar(minhaFuncao, 10000);

  function muda(){
    loadUm.style.display='block'
    atrasar
  }

  function volta(){
    loadUm.style.display='none'
  }