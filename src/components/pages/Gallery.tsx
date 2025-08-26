import gallery from "../../data/gallery.json";
import { GalleryCard } from "../elements/GalleryCard";

export function Gallery() {
    return (
        <section id="gallery">
            <div id="gallery_container">
                <div id="gallery_content">
                    <div id="gallery_header" className="flex_col align_center text_center">
                        <h2 className="lighter">Galéria</h2>
                        <p className="lighter_color">Fedezd fel a legjobb munkáinkat!</p>
                    </div>
                    <div id="gallery_flex" className="flex_row justify_center">
                        {
                            gallery.pictures.map(picture => (
                                <GalleryCard key={picture.id} src={picture.src} alt={picture.alt} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}