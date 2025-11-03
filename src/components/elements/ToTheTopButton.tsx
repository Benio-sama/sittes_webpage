export function ToTheTopButton() {
    return (
        <div id="to_the_top_button" onClick={() => { window.scrollTo({ top: 0 }) }}>
            <a>
                <div id="to_the_top_button_icon">
                    <i className="fa fa-arrow-up"></i>
                </div>
            </a>
        </div>
    );
}