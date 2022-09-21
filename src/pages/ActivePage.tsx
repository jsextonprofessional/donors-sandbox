import Content from "../components/Content";
import Footer from "../components/Footer";

export const ActivePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Content />
      <Footer /> 
    </div>
);
}

export default ActivePage;