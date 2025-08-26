import { ReviewsCard } from "../elements/ReviewsCard";
import reviews from "../../data/reviews.json";

export function Reviews() {
    return (
        <section id="reviews" className="flex_col align_center">
            <div id="reviews_container">
                <div id="reviews_content">
                    <div id="reviews_header" className="flex_col align_center text_center">
                        <h2 className="lighter">Ügyfeleink véleményei</h2>
                        <p className="lighter_color">Kérjük, írja meg véleményét, vagy ossza meg tapasztalatait velünk, a dícséreteket megjelentetjük honlapunkon, az építő kritikát felhasználjuk szolgáltatásaink színvonalának növeléséhez. Várjuk leveleiket az <a href="mailto:azsakossitt@gmail.com"><u>azsakossitt@gmail.com</u></a> e-mail címre.</p>
                    </div>
                    <div id="reviews_flex" className="flex_row justify_center" >
                        {
                            reviews.reviews.map((review) => (
                                <div className="card_container flex_col" key={review.id}>
                                    <ReviewsCard title={review.title} body={review.body} footer={review.footer} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}