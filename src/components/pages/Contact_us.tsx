import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

export function ContactUs() {
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
        <footer id="contact_us">
            <div id="contact_us_container" className="flex_col justify_center align_center">
                <div id="contact_us_flex">
                    <div id="contact_us_flex_1" className="contact_us_mini_containers">
                        <h4><a href="/">Bp Konténer Transport Kft</a></h4>
                        <p>Kis mennyiségű sitt, törmelék, lom, szemét és kerti hulladék szállítása Budapesten és Pest vármegyében akár rakodással is – gyorsan, olcsón, megbízhatóan! Ideális, nincs szükség konténerre — kisteherautóval, szakszerű rakodással, az Ön kényelme érdekében.</p>
                    </div>
                    <div id="contact_us_flex_2" className="contact_us_mini_containers">
                        <h4 className="text_center">Szolgáltatások</h4>
                        <div id="contact_us_flex_2_grid">
                            <div>
                                <p><a href="/zsakos_sittszallitas">Zsákos sittszállítás</a></p>
                                {/* <p><a href="/lomtalanitas">Lomtalanítás</a></p> */}
                                <p><Link to="/#Termofold_szallitas">Termőföld szállítás</Link></p>
                                <p><Link to="/#Rakodas">Rakodás</Link></p>
                                <p><Link to="/#Soder_szallitas_homok_szallitas">Sóder szállítás, homok szállítás</Link></p>
                            </div>
                            <div>
                                <p><Link to="/#Murva_szallitas_kavics_szallitas">Murva szállítás, kavics szállítás</Link></p>
                                <p><Link to="/#Zoldhulladek_kerti_hulladek_szallitas">Zöldhulladék, kerti hulladék szállítás</Link></p>
                                <p><Link to="/#Zsakolas">Zsákolás</Link></p>
                            </div>
                        </div>
                    </div>
                    <div id="contact_us_flex_3" className="contact_us_mini_containers flex_col align_center">
                        <div>
                            <h4>Kapcsolat</h4>
                            <p className="phone_number orange" style={{ backgroundColor: color }}><i className="fa fa-phone"></i><a href="tel:+36705070462"> +36 70 507 0462</a></p>
                            <p><i className="fa fa-envelope"></i><a href="mailto:azsakossitt@gmail.com"> azsakossitt@gmail.com</a></p>
                            <p><i className="fa fa-map-marker"></i> Budapest és Pest vármegye</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p><i className="fa fa-copyright"></i> 2025 Bp Konténer Transport Kft. Minden jog fenntartva.</p>
                </div>
            </div>
        </footer>
    )
}