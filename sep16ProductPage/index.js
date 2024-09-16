

const datacontainer = document.getElementById('data-container');

async function product()
{
    const response = await fetch('https://dummyjson.com/products');

    const data = await response.json();

    console.log(data)
    console.log(data.products)

    datacontainer.innerHTML = data.products.map(
        (product) => {
            return `
            <div class='card'>
            <p>${product.brand}</p>
            <p>${product.description}</p>
            <img src="${product.images[0]} ">
            </div>
            `
        }
    ).join('')

}

console.log("Fetching all data ")

product()