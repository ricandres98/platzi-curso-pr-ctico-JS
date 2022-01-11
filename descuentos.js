const coupons = [
    {
        nombre:"ricardo",
        descuento: 15
    },
    {
        nombre:"andres",
        descuento: 30
    },
    {
        nombre:"ojeda",
        descuento: 50
    }
];
function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function onClickPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const inputCoupon = document.getElementById("inputCoupon");
    const resultParagraph = document.getElementById("resultPrice");
    const priceValue = Number(inputPrice.value);
    const couponValue = inputCoupon.value;

    let descuento;

    isValidCoupon = function(coupons){
        return coupons.nombre === couponValue;
    };
    
    if(!coupons.some(isValidCoupon)) {
        resultParagraph.innerText = "Ese no es un cupón válido";
    }
    else {
        descuento = coupons.find(isValidCoupon).descuento;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
        
        resultParagraph.innerText = 
            "El precio final con el "
            + descuento
            + "% de descuento es $"
            + precioConDescuento;
    }
}