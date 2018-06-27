$(document).ready(function() {
    alert("hello world")
});

$(document).ready(function() {
    
    document.getElementById("description").innerHTML = "Create yo pizza please!";

    //alert(JSON.stringify(theMenu))
    
    var pizza_prices = new Array();

    pizza_prices["personal"] = 6;
    pizza_prices["medium"] = 10;
    pizza_prices["large"] = 14;
    pizza_prices["xlarge"] = 16;

    function getPizzaSizePrice() {
        var pizzaSizePrice = 0;
        
        var selectedPizza = $("input[name=size]:checked").val();
        alert(selectedPizza)
        
        pizzaSizePrice = pizza_prices[selectedPizza];
        alert(pizzaSizePrice)
        return pizzaSizePrice;
    };

    getPizzaSizePrice();



    var cheese_select = new Array();

    cheese_select["regular"] = 0;
    cheese_select["nocheese"] = 0;
    cheese_select["xcheese"] = 3;

    function getCheeseSelect() {
        var cheeseSelect = 0;

        var selectedCheese = $("input[name=cheese]:checked").val();
        alert(selectedCheese)

        cheeseSelect = cheese_select[selectedCheese];
        alert(cheeseSelect)
        return cheeseSelect;
    };

    getCheeseSelect();
    
    
    
    var crust_select = new Array();
    
    crust_select["plain"] = 0;
    crust_select["garlicbutter"] = 0;
    crust_select["cheesestuffed"] = 0;
    crust_select["spicy"] = 0;
    crust_select["housespecial"] = 0;
    
    function getCrustSelect() {
        var crustSelect = 0;
        
        var selectedCrust = $("input[name=crust]:checked").val();
        alert(selectedCrust)
        
        crustSelect = crust_select[selectedCrust];
        alert(crustSelect)
        return crustSelect;
    };
    
    getCrustSelect();
    
    
    
    var sauce_select = new Array();
    
    sauce_select["marinara"] = 0;
    sauce_select["white"] = 0;
    sauce_select["bbq"] = 0;
    sauce_select["none"] = 0;
    
    function getSauceSelect() {
        var sauceSelect = 0;
        
        var selectedSauce = $("input[name=sauce]:checked").val();
        alert(selectedSauce)
        
        sauceSelect = sauce_select[selectedSauce];
        alert(sauceSelect)
        return sauceSelect;
    };
    
    getSauceSelect();
    
    
    
    function getSelectedMeat() {
        var meat_select = new Array();
        var allMeatSelected = 0;
    
        $("#meat_selection input:checked").each(function() {
            meat_select.push($(this).val());
        });
        alert(meat_select)
        
        allMeatSelected = meat_select.length;
        alert(allMeatSelected) 
        
        return meat_select;
        
    };
    
    getSelectedMeat();
    
    
    
    function getSelectedVeggie() {
        var veggie_select = new Array();
        var allVeggieSelected = 0;
        
        $("#veggie_selection input:checked").each(function() {
            veggie_select.push($(this).val());
        });
        alert(veggie_select)
        
        allVeggieSelected = veggie_select.length;
        alert(allVeggieSelected)
        
        return veggie_select;
        
    };
    
    getSelectedVeggie();
    
});