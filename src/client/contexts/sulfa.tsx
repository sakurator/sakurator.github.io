import { WithChildren } from "@client/types/with-children.js";
import createSulfa, { Range } from "@sulfajs/sulfajs";
import { createContext, useContext } from "react";

const SulfaContext = createContext<Sulfa | undefined>(undefined);
export type SulfaContextProviderProps = WithChildren<{}>;
export type Sulfa = {
    splash: (name: string, at: { x: number, y: number }, count: number, force: number) => void;
};


export function SulfaContextProvider({ children }: SulfaContextProviderProps) {
    const sulfa = createSulfa({
        imageUriFormat: '/static/images/particles/{name}_{variation}.svg',
    });

    const gravity = 200;
    const wind = 400;
    const sizeRange: Range = { min: 20, max: 40 };

    const splash = (name: string, at: { x: number, y: number }, count: number, force: number): void => {
        const particleGenerator = sulfa.generator({
            name,
            variations: 5,
            sizeRange,
            gravity,
            wind,
        });
        particleGenerator.splash(at, count, force);
    }

    return (
        <SulfaContext.Provider value={{ splash }}>
            {children}
        </SulfaContext.Provider>
    );
}

export function useSulfaContext(): Sulfa {
    const ctx = useContext(SulfaContext);
    if (ctx === undefined) {
        throw new Error(`You cannot use \`useSulfaContext\` outside the corresponding context.`);
    }

    return ctx;
}

