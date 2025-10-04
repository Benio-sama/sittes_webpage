import { GoldenTurtle } from "./elements/GoldenTurtle";
import { Home } from "./pages/Home";
import { Lomtalanitas } from "./pages/Lomtalanitas";
import { Reviews } from "./pages/Reviews";
import { Szolgaltatasok } from "./pages/Szolgaltatasok";
import { ZsakosSitt } from "./pages/ZsakosSitt";
import { ToTheTopButton } from "./elements/ToTheTopButton";
import { Gallery } from "./pages/Gallery";
import { SittZsak } from "./elements/SittZsak";
import { AboutUs } from "./pages/AboutUs";
import { Arak } from "./pages/Arak";

interface MainProps {
    subpage: string;
}

export function Main(props: MainProps) {
    return (
        <main id="main_content">
            <SittZsak />
            {
                props.subpage == 'home' ? <>
                    <Home />
                    <AboutUs />
                </> : null
            }
            {
                props.subpage == 'zsakos_sitt' ? <ZsakosSitt /> : null
            }
            {
                props.subpage == 'szolgaltatasok' ? <Szolgaltatasok /> : null
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
            {
                props.subpage == 'arak' ? <Arak /> : null
            }
            <ToTheTopButton />
            <GoldenTurtle />
        </main>
    )
}