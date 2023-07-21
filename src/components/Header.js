import hrclogo from "./hrclogo.svg";
import abclogo from "./abclogo.svg";

function Header() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        paddingTop: "5px",
        paddingLeft: "5px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ textAlign: "left" }}>
          <img src={abclogo} alt="abclogo" width={"150px"} />
        </div>
        <div style={{ textAlign: "center", flex: "1" }}>
          <img src={hrclogo} alt="hrclogo" style={{ width: "150px" }} />
        </div>
      </div>
      <h1
        style={{
          fontSize: "25px",
          height: "15px",
          color: "#db4437",
          marginTop: "5px",
        }}
      >
        Invoice List
      </h1>
    </div>
  );
}

export default Header;
