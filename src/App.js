import Product from "./components/Product";

function App(props) {
  return (
    <div>
      <h2>Let's get started!</h2>
      <Product
      title={product[0].title}
      amount={product[0].amount}
      date={product[0].date}
      ></Product>
            <Product
      title={product[1].title}
      amount={product[1].amount}
      date={product[1].date}
      ></Product>
    </div>
  );
}

export default App;
