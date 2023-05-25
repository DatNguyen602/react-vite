import React , { Component } from "react"

class Home extends Component{
    render() {
        const style = {
            "color": "red",
        }

        return <div>
            <h1 style={style} className="">
                Color: {style.color}
            </h1>
        </div>
    }
}

export default Home;