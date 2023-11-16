
const Button = ({ start, restart, time, point, result }) => {
    return (
        <div>
            <div className="container">
                <div id="timer">{time}</div>
                <div className="counter"><span id="clicks-number">{point}</span>  clicks</div>
                <div className="counter"><span id="clicks-number">{result}</span>  result</div>

                <button onClick={() => {
                    start();
                }} id="cliker">GO</button>

                <button onClick={() => {
                    restart();
                }} id="clikerRE">RESTART</button>



            </div>
        </div>
    );
}

export default Button;
