import './SocialMediaBox.css'

function SocialMediaBox(props) {
    
    return (
        <div className="info-box">
            <img src={props.icon} alt={props.title}/>

            <div>
                <span>{props.title}</span>
                <span>{props.info}</span>
            </div>
        </div>
    )

}

export default SocialMediaBox;