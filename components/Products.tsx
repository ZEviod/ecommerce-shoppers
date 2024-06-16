import Image from "next/image";
import React from "react";
import { Item } from "../type";
import { GoPlus } from "react-icons/go";
import { BsStarFill } from "react-icons/bs";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/shopperSlice";

interface Props {
  productData: Item;
}

const Products = ({ productData }: any) => {
  const dispatch = useDispatch();
  return (
    <div className="py-6 px-4 grid grid-cols-4 gap-4">
      {productData.map((item: Item) => (
        <div key={item._id} className="border-[1px] border-gray-200 mb-6 group">
          <div className="w-full h-[350px] overflow-hidden p-1">
            <Image
              className="w-full h-full object-contain scale-100 group-hover:scale-105 duration-300"
              width={300}
              height={250}
              src={item.image}
              alt="itemImage"
            />
          </div>
          {/* Description starts */}
          <div className="px-2 py-2 flex flex-col justify-center">
            <div className="flex justify-between py-2">
              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      _id: item._id,
                      title: item.title,
                      description: item.description,
                      image: item.image,
                      price: item.price,
                      oldPrice: item.oldPrice,
                      quantity: 1,
                      brand: item.brand,
                      category: item.category,
                    })
                  )
                }
                className="w-20 h-9 bg-blue text-white rounded-full flex gap-1 items-center justify-center hover:bg-hoverBg duration-300"
              >
                <span>
                  <GoPlus />
                </span>
                Add
              </button>
              <Link
                href={{
                  pathname: `product/${item._id}`,
                  query: {
                    _id: item._id,
                    title: item.title,
                    description: item.description,
                    price: item.price,
                    oldPrice: item.oldPrice,
                    isNew: item.isNew,
                    image: item.image,
                    brand: item.brand,
                    category: item.category,
                  },
                }}
                as={`product/${item._id}`}
              >
                <button className="w-20 h-9 bg-white border-[1px] border-black text-black rounded-full flex gap-1 items-center justify-center hover:bg-hoverBg duration-300">
                  <span>
                    <GoPlus />
                  </span>
                  Details
                </button>
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <p className="font-titleFont text-lg text-green-700 font-semibold">
                Now ${item.price}
              </p>
              <p className=" text-gray-500 line-through decoration-[1px]">
                Now ${item.oldPrice}
              </p>
            </div>
            <p className="text-lg font-semibold py-2">
              {item.title.substring(0, 23)}
            </p>
            <p className="text-base text-zinc-500">
              {item.description.substring(0, 80)}...
            </p>
            <div className="flex gap-2 item-center text-sm mt-2">
              <div className="flex text-sm gap-1">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <p>25</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
