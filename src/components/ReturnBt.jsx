import React from "react";
import { Link } from 'react-router-dom';

const ReturnBt = () =>{
    return(
        <div className="max-w-[1200px] mx-auto px-10 mt-4 h-12 flex ">
            <h2 className="text-white text-[20px] bg-red-900 px-4 rounded-lg"><Link to="/apis">Regresar</Link></h2>
        </div>
    )
}

export default ReturnBt