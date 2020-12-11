import './SocialMediaBox.css'

function SocialMediaBox(props) {
    
    return (
        <a href={props.link} className="info-box" target={props.target}>
            <img src={props.icon} alt={props.title}/>

            <div>
                <span>{props.title}</span>
                <span>{props.info}</span>
            </div>
        </a>
    )

}

export default SocialMediaBox;