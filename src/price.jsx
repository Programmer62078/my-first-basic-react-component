function Price({ oldprice, newprice }) {
  // Convert prices to numbers for comparison
  let oldPriceNum = parseFloat(oldprice.replace(/[^0-9.-]+/g, ""));
  let newPriceNum = parseFloat(newprice.replace(/[^0-9.-]+/g, ""));

  // Determine styles dynamically using a basic conditional algorithm
  let styles = {
    old: { textDecoration: "line-through" }, // Style for old price
    new: {
      fontWeight: "bold",
    },
    div: {
      backgroundColor: "goldenrod",
      height: "30px",
      borderBottomLeftRadius: "14px",

      borderBottomRightRadius: "4px",
    },
  };

  return (
    <div style={styles.div}>
      <span style={styles.old}>{oldprice}</span>
      {"\u00A0".repeat(3)} {/* Adds 3 non-breaking spaces */}
      <span style={styles.new}>{newprice}</span>
    </div>
  );
}
export default Price;
// price - phir product - phir producttab - phir App.jsx dekho
