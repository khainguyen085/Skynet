import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import { useState, useEffect } from "react";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "t800",
      title: "T-800",
    },
    {
      id: "t1000",
      title: "T-1000",
    },
    {
      id: "tx",
      title: "T-X",
    },
    {
      id: "t3000",
      title: "T-3000",
    },
    {
      id: "rev9",
      title: "Rev-9",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "t800":
        setData(featuredPortfolio);
        break;
      case "t1000":
        setData(webPortfolio);
        break;
      case "tx":
        setData(mobilePortfolio);
        break;
      case "t3000":
        setData(designPortfolio);
        break;
      case "rev9":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Models</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
