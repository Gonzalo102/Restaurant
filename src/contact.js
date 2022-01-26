
const html_to_insert = `<div class='contact-page'>
                            <div>
                                <h2> Phone: 456-345-123 </h2>
                                <h2> 🏠  Av. Hipólito Yrigoyen 500, Argentina </h2>
                            </div>
                            <p> <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13135.197557006282!2d-58.373336!3d-34.609234!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb584a8a55cdf420f!2sPertutti%20Suc.%20Plaza%20de%20Mayo!5e0!3m2!1ses-419!2sar!4v1643223743123!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe></p>
                        </div>`;

function Contact() {
    document.querySelector('.content').insertAdjacentHTML('beforeend', html_to_insert);
}

export default Contact;