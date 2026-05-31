import { useLessonContext } from "@client/contexts/learn/lesson.js";
import "@sass/components/learn/Game.sass";
import getIconPath from "@shared/static/icons.js";
import { getLetterImagePath } from "@shared/static/letters.js";
import clsx from "clsx";
import { play } from "@client/support/play.js";
import useAsyncEffect from "@client/hooks/react/async-effect.js";
import sleep from "@shared/support/promises/sleep.js";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Game() {
    const navigate = useNavigate();
    const {
        alphabet,
        options,
        correctLetter,
        check,
        percent,
        state,
        goalReached,
    } = useLessonContext();

    const [exited, setExited] = useState<boolean>(false);

    useAsyncEffect(async () => {
        if (!goalReached) {
            return;
        }
    }, [goalReached]);

    if (state !== 'learning letters') {
        return null;
    }

    async function exit(): Promise<void> {
        if (exited) {
            return;
        }

        setExited(_ => true);
        play("exit");
        await sleep(1200);
        navigate('/');
    }

    return (
        <div id="game-container">
            <div
                id="game-column-container"
                className={clsx((exited || goalReached) && 'completed')}
            >
                <div id="game-progress-bar-container">
                    <img
                        id="exit-button"
                        src={getIconPath('exit')}
                        onClick={exit}
                    />

                    <div id="game-progress-bar">
                        <div id="game-progress-bar-full">
                            <div
                                id="game-progress-bar-completed"
                                className={alphabet}
                                style={{
                                    width: `${percent}%`
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div id="game-panels">
                    {
                        correctLetter &&
                        <img id="kana-image" src={getLetterImagePath(alphabet, correctLetter)} />
                    }

                    <div id="options">
                        {options.map(option => (
                            <span
                                key={option.name}
                                className={clsx("option", alphabet)}
                                onMouseEnter={() => play(`hover`)}
                                onClick={() => check(option.name)}
                            >
                                {option.name}
                            </span>
                        ))}
                    </div>
                </div>

                <span id="title">Select the sound this kana makes</span>
            </div>
        </div>
    );
}
