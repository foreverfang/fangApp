import React, { Component } from 'react'
import { Carousel } from 'antd'
import { img1, img2, img3, img4, img5 } from '../images/index'

export default class MyCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgList: [img1, img2, img3, img4, img5]
        }
    }

    render() {
        return (
            <div >
                <Carousel autoplay >
                    {
                        this.state.imgList.map((item, index) => {
                            return (
                                <div key={index}>
                                    <img src={item} alt="fang_img" style={{ width: '100%', height: '500px' }} />
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
        );
    }
}