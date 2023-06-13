import { InfoOutlined, PlayArrow } from "@mui/icons-material"
import "./featured.scss"

function Featured({type}) {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === "movies" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
        
        <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg" alt="" />
        <div className="info">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Logonfx.png" alt="" />
            <span className="desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum doloremque nesciunt cum tenetur odit! Recusandae, sequi accusantium. Saepe facilis corporis labore voluptatum et minus nam doloremque nulla accusantium, magnam impedit?
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                    </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Featured
