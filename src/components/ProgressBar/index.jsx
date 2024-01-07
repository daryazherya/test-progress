import "./progressBar.css";
import Stage from "./Stage";
import { stages } from '../../data';
import { useState } from "react";


const ProgressBar = () => {
    const [data, setData] = useState(stages);

    const lastPlayedStage = data.findLast(stage =>
        stage.games.some(game => game.isPlayed === true)
    );
    const somelastPlayedStage = data.filter(stage =>
        stage.games.some(game => game.isPlayed === true)
    );

    function solve(id, thresholdPoints, games) {
        const sum = games.reduce((acc, item) => acc + item.bestResult, 0);
        let percentage;

        percentage = id === 0 ? 
            (sum / thresholdPoints) * 100 : 
            (sum / (thresholdPoints - data[id - 1].thresholdPoints)) * 100;

        const sumResultsSlash = id === 0 ? 
            `${sum} / ${thresholdPoints}` : 
            `${sum + data[id - 1].thresholdPoints} / ${thresholdPoints}`;

        return {
            sumResultsSlash,
            percentage,
        }
    }

    return (
        <div className="progress-bar">
            {stages.map((stage, id) => {
                return (
                    <Stage
                        id={id}
                        key={stage.id}
                        thresholdPoints={stage.thresholdPoints}
                        isLastPlayedStage={stage === lastPlayedStage}
                        somelastPlayedStage={somelastPlayedStage.includes(stage)}
                        games={stage.games}
                        solve={solve}
                    />
                );
            })}
        </div>
    );
};


export default ProgressBar;
