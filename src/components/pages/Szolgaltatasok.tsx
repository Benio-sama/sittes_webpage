import type { ISzolgaltatasok } from "../../interfaces/ISzolgaltatasok";
import { BigCard } from "../elements/BigCard";
import szolgaltatasok from "../../data/szolgaltatasok.json";

export function Szolgaltatasok() {
    return (
        <section id="szolgaltatasok" className="flex_col">
            <div id="szolgaltatasok_container">
                <div id="szolgaltatasok_content" className="flex_col align_center justify_center text_center">
                    <h2 className="lighter">Szolgáltatásaink</h2>
                    <p className="lighter_color">Szolgáltatásaink közé tartozik a sitt, törmelék, lom, szemét és kerti hulladék szállítása Budapesten és Pest vármegyében. Kínálunk zsákos sittszállítást is, amely ideális megoldás kis mennyiségű hulladék esetén.</p>
                </div>
                <div id="szolgaltatasok_flex" className="flex_row justify_center">
                    {
                        szolgaltatasok.szolgaltatasok.map((szolgaltatas: ISzolgaltatasok) => (
                            <div id={szolgaltatas.href} className="card_container flex_col" key={szolgaltatas.id}>
                                <BigCard title={szolgaltatas.title} description={szolgaltatas.description} iconClass={szolgaltatas.iconClass} colorRed={szolgaltatas.colorRed} colorGreen={szolgaltatas.colorGreen} colorBlue={szolgaltatas.colorBlue} bulletPoints={szolgaltatas.bulletpoints} more={szolgaltatas.more} isReszletek={szolgaltatas.isReszletek} reszletek={szolgaltatas.reszletek} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}