import React, {useEffect} from 'react'
import gsap from 'gsap';
import Container from '../styles/stageFallback';

export default function StageFallback({canvasWidth}) {

    

    useEffect(() => {
        gsap.set('.box', {y: -40})
        gsap.to('.box', {y:(canvasWidth /10 - 30), stagger: { each: .1}, repeat: -1, yoyo: true, ease: "bounce.out", yoyoEase: "sine.out"})
       
    }, [])

    return (
        <Container
        style={{height: `${canvasWidth}px`, width: `${canvasWidth}px`,
        background: '#ff9a72'
        }}
        >       
                <div>
                    <svg className="box" width={canvasWidth *.04} height={canvasWidth * .04}>
                        <rect height={canvasWidth *.04}  width={canvasWidth *.04}   style={{fill: "white"}} />
                    </svg>
                    
                    <svg className="box" width={canvasWidth *.04} height={canvasWidth * .04}>
                        <rect height={canvasWidth *.04}  width={canvasWidth *.04}   style={{fill: "white"}} />
                    </svg>
                    
                    <svg className="box" width={canvasWidth *.04} height={canvasWidth * .04}>
                        <rect height={canvasWidth *.04}  width={canvasWidth *.04}   style={{fill: "white"}} />
                    </svg>
                    
                    <svg className="box" width={canvasWidth *.04} height={canvasWidth * .04}>
                        <rect height={canvasWidth *.04}  width={canvasWidth *.04}   style={{fill: "white"}} />
                    </svg>
                    
                    <svg className="box" width={canvasWidth *.04} height={canvasWidth * .04}>
                        <rect height={canvasWidth *.04}  width={canvasWidth *.04}   style={{fill: "white"}} />
                    </svg>
                    
                    <svg className="box" width={canvasWidth *.04} height={canvasWidth * .04}>
                        <rect height={canvasWidth *.04}  width={canvasWidth *.04}   style={{fill: "white"}} />
                    </svg>
                </div>
        </Container>
    )
}
