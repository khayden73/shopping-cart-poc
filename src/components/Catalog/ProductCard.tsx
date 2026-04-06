import styles from "./ProductCard.module.css";
import type { Product } from "../../lib/types.ts";
// import { Quantity } from "./Quantity.tsx";
import { Link } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface ProductCardProps {
  product: Product;
}

const muiCard = true;

function ProductCard({ product }: ProductCardProps) {
  const { image } = product;
  const imagePath = image
    ? `/products/${image}`
    : "/products/no-image-icon-15.png";

  if (muiCard) {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea
          sx={{
            alignItem: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          component={Link}
          to={`/product/${product.productId}`}
        >
          <CardMedia
            component="img"
            sx={{
              width: "100%",
              maxWidth: "250px",
              objectFit: "contain",
              maxHeight: "256px",
              aspectRatio: "4/3",
              alignSelf: "center",
            }}
            image={imagePath}
            title={product.name}
          />
          <CardContent>
            <Typography gutterBottom variant="body2" component="div">
              {product.name}
            </Typography>
          </CardContent>
          {/*<CardActions>*/}
          {/*  <Button size="small">view</Button>*/}
          {/*</CardActions>*/}
        </CardActionArea>
      </Card>
    );
  }

  return (
    <Link to={`/product/${product.productId}`}>
      <figure className={styles.productCard}>
        <section className={styles.thumbnail}>
          <img src="/products/t-shirt-1.png" alt={product.name} />
        </section>
        <figcaption>{product.name}</figcaption>
      </figure>
    </Link>
  );
}

export { ProductCard };
