import { connect } from "react-redux";

const ComC = ({ usersUi }) => {
  const { username, phone } = usersUi;
  return (
    <div>
      Com C
      <br />
      <p className="typing">
        Username - {username}, Phone -{phone}.
      </p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  usersUi: state?.usersRoot,
});

export default connect(mapStateToProps, null)(ComC);
