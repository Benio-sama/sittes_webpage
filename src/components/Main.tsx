import { GoldenTurtle } from "./elements/GoldenTurtle";
import { AboutUs } from "./pages/About_us";
import { Lomtalanitas } from "./pages/Lomtalanitas";
import { Reviews } from "./pages/Reviews";
import { Szolgaltatasok } from "./pages/Szolgaltatasok";
import { ZsakosSitt } from "./pages/ZsakosSitt";
import { ToTheTopButton } from "./elements/ToTheTopButton";
import { Gallery } from "./pages/Gallery";

interface MainProps {
    subpage: string;
}

export function Main(props: MainProps) {
    return (
        <main id="main_content">
            {
                props.subpage == 'about_us' ? <>
                    <AboutUs />
                    <Szolgaltatasok />
                </> : null
            }
            {
                props.subpage == 'zsakos_sitt' ? <ZsakosSitt /> : null
            }
            {
                props.subpage == 'lomtalanitas' ? <Lomtalanitas /> : null
            }
            {
                props.subpage == 'ugyfelek_velemenyei' ? <Reviews /> : null
            }
            {
                props.subpage == 'galeria' ? <Gallery /> : null
            }
            <ToTheTopButton />
            <GoldenTurtle />
        </main>
    )
}