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

console.log("Cheguei no PDF");
const { jsPDF } = window.jspdf;

const doc = new jsPDF();

doc.setFillColor(5,8,22);
doc.rect(0,0,210,297,'F');

doc.setTextColor(0,229,255);
doc.setFontSize(22);

doc.text('RENAN TECH PREMIUM',20,25);

doc.setTextColor(255,255,255);
doc.setFontSize(12);

doc.text(`OS Nº ${numeroOS}`,20,45);
doc.text(`Cliente: ${cliente}`,20,65);
doc.text(`Telefone: ${telefone}`,20,80);
doc.text(`Endereço: ${endereco}`,20,95);
doc.text(`Equipamento: ${equipamento}`,20,110);
doc.text(`Defeito: ${defeito}`,20,130);
doc.text(`Serviço: ${servico}`,20,150);

doc.save(`OS-${numeroOS}.pdf`);

const mensagem = `📋 RENAN TECH PREMIUM

🆔 OS: ${numeroOS}

👤 Cliente: ${cliente}

📞 Telefone: ${telefone}

📍 Endereço: ${endereco}

💻 Equipamento: ${equipamento}

⚠ Defeito: ${defeito}

🛠 Serviço: ${servico}

📌 Status: 🔎 Avaliando Serviço`;

window.open(
`https://wa.me/5531992372280?text=${encodeURIComponent(mensagem)}`,
'_blank'
);

alert(`OS ${numeroOS} criada com sucesso!`);

catch(err){

console.error("ERRO COMPLETO:", err);

alert("Erro: " + err.message);

}

console.error(err);

alert("Erro ao salvar OS.");

}
