import type { Material } from "../types";

interface Articles {
  items: Material[];
}

export const Articles = ({ items }: Articles) => {
  return (
    <>
      {items.map((item) => (
        <section key={item.href}>
          <h2>{item.title}</h2>
          <div>
            <p>{item.body}</p>
          </div>
        </section>
      ))}
    </>
  );
};
