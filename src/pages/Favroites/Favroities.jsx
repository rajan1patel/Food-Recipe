import React, { useContext } from 'react'
import { GlobalContext } from '../../context/StoreContext'
import Favitem from '../../components/Favitem';

const Favroities = () => {
  const {fav}=useContext(GlobalContext);
  return (
    <div className='flex gap-10 m-8 flex-wrap'>
      {
        fav.map((item,index)=>{
            return(
              <>
              <Favitem item={item}></Favitem>
              </>
            )
        })
      }
    </div>
  )
}

export default Favroities
