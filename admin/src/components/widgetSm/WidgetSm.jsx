import "./widgetSm.css"
import {Visibility} from '@mui/icons-material';

export default function WidgetSm() {
  return (
    <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src="https://pbs.twimg.com/media/EemH8x6WkAc6Vi2.jpg" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Bludu Doo</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton"><Visibility className="widgetSmIcon"/> Display</button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://pbs.twimg.com/media/EemH8x6WkAc6Vi2.jpg" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Bludu Doo</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton"><Visibility className="widgetSmIcon"/> Display</button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://pbs.twimg.com/media/EemH8x6WkAc6Vi2.jpg" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Bludu Doo</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton"><Visibility className="widgetSmIcon"/> Display</button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://pbs.twimg.com/media/EemH8x6WkAc6Vi2.jpg" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Bludu Doo</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton"><Visibility className="widgetSmIcon"/> Display</button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://pbs.twimg.com/media/EemH8x6WkAc6Vi2.jpg" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Bludu Doo</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton"><Visibility className="widgetSmIcon"/> Display</button>
            </li>
        </ul>
      
    </div>
  )
}
