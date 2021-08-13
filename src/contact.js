
const html_to_insert = `<div class='contact-page'>
                            <h1> Contact Us </h1>
                            <h2> Phone: 456-345-123 </h2>
                        </div>`;

function Contact() {
document.querySelector('.content').insertAdjacentHTML('beforeend', html_to_insert);
}

export default Contact;