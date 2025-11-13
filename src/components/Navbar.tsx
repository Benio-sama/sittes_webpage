import { useEffect, useState } from "react"

export function Navbar() {
    const [color, setColor] = useState("");

    useEffect(() => {
        const intervall = setInterval(() => {
            let red, green, blue, brightness;
            do {
                red = Math.floor(Math.random() * 256);
                green = Math.floor(Math.random() * 256);
                blue = Math.floor(Math.random() * 256);
                brightness = (red * 299 + green * 587 + blue * 114) / 1000;
            } while (brightness < 130); // 🔹 csak ha elég világos

            let backg = `rgb(${red}, ${green}, ${blue})`;
            setColor(backg);

        }, 300)
        return () => clearInterval(intervall);
    }, []);

    return (
        <header id="navbar">
            <div id="navbar_position">
                <div id="navbar_content" className="center">
                    <div id="name">
                        <b><a href="/">Bp Konténer Transport Kft</a></b>
                    </div>
                    <nav id="navbar_links" className="flex_row align_center text_center">
                        <a href="/zsakos_sittszallitas">Zsákos sittszállítás</a>
                        <a href="/szolgaltatasok">Szolgáltatások</a>
                        {/* <a href="/lomtalanitas">Lomtalanítás</a> */}
                        <a href="/arak">Árak</a>
                        <a href="/galeria">Galéria</a>
                        <a href="/ugyfelek_velemenyei">Ügyfelek véleményei</a>
                    </nav>
                    <div id="contact" className="align_center justify_center">
                        <div className="tablet mobile phone_number orange" style={{ backgroundColor: color }}><a id="phone_number" href="tel:+36705070462"><i className="fa fa-phone"></i> +36 70 507 0462</a></div>
                        <button className="button_black"><a id="contact_button" href="#contact_us" className="white">Elérhetőségek</a></button>
                    </div>
                </div>
            </div>
        </header>
    )
}