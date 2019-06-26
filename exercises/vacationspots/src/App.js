import React from 'react'
import Card from './Card.js'

function App(){

    let vacationSpots = [
        {
          place: "Meridian, Idaho",
          price: 40,
          timeToGo: "Spring"
        },{
          place: "Cancun",
          price: 900,
          timeToGo: "Winter"
        },{
          place: "China",
          price: 1200,
          timeToGo: "Fall"
        },{
          place: "Russia",
          price: 1100,
          timeToGo: "Summer"
        },{
          place: "Lebanon",
          price: 400,
          timeToGo: "Spring"
        },{
          place: "Brown County, Indiana",
          price: 100,
          timeToGo: "Fall"
        }
      ]

    const cardSpots = vacationSpots.map((card, i) =>
        <Card
            key={"card" + i}
            place={card.place}
            price={card.price}
            timeToGo={card.timeToGo} />
        )

    return (
        <div className="card-container">
            <h1>Travel Cards</h1>
            {cardSpots}
        </div>
    )
}

export default App