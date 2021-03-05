function define_linha(lista){
    
    linha = document.createElement("tr");
    tdUserID = document.createElement("td");
    tdid = document.createElement("td");
    tdTitle = document.createElement("td");
    tdBody = document.createElement("td");
    tdCompleted = document.createElement("td");

    
    tdUserID.innerHTML = lista.userId
    tdid.innerHTML = lista.id
    tdTitle.innerHTML = lista.title
    tdBody.innerHTML = lista.body
    tdCompleted.innerHTML = lista.completed


 
    linha.appendChild(tdUserID);
    linha.appendChild(tdid);
    linha.appendChild(tdTitle);
    
    if (String(lista.body) != "undefined") {
        linha.appendChild(tdBody);
    }
    if(String(lista.completed) != "undefined") {
        linha.appendChild(tdCompleted);
    }
    
    return linha; 
 }

function main(requestURL){

let request = new XMLHttpRequest();

request.open("GET", requestURL,false)
//request.responseType = 'json';
request.send()

let data = request.responseText;
let lista = JSON.parse(data);
let tabela = document.getElementById("tabela");

lista.forEach(element => {
    let linha = define_linha(element);
    tabela.appendChild(linha);        
});
}

main('https://jsonplaceholder.typicode.com/albums') 


