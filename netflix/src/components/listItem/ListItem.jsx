import { useState } from "react";
import "./listItem.scss";
import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";

export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://vimeo.com/296981135";

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://wrhsstampede.com/wp-content/uploads/2019/01/bird-box-900x507.jpg"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow  className="icon"/>
              <Add  className="icon"/>
              <ThumbUpAltOutlined  className="icon"/>
              <ThumbDownAltOutlined  className="icon"/>
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 minutes</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
              ipsam temporibus odit officiis iure voluptatem!
            </div>
            <div className="genre">Thriller</div>
          </div>
        </>
      )}
    </div>
  );
}
