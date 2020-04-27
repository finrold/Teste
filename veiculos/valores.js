let json = [
{"nome":"Azera V6","preco":85000},
{"nome":"Onix 1.6","preco":35000},
{"nome":"Fiesta 2.0","preco":52000},
{"nome":"C3 1.0","preco":22000},
{"nome":"Uno Fire","preco":11000},
{"nome":"Sentra 2.0","preco":53000},
{"nome":"Astra Sedan","preco":39000},
{"nome":"Vectra 2.0 Turbo","preco":37000},
{"nome":"Hilux 4x4","preco":90000},
{"nome": "Montana Cabine dupla", "preco": 57000},
{"nome":"Outlander 2.4","preco":99000},
{"nome":"Brasilia Amarela","preco":9500},
{"nome":"Omega Hatch","preco":8000}
];

for (var i = 0; i < json.length; i++){
    var obj = json[i];

    if(obj.preco > 30000){
        console.log(obj.preco)
    }

   }




