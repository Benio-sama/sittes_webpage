import { useEffect, useState } from "react";


export function SittZsak() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(sessionStorage.getItem("opened") == "true" ? false : true);
        sessionStorage.setItem("opened", "true");
    }, []);

    return (
        <div id="zsak_float" className={`flex_row align_center justify_center ${open ? 'open' : 'closed'}`}>
            <div id="zsak_button" className="flex_row align_center justify_center" onClick={() => setOpen(!open)}>
                <i className={`fa ${open ? "fa-arrow-right" : "fa-arrow-left"}`}></i>
            </div>
            <div id="zsak_container">
                <div id="zsak_content" className="text_center">
                    <h3 id="zsak_title">Extra erős sittes zsák</h3>
                    <div id="zsak_desc">
                        <p className="no_margin_p"><strong>AKCIÓS</strong></p>
                        <p className="no_margin_p"><strong>87 Ft + ÁFA/db áron!</strong></p>
                        <p>legalább 100 db vásárlása esetén Budapesten</p>
                        <p><strong>DÍJMENTESEN 3 ÓRÁN BELÜL</strong> kiszállítjuk!</p>
                        <a href="tel:+3620555387" className="phone_number red"><i className="fa fa-phone"></i> +36 20 555 5387</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
