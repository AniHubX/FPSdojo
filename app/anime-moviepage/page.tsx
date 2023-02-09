import Link from "next/link"
import '../globals.css'

// icons
import {IoIosArrowBack } from "react-icons/io"
import {BiDownArrow } from "react-icons/bi"



export default function page() {
  return (
    <div className="animepagemain">
    <Link href="/" className="backbtn">
        <IoIosArrowBack/>
    </Link>
    <div className="animeposter"></div>
    <div className="animeabout">
        <h4 className="animetitle">
            JUJUTSU KAISEN
            </h4>
        <ul>
            <h5 className="r-rating">16+</h5>
            <h5 className="genre">Horror</h5>
            <h5 className="ratings">8.0</h5>
        </ul>
        <div className="season-episodes">
            <div className="season">
            <input 
            className="season-toggle"
            id="season-toggle"
            type="checkbox"/>
            <label
            className="season-drp"
            htmlFor="season-toggle">Season
            <BiDownArrow className="toggle-btn"/>
            </label>
            <ul
            id="season-ul"
            className="season-episodesul">
                <li className="season-episodesli" >Season 1</li>
                <li className="season-episodesli" >Season 2</li>
                <li className="season-episodesli" >Season 3</li>
                <li className="season-episodesli" >Season 4</li>
                <li className="season-episodesli" >Season 4</li>
                <li className="season-episodesli" >Season 4</li>
                <li className="season-episodesli" >Season 4</li>
                <li className="season-episodesli" >Season 4</li>
                <li className="season-episodesli" >Season 4</li>
            </ul>
            </div>
            <div className="episode">
            <input 
            className="episode-toggle"
            id="episode-toggle"
            type="checkbox"/>
            <label
            htmlFor="episode-toggle"
            className="episode-drp">Episode
            <BiDownArrow className="toggle-btn"/>
            </label>
            <ul
            id="episode-ul" 
            className="season-episodesul">
                <li className="season-episodesli" >Episode 2</li>
                <li className="season-episodesli" >Episode 3</li>
                <li className="season-episodesli" >Episode 1</li>
            </ul>               
            </div>
        </div>
        <button className="Downloadbtn">DOWNLOAD</button>
    </div>
</div>
  )
}
