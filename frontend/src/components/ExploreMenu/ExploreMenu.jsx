// import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className ='explore-menu' id = 'explore-menu'>
        <h1>Explore our menu</h1>
        <p className = 'explore-menu-text'>Discover a world of flavors with our diverse menu, featuring everything from classic comfort foods to innovative culinary creations. Whether you're craving a hearty meal or a light bite, our menu has something to satisfy every palate.</p>
        <div className="explore-menu-list">
            {
                menu_list.map((item,index) => {
                    return (
                        <div onClick={()=>setCategory(prev=>prev===item.menu_name ? 'All' : item.menu_name)} className="explore-menu-list-item" key={index}>
                            <img className={category === item.menu_name ? 'active' : ''} src={item.menu_image} alt='' />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                }) 
            }
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu