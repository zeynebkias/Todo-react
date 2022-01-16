import React from 'react'
import { useState , useEffect } from 'react'


function Footer({AllTasks, CompletedTask}) {



    return (            
            <div className="footer">
         <p >All Tasks</p><input value={AllTasks} /> 
         <p >Completed Tasks</p><input value={CompletedTask} /> 
      </div>


    )
}

export default Footer;
