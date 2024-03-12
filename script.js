const apiKey = `6da7002e5ec9559336503bb8`;
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

async function dolarCotacao() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById('resultado').textContent = `1 USD = ${data.conversion_rates.BRL}`;
    } catch (error) {
        document.getElementById('resultado').textContent = `Falha ao buscar a cotação do dólar`;
    }
}

dolarCotacao();