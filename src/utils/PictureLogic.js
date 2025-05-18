function getPictures(){

    fetch(`https://picsum.photos/v2/list?page=2&limit=10`)
    .then((result) => result.json())
    .then(resultJSON => {
        
        const container = document.getElementById('pictures')

        resultJSON.forEach((url) => {

            const picture = document.createElement("img")
            picture.src = url.download_url
            container.appendChild(picture)

        })

        window.simpleslider.getSlider({

            container: document.getElementById('pictures'),
            transitionTime:1,
            delay:4.5

        })

    })

}

export default getPictures