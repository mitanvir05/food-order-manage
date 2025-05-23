import "./App.css";
import Header from "./Header";
import OrderPage from "./pages/OrderPage";

function App() {
  return (
    <div className="container mx-auto text-white px-4 h-screen flex flex-col">
     <Header/>
     <OrderPage/>
    </div>
  );
}

export default App;
