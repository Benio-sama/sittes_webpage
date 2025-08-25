import { SmallCard } from "../SmallCard";

export function AboutUs() {
    return (
        <section id="about_us_container" className="flex_col align_center">
            <div id="about_us_content">
                <div id="about_us_grid">
                    <div>
                        <h1 id="about_us_title" className="lighter">Sittszállítás Budapesten – Gyorsan, Megbízhatóan</h1>
                        <p id="about_us_desc" className="lighter_color">Kis mennyiségű sitt, törmelék, lom, szemét és kerti hulladék szállítása Budapesten és Pest vármegyében rakodással – gyorsan, olcsón, megbízhatóan! Ideális, nincs szükség konténerre — kisteherautóval, szakszerű rakodással, az Ön kényelme érdekében.</p>
                        <div id="about_us_buttons" className="flex_row">
                            <button><i className="fa fa-briefcase brown"></i><a href="#szolgaltatasok"> Szolgáltatások</a></button>
                            <button className="button_black"><i className="fa fa-phone"></i><a href="tel:+36705070462" className="white"> 06 70 507 0462</a></button>
                        </div>
                        <div id="about_us_adv_grid">
                            <div><i className="fa fa-check-square-o green"></i> Budapesten és Pest vármegyében</div>
                            <div><i className="fa fa-check-square-o green"></i> Gyors és megbízható szolgáltatás</div>
                            <div><i className="fa fa-check-square-o green"></i> Olcsó árak</div>
                            <div><i className="fa fa-check-square-o green"></i> Sitt, törmelék, lom, szemét és kerti hulladék elhordás</div>
                        </div>
                    </div>
                    <div id="about_us_card_container" className="flex_col justify_center">
                        <div id="about_us_card_grid">
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