const Stage = ({ thresholdPoints, games, isLastPlayedStage, id, solve, somelastPlayedStage}) => {

    const { sumResultsSlash, percentage } = solve(id, thresholdPoints, games);
    const style = {
       background: `linear-gradient(90deg, #3300ff 0%, #3300ff ${percentage}%, #e5e5e5 ${percentage}%, #e5e5e5 100%)`,
    }

    const score = isLastPlayedStage ? sumResultsSlash : thresholdPoints;

    return (
        <div
            style={style}
            className={somelastPlayedStage ? 'progress-bar__stage painedStar': 'progress-bar__stage' }
            data-score={score}
        ></div>
    );
}


export default Stage;