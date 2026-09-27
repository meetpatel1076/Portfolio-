import React from 'react'
import ShapeGrid from '../Bg/ShapeGrid'
import Navbar from '../components/Navbar'
import About from '../components/About'
import TechJourney from '../components/TechJourney'
import Work from '../components/Work'

const MainPage = () => {
    return (
        <main className="relative min-h-screen overflow-hidden bg-[#080808]">

            
            <div className="absolute inset-0 z-0">
                <ShapeGrid
                    speed={0.25}
                    squareSize={50}
                    direction='diagonal' // up, down, left, right, diagonal
                    borderColor="#111014"
                    hoverFillColor='#222'
                    shape='triangle' // square, hexagon, circle, triangle
                    hoverTrailAmount={0} // number of trailing hovered shapes (0 = no trail)

                    hoverColor="#222222"
                    size={40}
                    
                    
                />
            </div>


            <div className="relative z-10">
                <Navbar/>
                <About/>
                <Work/>
                


            </div>

        </main>
    )
}

export default MainPage