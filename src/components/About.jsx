import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React from 'react'

const About = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create('#about h2', {
            type:'words',
         })

         const scrollTimeline = gsap.timeline({
            scrollTrigger:{
                trigger:'#about',
                start:'top center'
            }
         })
         scrollTimeline.from(titleSplit.words,{
            opacity: 0,
            duration: 1,
            yPercent: 100,
            ease:'expo.out',
            stagger: 0.02
         })
         .from('.top-grid div, .bottom-grid div', {
            opacity: 0,
            duration: 1,
            ease:'power1.inOut',
            stagger: 0.04,
            delay: 0.5
         },'-=0.5')
        
    })

  return (
    <div id='about'>
        <div className="mb-16 md:px-0 px-5">
            <div className="content">
                <div className="md:col-span-8">
                    <p className="badge">Best Cocktails</p>
                    <h2>Where every details matters <span className='text-white'>-</span> from muddle to garnish</h2>
                </div>
                <div className="sub-content">
                    <p>Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable. </p>
                    <div>
                        <p className="md:text-3xl">
                            <span>4.5</span>/5
                        </p>
                        <div className="text-sm text-white-100">More than +12000 customers</div>
                    </div>
                </div>
            </div>
        </div>

        <div className="top-grid">
            <div className="md:col-span-3">
                <div className="nosiy"/>
                <img src="/images/abt1.png" alt="" />
            </div>
               <div className="md:col-span-6">
                <div className="nosiy"/>
                <img src="/images/abt2.png" alt="" />
            </div>
               <div className="md:col-span-3">
                <div className="nosiy"/>
                <img src="/images/abt5.png" alt="" />
            </div>
        </div>

        <div className="bottom-grid">
               <div className="md:col-span-8">
                <div className="nosiy"/>
                <img src="/images/abt4.png" alt="" />
            </div>
               <div className="md:col-span-4">
                <div className="nosiy"/>
                <img src="/images/abt4.png" alt="" />
            </div>
            
        </div>
    </div>
  )
}

export default About