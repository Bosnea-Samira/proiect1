import React from "react";
import {Shared} from "./Share.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare, faEnvelope, faHeart} from "@fortawesome/free-solid-svg-icons";


const Share = () => {
    return(
        <div>
           <Shared>
               <FontAwesomeIcon icon={faShare}/>
               <FontAwesomeIcon icon={faEnvelope}/>
               <FontAwesomeIcon icon={faHeart}/>
           </Shared>
        </div>
    )
}


export default Share;