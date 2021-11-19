import "./works.scss";
import { useState } from "react";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "https://i.pinimg.com/originals/d5/aa/10/d5aa106c815759ed98c2733b73128522.png",
      title: "Terminator Genisys",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://w0.peakpx.com/wallpaper/332/978/HD-wallpaper-terminator-genisys-arnold-terminator-movie-genisys.jpg",
    },
    {
      id: "2",
      icon: "https://i.pinimg.com/originals/d5/aa/10/d5aa106c815759ed98c2733b73128522.png",
      title: "Dark Fate",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://besthqwallpapers.com/Uploads/24-11-2019/113001/thumb2-terminator-dark-fate-2019-4k-promotional-materials-poster.jpg",
    },
    {
      id: "3",
      icon: "https://i.pinimg.com/originals/d5/aa/10/d5aa106c815759ed98c2733b73128522.png",
      title: "The Terminator",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
      "https://occ-0-1723-1722.1.nflxso.net/art/4ed34/98ee425f0e89c39a1adadc499cbfdffb1584ed34.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick("right")}
      />
    </div>
  );
}
