import "./Sidebar.css";
import materials from "../../data/materials.json";
import type { Material } from "../../types";

export const Sidebar = () => {
  return (
    <div className="Sidebar">
      <nav>
        <ul>
          {materials.map((item: Material) => (
            <li key={item.href}>
              <a href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
