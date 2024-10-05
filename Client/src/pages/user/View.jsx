import React from "react";

import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import { red } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import FavoriteIcon from "@mui/icons-material/Favorite";
import SpeedIcon from '@mui/icons-material/Speed';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ChatIcon from '@mui/icons-material/Chat';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const view = () => {
  const [add,setAdd]=React.useState("Add to cart");
    const [liked, setLiked] = React.useState(false); 
    const handleLikeClick = () => {
        setLiked(!liked);
    };
    const handleAddBtn = () => {
      setAdd("Added");
      setTimeout(() => setAdd("Add to cart"), 2000);
    };
    return (
        <div className="mt-16  lg:h-dvh p-3 ">
            <div
                className="bg-black md:flex justify-between h-auto lg:h-5/6 lg:w-5/6 mx-auto rounded-3xl text-xs sm:text-sm"
                style={{ boxShadow: "inset -1px -1px 8px 2px rgb(100 100 100)" }}
            >

                <div className="md:basis-2/3 rounded-3xl overflow-hidden relative">
                    <div className="absolute flex justify-center z-30 top-2 right-4">
                        <div onClick={handleLikeClick} >
                            <FavoriteIcon sx={{ fontSize: "2rem", color: liked ? red[600] : "white" }} />
                        </div>
                    </div>
                    <img
                        src="https://tse4.mm.bing.net/th?id=OIP.PYG-v0wHCTHkZ7eNS4kIPQHaEK&pid=Api&P=0&h=180"
                        alt=""
                        className="h-2/3 w-full"
                    />
                    <div className="h-1/2 w-full flex flex-between mt-1">
                        <img
                            src="https://tse3.mm.bing.net/th?id=OIP.YJsJxpXBT0JxF4Y1SO2rqgHaD7&pid=Api&P=0&h=180"
                            alt=""
                            className=" w-1/2 mr-1"
                        />
                        <img
                            src="https://tse4.mm.bing.net/th?id=OIP.zapgajR6OL8TvcPhktWeAQHaEK&pid=Api&P=0&h=180"
                            alt=""
                            className=" w-1/2 "
                        />
                    </div>
                </div>
                <div className=" w-full md:w-2/5 ml-2  p-4 text-white flex flex-col justify-between">
                <div>

              
                    <div className="flex justify-between">
                        <p className="text-xl md:text-3xl font-bold">brand</p>
                       
                    </div>

                    <p>brand</p>
                    </div>
                    <p className="text-justify ">
                        description:  lorem espen rythf kkmfk enrjn ckokwe nejnfck cj c erjjf
                        cjlmlkmcl rvgrfbfg fbgb
                    </p>
                    <div>

                    <p>Additional information : </p>
                    <p className=" py-1  w-fit"><CalendarMonthOutlinedIcon  sx={{color:"rgb(150 150 150)" ,marginRight:".5rem"}}></CalendarMonthOutlinedIcon> model: 2AK00</p>
                    <p className=" py-1  w-fit "><LocalGasStationIcon  sx={{color:"rgb(150 150 150)" ,marginRight:".5rem"}}></LocalGasStationIcon> fuel type: petrol</p>
                    <p className=" py-1  w-fit">< AirlineSeatReclineExtraIcon sx={{color:"rgb(150 150 150)" ,marginRight:".5rem"}}></AirlineSeatReclineExtraIcon> seats: 2</p>
                    <p className=" py-1  w-fit "><TwoWheelerIcon sx={{color:"rgb(150 150 150)" ,marginRight:".5rem"}}></TwoWheelerIcon> mileage: 60</p>
                    <p className=" py-1  w-fit"><MonetizationOnIcon  sx={{color:"rgb(150 150 150)" ,marginRight:".5rem"}}></MonetizationOnIcon> rent: 900rs per day</p>
                    <p className=" py-1 w-fit "><SpeedIcon sx={{color:"rgb(150 150 150)" ,marginRight:".5rem"}}></SpeedIcon> distance travelled :11900 kms</p>
                    </div>
                     <div>


                    <button className="w-full rounded-full bg-rose-300 py-2 hover:font-bold hover:bg-rose-400 font-semibold" onClick={handleAddBtn} style={{backgroundColor:add==="Added"?"rgb(251 113 133)":""}}>
                       <AddShoppingCartIcon></AddShoppingCartIcon> {add}
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default view;
