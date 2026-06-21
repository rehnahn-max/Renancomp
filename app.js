console.log("Firebase carregado");
console.log("APP.JS CARREGOU");
import { db } from './firebase.js';

import {
collection,
addDoc,
serverTimestamp
}
from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

window.gerarOS = async function(){

const cliente = document.getElementById('cliente').value.trim();
const telefone = document.getElementById('telefone').value.trim();
const endereco = document.getElementById('endereco').value.trim();
const equipamento = document.getElementById('equipamento').value.trim();
const defeito = document.getElementById('defeito').value.trim();
const servico = document.getElementById('valor').value;

if(!cliente || !telefone || !endereco || !equipamento || !defeito || !servico){

alert("Preencha todos os campos.");

return;

}

const numeroOS = Date.now();

try{

await addDoc(collection(db,"ordens_servico"),{

numeroOS,
cliente,
telefone,
endereco,
equipamento,
defeito,
servico,
status:"🔎 Avaliando Serviço",
data: serverTimestamp()

});

alert(`OS ${numeroOS} criada com sucesso!`);

}catch(err){

console.error(err);

alert("Erro ao salvar OS.");

}

}
