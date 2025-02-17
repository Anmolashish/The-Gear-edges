import { getProductBySlug } from "@/ProductContext/getProductBySlug";
import ProductHandler from "@/productComponents/ProductHandler";

export async function generateMetadata({ params }) {
  // Fetch product data based on slug
  const product = getProductBySlug(params.slug);
  console.log(product);
  if (!product) {
    return {
      title: "Product Not Found",
      description: "The product you are looking for does not exist.",
    };
  }

  // Return dynamic metadata
  return {
    title: product.name, // Dynamic title
    description: product.description, // Dynamic description
    openGraph: {
      title: product.name,
      description: product.description,
      images: [
        {
          url: product.image, // Dynamic image URL
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description,
      images: [product.image], // Dynamic image URL
    },
  };
}

export default function Page({ params }) {
  return (
    <div className="product">
      <ProductHandler slug={params.slug} />
    </div>
  );
}
