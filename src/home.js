import Masterchef from '../dist/images/masterchef.jpg'

const html_to_insert = `<div class='home-page'>
                            <h1> Pertutti best restaruant in town </h1>
                            <h3> Come and meet us! You won't regret<h3>
                        </div>`;

function Home() {
    document.querySelector('.content').insertAdjacentHTML('beforeend', html_to_insert);

    const myChef = new Image();
    myChef.src = Masterchef;
    const homePage = document.querySelector('.home-page')
    homePage.appendChild(myChef)
}




export default Home;