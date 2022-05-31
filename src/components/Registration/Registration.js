import { bindActionCreators } from '@reduxjs/toolkit';
import React from 'react';
import { connect } from 'react-redux';
import { Creators as bookActions } from '../../app/actions/bookActions';
import Form from '../Common/Form.js'

const Registration = ({insertion}) => {
    return (
        <Form action={insertion} />
    )
};

const mapDispatchToProps = dispatch => 
bindActionCreators (bookActions, dispatch)

export default connect(null, mapDispatchToProps)(Registration)