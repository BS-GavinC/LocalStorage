let wallet = {
    id : 1,
    owner : {
        id: 0,
        name : "Pol",
        city : "Namur",
        contacts : []
    },
    value : 0,
    stocks : {
        34 : 2,
        12 : 0,
        76 : 0
    }
}

let stocks = [
    {id : 34, name : "NVIDIA", price : 120.4},
    {id : 12, name : "AAPL", price : 220.4},
    {id : 76, name : "PAYPAL", price : -25},
]

let buy = (name) => {
    wallet.stocks[stocks.find(i => i.name == name).id]++
    saveChanges();
}


let saveChanges = () => {
    localStorage.setItem("wallet", JSON.stringify(wallet))
    showDatas()
}

let loadDatas = () => {
     
    if (!JSON.parse(localStorage.getItem("wallet"))) 
    {
        saveChanges()
    }
    else
    {
        wallet =JSON.parse(localStorage.getItem("wallet"))
    }
}

let showDatas = () => {
    document.getElementById("name").innerHTML = wallet.owner.name
    document.getElementById("value").innerHTML = wallet.value
    let elem = document.getElementById("stocks")
    elem.innerHTML = ""
    for (const stock in wallet.stocks) {
        let newElem = document.createElement("p")
        let name = stocks.find(i => i.id == stock).name;
        let price = stocks.find(i => i.id == stock).price;
        let total = price * wallet.stocks[stock]
        newElem.innerHTML = `${name} - ${wallet.stocks[stock]} : total : ${total}`
        elem.appendChild(newElem)
    }
}

loadDatas()
showDatas()


