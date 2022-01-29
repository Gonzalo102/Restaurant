import Italiana from '../dist/images/italiana.jpeg';
import DelaCasa from '../dist/images/delacasa.jpeg';
import Cuadrada from '../dist/images/cuadrada.jpeg';


const html_to_insert = `<div class='menu-page'>
                            <center>
                                <div class='pizzas'>
                                    <div class='italiana'>
                                        <h3>La italiana</h3>
                                        <p> Tomato Sauce, Mozzarella, Garlic, Basil</p>
                                    </div>
                                    <div class='casa'>
                                        <h3>De la Casa</h3>
                                        <p> A bit of everything</p>
                                    </div>
                                    <div class='cuadrada'>
                                        <h3>La Cuadrada</h3>
                                        <p> Tomato Sauce, Mozzarella</p>
                                    </div>
                                </div>
                            </center>
                        </div>`;

function Menu() {
    document.querySelector('.content').insertAdjacentHTML('beforeend', html_to_insert);

    const menu = document.querySelector('.menu-page');
    const LaItaliana = document.querySelector('.italiana');
    const Casa = document.querySelector('.casa');
    const LaCuadrada = document.querySelector('.cuadrada');
    
    const myItaliana = new Image();
    myItaliana.src = Italiana;
    const myDeLaCasa = new Image();
    myDeLaCasa.src = DelaCasa;
    const myCuadrada = new Image();
    myCuadrada.src = Cuadrada;

    LaItaliana.appendChild(myItaliana);
    Casa.appendChild(myDeLaCasa);
    LaCuadrada.appendChild(myCuadrada);
}

export default Menu;