import "./sidebar.css"
import { LineStyle, Timeline, TrendingUp } from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem active">
                    <LineStyle className="sidebarIcon"/>
                    Home
                </li>
                <li className="sidebarListItem">
                    <Timeline className="sidebarIcon"/>
                    Analytics
                </li>
                <li className="sidebarListItem">
                    <TrendingUp className="sidebarIcon"/>
                    Sales
                </li>
            </ul>
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <LineStyle/>
                    Home
                </li>
                <li className="sidebarListItem">
                    <Timeline/>
                    Analytics
                </li>
                <li className="sidebarListItem">
                    <TrendingUp/>
                    Sales
                </li>
            </ul>
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <LineStyle/>
                    Home
                </li>
                <li className="sidebarListItem">
                    <Timeline/>
                    Analytics
                </li>
                <li className="sidebarListItem">
                    <TrendingUp/>
                    Sales
                </li>
            </ul>
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <LineStyle/>
                    Home
                </li>
                <li className="sidebarListItem">
                    <Timeline/>
                    Analytics
                </li>
                <li className="sidebarListItem">
                    <TrendingUp/>
                    Sales
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}
