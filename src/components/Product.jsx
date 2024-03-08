import styles from "./Product.module.css";

export function Product({ product }) {
  console.log(product);
  return (
    <section className={styles[product.category.toLowerCase().replace(/ & /g, "")]}>
      <h2>{product.title}</h2>
      <h4>{product.category}</h4>
      <p>{product.description}</p>
    </section>
  );
}
