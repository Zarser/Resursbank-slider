var slider = document.getElementById("slider-belopp");
var output = document.getElementById("belopp");
var inputbox = document.getElementById("värde");
var slider1 = document.getElementById("slider-år");
var output1 = document.getElementById("år");
var inputbox1 = document.getElementById("år-längd");



output.addEventListener = slider.value;

slider.oninput = function () {
    inputbox.value = this.value;
}

output1.addEventListener = slider1.value;

slider1.oninput = function () {
    inputbox1.value = this.value;
}


function calc() {
    var belopp = parseInt(slider.value);
    var år = parseInt(slider1.value);


    if (belopp > 0 & år > 0);
    document.getElementById("månads-kostnad").value = Math.round(((belopp)*(1+0.00665)^år)/((1+0.00665)^år-1)+19); 
}

document.getElementById('slider-belopp').onchange = function () {
    console.log("Hej1");
    calc();
};

document.getElementById('slider-år').onchange = function () {
    console.log("Hej11");
    calc();
};





slider.värde = function () {
    inputbox.value = this.value;

    calc();
}



slider1.värde = function () {
    inputbox.value = this.value;

    calc();
}






