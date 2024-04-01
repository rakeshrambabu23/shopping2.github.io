async function getData() {
    let store = await fetch("https://dummyjson.com/products");
    let data = await store.json();
    console.log(data.products);

    let cards  = document.querySelectorAll('.card');
    cards.forEach(function(items,i){
        items.getElementsByTagName('img')[0].src=data.products[i].images[0]

    })
}
getData()
