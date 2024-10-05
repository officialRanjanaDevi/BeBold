import * as React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import './ProductCard.css';
export default function ProductCard() {
  const [liked, setLiked] = React.useState(false);
  const [add,setAdd]=React.useState("Add to cart");

  const handleLikeClick = () => {
    setLiked(!liked);
  };
  const handleAddBtn = () => {
    setAdd("Added");
    setTimeout(() => setAdd("Add to cart"), 2000);
  };


  return (
    <Card
      sx={{
        maxWidth: "400px",
        minHeight: "400px",
        margin: ".5rem",
        borderRadius: "15px",
        boxShadow: "inset 0px 1px 6px 1px rgb(220 220 220)",
      }}
      className="relative z-10 group bg-neutral-200 border-2 border-neutral-300"
    >
      <div className="absolute flex justify-center z-30 top-2 right-0 ">
        <div onClick={handleLikeClick} className="p-2" aria-label="add to favorites">
          <FavoriteIcon sx={{ color: liked ? red[600] : "white" }} />
        </div>
      </div>
      <Link to="/view"  className="hover:text-black">
        <div className="overflow-hidden h-3/4 p-1 bg-neutral-200">
          <CardMedia
            component="img"
         
            image={"https://tse2.mm.bing.net/th?id=OIP.gliyjHYjQD6TFPEaSmZ0rQHaEo&pid=Api&P=0&h=180"}
            alt={ "Bike"}
            sx={{ maxHeight: "600px", borderRadius: "15px" }}
            className="h-full group-hover:scale-95 transition-transform duration-1000 ease-in-out "
          />
        </div>
      </Link>
      <CardContent  sx={{ borderRadius: "15px" }} className="bg-neutral-200">
        <div className="flex justify-between ">
          <h1>{ "Bike Title"}</h1>
         </div>

        
        <p>{ "Bike description goes here."}</p>
        <p>price { "900"} Rs</p>

        <div className=" border-0 absolute w-full left-0 -bottom-8 duration-500 group-hover:-translate-y-12 text-center ">
          <div className="border-0 boder-black absolute -z-10  w-full h-16 opacity-0 duration-500 group-hover:opacity-100 group-hover:bg-black" style={{backgroundColor:add==="Added"?"rgb(253 164 175)":"black"}}>
            
          </div>

          <p
            onClick={handleAddBtn}
            className=" w-full hover:scale-105 duration-300 ease-in-out text-white font-bold pt-2"
            
          >
            {add}
          </p>
        </div>

        

      </CardContent>

    </Card>
  );
}
