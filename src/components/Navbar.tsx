export function Navbar() {
    return (
        <header id="navbar">
            <div id="navbar_position">
                <div id="navbar_content" className="center">
                    <div id="name">
                        <b>Bp Konténer Transport Kft</b>
                    </div>
                    <nav id="navbar_links" className="flex_row align_center">
                        <a href="#zsakos_sittszallitas">Zsákos sittszállítás</a>
                        <a href="#szolgaltatasok">Szolgáltatások</a>
                        <a href="#ugyfelek_velemenyei">Ügyfelek véleményei</a>
                        <a href="#galeria">Galéria</a>
                    </nav>
                    <div id="contact" className="align_center justify_center">
                        <div className="tablet"><i className="fa fa-phone"></i> 06 70 507 0462</div>
                        <button className="button_black mobile"><a href="#elerhetosegek" className="white">Elérhetőségek</a></button>
                    </div>
                </div>
            </div>
        </header>
    )
}