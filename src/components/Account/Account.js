import React from "react";
import PropTypes from "prop-types";

function Account({staffId}){
    return (
        <React.Fragment>
            <h1>Hello user {staffId}</h1>
        </React.Fragment>
    )
}

Account.propTypes = {
    staffId: PropTypes.number.isRequired
}

export default Account;