import logo from "./logo.svg";
import "./App.css";
import C1 from "./c1";

function App() {
  const c = [
    {
      im: "https://images5.alphacoders.com/329/329544.jpg",
      title: "IRON MAN",
      st: "SUPER-HERO",
      desc: "------",
    },
    {
      im: "https://wallpaperaccess.com/full/1561874.jpg",
      title: "BATMAN",
      st: "SUPER-HERO",
      desc: "------",
    },
    {
      im: " https://wallpapercave.com/wp/ltg7wdw.jpg",
      title: "THOR",
      st: "SUPER-HERO",
      desc: "------",
    },
    {
      im: "https://cdn.wallpapersafari.com/86/83/c7nmps.jpg",
      title: "SPIDERMAN",
      st: "SUPER-HERO",
      desc: "------",
    },
    {
      im: "https://wallpaperaccess.com/full/1561771.jpg",
      title: "DEADPOOL",
      st: "SUPER-HERO",
      desc: "------",
    },
  ];
  return (
    <div className="container">
      {c.map((data, index) => (
        <C1 im={data.im} title={data.title} st={data.st} desc={data.desc} />
      ))}
    </div>
  );
}

export default App;
