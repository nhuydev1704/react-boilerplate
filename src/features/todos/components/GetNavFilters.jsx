import React from 'react';
import PropTypes from 'prop-types';
import filters from '../data/filters';

const GetNavFilters = ({ filterId, setFilter }) => {
    return filters.map((filter, index) => (
        <li
            key={index}
            onClick={() => {
                setFilter(filter);
            }}
        >
            <span className={filter.id === Number(filterId.id) && !filterId?.color ? 'gx-link active' : 'gx-link'}>
                <i className={`icon icon-${filter.icon}`} />
                <span>{filter.title}</span>
            </span>
        </li>
    ));
};

GetNavFilters.propTypes = {
    filterId: PropTypes.any,
    setFilter: PropTypes.func,
};

export default GetNavFilters;
