import { useLessonContext } from "@client/contexts/learn/lesson.js";
import useAsyncEffect from "@client/hooks/react/async-effect.js";
import { play } from "@client/support/play.js";
import sleep from "@shared/support/promises/sleep.js";
import { useNavigate } from "react-router";
import "@sass/components/learn/Congratulations.sass";
import capitalize from "@shared/support/strings/capitalize.js";

export default function Congratulations() {
    const navigate = useNavigate();
    const {
        alphabet,
        row,
        state,
    } = useLessonContext();

    useAsyncEffect(async () => {
        if (state !== 'showing congratulations') {
            return;
        }

        play("row_completed_triumphal");
        await sleep(10000);
        navigate('/');
    }, [state]);

    if (state !== 'showing congratulations') {
        return;
    }

    return (
        <>
            <div id="row-completed" data-alphabet={alphabet}>
                <svg
                    id="row-completed-medal"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 1622.3 716.73"
                >
                    <defs>
                        <linearGradient
                            id="golden-gradient"
                            x1="635.38"
                            y1="639.59"
                            x2="976.99"
                            y2="285.84"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" stopColor="#ffcb77" />
                            <stop offset=".41" stopColor="#ffdfab" />
                            <stop offset="1" stopColor="#ffbf57" />
                        </linearGradient>
                    </defs>

                    <path
                        className="row-completed-medal-ruby"
                        d="m1469.54,0c-68.86,41.15-140.98,79.44-215.63,114.43-140.58,65.89-291.41,120.77-448.49,163.2-163.35-43.89-319.16-101.77-463.28-172.11C275.59,73.04,211.3,37.73,149.81,0H0c94.81,66.03,197.66,126.25,306.17,179.21,152,74.19,316.45,134.91,488.79,180.49l10.51,2.78,10.51-2.8c165.56-44.05,324.61-101.58,472.72-171.01,118.16-55.38,230.28-118.81,333.6-188.68h-152.77Z"
                    />

                    <path
                        className="row-completed-medal-gold"
                        d="m1032.06,567.74v-210.05c0-15.71-8.38-30.22-21.98-38.08l-181.91-105.03c-13.6-7.85-30.36-7.85-43.97,0l-181.91,105.03c-13.6,7.85-21.98,22.37-21.98,38.08v210.05c0,15.71,8.38,30.22,21.98,38.08l181.91,105.03c13.6,7.85,30.36,7.85,43.97,0l181.91-105.03c13.6-7.85,21.98-22.37,21.98-38.08Z"
                    />

                    <circle className="row-completed-medal-ruby" cx="804.95" cy="245" r="13.34" />
                    <circle className="row-completed-medal-ruby" cx="612.12" cy="572.18" r="13.34" />
                    <circle className="row-completed-medal-ruby" cx="621.13" cy="348.95" r="13.34" />
                    <circle className="row-completed-medal-ruby" cx="991.91" cy="355.67" r="13.34" />
                    <circle className="row-completed-medal-ruby" cx="991.91" cy="572.18" r="13.34" />
                    <circle className="row-completed-medal-ruby" cx="808.21" cy="685.02" r="13.34" />
                </svg>

                <div id="row-completed-text-container">
                    <span id="row-completed-title">Congratulations</span>
                    <span id="row-completed-subtitle">
                        You've finished the row "{capitalize(alphabet)} {row.name}"!
                    </span>
                </div>
            </div>
        </>
    );
}
