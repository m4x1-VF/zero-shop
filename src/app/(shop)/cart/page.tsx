import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";

const productsCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function CartPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Carrito" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Your cart is empty</span>
            <Link href="/" className="underline mb-5">
              Continue Shopping
            </Link>

            {/* Items */}
            {productsCart.map((product) => (
              <div className="flex mb-5" key={product.slug}>
                <Image
                  src={`/products/${product.images[0]}`}
                  width={100}
                  height={100}
                  alt={product.title}
                  className="mr-5 rounded w-[100px] h-[100px]"
                />
                <div>
                  <p>{product.title}</p>
                  <p>${product.price}</p>
                  <div className="flex flex-col sm:flex-row sm:gap-5 items-start sm:items-end sm:justify-center mt-3 ">
                    <QuantitySelector quantity={3} />
                    <button className="underline mt-3">Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-xl shadow-xl p-7">
              <h2 className="text-2xl mb-2">Order Summary</h2>
              <div className="grid grid-cols-2">
                <span>No. Products</span>
                <span className="text-right">3 items</span>

                <span>Sales Tax</span>
                <span className="text-right">$ 100</span>

                <span>Subtotal</span>
                <span className="text-right">$ 100</span>

                <span className="text-xl font-bold mt-5">Total:</span>
                <span className="text-right mt-5 text-2xl font-bold">
                  $ 100
                </span>
              </div>
              <div className="mt-5 mb-2 w-full">
                <Link
                  href="/checkout/address"
                  className="flex btn-primary justify-center"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
