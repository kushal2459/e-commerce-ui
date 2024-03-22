import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom"
import { useContext } from "react";
import myContext from '../context/myContext'

const DetailedProduct = () => {

  const context = useContext(myContext);
    const { loading, setLoading } = context;

  const { id } = useParams();
  const [ product, setProduct ] = useState(null);


  const getProductData = async () => {
    setLoading(true);
    try {
        const response = await fetch(`http://your-api-url/products/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch product data');
        }
        const productTemp = await response.json();
        setProduct(productTemp);
        setLoading(false);
    } catch (error) {
        console.log(error);
        setLoading(false);
    }
};

useEffect(() => {
  getProductData()
}, [])
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try{
  //       const response = await fetch(`http://localhost:4000/Product/${id}`)
  //       if(response.status !== 200){
  //         throw new Error("Failed to fetch product data");
  //       }
  //       const data = await response.json();
  //       setProduct(data);
  //     }catch(error){
  //       console.error("Error: ", error);
  //     }
  //   };

  //   fetchData();
  //   return () => {
  //     // Cleanup code if needed
  //   };
  // },[id]);

  // if(!product){
  //   return <div>Loading...</div>
  // }


  const img = [
    "https://thingslinker.com/upload_images/thingslinker_tl01_esp8266/3.png",
    "https://thingslinker.com/upload_images/thingslinker_tl01_esp8266/1.png",
    "https://thingslinker.com/upload_images/thingslinker_tl01_esp8266/4.png",
    "https://thingslinker.com/upload_images/thingslinker_tl01_esp8266/5.png",
    "https://thingslinker.com/upload_images/thingslinker_tl01_esp8266/6.png",
    "https://thingslinker.com/upload_images/thingslinker_tl01_esp8266/8.png",
    "https://thingslinker.com/upload_images/thingslinker_tl01_esp8266/9.png",
  ];

  return (
    <Layout>
      <section className="py-5 lg:py-16 bg-gray-50">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="flex flex-wrap mb-24 -mx-4">
            <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
              <div className="">
                <div className="">
                  <img
                    className=" w-full lg:h-[39em] rounded-lg bg-black "
                    src={product.img}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2">
              <div className="lg:pl-20">
                <div className="mb-6 ">
                  <h2 className="max-w-xl mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300"></h2>
                  <div className="flex flex-wrap items-center mb-6">
                    <p>Title: {product.name}</p>
                  </div>
                  <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                    <span>Price</span> | Ratings
                  </p>
                </div>
                <hr />
                <div className="mb-6">
                  <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400"></h2>
                  <p>Status: Available</p>
                  <p>
                    Key Features: <br />
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Culpa, explicabo enim ratione voluptatum at cupiditate
                    delectus nemo dolorum officia esse beatae optio ut mollitia
                    sit omnis, possimus nesciunt voluptas natus! Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Provident rerum
                    ad rem reprehenderit qui, omnis nam distinctio, dignissimos
                    nisi quidem aliquam, sapiente delectus commodi! Perspiciatis
                    provident illo autem quidem ad! Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Beatae reiciendis eum dolorum
                    cupiditate{" "}
                  </p>
                </div>
                <div className="mb-6 " />
                <div className="flex flex-wrap items-center mb-6">
                  <button>Add to Cart</button>
                  <button>Add to Cart</button>
                  <button>Add to Cart</button>
                </div>
                <div>
                  <p>Lorem ipsum dolor, sadipisicing elit. Iste, quasi?</p>
                  <p>Lorem ipsum dolor,  adipisicing elit. Iste, quasi?</p>
                </div>
              </div>
            </div>
          </div>
          <div id="reviews">
            <div>
            <h1>
              <button>Headings</button>
                <span> | </span>
              <button>Reviews</button>
            </h1>
            </div>
            <div>
              <h2>Specifications</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam vitae assumenda mollitia? Natus reiciendis magni quas qui culpa minima vel.</p>
            </div>
            <div>
              <h2>Ovwrview</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima ex quaerat at facilis fugiat deleniti error, cumque iure accusamus, dicta amet dolor consectetur molestias. Modi distinctio officiis ratione officia, commodi reprehenderit cumque veritatis architecto nulla animi sit dolorum cum praesentium voluptatibus iste vero ut delectus facere deserunt incidunt cupiditate? Ullam.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi laboriosam sit aliquid non numquam? Nam inventore eveniet illum fugit unde ullam quod cupiditate quasi mollitia temporibus omnis commodi cum assumenda aperiam voluptates, nostrum, minima officiis obcaecati! Nisi eaque possimus vero doloremque corrupti, aspernatur repudiandae, aliquid distinctio, ex delectus exercitationem iure?</p>
            </div>
          </div>
        </div>
        {/* similar items  */}
      </section>
    </Layout>
  );
};

export default DetailedProduct;
