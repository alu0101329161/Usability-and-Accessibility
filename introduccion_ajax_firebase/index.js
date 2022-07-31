document.addEventListener('DOMContentLoaded', function() {
  // Inicialización de constantes
  const comment = document.getElementById('comment');
  const userComment = document.getElementById('user-comment');
  const btn = document.getElementById('button-com');
  const alert = document.getElementById('alert-com');
  const salesTable = document.getElementById('sales-table');
  const btnAmounts = document.getElementById('btn-amounts');
  const btnCon = document.getElementById('button-contador');
  const reset = () => {
    document.getElementById("cantidadP").innerHTML = null;
    document.getElementById("cantidadDIV").innerHTML = null;
    document.getElementById("cantidadLI").innerHTML = null;
  }

  // Importación de los objetos JSON
  const data = {
    "sales": [
      {
        "dni": "982348A",
        "year": 1987,
        "wallet": "239a4823asd42304dsf98",
        "products": [
          {"product": "MonkeyNFT", "price": 200},
          {"product": "LionNFT", "price": 300}
        ],
        "discount": 10,
        "payment": "ethereum",
        "method": "credit",
        "date": "22-5-2022"
      },
  
      {
        "dni": "234234B",
        "year": 2001,
        "wallet": "19s28372asd9429sdfa34",
        "products": [
          {"product": "GolemNFT", "price": 150}
        ],
        "discount": 20,
        "payment": "bitcoin",
        "method": "cash",
        "date": ""
      }
    ]
  }

  // Insertar en una tarjeta el texto recibido por input al pulsar el botón
  function addCommentToCard() {
    if (comment.value === '') {
      alert.classList.remove('d-none');
      alert.innerText = 'Se requiere un comentario';
      return;
    }
    alert.classList.add('d-none');

    const card = document.createElement('card');
    const p = document.createElement('p');
    p.innerText = comment.value;
    userComment.appendChild(card);
    card.appendChild(p);
  }

  // Calcular la cantidad de párrafos, items de lista y elementos div en la página 
  function countNumberElements(){
    document.getElementById("cantidadP").innerHTML = document.getElementsByTagName("p").length;
    document.getElementById("cantidadDIV").innerHTML = document.getElementsByTagName("div").length;
    document.getElementById("cantidadLI").innerHTML = document.getElementsByTagName("li").length;  
  }

  // Calcular el importe de una compra de un usuario
  function saleAmount(sale) {
    var amount = 0;
    sale["products"].forEach(product => {
      amount += product["price"];
    });
    amount -= amount * sale["discount"] / 100;
    return amount;
  }

  // Añadir el importe de las compras a la página
  function addSalesToTable() {
    data.sales.forEach((sale) => {
      const amount = saleAmount(sale);
      const newRowAmount = salesTable.insertRow();
      var date = new Date();
      var dateString = "";
      if (sale["method"] !== "credit") {
        dateString = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
      } else {
        dateString = sale["date"]
      }

      newRowAmount.innerHTML = `
        <td>${sale["wallet"]}</td>
        <td>${amount} ${sale["payment"]}</td>
        <td>${dateString}</td>
      `
    });
    salesTable.style.display = "block";
    btnAmounts.style.display = "none";
  }

  btn.onclick = addCommentToCard;
  btnCon.onclick = countNumberElements;
  btnCon.onauxclick = reset;
  btnAmounts.onclick = addSalesToTable;
});