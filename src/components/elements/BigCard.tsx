interface BigCardProps {
    title: string;
    description?: string;
    bulletPoints?: string[];
    colorRed?: number;
    colorGreen?: number;
    colorBlue?: number;
    iconClass?: string;
    more?: string[];
    isReszletek?: boolean;
    reszletek?: string;
}

export function BigCard(props: BigCardProps) {
    return (
        <div className="big_card" style={{ borderColor: `rgba(${props.colorRed || 0}, ${props.colorGreen || 0}, ${props.colorBlue || 0}, 30%)`, borderWidth: "1px", borderStyle: "solid", backgroundColor: `rgba(${props.colorRed || 240}, ${props.colorGreen || 240}, ${props.colorBlue || 240}, 20%)` }}>
            <div id="big_card_container">
                <div id="big_card_header">
                    <div id="big_card_icon" className="center" style={{ backgroundColor: `rgba(${props.colorRed || 240}, ${props.colorGreen || 240}, ${props.colorBlue || 240}, 25%)`, color: `rgb(${props.colorRed || 0}, ${props.colorGreen || 0}, ${props.colorBlue || 0})` }}><i className={props.iconClass}></i></div>
                    <h3 className="lighter">{props.title}</h3>
                    <p className="lighter_color">{props.description}</p>
                </div>
                <div id="big_card_content">
                    <div>
                        <ul className="font_15">
                            {props.bulletPoints?.map((point, index) => (
                                <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
                            ))}
                        </ul>
                    </div>
                    <div>
                        {props.more?.map((item, index) => (
                            <p key={index} dangerouslySetInnerHTML={{ __html: item }} />
                        ))}
                    </div>
                    {props.isReszletek && props.reszletek && (
                        <div id="big_card_button">
                            <button className="button_white"><a href={props.reszletek}>Részletek</a></button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}