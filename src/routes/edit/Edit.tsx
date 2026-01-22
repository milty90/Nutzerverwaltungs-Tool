import Card from "@mui/material/Card";

function Edit() {
  return (
    <>
      <h1>Edit Page</h1>
      <div
        style={{
          backgroundColor: "#F8FAFC",
          border: "10px solid #6366F1",
          color: "#1E293B",
          padding: "1rem",
        }}
      >
        Gray + Indigo
      </div>
      <div
        style={{
          backgroundColor: "#0F172A",
          border: "10px solid #38BDF8",
          color: "#698fcd",
          padding: "1rem",
        }}
      >
        Gray + Indigo
      </div>
      <Card style={{ marginTop: "1rem", padding: "1rem" }}>
        first MUI Card component
      </Card>
      <Card
        style={{
          marginTop: "1rem",
          padding: "1rem",
          backgroundColor: "#0F172A",
          color: "#698fcd",
        }}
      >
        MUI Card component with custom styles.
      </Card>
      <Card
        style={{
          marginTop: "1rem",
          padding: "1rem",
          backgroundColor: "#E0E7FF",
          color: "#3730A3",
        }}
      >
        another MUI Card component with custom styles.
      </Card>

      <Card
        style={{
          marginTop: "1rem",
          padding: "1rem",
          backgroundColor: "#0F172A",
          color: "#A5B4FC",
        }}
      >
        <img
          className="sidebar-icon"
          src="./public/user-plus.svg"
          alt="User Plus Icon"
          style={{ verticalAlign: "middle", marginRight: "0.5rem" }}
        />
        last MUI Card component with custom styles.
      </Card>
      <div
        className="custom-card"
        style={{
          marginTop: "1rem",
          background:
            "linear-gradient(0deg, #0F172A, #0F172A  70%, white 49%, white 51%)",
        }}
      >
        <div className="image-container">
          <img
            src={"https://randomuser.me/api/portraits/men/1.jpg"}
            alt="User portrait"
          />
        </div>
        <div className="user-info">
          <div className="name-container">
            <p className="user-name">Max Mustermann</p>
          </div>
          <div className="description-container">
            <p className="user-description" style={{ color: "#698fcd" }}>
              Ipsum dolor sit amet.
            </p>
            <p className="user-description" style={{ color: "#698fcd" }}>
              Ipsum dolor sit amet.
            </p>
            <p className="user-description" style={{ color: "#698fcd" }}>
              Ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Edit;
