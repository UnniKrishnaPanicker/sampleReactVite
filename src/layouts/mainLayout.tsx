const MainLayout = ({ children }) => {
  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: "0",
          width: "100%",
          left: "0",
          height: "50px",
          textAlign: "left",
          backgroundColor: "beige",
        }}
      >
        <div style={{ padding: "8px 20px", fontSize: "22px" }}>Trinity</div>
      </div>
      <div style={{ marginTop: "50px" }}>{children}</div>
    </div>
  );
};

export default MainLayout;
