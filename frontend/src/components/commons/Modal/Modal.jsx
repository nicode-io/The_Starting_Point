import React, { Fragment, useState }from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './modal.css';

/**
 * 
 * @param {Boolean} props.isVisible 
 * @param {Function} props.setIsVisible
 * @param {Object} props.data = { title: {String}, items: {Array} }
 */
const Modal = (props) => {
    return (
        <Fragment>
            {(props.isVisible)
                ? <div className="modalContainer">
                    <div className="modalHeader">
                        <button className="modalButton" onClick={() => props.setIsVisible(false)}><FontAwesomeIcon icon={faTimesCircle} /></button>
                        <h6>{props.data.title}</h6>
                        <button className="modalButton" onClick={() => props.setIsVisible(false)}><FontAwesomeIcon icon={faTimesCircle} /></button>
                    </div>
                    <div className="modalData">
                        {props.data.content}
                        {/* {(props.data.items.length > 0)
                            ? props.data.items.map((item) => {
                                    return (
                                        <div className="modalItem">
                                            <div className="itemLeft"></div>
                                            <div className="itemCenter">
                                                <p>{item._id}</p>{console.log(item)} */}
                                                {/* <p>{item.startdate}</p>
                                                <p>{item.enddate}</p> */}
                                                {/* <p>{item.machine.name}</p>
                                            </div>
                                            <div className="itemRight"></div>
                                        </div>
                                    )
                                })
                            : <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        } */}
                    </div>
                </div>
                : null
            }
        </Fragment>
    )
}

export {
    Modal
};