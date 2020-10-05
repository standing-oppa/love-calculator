import React, { Fragment } from 'react';
import classes from './Input.module.css'

const input = () => (
    
    <Fragment>
        <h2>Make A Calculation Below!</h2>
        <div className="input-group" id={classes.input}>
            <div className="input-group-prepend">
                <span className="input-group-text">Thing 1</span>
            </div>
            <input type="text" aria-label="Thing 1" className="form-control" />
            <i id={classes.heart} className="far fa-heart fa-4x"></i>
            <div className="input-group-prepend">
                <span className="input-group-text">Thing 2</span>
            </div>
            <input type="text" aria-label="Thing 2" className="form-control" />
        </div>
    </Fragment>
);

export default input;