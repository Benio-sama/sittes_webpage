interface ReviewsCardProps {
    title?: string;
    body: string;
    footer: string;
}

export function ReviewsCard(props: ReviewsCardProps) {
  return (
    <div id="reviews_card">
        <div id="review_card_container">
            {props.title && (
                <div id="review_card_header">
                    <h4>{props.title}</h4>
                </div>
            )}
            <div id="review_card_body">
                <p className="no_margin_p">{props.body}</p>
            </div>
            <div id="review_card_footer">
                <p className="no_margin_p">{props.footer}</p>
            </div>
        </div>
    </div>
  );
}
