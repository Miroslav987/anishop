
import Image from "next/image";
import Link from "next/link";

export default function CardOrderingBasket({product ,key}:any) {
  console.log(product);
  
  return (<>
     <Link key={key} className="w-full flex justify-start gap-[10px] md:gap-[30px] pb-[20px] border-b-2" href={`/carddetails/${encodeURIComponent(product.id)}`}>

      <div className="h-[100px]">
        <img className="w-[100px]" src={product.img} alt="" />
        </div>
        <div className="">
          <div>
            <p className="text-[#1E2128] text-lg font-[MullerBold] ">{product.price} сом</p> 
            <p className="text-[#1E2128]">{product.name}</p>
            </div>
            <p className="text-[#50535A]">
            Количество:
            <br />
            <span >
            {product.quantity} ШТ.
            </span>
            </p>
        </div>
    
     </Link>
    </>
  );
}
