const select = document.querySelectorAll("select");


for (let sel of select) {
    for (let currcode in countryList) {
        let opt = document.createElement("option");
        opt.innerText = currcode;
        opt.value = currcode;
        if (currcode === "USD") {
            opt.selected = true;
        }
        sel.append(opt);
    }

    sel.addEventListener("change", (evt) => {
        updateFlag(evt.target);
        let from = evt.target.value;
        console.log(from);
        let to = evt.target.value;
        console.log(from);
    });
}

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    if (img) {
        img.src = newSrc;
    } else {
        img = document.createElement("img");
        img.src = newSrc;
        element.parentElement.appendChild(img);
    }
}

let submit_button = document.querySelector("button");

submit_button.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
});

let final_Task = document.querySelector(".final_amount");

const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
    }

    const fromCurrency = document.querySelector("#amount-from-currency").value;
    const toCurrency = document.querySelector("#amount-to-currency").value;

    const BASE_URL = `https://v6.exchangerate-api.com/v6/905f114ab7f963df421e443a/latest/${fromCurrency}`;

    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new Error(`Error fetching the exchange rate: ${response.statusText}`);
        }
        const data = await response.json();

        const exchangeRate = data.conversion_rates[toCurrency];
        const convertedAmount = (amtVal * exchangeRate).toFixed(2);

        // Display the converted amount
        const finalAmountContainer = document.querySelector(".final_amount");
        finalAmountContainer.textContent = `${amtVal} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;

    } catch (error) {
        console.error('Error fetching the exchange rate:', error);
        const finalAmountContainer = document.querySelector(".final_amount");
        finalAmountContainer.textContent = "Error fetching the exchange rate. Please try again.";
    }
};

