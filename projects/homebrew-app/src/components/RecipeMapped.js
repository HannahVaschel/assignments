import React from 'react'
// import MaltList from './MaltList.js'
// import HopList from './HopList.js'

const RecipeMapped = props => {
    

    const { abv, attenuation_level, boil_volume, brewers_tips, description,
        ebc, food_pairing, ibu, image_url, ingredients, method, name, 
        ph, srm, tagline, target_fg, target_og, volume } = props
    
        // console.log(props)
        // console.log(method.mash_temp)
    
    return(
        
        <div className="recipe-div"> 
            {volume ? 
                (<>
                    <div className="recipe-header">
                    <h1>{name}</h1>
                    <hr/>
                    <div className="tag-div">
                        <p className="tagline">{tagline}</p>
                        <p>OG: {target_og}</p>
                        <p> ABV: {abv}</p>
                        <p>IBU: {ibu}</p>
                    </div>
                    <hr/>
                </div>

                <div className="recipe-description">
                    <h3>Description: </h3>
                    <p>{description}</p>
                </div>

                <div className="recipe-stats">
                    <h3>Basics/Stats:</h3>
                    <p>Volume: {Math.round((volume.value / 3.785) * 10) / 10} Gallons</p>
                    <p>Boil Volume: {Math.round((boil_volume.value / 3.785) * 10) / 10} Gallons</p>
                    <p>ABV: {abv}</p>
                    <p>Target FG:{target_fg}</p>
                    <p>Target OG:{target_og}</p>
                    <p>EBC: {ebc}</p>
                    <p>SRM: {srm}</p>
                    <p>ph: {ph}</p>
                    <p>Attenuation: {attenuation_level}%</p>
                </div>

                <div className="recipe-method">
                <h3>Methods/Timings:</h3>
                <p>Mash Temp (celsius): {(method.mash_temp[0].temp.value * 9 / 5) + 32}°F </p>
                <p>Mash Duration: {method.mash_temp[0].duration} minutes</p>
                <hr/>
                <p> Fermentation Temperature: {(method.fermentation.temp.value * 9 / 5) + 32}°F</p>
                <hr/>
                <p>Twist: {method.twist}</p>
                </div>

                <div className="recipe-ingredients">
                    <h4>Malts</h4>
                    {/* <MaltList {...ingredients}/> */}
                    {ingredients.malt.map((malt, i) => <div className="recipe-malts" key={malt.name + i}>
                                                <p>{malt.name}</p>
                                                <p>{malt.amount.value} kg</p>
                                                </div>)}
                    <h4>Hops</h4>
                    {/* <HopList {...ingredients}/> */}
                    {ingredients.hops.map((hops, i) => <div className="recipe-hops" key={hops.name + i}>
                                                    <p>{hops.name}</p>
                                                    <p>{hops.amount.value} g</p>
                                                    <p>{hops.add}</p>
                                                    <p>{hops.attribute}</p>
                                                </div>)}
                    <p>Yeast: {ingredients.yeast}</p>
                    <p>{}</p>
                </div>

                <div className="food-pairing">
                    <h3>Food-Pairings:</h3>
                    {food_pairing.map(pairing => <p key={pairing}>{pairing}</p>)}
                </div>

                <div className="brewers-tip">
                    <h3>Brewer's Tips:</h3>
                    {brewers_tips}
                </div>

                <div className="beer-img" style={{backgroundImage: `url(${image_url})`}}></div>
                
                </>)
                : (null)
            }
        </div>
    )
}

export default RecipeMapped