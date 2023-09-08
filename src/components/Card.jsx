import { Fragment } from "react"
import '../styles/Card.css'

const Card = (props) => {
    const image = props.image
    const title = props.title
    const subheading = props.subheading
    const description = props.description

    return (
        <Fragment>
            <div className="card">
                <div className="card-img">
                    <img src={image} alt='Card'/>
                </div>
                <div className="card-content">
                    <div className="card-content-title">
                        {title}
                    </div>
                    <div className="card-content-subheading">
                        {subheading}
                    </div>
                    <div className="card-content-description">
                        {description}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Card