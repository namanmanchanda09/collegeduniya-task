import React from 'react'
import 'tachyons'
import college_01 from './college_01.jpg';


import './College.css';

const College = ({name}) =>{
    
    return(
        <div className='dib br3 pa3 ma2 bw2 shadow-5'>
            <img alt="" src={college_01} className='Layer-10'></img>
            <div className='Hansraj-College-Delhi-University'>{name}</div>
            <div>
                <div>
                    <p className='Near-Vishwavidyalya-Metro-Station'>Near Vishwavidyalya Metro Station</p>
                </div>
                
                <div className='custom-a'>

                    <div className='-Match-25kms-from-GTB-Nagar-7-Kms-from-Rajiv-Chowk'>
                    93% Match : 2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk

                    
                    </div>

                    <div className='price'>₹ 5,768</div>
                    
                    

                </div>
                


            </div>


            <div className='Rectangle-4'>
                <div className='Flat-Rs2000-off-upto-Rs-500-wallet-to-avail-LOGIN'>
                Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN 

                </div>
            
                

            </div>

                <div className='custom-b'>

                    <div className='Free-Cancellation'>
                        Free Cancellation
                    </div>
                    
                    <div className='Free-Wi-Fi'>
                        Free-Wi-Fi
                    </div>

            </div>

            

            

        </div>
    );
}


export default College;


