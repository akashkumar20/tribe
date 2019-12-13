import React, { Component } from 'react'

import Avatar from './svg/avatar';
import './tribe.scss';

class Tribe extends Component {
    constructor(props){
        super(props);
        this.state={
            nx: '',
            ny: '',
            lmx: '',
            lmy: '',
            rmx: '',
            rmy: '',
            fhx: '',
            fhy: '',
            hx: '',
            hy: '',
            lex: '',
            ley: '',
            rex: '',
            rey: '',
        }
    }
    updateTribeFace(e){
        const { clientY, clientX } = e;
        const face = document.querySelector('.face1');
        const nose = document.querySelector('.nose1');
        const leftMark = document.querySelector('.left-mark1');
        const rightMark = document.querySelector('.rigth-mark1');
        const frontHair = document.querySelector('.front-hair1');
        const hair = document.querySelector('.hair1');
        const leftEar = document.querySelector('.left-ear1');
        const rightEar = document.querySelector('.right-ear1');

        const mousePercentX = clientX / document.body.clientWidth;
        const mousePercentY = clientY / document.body.clientHeight;
        const faceWidth = face.getBoundingClientRect().width;
        const faceHeight = face.getBoundingClientRect().height;

        const noseWidth = nose.getBoundingClientRect().width;
        const noseHeight = nose.getBoundingClientRect().height;
        const xNoseMovement = (noseWidth - faceWidth)/3;
        const yNoseMovement = (noseHeight - faceHeight)/3;
        const nosePosX = (mousePercentX * 2 - 1) * xNoseMovement;
        const nosePosY = (mousePercentY * 2 - 1) * yNoseMovement;

        const hairWidth = hair.getBoundingClientRect().width;
        const hairHeight = hair.getBoundingClientRect().height;
        const xHairMovement = (hairWidth - faceWidth)/2;
        const yHairMovement = (hairHeight - faceHeight)/2;
        const hairPosX = (mousePercentX * 2 - 1) * xHairMovement;
        const hairPosY = (mousePercentY * 2 - 1) * yHairMovement;

        const frontHairWidth = frontHair.getBoundingClientRect().width;
        const frontHairHeight = frontHair.getBoundingClientRect().height;
        const xFrontHairMovement = (frontHairWidth - faceWidth) * 3 ;
        const yFrontHairMovement = (frontHairHeight - faceHeight)/6;
        const frontHairPosX = (mousePercentX * 2 - 1) * xFrontHairMovement;
        const frontHairPosY = (mousePercentY * 2 - 1) * yFrontHairMovement;

        const leftMarkWidth = leftMark.getBoundingClientRect().width;
        const leftMarkHeight = leftMark.getBoundingClientRect().height;
        const xLeftMarkMovement = (leftMarkWidth - faceWidth)/3;
        const yLeftMarkMovement = (leftMarkHeight - faceHeight)/3;
        const leftMarkPosX = (mousePercentX * 2 -1) * xLeftMarkMovement;
        const leftMarkPosY = (mousePercentY * 2 -1) * yLeftMarkMovement;

        const rightMarkWidth = rightMark.getBoundingClientRect().width;
        const rightMarkHeight = rightMark.getBoundingClientRect().height;
        const xRightMarkMovement = (rightMarkWidth - faceWidth)/3;
        const yRightMarkMovement = (rightMarkHeight - faceHeight)/3;
        const rightMarkPosX = (mousePercentX * 2 -1) * xRightMarkMovement;
        const rightMarkPosY = (mousePercentY * 2 -1) * yRightMarkMovement;

        const leftEarWidth = leftEar.getBoundingClientRect().width;
        const leftEarHeight = leftEar.getBoundingClientRect().height;
        const xLeftEarMovement = (leftEarWidth - faceWidth)/7;
        const yLeftEarMovement = (leftEarHeight - faceHeight)/7;
        const leftEarPosX = (mousePercentX * 2 -1) * xLeftEarMovement;
        const leftEarPosY = (mousePercentY * 2 -1) * yLeftEarMovement;

        const rightEarWidth = rightEar.getBoundingClientRect().width;
        const rightEarHeight = rightEar.getBoundingClientRect().height;
        const xRightEarMovement = (rightEarWidth - faceWidth)/7;
        const yRightEarMovement = (rightEarHeight - faceHeight)/7;
        const rightEarPosX = (mousePercentX * 2 -1) * xRightEarMovement;
        const rightEarPosY = (mousePercentY * 2 -1) * yRightEarMovement;

        this.setState((pre) => ({
            ...pre,
            nx: nosePosX,
            ny: nosePosY,
            lmx: leftMarkPosX,
            lmy: leftMarkPosY,
            rmx: rightMarkPosX,
            rmy: rightMarkPosY,
            fhx: frontHairPosX,
            fhy: frontHairPosY,
            hx: hairPosX,
            hy: hairPosY,
            lex: leftEarPosX,
            ley: leftEarPosY,
            rex: rightEarPosX,
            rey: rightEarPosY,
        }))
    }

    render(){
        const { nx, ny, lmx, lmy, rmx, rmy, fhx, fhy, hx, hy, lex, ley, rex, rey } = this.state;
        return(
            <div className="container" onMouseMove={(e) => this.updateTribeFace(e)}>
                <button>
                    <Avatar 
                        nx={nx}
                        ny={ny}
                        lmx={lmx}
                        lmy={lmy}
                        rmx={rmx}
                        rmy={rmy}
                        fhx={fhx}
                        fhy={fhy}
                        hx={hx}
                        hy={hy}
                        lex={lex}
                        ley={ley}
                        rex={rex}
                        rey={rey}
                    />
                </button>
            </div>
        );
    }
}

export default Tribe;
