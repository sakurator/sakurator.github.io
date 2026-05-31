import AlphabetSwitch from "@client/components/index/alphabet-switch/AlphabetSwitch.js";
import Menu from "@client/components/index/menu/Menu.js";
import RowsContainer from "@client/components/index/menu/RowsContainer.js";
import Logo from "@client/components/Logo.js";
import PreloadAudios from "@client/components/PreloadAudios.js";
import "@sass/pages/Index.sass";
import clsx from "clsx";

export default function Index() {
    return (
        <div className={clsx("index")}>
            <PreloadAudios audioNames={[
                'click',
                'hover',
                'alphabet_switch_hiragana',
                'alphabet_switch_katakana'
            ]} />
            <Menu>
                <Logo />
                <AlphabetSwitch />
                <RowsContainer />
            </Menu>
        </div>
    );
}
