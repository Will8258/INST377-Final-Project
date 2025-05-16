import React, { useEffect, useRef, useState } from 'react';
import getPictures from '../utils/PictureLogic';

function PictureSlider(){

    const [image, setImage] = useState('')

    useEffect(() => {
        getPictures()
    }, [])
    
    return(
        <div id="pictures">

        </div>
    )

}

export default PictureSlider