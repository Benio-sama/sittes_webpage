import { MovingLogo } from "../elements/MovingLogo";
import { SmallCard } from "../elements/SmallCard";

export function Home() {
    return (
        <section id="home_container" className="flex_col align_center">
            <MovingLogo />
            <div id="home_content">
                <div id="home_grid">
                    <div>
                        <h1 id="home_title" className="lighter">Sittszállítás Budapesten – Gyorsan, Megbízhatóan</h1>
                        <p id="home_desc" className="lighter_color">Kis mennyiségű sitt, törmelék, lom, szemét és kerti hulladék szállítása Budapesten és Pest vármegyében akár rakodással is – gyorsan, olcsón, megbízhatóan! Ideális, nincs szükség konténerre — kisteherautóval, szakszerű rakodással, az Ön kényelme érdekében.</p>
                        <div id="home_buttons" className="flex_row">
                            <button className="button_white"><i className="fa fa-briefcase brown"></i><a href="/szolgaltatasok"> Szolgáltatások</a></button>
                            <button className="button_black"><i className="fa fa-truck"></i><a href="/zsakos_sittszallitas" className="white"> Zsákos sittszállítás</a></button>
                            <button id="phone_number_button"><i className="fa fa-phone"></i><a href="tel:+36705070462"> +36 70 507 0462</a></button>
                            <button className="button_black"><i className="fa fa-truck"></i><a href="/lomtalanitas" className="white"> Lomtalanítás</a></button>
                            <button className="button_white"><i className="fa fa-money dark_green"></i><a href="/arak"> Árak</a></button>
                            <button className="button_black"><i className="fa fa-comments"></i><a href="/ugyfelek_velemenyei" className="white"> Vélemények</a></button>
                            <button className="button_white"><i className="fa fa-picture-o blue"></i><a href="/galeria"> Galéria</a></button>
                        </div>
                        <div id="home_adv_grid">
                            <div><i className="fa fa-check-square-o green"></i> Budapesten és Pest vármegyében</div>
                            <div><i className="fa fa-check-square-o green"></i> Gyors és megbízható szolgáltatás</div>
                            <div><i className="fa fa-check-square-o green"></i> Olcsó árak</div>
                            <div><i className="fa fa-check-square-o green"></i> Sitt, törmelék, lom, szemét és kerti hulladék elszállítás</div>
                        </div>
                    </div>
                    <div id="home_card_container" className="flex_col justify_center">
                        <div id="home_card_grid">
                            <div>
                                <SmallCard title="Gyors Szállítás" description="A leggyorsabb sittszállítás Budapesten." iconClass="fa fa-truck" colorRed={30} colorGreen={71} colorBlue={151} />
                            </div>
                            <div>
                                <SmallCard title="Olcsó Szállítás" description="Olcsó, megfizethető sittszállítás Budapesten." iconClass="fa fa-money" colorRed={38} colorGreen={185} colorBlue={38} />
                            </div>
                            <div>
                                <SmallCard title="Megbízható Szállítás" description="Megbízható sittszállítás Budapesten." iconClass="fa fa-heart" colorRed={185} colorGreen={38} colorBlue={106} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}