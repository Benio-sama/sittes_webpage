interface GalleryCardProps {
    src: string;
    alt: string;
}

export function GalleryCard(props: GalleryCardProps) {
    return (
        <div id="gallery_card" className="flex_col">
            <div id="galley_card_text">
                <p className="lighter_color left no_margin_p">{props.alt}</p>
            </div>
            <div id="galley_card_img">
                <img src={props.src} alt={props.alt} />
            </div>
        </div>
    )
}