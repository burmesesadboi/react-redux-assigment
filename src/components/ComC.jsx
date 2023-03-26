import { connect } from "react-redux";
import { getProducts } from "../store/actions/productsAction";
import { useEffect } from "react";

const ComC = ({ products, FetchGetProduct }) => {
  useEffect(() => {
    FetchGetProduct();
  }, []);

  const handleAddToCart = () => {
    alert("Item has been added to your cart ... ");
  };

  return (
    <>
      <h1>Component C ...</h1>
      <br />

      <div className="container product-container">
        <div className="row">
          {products &&
            products.map((product, index) => (
              <div key={index} className="col">
                <div className="card" style={{ width: "17rem" }}>
                  <img
                    className="card-img rounded"
                    src={product.thumbnail}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>

                    <button
                      onClick={handleAddToCart}
                      className="btn btn-success btn-bot"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  products: state?.productsRoot.products,
});

const mapDispatchToProps = {
  FetchGetProduct: getProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ComC);
