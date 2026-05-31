import useAlphabetQueryState from "@client/hooks/query-states/alphabet.js";
import { WithChildren } from "../../../types/with-children.js"
import "@sass/components/index/menu/Menu.sass";

type Props = WithChildren<{
    //
}>;


export default function Menu({ children }: Props) {
    const { alphabet } = useAlphabetQueryState();

    return (
        <>
            <div id="menu-filter"></div>
            <div id="menu" className={alphabet}>
                {children}
            </div>
        </>
    );
}
