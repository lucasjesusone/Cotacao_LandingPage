import React, { useContext, Fragment} from 'react';
import '../main/main.css'
import LandingContext from '../../context/context';

const Main = () => {

const { main } = useContext(LandingContext)
const { mainMap } = main
      
  
  
    return (
      <main id='main'>
          <div> 
            <div className='services'>
                {mainMap &&
                       mainMap.map(function(item) {
                
                        const {icon, title, text, id} = item
                      return (
                  <Fragment key={id}>
                    <div className='service-one'> 
                        <p className='service-icon'>{icon}</p>
                        <p className='service-title'>{title || 'sla'}</p>
                        <p>{text}</p>
                    </div>
                 </Fragment>
                )
              })}
            
          </div>
      </div>
</main>
   );
 }


export default Main;