import { Table } from "../elements/Table";

export function Arak() {
    return (
        <section id="arak">
            <div id="arak_container" className="flex_col align_center">
                <h2 className="lighter">Áraink</h2>
                <div id="arak_content" className="flex_col">
                    <div id="arak_card" className="flex_col">
                        <h3 className="lighter text_center no_margin_top">Zsákos sittszállítás árak</h3>
                        <div id="arak_card_content" className="flex_row align_center">
                            <Table isZsakos={true} />
                        </div>
                        <button><a href="/zsakos_sittszallitas">Részletek</a></button>
                    </div>
                    {/* <div id="arak_card" className="flex_col">
                        <h3 className="lighter text_center no_margin_top">Lomtalanítás árak</h3>
                        <div id="arak_card_content" className="flex_col justify_center">
                            <p><b>Kiállás:</b> 14.000 Ft (Budapest és Pest vármegye területén)</p>
                            <p><b>Lerakói díj:</b> 6.000 Ft/m<sup>3</sup></p>
                            <p><b>Várakozási idő:</b> 4 m<sup>3</sup>-ig 30 perc, annál nagyobb mennyiség esetén max. 45 perc!</p>
                            <p><b>Rakodás:</b> 2500 Ft/m<sup>3</sup></p>
                            <p><b>Emeletdíj:</b> 1500 Ft/m<sup>3</sup>/emelet</p>
                            <p><b>Zsákolás:</b> 350 Ft/zsák (tartalmazza a zsák árát is)</p>
                        </div>
                        <button><a href="/lomtalanitas">Részletek</a></button>
                    </div> */}
                </div>
            </div>
        </section>
    )
}