import PropTypes from 'prop-types';
import {Box, Button} from './FeedbackOptions.styled';

export function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <Box>
            {options.map(option => (
                <Button
                key={option}
                type="button"
                name={option}
                onClick={() => onLeaveFeedback(option)}
                >
                    {option}
                </Button>
            ))}
        </Box>
    );
};
FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};
