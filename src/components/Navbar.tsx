export function Navbar() {
    return (
        <header id="navbar">
            <div id="navbar_position">
                <div id="navbar_content" className="center">
                    <div id="name">
                        <b><a href="/">Bp Konténer Transport Kft</a></b>
                    </div>
                    <nav id="navbar_links" className="flex_row align_center text_center">
                        <a href="/zsakos_sittszallitas">Zsákos sittszállítás</a>
                        <a href="/">Szolgáltatások</a>
                        <a href="/ugyfelek_velemenyei">Ügyfelek véleményei</a>
                        <a href="/galeria">Galéria</a>
                    </nav>
                    <div id="contact" className="align_center justify_center">
                        <div className="tablet mobile phone_number"><a id="phone_number" href="tel:+36705070462"><i className="fa fa-phone"></i> +36 70 507 0462</a></div>
                        <button className="button_black"><a id="contact_button" href="#contact_us" className="white">Elérhetőségek</a></button>
                    </div>
                </div>
            </div>
        </header>
    )
}