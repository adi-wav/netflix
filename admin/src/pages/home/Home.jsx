import Chart from "../../components/charts/Chart"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import "./home.css"
import { userData } from "../../dummyData"
import WidgetSm from "../../components/widgetSm/WidgetSm"
import WidgetLg from "../../components/widgetLg/WidgetLg"
import { useState, useEffect, useMemo } from "react";
import axios from "axios";

export default function Home() {
  const MONTHS = useMemo(
    ()=> [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Nov",
    "Dec",
  ],
  []);

  const [userStats, setUserStats] = useState([]);

  useEffect(()=>{
    const getStats = async ()=>{
      try{
        const res = await axios.get("/users/stats", {
          headers:{
            token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODZkMTkzZjkxNjU0NzJjMGFjNGEyZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NzIzMTY4NiwiZXhwIjoxNjg3NjYzNjg2fQ.h0GffpDR1YoVwyVm5fguk5mZh8WlMxjZZmvM8hd0Jnw"
          },
        });
        // setUserStats(res.data);
        const statsList = res.data.sort(function(a, b) {
          return a._id - b._id;
        });
        statsList.map(item=> setUserStats(prev=>[...prev,{name:MONTHS[item._id-1], "New User": item.total}]))
      }
      catch(err){
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);
  console.log(userStats);
  return (
    <div className="home">
      <FeaturedInfo/>
      <Chart data={userStats} title="User Analytics" grid dataKey="New User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}
