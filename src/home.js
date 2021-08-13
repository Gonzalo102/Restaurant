
const html_to_insert = `<div class='home-page'>
                            <h1> Pertutti best restaruant in town </h1>
                            
                        </div>`;

function Home() {
    document.querySelector('.content').insertAdjacentHTML('beforeend', html_to_insert);
}

export default Home;