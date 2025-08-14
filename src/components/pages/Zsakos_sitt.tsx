import { Table } from "../elements/Table";

export function ZsakosSitt() {
    return (
        <section id="zsakos_sittszallitas" className="center">
            <div id="zsakos_sittszallitas_container" className="flex_col">
                <div id="zsakos_sittszallitas_header" className="flex_col align_center">
                    <h2 className="lighter">Zsákos Sittszállítás</h2>
                    <p className="lighter_color">Kis mennyiségű sitt, törmelék, lom, szemét és kerti hulladék szállítása Budapesten és vonzáskörzetében rakodással - gyorsan, olcsón, megbízhatóan!</p>
                </div>
                <div id="zsakos_sittszallitas_content" className="flex_col">
                    <div id="zsakos_sittszallitas_content_grid">
                        <div className="flex_col">
                            <h3 className="lighter header_3">Zsákos sittszállítás árak</h3>
                            <Table isZsakos={true} />
                        </div>
                        <div id="zsakos_sittszallitas_content_adv" className="flex_col right justify_center">
                            <h3 className="lighter header_3">Milyen előnyökkel bír a zsákos sittszállítás a konténerrel szemben?</h3>
                            <div>
                                <p><b>Nem kell területfoglalási engedély...</b> Ezzel nem csak pénzt, de időt és utánajárást is megtakarít - a parkolási díjat pedig mi fizetjük!</p>
                                <p><b>Nem kell Önnek sittet hordania - a hulladékot mi rakodjuk Ön helyett...</b> A munka nehezét mi végezzük, így nem csak kényelmesebb, de gyorsabb is a munkavégzés.</p>
                                <p><b>...és nem utolsó sorban OLCSÓBB!</b> Ha nincs legalább 3 m<sup>3</sup>-nyi hulladéka, akkor zsákos sittszállítás esetén rakodással együtt is jobban jár, mintha egy hármas konténert rendel.</p>
                            </div>
                        </div>
                    </div>
                    <div id="zsakos_sittszallitas_content_grid" className="border_top">
                        <div id="zsakos_sittszallitas_content_adv" className="flex_col justify_center">
                            <h4>Az alábbi hulladékfajták zsákos, darabos, vagy ömlesztett elszállítását vállaljuk Budapesten és vonzáskörzetében konténerrel nehezen megközelíthető helyekről:</h4>
                            <ul>
                                <li><b>Kommunális hulladék, szemét:</b> <br /> Vegyes jellegű, de nem folyékony háztartási szemét.</li>
                                <li><b>Kerti és zöldhulladék:</b> <br /> ágak, gallyak, fa, levágott fű, levelek stb.</li>
                                <li><b>Lom:</b> <br /> mindenfajta ház körüli lim-lom, legyen az bútor, egyéb eszköz, textília (pl. ruhák, rongyok), papíráru (pl. újságok, könyvek) és egyéb tárgyak.</li>
                                <li><b>Fémhulladék, fahulladék:</b> <br /> mindenfajta fém (vas, ólom, réz stb.) és faanyag</li>
                            </ul>
                            <p>1 m<sup>3</sup> = kb. 30 db egyenként legfeljebb 35 kg zsák, melyek 40 l-nél nem lehetnek nagyobbak!</p>
                            <p>Földszintnek minősül: az autótól max. 6 lépcsőfok, max. 20 m távolság.</p>
                            <p>Egy zsák legfeljebb 40 literes és 35 kg-os lehet!</p>
                            <p>Megértését kérjük, de a rakodás nem jelent takarítást is egyben! Természetesen a nem szakszerű rakodásból és szállításból eredő szennyeződést feltakarítjuk (de pl. az eleve lyukas zsákból szóródó sittet vagy port nem). A szállítás időpontjáról, kérjük, egyeztessen munkatársunkkal!</p>
                        </div>
                        <div id="zsakos_sittszallitas_content_adv" className="flex_col align_center">
                            <Table isZsakos={false} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}