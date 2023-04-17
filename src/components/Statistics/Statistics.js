import React from 'react';
import PropTypes from 'prop-types';
import {List, Boxes, Text} from './statistics.styled';

export const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
}) => {
    return (
        <Boxes>
            <List>
                <li>
                    <Text>Good:{good}</Text>
                </li>
                <li>
                    <Text>Neutral:{neutral}</Text>
                </li>
                <li>
                    <Text>Bad:{bad}</Text>
                </li>
                <li>
                    <Text>Total:{total}</Text>
                </li>
                <li>
                    <Text>Positive feedback:{positivePercentage} %</Text>
                </li>
            </List>
        </Boxes>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};