import React from 'react';
import PropTypes from 'prop-types';

const AppModuleHeader = ({ placeholder, onChange, value }) => {
    return (
        <div className="gx-module-box-header-inner">
            <div className="gx-search-bar gx-lt-icon-search-bar-lg gx-module-search-bar gx-d-none gx-d-sm-block">
                <div className="gx-form-group">
                    <input
                        className="ant-input gx-border-0"
                        type="search"
                        placeholder={placeholder}
                        onChange={onChange}
                        value={value}
                    />
                    <span className="gx-search-icon gx-pointer">
                        <i className="icon icon-search" />
                    </span>
                </div>
            </div>
            <div className="gx-module-box-header-right">
                <span className="gx-fs-xl">
                    {' '}
                    <i className="icon icon-apps gx-icon-btn" />
                </span>
                <span className="gx-fs-xl">
                    <i className="icon icon-notification gx-icon-btn" />
                </span>
            </div>
        </div>
    );
};

AppModuleHeader.propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
};

export default AppModuleHeader;