import { Table } from "../elements/Table";

export function ZsakosSitt() {
    return (
        <section id="zsakos_sittszallitas">
            <div id="zsakos_sittszallitas_container" className="flex_col">
                <div id="zsakos_sittszallitas_header" className="flex_col align_center text_center">
                    <h2 className="lighter">Zsákos Sittszállítás</h2>
                    <p className="lighter_color">Sitt- és hulladékszállítás konténer nélkül- egyszerű, költséghatékony megoldás.</p>
                </div>
                <div id="zsakos_sittszallitas_content" className="flex_col">
                    <div id="zsakos_sittszallitas_content_grid">
                        <div className="flex_col">
                            <h3 className="lighter header_3">Zsákos sittszállítás árak</h3>
                            <Table isZsakos={true} />
                        </div>
                        <div id="zsakos_sittszallitas_content_adv" className="flex_col right justify_center">
                            <h3 className="lighter header_3">Miért érdemes a zsákos szállítást választani?</h3>
                            <div>
                                <p><b>Nincs területfoglalási engedély:</b> Nem kell engedélyeket intézni, így időt és utánajárást spórolmeg.</p>
                                <p><b>Nincs extra költség :</b> A parkolási díjat mi fizetjük.</p>
                                <p><b>Nincs cipekedés:</b> Pakolással is rendelhető a szolgáltatásunk.</p>
                                <p><b>Gyors és kényelmes:</b> Nem kell napokig kerülgetni a ház előtt álló konténert.</p>
                                <p><b>Olcsóbb kis mennyiségnél:</b> Ha nincs legalább 3 m<sup>3</sup>-nyi hulladéka, zsákos szállítással még a rakodással együtt is kedvezőbben jár, mint egy 3 m<sup>3</sup>-es konténer bérlésével, valamint a területfoglalási engedély árát is megspórolja.</p>
                                <p><b>Ideális kisebb helyekre is:</b> Olyan helyekről is elszállítjuk a zsákos hulladékot kisteherautóval, ahova konténerrel nehéz vagy nem lehet bejutni.</p>
                                <p><b>Alsó mennyiségi korlát nélkül:</b> Ha kevés hulladéka van, akár 2,5,7 stb zsákja, akkor is vállaljuk az elszállítást.</p>
                            </div>
                        </div>
                    </div>
                    <div id="zsakos_sittszallitas_content_grid" className="border_top">
                        <div id="zsakos_sittszallitas_content_adv" className="flex_col justify_center">
                            <h3 className="lighter header_3">Milyen hulladékot szállítunk el Budapest és Pest vármegyéből?</h3>
                            <p>Fő profilunk az építési törmelék elszállítása. Építkezések, épületek bontása, felújítása során keletkező hulladék, mely lehet kitermelt föld, betontörmelék, tégla, fa, fém, műanyag , ásványi eredetű hulladék.</p>
                            <ul>
                                <li><b>Kommunális hulladék, szemét:</b> <br /> Vegyes háztartási, de nem folyékony hulladék.</li>
                                <li><b>Kerti és zöldhulladék:</b> <br /> Ágak, gallyak, fa, levágott fű, levelek stb.</li>
                                <li><b>Lom:</b> <br /> mindenfajta ház körüli lim-lom, bútorok, textíliák (ruhák, rongyok), könyvek, újságok, papírok, egyéb háztartási tárgyak.</li>
                                <li><b>Fémhulladék, fahulladék:</b> <br /> mindenfajta fém (vas, ólom, réz stb.) és faanyag</li>
                            </ul>
                        </div>
                        <div id="zsakos_sittszallitas_content_adv" className="flex_col align_center justify_center">
                            <Table isZsakos={false} />
                        </div>
                    </div>
                    <div id="zsakos_sittszallitas_content_adv" className="flex_col justify_center align_center border_top">
                        <h3 className="lighter header_3">FONTOS TUDNIVALÓK A SZÁLLÍTÁSRÓL:</h3>
                        <ul>
                            <li>1m<sup>3</sup> hulladék= kb. 25 zsák, melyek legfeljebb 30-35 kg súlyúak és félig vannak rakva.<br /> Ha tele vannak, akkor nem lehet összefogni a száját, ha pedig túl nehezek, akkor a pakoló embereket nagyon leterhelné. Rájuk szükség van holnap, holnap után is, ezért kérjük ne tömjék meg nehezebbre a zsákokat.</li>
                            <li>A teherautónak kérjük foglaljon helyet.</li>
                            <li>A helyszínen maximum 45 percig tartózkodhat a teherautó díjmentesen, utána minden megkezdett 1/2 óra 5000 Ft.<br />Földszintnek számít, ha az autótól legfeljebb 20 méterre van a rakodási hely és maximum 6 lépcsőfok vezet oda.<br />6 lépcső felett 1/2 emelet, 15 lépcső felett 1 emelet díját számoljuk fel pluszban, rakodás esetén.<br />Rakodásnál kérjük jelezze, hogy van-e lift és lehet -e használni, mert ezek is befolyásolják az árat.</li>
                            <li>A szállítás közben okozott szennyeződést feltakarítjuk, de a nem szakszerű csomagolásból (pl. lyukas zsák) szóródó hulladékért nem tudunk felelősséget vállalni.</li>
                            <li>A szállítást időpontját előre egyeztetni szükséges. Két órás időintervallumot fog kapni, mert a városi közlekedés miatt lehetetlen percre pontosan kikalkulálni az érkezés időpontját. Kollégáink az Önhöz való indulás előtt telefonálnak.</li>
                            <li>A lerakó helyeken történő várakozás is okozhat csúszást. Minden elszállított hulladék hivatalos , előre leszerződött lerakóhelyre kerül. Minden egyes darab kis “szemétnek” követhető útja van a bányáig, megsemmisítő telepig, égetőig….stb., a hulladék fajtájától függően.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}