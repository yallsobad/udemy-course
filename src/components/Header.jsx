import PropTypes from "prop-types";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h2>Feedback UI </h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback UI",
};

Header.propTypes = {
  text: PropTypes.string,
};
export default Header;
