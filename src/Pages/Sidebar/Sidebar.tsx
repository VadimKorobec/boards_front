import "./Sidebar.css";
import materials from "../../data/materials.json";

interface Material {
  title: string;
  body: string;
  href: string;
}

export const Sidebar = () => {
  return (
    <div className="Sidebar">
      <nav>
        <ul>
          {materials.map((item: Material, idx) => (
            <li key={idx}>
              <a href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
