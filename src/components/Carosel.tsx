import React, { useEffect, useState } from "react";

const Carosel = () => {
    const imgUrl: string[] = ([
        "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
        "https://c4.wallpaperflare.com/wallpaper/764/505/66/baby-groot-4k-hd-superheroes-wallpaper-preview.jpg",
        "https://img.freepik.com/free-photo/majestic-mountain-peak-tranquil-winter-landscape-generated-by-ai_188544-15662.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709452800&semt=ais",
        "https://e1.pxfuel.com/desktop-wallpaper/783/827/desktop-wallpaper-ultra-high-definition-nature-resolution-ultra.jpg",
        "https://wallpapercave.com/wp/wp4676584.jpg",
        "https://i.pinimg.com/originals/85/a6/3d/85a63d38b79cf83a40c227027e2631b1.jpg",
        "https://e0.pxfuel.com/wallpapers/38/201/desktop-wallpaper-8k-ultra-background-ultra-8k-nature.jpg",
        "https://w0.peakpx.com/wallpaper/146/1013/HD-wallpaper-water-stream-flow-trees-stones-alaska.jpg",
        "https://i.pinimg.com/736x/73/90/c4/7390c4f7ea9a1686ce2caaef959554e5.jpg",
        "https://t4.ftcdn.net/jpg/05/64/74/11/360_F_564741194_CjtDvMtO3zKdgd6Lz8Qphnv7UQ7PBKnR.jpg",
        "https://i.pinimg.com/originals/4b/ab/89/4bab89c1bb1037442e983275c27beed9.jpg",
        "https://i0.wp.com/i.redd.it/95rh81spwgc71.jpg?resize=1200%2C800&ssl=1",
        "https://e0.pxfuel.com/wallpapers/130/308/desktop-wallpaper-ultra-nature-high-resolution.jpg",
        "https://wallpapers.com/images/hd/winter-mountains-4k-hd-wbv488uehoo5l09t.jpg",
        "https://i.pinimg.com/736x/30/d6/66/30d6663362372d4993e335ba9be7963c.jpg"
    ])
    const [maxCount, setMaxCount] = useState<number>(3)
    const [activeSlides, setActiveSlides] = useState<number[]>([])
    const [autoPlay, setAutoPlay] = useState<boolean>(false);

    const onClickAction = (action: "increment" | "decrement") => {
        if (action === "increment" && activeSlides[maxCount - 1] + 1 < imgUrl.length) {
            let temp: number[] = [];
            activeSlides.map((item: number) => {
                temp.push(item + 1)
            })
            setActiveSlides(temp)
        } else if (action === "decrement" && activeSlides[0] - 1 >= 0) {
            let temp: number[] = [];
            activeSlides.map((item: number) => {
                temp.push(item - 1)
            })
            setActiveSlides(temp)
        }
    }

    useEffect(() => {
        let temp = [];
        for (let i = 0; i < maxCount; i++) {
            temp.push(i)
        }
        setActiveSlides(temp)
    }, [maxCount])

    useEffect(() => {
        const runAutoPlay = setInterval(() => {
            onClickAction("increment")
        }, 2000)
        if (!autoPlay) {
            clearInterval(runAutoPlay);
        }
    }, [autoPlay])

    return <React.Fragment>
        <div className="component-heading">

            <label>
                Max number of images :
                <input onChange={(event: any) => {
                    setMaxCount(+event.target.value)
                }} />
            </label>
            {autoPlay ? <button onClick={() => {setAutoPlay(false) }}>
                Auto Play Off
            </button> : <button onClick={()=>{setAutoPlay(true)}}>
                Auto Play On
            </button>}
        </div>
        <div className="component-heading">
            <span>Custom Carousel Component</span>
        </div>
        <div className="parentCarosel">
            <span className="btn-action" onClick={() => {
                onClickAction("decrement")
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                </svg>
            </span>
            <div className="carosel-div">

                {imgUrl.length > 0 && imgUrl.map((items: any, index) => {
                    if (activeSlides.includes(index)) {
                        return <img src={items} className="carosel-img" alt="No image found" key={"carosel" + index} />
                    }
                })}
            </div>
            <span className="btn-action" onClick={() => {
                onClickAction("increment")
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                </svg>
            </span>
        </div>
    </React.Fragment>
}

export default React.memo(Carosel)