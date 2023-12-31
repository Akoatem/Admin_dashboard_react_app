import { ArrowDownward, ArrowUpward } from "@mui/icons-material"
import "./featuredinfo.css"

export default function Featuredinfo() {
  return (
    <div className="featured">
       <div className="featuredItem">
       <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
        <span className="featuredMoney">$2,400</span>
        <span className="featuredMoneyRate">
          -12.4
        <ArrowDownward className="featuredIcon negative"/>
        </span>
       </div>
       <span className="featuredSub">Compare to last month</span>
       </div>
       <div className="featuredItem">
       <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
        <span className="featuredMoney">$5,400</span>
        <span className="featuredMoneyRate">
          -9.4
        <ArrowDownward className="featuredIcon negative"/>
        </span>
       </div>
       <span className="featuredSub">Compare to last month</span>
       </div>
       <div className="featuredItem">
       <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
        <span className="featuredMoney">$12,400</span>
        <span className="featuredMoneyRate">
          +2.4
        <ArrowUpward className="featuredIcon positive"/>
        </span>
       </div>
       <span className="featuredSub">Compare to last month</span>
       </div>
    </div>
  )
}
