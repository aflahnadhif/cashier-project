const goodies = {
    "espresso" : 10000,
    "double espresso" : 13000,
    "cappuccino" : 17000,
    "cafe latte" : 20000,
    "cafe moka" : 20000,
    "flat white" : 22000,
    "americano" : 15000,
    "cortado" : 14000
};

function addCommas(nStr)
{
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

$(document).ready(function () {

    var totalPrice = 0;
    var subtotal = 0;
    var userPayment = 0;

    var $goodieName = $("#goodie-name");
    var $goodieQuantity = $("#goodie-amount");
    var $subtotal = $("#subtotal-price");
    var $addButton = $("#add-goodie");

    var $totalPrice = $("#total-price");
    var $discount = $("#discount");
    var $discountButton = $("#add-discount");

    var $userPayment = $("#user-payment");
    var $userRemainder = $("#user-remainder");
    var $remainderButton = $("#find-remainder");

    $goodieName.keyup(function (KeyboardEvent) {
        subtotal = goodies[$goodieName.val().toLowerCase()] * $goodieQuantity.val();
        $subtotal.val(addCommas(subtotal));
    });

    $goodieQuantity.change(function (KeyboardEvent) {
        subtotal = goodies[$goodieName.val().toLowerCase()] * $goodieQuantity.val();
        $subtotal.val(addCommas(subtotal));
    });

    $goodieQuantity.keyup(function (KeyboardEvent) {
        subtotal = goodies[$goodieName.val().toLowerCase()] * $goodieQuantity.val();
        $subtotal.val(addCommas(subtotal));
    });

    $addButton.click(function (event) {
       totalPrice = totalPrice + Number(subtotal);
       $totalPrice.val(addCommas(totalPrice));
    });

    $discountButton.click(function (event) {
       $addButton.attr("disabled", "disabled");
       $discountButton.attr("disabled", "disabled");
       totalPrice = totalPrice - (totalPrice*Number($discount.val()/100));
       $totalPrice.val(addCommas(totalPrice));
    });

    $userPayment.keyup(function (event) {
        userPayment = $userPayment.val();
        $userPayment.val(userPayment);
    });

    $remainderButton.click(function (event) {
       var remainder = Number(userPayment) - totalPrice;
       $userRemainder.val(addCommas(remainder));
       $userPayment.val(addCommas(userPayment));
    });

    // -----------------------------------
    // EVENT LISTENER FOR THE MENU BUTTONS
    // -----------------------------------
    $("#add-espresso").click(function (event) {
        $goodieName.val("espresso");
        subtotal = goodies[$goodieName.val().toLowerCase()] * $goodieQuantity.val();
        $subtotal.val(addCommas(subtotal));
    });

    $("#add-dblespresso").click(function (event) {
        $goodieName.val("double espresso");
        subtotal = goodies[$goodieName.val().toLowerCase()] * $goodieQuantity.val();
        $subtotal.val(addCommas(subtotal));
    });

    $("#add-cappuccino").click(function (event) {
        $goodieName.val("cappuccino");
        subtotal = goodies[$goodieName.val().toLowerCase()] * $goodieQuantity.val();
        $subtotal.val(addCommas(subtotal));
    });

    $("#add-latte").click(function (event) {
        $goodieName.val("cafe latte");
        subtotal = goodies[$goodieName.val().toLowerCase()] * $goodieQuantity.val();
        $subtotal.val(addCommas(subtotal));
    });

    $("#add-moka").click(function (event) {
        $goodieName.val("cafe moka");
        subtotal = goodies[$goodieName.val().toLowerCase()] * $goodieQuantity.val();
        $subtotal.val(addCommas(subtotal));
    });

    $("#add-white").click(function (event) {
        $goodieName.val("flat white");
        subtotal = goodies[$goodieName.val().toLowerCase()] * $goodieQuantity.val();
        $subtotal.val(addCommas(subtotal));
    });

    $("#add-americano").click(function (event) {
        $goodieName.val("americano");
        subtotal = goodies[$goodieName.val().toLowerCase()] * $goodieQuantity.val();
        $subtotal.val(addCommas(subtotal));
    });

    $("#add-cortado").click(function (event) {
        $goodieName.val("cortado");
        subtotal = goodies[$goodieName.val().toLowerCase()] * $goodieQuantity.val();
        $subtotal.val(addCommas(subtotal));
    });

});