import {} from "antd";
import './App.css';
import AppHeader from "./Components/AppHeader";
import AppFooter from "./Components/AppFooter";
import SideMenu from "./Components/SideMenu";
import PageContent from "./Components/PageContent";

function App() {
  return <div className="App">
    <AppHeader/>
    <Space>
      <SideMenu></SideMenu>
      <PageContent></PageContent>
    </Space>
    <AppFooter/>
  </div>;
}
export default App
