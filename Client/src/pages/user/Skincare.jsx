import React,{useState,useEffect} from 'react'
import ProductCard from '../../components/user/ProductCard/ProductCard'
import LoadingCard from '../../components/user/LoadingCard/LoadingCard'
const Skincare = () => {
  const [productData, setProductData] = useState([]);
  const loadData = async () => {
    try {
      const category="Skincare";
      let res = await fetch(`http://localhost:3000/product/${category}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let response = await res.json();
      setProductData(response);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className='mt-20 p-4'>
     <div className="grid lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 mx-autoClass justify-items-center ">
     {productData.length > 0 ? (
          productData.map((data, index) => <ProductCard key={index} data={data} />)
        ) :(
          Array.from({ length: 8 }).map((_, index) => <LoadingCard key={index} />)
        )}
      </div>
    </div>
  )
}

export default Skincare
