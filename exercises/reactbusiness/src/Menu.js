import React from 'react'
import MenuSelector from './MenuSelector'

function Menu(){
    return (
        <div className="menu-container">
            <h3 className="menu-header">–––– MENU ––––</h3>
            <MenuSelector />
            <div className="cocktail-menu">
                <h3 className="menu-category">–––– Cocktails ––––</h3>
                
                <div className="drink-div">
                    <p className="food-name">SAZERAC</p>
                    <p className="food-desc">rye whiskey, absinthe, demerara simple, bitters</p>
                </div>

                <div className="drink-div">
                    <p className="food-name">OLD FASHIONED</p>
                    <p className="food-desc">bourbon, citrus, bitters</p>
                </div>
            
                <div className="drink-div">
                    <p className="food-name">MANHATTAN</p>
                    <p className="food-desc">rye whiskey, sweet vermouth, bitters </p>
                </div>
            
                <div className="drink-div">
                    <p className="food-name">NEGRONI</p>
                    <p className="food-desc">gin, campari, sweet vermouth</p>
                </div>
            
                <div className="drink-div">
                    <p className="food-name">DARK AND STORMY</p>
                    <p className="food-desc">gosling's black seal rum, lime, gosling's ginger beer</p>
                </div>
            
                <div className="drink-div">
                    <p className="food-name">ANOTHER DRINK</p>
                    <p className="food-desc">some more, ingredients, go here</p>
                </div>
            
                <div className="drink-div">
                    <p className="food-name">ANOTHER DRINK</p>
                    <p className="food-desc">some more, ingredients, go here</p>
                </div>
            </div>
        </div>
    )
}

export default Menu