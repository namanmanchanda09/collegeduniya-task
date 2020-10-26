import React from 'react';
import College from './College'
import {colleges} from './colleges'


const CollegeList = ({robots}) =>{

    return(
        <div>
            {
                colleges.map((user,i)=>{
                    return(<College
                                key = {colleges[i].college_name}
                                name={colleges[i].college_name}
                                
                            />
                        )
                })
            }
        </div>
    )
}

export default CollegeList;

