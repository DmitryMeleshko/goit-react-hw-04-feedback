import React from 'react';
import PropTypes from 'prop-types';
import {Box, Button} from './FeedbackOptions.styled';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <Box>
            {options.map(option => (
                <Button
                key={option}
                type="button"
                name={option}
                onClick={onLeaveFeedback}>
                    {option}
                </Button>
            ))}
        </Box>
    );
};
FeedbackOptions.propTypes = {
    options: PropTypes.string.isRequired,
    onLeaveFeedback: PropTypes.string.isRequired,
};
