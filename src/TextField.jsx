import React from 'react';
import style from './style';
import PropTypes from 'prop-types';

const TextField = (props) => {
    const {value,error,className} = props;
    const errorStyle = error ? style.error : {}
    return(
        <>
        <input value={value} className={className} readOnly />
        {
            error && (
                <span style={{...errorStyle}}>{error}</span>
            )
        }
        </>
    )
}
TextField.propTypes = {
    value: PropTypes.string.isRequired,
    error:PropTypes.string,
    className: PropTypes.object,
}
TextField.defaultProps = {
    error:"Error",
    className: {},
}
export default TextField;