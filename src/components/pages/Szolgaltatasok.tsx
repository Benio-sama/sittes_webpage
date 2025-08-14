import { BigCard } from "../BigCard";

export function Szolgaltatasok() {
    return (
        <section id="szolgaltatasok" className="flex_col">
            <div id="szolgaltatasok_container">
                <div id="szolgaltatasok_content" className="flex_col align_center justify_center">
                    <h2 className="lighter">Szolgáltatásaink</h2>
                    <p className="lighter_color">Szolgáltatásaink közé tartozik a sitt, törmelék, lom, szemét és kerti hulladék szállítása Budapesten és Pest vármegyében. Kínálunk zsákos sittszállítást is, amely ideális megoldás kis mennyiségű hulladék esetén.</p>
                </div>
                <div id="szolgaltatasok_flex" className="flex_row justify_center">
                    <div className="card_container flex_col">
                        <BigCard title="Zsákos sittszállítás" description="Kis mennyiségű sitt, törmelék, lom, szemét és kerti hulladék szállítása Budapesten és Pest vármegyében rakodással - gyorsan, olcsón, megbízhatóan!" iconClass="fa fa-truck" colorRed={30} colorGreen={71} colorBlue={151} more={["A 'Részletek' gombra kattintva megtekintheti árainkat és további információkat a zsákos sittszállításról."]} isReszletek={true} reszletek={"#zsakos_sittszallitas"} />
                    </div>
                    <div className="card_container flex_col">
                        <BigCard title="Sittes Zsák" description="Extra erős sittes zsák kapható cégünknél!" iconClass="fa fa-trash" colorRed={122} colorGreen={75} colorBlue={47} bulletPoints={["100 db megrendelés felett nettó 87 Ft/db", "200 db megrendelés felett nettó 84 Ft/db", "500 db megrendelés felett nettó 79 Ft/db", "1000 db megrendelés felett nettó 74 Ft/db", "2500 db megrendelés felett nettó 69 Ft/db"]} more={["Méretei: 900 x 550 x 0,1 (mm)", 'Amennyiben rendelését 8:00 és 14:00 között leadja, <span className="red">legalább 100 db vásárlása esetén Budapesten díjmentesen 3 órán belül</span> kiszállítjuk!', "100 db-nál kisebb mennyiség rendelése esetén a kiszállítási díj 1.900 Ft."]} />
                    </div>
                    <div className="card_container flex_col">
                        <BigCard title="Takarófólia" description="Többféle takarófólia kapható cégünknél!" iconClass="fa fa-newspaper-o" colorRed={214} colorGreen={151} colorBlue={56} bulletPoints={["Erős, lépésálló takarófólia, méretei: 4m x 5m (20m<sup>2</sup>), 600 Ft/db", "Erős, létrázható takarófólia, méretei: 4m x 5m (20m<sup>2</sup>), 800 Ft/db", "Extra erős, építési takarófólia, méretei: 4m x 5m (20m<sup>2</sup>), 1000 Ft/db"]} more={["<span>25 db feletti vásárlás esetén Budapesten díjmentesen házhoz szállítjuk!</span>", "Ennél kisebb mennyiség esetén a kiszállítási díj 1.900 Ft.", "<span>Az árak <b>NEM</b> tartalmazzák a termékdíjat (40 Ft/db, 66 Ft/db) és az áfát.</span>"]} />
                    </div>
                    <div className="card_container flex_col">
                        <BigCard title="Lomtalanítás" description="Lomtalanítást, feleslegessé vált lomok (ócska vagy öreg bútorok, műszaki, elektronikai berendezések, ruhák, könyvek stb.) elszállítását vállaljuk magánszemélyeknek és közületeknek – Budapest minden kerületében és környékén a hét bármely napján, a nap bármelyik órájában. Amit vállalunk: " iconClass="fa fa-bed" colorRed={122} colorGreen={75} colorBlue={47} bulletPoints={["lakás és iroda lomtalanítás", "padlás és pincetakarítás", "bútorok mozgatása", "nagyobb terület takarítása"]} more={["Részletekért forduljon hozzánk bizalommal. Ha nem akar várni az éves lomtalanításra, várjuk hívását!", "A 'Részletek' gombra kattintva megtekintheti árainkat és további információkat a lomtalanításról."]} isReszletek={true} reszletek={"#lomtalanitas"} />
                    </div>
                    <div className="card_container flex_col">
                        <BigCard title="Termőföld szállítás" description="Vállaljuk kedvező áron termőföld és töltőföld konténeres kiszállítását Budapesten és környékén. Megrendelései teljesítéséhez többfajta, különböző méretű konténer és teherautó áll rendelkezésünkre. Rendelés történhet telefonon, vagy e-mailben." iconClass="fa fa-leaf" colorRed={30} colorGreen={151} colorBlue={30} bulletPoints={["Natúr termőföld", "Darált termőföld", "Natúr trágyás föld", "Darált trágyás föld", "Natúr trágyás föld tőzeggel", "Darált trágyás föld tőzeggel", "Natúr föld tőzeggel", "Darált föld tőzeggel", "Darált tőzeg", "Darált tőzeg komplex műtrágyával", "Marhatrágya, istállótrágya", "Töltőföld"]} more={["Az aktuális termőföld árak ügyében, valamint a szállítás feltételeiről tájékozódjon munkatársunknál!", "Ha nagyobb mennyiségű - több mint 8 m<sup>3</sup> - termőföld, vagy töltőföld szállítására van szüksége, ajánlatkérés ügyében forduljon munkatársunkhoz, vagy írjon az info@sitt-lom.hu e-mail címre."]} />
                    </div>
                    <div className="card_container flex_col">
                        <BigCard title="Rakodás" description="Amennyiben nem tudja megoldani a konténer rakodását, csapatunk szívesen áll rendelkezésére a hét bármely napján, a nap bármelyik órájában." iconClass="fa fa-leaf" colorRed={30} colorGreen={151} colorBlue={30} bulletPoints={["zsákolás, sittes zsákok megrakása", "zsákolt sitt rakodása, hordása", "földpakolás,- terítés", "nagyobb terület takarítása", "lomtalanítás", "Vasszerelvények szétvágása", "faanyagok bontása, darabolása"]} more={["Megértését kérjük, de a rakodás nem jelent takarítást is egyben! Amit egyetlen lapáttal össze lehet szedni, azt tudjuk csak elszállítani. Természetesen a nem szakszerű rakodásból és szállításból eredő szennyeződést feltakarítjuk (de pl. az eleve lyukas zsákból szóródó sittet vagy port nem).", "Részletekért forduljon hozzánk bizalommal. Várjuk hívását!"]} />
                    </div>
                    <div className="card_container flex_col">
                        <BigCard title="Sóder szállítás, homok szállítás" description="Vállaljuk kedvező áron sóder és homok konténeres kiszállítását Budapesten és környékén. Megrendelései teljesítéséhez többfajta, különböző méretű konténer és teherautó áll rendelkezésünkre." iconClass="fa fa-truck" colorRed={230} colorGreen={213} colorBlue={62} bulletPoints={["Homok (sárga)", "Homok 0-1 (szürke)", "Sóder 0-4", "Sóder 0-8", "Sóder 0-16", "Sóder 0-24", "Töltősóder"]} more={["Az aktuális sóder és homok árak ügyében, valamint a szállítás feltételeiről tájékozódjon munkatársunknál!", "Ha nagyobb mennyiségű - több mint 8 m<sup>3</sup> - építőanyag szállítására van szüksége, ajánlatkérés ügyében forduljon munkatársunkhoz, vagy írjon az info@sitt-lom.hu e-mail címre."]} />
                    </div>
                    <div className="card_container flex_col">
                        <BigCard title="Murva szállítás, kavics szállítás" description="Vállaljuk kedvező áron murva és kavics konténeres kiszállítását Budapesten és környékén. Megrendelései teljesítéséhez többfajta, különböző méretű konténer és teherautó áll rendelkezésünkre." iconClass="fa fa-truck" colorRed={61} colorGreen={56} colorBlue={49} bulletPoints={["Kavics 4-8", "Kavics 8-16", "Kulékavics 16-32", "Kulékavics 24-40", "Kulékavics 30-65", "Díszítő kavics", "Kerti murva 5-12", "Kerti murva 12-20", "Murva 0-20", "Murva 20-55", "2/5 Kő"]} more={["Az aktuális kavics és murva árak ügyében, valamint a szállítás feltételeiről tájékozódjon munkatársunknál!", "Ha nagyobb mennyiségű - több mint 8 m<sup>3</sup> - építőanyag szállítására van szüksége, ajánlatkérés ügyében forduljon munkatársunkhoz, vagy írjon az info@sitt-lom.hu e-mail címre."]} />
                    </div>
                    <div className="card_container flex_col">
                        <BigCard title="Zöldhulladék, kerti hulladék szállítás" description="Vállaljuk kedvező áron zöldhulladék és kerti hulladék elszállítását Budapesten és környékén. Megrendelései teljesítéséhez többfajta, különböző méretű konténer és teherautó áll rendelkezésünkre." iconClass="fa fa-truck" colorRed={30} colorGreen={151} colorBlue={30} bulletPoints={["Igény szerint a kertben keletkező rönköket, ágakat, gallyakat és levágott növényzetet elszállítjuk. A zöldhulladék lerakása a Pusztazámori, illetve a Főkert Zrt. komposztüzemében történik.", "A nyesedék elszállítását teherautóval, valamint konténerrel végezzük. Kérésre zöldhulladékos zsákot is tudunk biztosítani. Természetesen bármilyen egyéb kerti és komposztálható zöldhulladék elszállítását vállaljuk Budapesten és környékén.", "A háztartásban keletkező élelmiszerhulladék és ételmaradék nem minősül zöldhulladéknak! Amennyiben földes gyökér is kerülne a konténerbe, azt rendeléskor mindenképpen közölje munkatársunkkal."]} />
                    </div>
                    <div className="card_container flex_col">
                        <BigCard title="Lomos, hulladékos zsák" description="Extra erős lomos, szemetes zsák kapható cégünknél" iconClass="fa fa-trash" colorRed={128} colorGreen={128} colorBlue={128} bulletPoints={["100 Ft/db", "Méretei: 1100 x 550 x 0,1 (mm)"]} />
                    </div>
                    <div className="card_container flex_col">
                        <BigCard title="Zsákolás" description="350 Ft/zsák (tartalmazza a zsák árát is)" iconClass="fa fa-trash" colorRed={30} colorGreen={151} colorBlue={30} />
                    </div>
                </div>
            </div>
        </section>
    )
}