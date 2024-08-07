import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../../Component/NavBar";
import Footer from "../../Component/Footer";
import { getSingleProduct } from "../../Config/firebase";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function Detail() {
  const { id } = useParams<{ id: string }>();
  const [singleProduct, setSingleProduct] = useState<any>({});

  // const navigate = useNavigate();

  useEffect(() => {


    getSingleProduct(id).then((data:any) => {

      setSingleProduct(data)
    })










    // const fetchSingleProduct = async () => {
    //   try {
    //     const productData = await getSingleProduct(id);
    //     setSingleProduct(productData);
        
    //   } catch (error) {
    //     console.error("Error fetching product: ", error);
    //   }
    // };
    
    // fetchSingleProduct();
    // if (id) {
    // }
  }, []);

  
  if (!singleProduct) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-row gap-4">
          <div className="w-24 h-24 rounded-full animate-spin border-y border-solid border-cyan-500 border-t-transparent shadow-md"></div>

          <div className="w-24 h-24 rounded-full animate-spin border-y-2 border-solid border-violet-500 border-t-transparent shadow-md"></div>

          <div className="w-24 h-24 rounded-full animate-spin border-y-4 border-solid border-pink-500 border-t-transparent shadow-md"></div>

          <div className="w-24 h-24 rounded-full animate-spin border-y-8 border-solid border-green-500 border-t-transparent shadow-md"></div>
        </div>
      </div>
    );
  }
  
  const { title, description, price, image } = singleProduct;
  
  return (
    <>
      <div className="p-5 mb-28 ">
        <NavBar />
        <div key={id} className="flex gap-5  justify-between h-screen">
          <div>
            <div className=" mb-5 rounded-sm h-96 flex justify-center w-[800px] bg-black">
              {image && <img className="" src={image} alt={title} />}
            </div>
            <div className="text-[#002f34] py-3 mb-5 w-[800px] px-3 rounded-sm border">
              <p className="text-4xl mb-3 font-extrabold">Rs.{price}</p>
              <h1 className="text-2xl font-bold">{title}</h1>
              <div className="flex items-center justify-between">
                <h1 className="flex justify-start items-end text-lg text-gray-700  ">
                  Karachi
                </h1>
                <h1 className="flex justify-start items-end text-lg text-gray-700 pb-4">
                  6 days ago
                </h1>
              </div>
              {/* <p>{description}</p> */}
            </div>
            <div className="text-[#002f34] mb-72 p w-[800px] px-3 rounded-sm border">
           <h1 className="text-3xl font-bold my-3">Description</h1>
              <p className="pb-3">{description}</p>
            </div>
          </div>
          <div className="border p-4  w-1/3 h-72 rounded">
            <div className="flex  gap-4">
              <div className="w-20 flex  overflow-hidden  h-20 rounded-full flex-col justify-center items-center">
                <img
                  className=""
                  src="https://images.olx.com.pk/thumbnails/457724647-400x300.webp"
                  alt=""
                />
              </div>
              <div className="mb-8">
                <h1 className="font-semibold">Muhammad Ali</h1>
                <h1>Member since Aug 2012</h1>
                <h1 className="flex items-center gap-2 font-medium">
                  <a href="#">See profile</a>
                  <svg
                    className="text-2xl "
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="non-zero"
                      d="M13.069 5.157L8.384 9.768a.546.546 0 0 1-.768 0L2.93 5.158a.55.55 0 0 0-.771 0a.53.53 0 0 0 0 .759l4.684 4.61a1.65 1.65 0 0 0 2.312 0l4.684-4.61a.53.53 0 0 0 0-.76a.55.55 0 0 0-.771 0"
                    />
                  </svg>
                </h1>
              </div>
            </div>
            <div className="flex-cols justify-center  text-center">
              <div>
                <button className="bg-[#002f34] mb-3 text-semibold p-2 rounded-sm w-full text-white ">
                  Show Phone Number
                </button>
              </div>
              <button  className=" border-2 text-[#002f34] text-bold border-[#002f34] p-2 rounded-sm w-full ">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
