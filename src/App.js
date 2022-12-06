import { Route, Routes } from "react-router-dom";
import { RegisterForm } from "./pages/RegisterForm";
import "./App.css";
import Index from "./pages/Index";
import { LoginForm } from "./pages/LoginForm";
import { MenuHighPass } from "./pages/MenuHighPass";
import { UserCrudOptions } from "./components/UserCrudOptions";
import { CountryCrudOptions } from "./components/CountryCrudOptions";
import { HelpCrudComponent } from "./components/helpCrudComponent";
import { CategoriesCrudOptions } from "./components/CategoriesCrudOptions";
import { ProjectCrudOptions } from "./components/ProjectCrudOptions";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/register" element={<RegisterForm />} />
          <Route exact path="/login" element={<LoginForm />} />
          <Route exact path="/menu" element={<MenuHighPass />}>
            <Route path="useroptions" element={<UserCrudOptions />} />
            <Route path="countryoptions" element={<CountryCrudOptions />} />
            <Route path="projects" element={<ProjectCrudOptions />} />
            <Route
              path="categoriesoptions"
              element={<CategoriesCrudOptions />}
            />
            <Route path="aboutus" element={<HelpCrudComponent />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
