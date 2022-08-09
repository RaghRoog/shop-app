let addingToCart = (product) => {
    let test = !!document.getElementById(`${product.productName}`)
    let cartFullPrice = document.querySelector('.cart-full-price')
    let sum = 0
    let inCartDisplayer = document.querySelector('.in-cart-displayer')
    if(!test){
        let productsContainer = document.querySelector('.cart-products-container')
        product.amount += 1
        
        let cartProduct = document.createElement('div')
        cartProduct.classList.add('cart-product')
        let cartProductImg = document.createElement('div')
        cartProductImg.classList.add("cart-product-img")
        cartProductImg.style.backgroundImage = `url(./product-imgs/${product.img})`
        let infoContainer = document.createElement('div')
        infoContainer.classList.add('info-container')
        let cartProductInfo = document.createElement('div')
        cartProductInfo.classList.add('cart-product-info')
        cartProductInfo.innerHTML = product.productName
        let cartProductAmount = document.createElement('div')
        cartProductAmount.classList.add('cart-product-amount')
        let amountMinus = document.createElement('button')
        amountMinus.classList.add('amount-minus')
        amountMinus.innerHTML = '-'
        amountMinus.addEventListener('click',()=>{
            product.amount-=1
            amountDisplayer.innerHTML = product.amount
            cartProductPrice.innerHTML = '$'+ Math.round(((product.price*product.amount) + Number.EPSILON) * 100) / 100
            cartProduct.dataset.fullPrice = cartProductPrice.innerHTML.slice(1)
            sum = 0
            let x = document.querySelectorAll('.cart-product')
            for(let i = 0; i<x.length; i++){
                sum = sum + Number(x[i].dataset.fullPrice) 
            }
            cartFullPrice.innerHTML = `Total price: $${Math.round((sum + Number.EPSILON) * 100) / 100}`
            inCartDisplayer.innerHTML = Number(inCartDisplayer.innerHTML) - 1
            if(product.amount<1){
                productsContainer.removeChild(cartProduct)
            }})
        let amountDisplayer = document.createElement('div')
        amountDisplayer.classList.add('amount-displayer')
        amountDisplayer.innerHTML = product.amount
        let amonutPlus = document.createElement('button')
        amonutPlus.classList.add('amount-plus')
        amonutPlus.innerHTML = '+'
        amonutPlus.addEventListener('click',()=>{
            product.amount+=1
            amountDisplayer.innerHTML = product.amount
            cartProductPrice.innerHTML = '$'+ Math.round(((product.price*product.amount) + Number.EPSILON) * 100) / 100
            cartProduct.dataset.fullPrice = cartProductPrice.innerHTML.slice(1)
            sum = 0
            let x = document.querySelectorAll('.cart-product')
            for(let i = 0; i<x.length; i++){
                sum = sum + Number(x[i].dataset.fullPrice) 
            }
            cartFullPrice.innerHTML = `Total price: $${Math.round((sum + Number.EPSILON) * 100) / 100}`
            inCartDisplayer.innerHTML = Number(inCartDisplayer.innerHTML) + 1
        })
        let cartProductPrice = document.createElement('div')
        cartProductPrice.classList.add('cart-product-price')
        cartProductPrice.innerHTML = '$'+ Math.round(((product.price*product.amount) + Number.EPSILON) * 100) / 100


        cartProduct.appendChild(cartProductImg)
        cartProduct.appendChild(infoContainer)
        infoContainer.appendChild(cartProductInfo)
        infoContainer.appendChild(cartProductAmount)
        cartProductAmount.appendChild(amountMinus)
        cartProductAmount.appendChild(amountDisplayer)
        cartProductAmount.appendChild(amonutPlus)
        cartProduct.appendChild(cartProductPrice)

        productsContainer.appendChild(cartProduct)
        cartProduct.setAttribute('id', product.productName)
        cartProduct.dataset.fullPrice = product.price
        cartProduct.dataset.fullPrice = cartProductPrice.innerHTML.slice(1)
        let x = document.querySelectorAll('.cart-product')
        for(let i = 0; i<x.length; i++){ 
            sum = sum + Number(x[i].dataset.fullPrice)
            cartFullPrice.innerHTML = `Total price: $${sum}`
        }
        inCartDisplayer.innerHTML = Number(inCartDisplayer.innerHTML) + product.amount
    }
    let cart = document.querySelector('.cart')
    cart.style.display = 'block'
    let bag = document.querySelector('.bag')
    bag.style.display = 'none' 

}

export default addingToCart