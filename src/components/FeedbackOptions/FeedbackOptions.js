import React from 'react';
import PropTypes from 'prop-types';
import {Box, Button} from './FeedbackOptions.styled';
import shortid from 'shortid';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <Box>
            {options.map(option => (
                <Button
                key={shortid.generate()}
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
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};
