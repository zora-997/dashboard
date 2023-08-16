import MainRoutes from "./component/routes/Routes";
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}

export default App;
