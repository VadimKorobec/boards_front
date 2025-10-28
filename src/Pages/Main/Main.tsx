import "./Main.css";
import materials from "../../data/materials.json";
import { Articles } from "../../components/Articles";

export const Main = () => {
  return (
    <div className="Main">
      <Articles items={materials}/>
    </div>
  );
};
