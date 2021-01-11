import React, { Component } from 'react';
import './Form.css';

const Form = ({value, onChange, onCreate, onKeyPress}) => {
    return (
        <div className="form">
            <input valuie={value} onChange={onChange} onKeyPress={onKeyPress} />
            <div className="create-button" onClick={onCreate}>
              추가
            </div>
        </div>
    );
};

export default Form;