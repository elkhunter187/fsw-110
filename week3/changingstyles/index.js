var arrayH2 = ["item 1", "item 2", "item3", "item4", "item5"];

for (i = 0; i < arrayH2.length; i++) {

    var h2Tag = document.createElement("h2");

    h2Tag.textContent = arrayH2[i];

    h2Tag.style.fontSize = "20px";

    h2Tag.style.fontWeight = "lighter";

    h2Tag.style.fontFamily = "sans serif"
    

    h2Tag.style.color = "cornflowerblue";

    h2Tag.classList.add('border');

    document.body.append(h2Tag);
};