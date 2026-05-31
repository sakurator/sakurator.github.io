import AlphabetSwitch from "@client/components/index/alphabet-switch/AlphabetSwitch.js";
import Menu from "@client/components/index/menu/Menu.js";
import RowsContainer from "@client/components/index/menu/RowsContainer.js";
import Logo from "@client/components/Logo.js";
import PreloadAudios from "@client/components/PreloadAudios.js";
import { useSulfaContext } from "@client/contexts/sulfa.js";
import useAlphabetQueryState from "@client/hooks/query-states/alphabet.js";
import "@sass/pages/Index.sass";
import clsx from "clsx";
import { useEffect, useState } from "react";

export default function Index() {
    const { splash } = useSulfaContext();
    const { particle } = useAlphabetQueryState();

    const [particleInterval, setParticleInterval] = useState<NodeJS.Timeout | undefined>(undefined);
    useEffect(() => {
        clearInterval(particleInterval);

        const interval = setInterval(() => {
            splash(
                particle,
                {
                    x: Math.random() * window.innerWidth - window.innerHeight / 4,
                    y: -window.innerHeight / 4,
                },
                5,
                700,
            );
        }, 300);

        setParticleInterval(interval);
    }, [particle]);

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
