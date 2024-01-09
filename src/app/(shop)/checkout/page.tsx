import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";

const productsCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function CheckOutPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Checkout" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Edit cart</span>
            <Link href="/cart" className="underline mb-5">
              Continue Editing
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
                  <p>${product.price} * 3</p>
                  <p className="font-semibold">Subtotal: {product.price * 3}</p>
                  <div className="flex flex-col sm:flex-row sm:gap-5 items-start sm:items-end sm:justify-center mt-3 "></div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-xl shadow-xl p-7">
              <h2 className="text-2xl mb-2">Address Shipping</h2>
              <div className="mb-10">
                <p className="text-xl">Maxi Vilariño</p>
                <p>Estanque de Abaixo 6 4A</p>
                <p>36600 Vilagarcía de Arousa</p>
                <p>Pontevedra</p>
                <p>Spain</p>
              </div>
              {/* Divaider */}
              <div className="w-full h-0.5 rounded bg-gray-200 mb-10"></div>
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
                {/*Disclaimer*/}
                <span className="text-xs">
                  By placing your order, you agree to Zero's privacy notice and
                  conditions of use.
                </span>
                <Link
                  href="/orders/123"
                  className="flex btn-primary justify-center"
                >
                  Place Order
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
