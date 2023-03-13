import PropTypes from "prop-types";
import { StatsResults } from "./Statistics.styled";

export const Statistics = ({good, neutral, bad, total, positiveFeedbackPercentage}) => {
    return(
        <StatsResults>
          <li>
            <p>Good:<span>{good}</span></p>
          </li>
          <li>
            <p>Neutral:<span>{neutral}</span></p>
          </li>
          <li>
            <p>Bad:<span>{bad}</span></p>
          </li>
          <li>
            <p>Total:<span>{total}</span></p>
          </li>
          <li>
            <p>Positive feedback:<span>{positiveFeedbackPercentage}</span></p>
          </li>
        </StatsResults>
    )
}

Statistics.propTypes = {
        good: PropTypes.number.isRequired, 
        neutral: PropTypes.number.isRequired, 
        bad: PropTypes.number.isRequired, 
        total: PropTypes.number.isRequired, 
        positiveFeedbackPercentage: PropTypes.string.isRequired,
}