import React, { Component } from 'react';
export default Working;

class Working extends Component {
    render() {

        const Working = ({ isWorking }) => {
            const checkIfWorking = () => {

                if (isWorking) {
                    return 'Working';
                } else {
                    return 'Not Working';
                }
            };
            return (
                <div>

                    <h6>{checkIfWorking()}</h6>

                </div>
            );
        };


