import React, { useEffect, useState } from 'react';
import SearchDeatils from '../SearchDeatils/SearchDeatils'
const Serach = () => {
    const [img,setImg]=useState('');
    const [search,setSearch]=useState('');
    const [click,setClick]=useState([]);
    const InputEvent = (InputEvent) =>{
           const name=InputEvent.target.value;
           setImg(name)
    }
    const handleClick= () => {
        setClick((oldItems)=>{
              return [...oldItems,img]
        })
    }
    useEffect(() =>{
       const url=`https://source.unsplash.com/400x300/?${img}`
       setSearch(url)
    },[img])
    return (
        <div style={{textAlign: 'center', padding:'20px'}}>
            <input  type="text" placeholder="Search..." onChange={InputEvent} value={img}/>
             <button onClick={handleClick} >Submit</button>
            <SearchDeatils name={search}></SearchDeatils>
        </div>
    );
};

export default Serach;