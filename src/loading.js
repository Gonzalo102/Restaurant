
const html_to_insert = `
    <div class="header-wrapper">
    <div id="title"> Pertutti </div>
    <div class="header">
        <button class='home-button'>Home</button>
        <button class='menu-button'>Menu</button>
        <button class='contact-button'>Contact</button>
    </div>
    </div>
`;

function loadPage() {
      document.querySelector('.content').insertAdjacentHTML('beforeend', html_to_insert);
  }


  export default loadPage;