interface SmallCardProps {
    title: string;
    description: string;
    iconClass: string;
    colorRed?: number;
    colorGreen?: number;
    colorBlue?: number;
}

export function SmallCard(props: SmallCardProps) {
    return (
        <div id="small_card" className="flex_col">
            <div id="small_card_container" className="flex_row">
                <div id="small_card_icon" className="align_center justify_center" style={{ backgroundColor: `rgba(${props.colorRed || 240}, ${props.colorGreen || 240}, ${props.colorBlue || 240}, 10%)`, color: `rgb(${props.colorRed || 0}, ${props.colorGreen || 0}, ${props.colorBlue || 0})` }}>
                    <div><i className={props.iconClass}></i></div>
                </div>
                <div id="small_card_content">
                    <h3 className="lighter">{props.title}</h3>
                    <p className="lighter_color">{props.description}</p>
                </div>
            </div>
        </div>
    );
}