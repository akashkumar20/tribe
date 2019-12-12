import React, { Component } from 'react'

import Avatar from './svg/avatar';
import './tribe.scss';

class Tribe extends Component{
    render(){
        return(
            <div className="container">
                <button>
                    <Avatar />
                </button>
            </div>
        );
    }
}

export default Tribe;
