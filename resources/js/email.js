import { Resend } from "resend"
const resend = new Resend('re_UcJgvck2_MvmMBHqPwtyKdGX47DvrnQ18')
const form = document.getElementById('contactForm')

form.addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    const name = document.getElementById("name");
    const surname = document.getElementById("surname");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    try {
        const data = await resend.emails.send({
            from: `${name.value} ${surname.value} <${email.value}>`,
            to: ['levitorres66@gmail.com'],
            subject: 'Question NutriSport',
            html: message.value
        });

        console.log(data);
        alert("¡Correo enviado con éxito!");
        form.reset(); // Reiniciar el formulario después de enviar el correo electrónico
    } catch (error) {
        console.error(error);
        alert("¡Hubo un error al enviar el correo electrónico!");
    }
});