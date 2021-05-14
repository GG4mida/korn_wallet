import React from 'react';
// import {useDispatch, useSelector} from 'react-redux';

const Container: React.FC = (props)=> {
    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    )
}

export default Container;