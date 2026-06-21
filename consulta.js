import { db } from './firebase.js';

import {
collection,
query,
where,
getDocs
}
from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

window.consultarOS = async function(){

const numero = Number(
document.getElementById('numeroOS').value
);

const q = query(
collection(db,"ordens_servico"),
where("numeroOS","==",numero)
);

const resultado = await getDocs(q);

let html = '';

resultado.forEach(doc=>{

const dados = doc.data();

html += `
<h3>${dados.cliente}</h3>

<p>Status: ${dados.status}</p>

<p>Equipamento: ${dados.equipamento}</p>

<p>Defeito: ${dados.defeito}</p>
`;

});

document.getElementById('resultado').innerHTML = html;

}