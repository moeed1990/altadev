import { BoxesLoader } from "react-awesome-loaders";
import './Loader.css'
export const Loader = () => {
  return (
    <>
      <div className="loader w3-animate-zoom">
          <h2>AltaDev.ca</h2>
          <BoxesLoader
            boxColor={"#99D8DD"}
            style={{ marginBottom: "20px" }}
            desktopSize={"128px"}
            mobileSize={"80px"}
          />
      </div>
    </>
  );
};