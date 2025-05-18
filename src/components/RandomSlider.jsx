import React, { useEffect, useRef, useState } from 'react';
import getPictures from '../utils/PictureLogic';

function PictureSlider(){

    useEffect(() => {
        getPictures()
    }, [])
    
    return(
        <div id="pictures">

        </div>
    )

}

export default PictureSlider