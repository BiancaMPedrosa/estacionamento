btRegistrar=document.getElementById("btRegistrar");
btRegistrar.addEventListener("click", function(event){ 
    event.preventDefault();

    //lendo os campos do form

    const tabela=document.getElementById("entradas");
    const entrada=parseInt(document.getElementById("entrada").value);
    const placa = document.getElementById("placa").value;
    const saida = eval(entrada+1);
    let saidaHTML= "<input type='number' id='inputsaida' value='"+eval(entrada+1)+"' min='"+eval(entrada+1)+"' max='18'onchange='atualiza(this,this.value)'>";

    //criando a tabela resultados
    const novalinha=tabela.insertRow();
    let col1=novalinha.insertCell().innerHTML=placa;
    let col2=novalinha.insertCell().innerHTML=entrada;
    let col3=novalinha.insertCell().innerHTML=saidaHTML;
    let col4=novalinha.insertCell().innerHTML=1;
    let col5=novalinha.insertCell().innerHTML=tarifa();
    let col6=novalinha.insertCell().innerHTML="<button onclick = 'remove(this)'class='icone'>🗑️;</button>";
    exibirTabela();
    tabela.append(novalinha);
});
function remove(botao){
botao.parentNode.parentNode.remove();

}
function atualiza(campo, valor){
   linha=campo.parentNode.parentNode;
   linha.cells[3].innerHTML=parseInt(valor)-parseInt(linha.cells[1].innerHTML);
   linha.cells[4].innerHTML=calcTotal(linha.cells[3].innerHTML);
}
function tarifa(){
    return document.getElementById("tarifa").value;
}
function calcTotal(tempo){
    tempo = parseInt(tempo);
    let adicional = 0.00;
    if (tempo>1){
        adicional = (tempo-1) *(tarifa()/2);
    }
    return parseInt(tarifa())+adicional;
}
function atualizarTarifa(){
   let senha = prompt("Digite a senha do ADMIN");
  
   if (senha=="123"){
      let novaTarifa = prompt("Digite a nova Tarifa");
      document.getElementById("tarifa").value=novaTarifa;
      alert("vc atualizou a tarifa...");
   }
   else alert("sua senha está incorreta, tente outra vez");
}
function valida(){
   document.getElementById("tarifa").value=10;
   document.getElementById("datatual").value=new Date();
}
function entrada(){
   return document.getElementById("entrada");
}
function exibirTabela() {
   var x = document.getElementById('entradas');
  
     x.style.display = 'block';
   
 }
