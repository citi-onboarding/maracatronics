import './PurposeBox.css';

function PurposeBox(props) {
  
  return (

    <div className="purpose-box">

        <div className="left-part">
            <img src={props.picFile} alt={props.title}/>

            <h2>{props.title}</h2>
        </div>

        <div className="vertical-divisor"></div>

        <div className="right-part">
            <p>
              {props.text}
            </p>
        </div>
        
    </div>
    
  );
}

export default PurposeBox;
