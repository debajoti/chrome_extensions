const loading = document.getElementById('loading')
const quoteElement = document.getElementById('quoteElement')
const authorElement = document.getElementById('authorElement')

const getQuotes = async () => {
    loading.style.display = 'block';

    try {

        const res = await fetch('https://zenquotes.io/api/random');
        const data = await res.json();

        loading.style.display = 'none';
        quoteElement.innerHTML = `${data[0].q}`;
        authorElement.innerHTML = `${data[0].a}`;

    } catch (error) {
        quoteElement.innerHTML = `oops... no quotes to show`;
    }

}

getQuotes()
