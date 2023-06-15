import { useLocation, Link } from "react-router-dom/cjs/react-router-dom.min"
import "./watch.scss"
import {ArrowBackOutlined} from "@mui/icons-material"

export default function Watch() {
  const location  = useLocation();
  const movie = location.movie;
  return (
    <div className="watch">
        <Link to="/">
        <div className="back">
            <ArrowBackOutlined/>
            Home
        </div>
        </Link>
        <video className="video" autoPlay progress controls src={movie.video}></video>
    </div>
  )
}
