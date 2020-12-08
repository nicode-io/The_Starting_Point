import React, { Fragment, useState }from 'react';
// import { FormField } from '..';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './modal.css';

/**
 * 
 * @param {Boolean} props.isVisible 
 * @param {Function} props.setIsVisible
 * @param {Array} props.data
 */
const Modal = (props) => {
    return (
        <Fragment>
            {(props.isVisible)
                ? <div className="modalContainer">
                    <button className="modalButton" onClick={() => props.setIsVisible(false)}><FontAwesomeIcon icon={faTimesCircle} /></button>
                    <div className="dataContainer">
                        {(props.data.length > 0)
                            ? props.data.map((item) => {
                                    return (
                                        <p>{item}</p>
                                    )
                                })
                            : <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        }
                    </div>
                    <button className="modalButton" onClick={() => props.setIsVisible(false)}><FontAwesomeIcon icon={faTimesCircle} /></button>
                </div>
                : null
            }
        </Fragment>
    )
}

export {
    Modal
};