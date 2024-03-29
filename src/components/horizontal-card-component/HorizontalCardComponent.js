import "../horizontal-card-component/horizontal-card-component.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowRightLong} from "@fortawesome/free-solid-svg-icons"
export default function HorizontalCardComponent(props)
{
    return(
        <div className="horizontal-card-container">
             <div  className="horizontal-card-content-and-img">
                <div className="horizontal-card-content">
                 <div className="horizontal-card-qoute" >
                         We believe good design makes life beautiful
                 </div>
                 <div className="horizontal-card-title" >
                       {props.title}
                 </div>
                 <div className="horizontal-card-location-container" >
                     <div className="horizontal-card-location">
                     {props.loc}
                     </div>
                     <FontAwesomeIcon icon={faArrowRightLong} className="card-right-arrow"></FontAwesomeIcon>
                 </div>
             </div>
             <img src={props.img} alt="project image" class="project-image"/>
             </div>
             <div className="Horizontal-card-white-space"></div>
        </div>
    )
}