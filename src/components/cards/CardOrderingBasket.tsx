
import Image from "next/image";

export default function CardOrderingBasket({ product, i }: any) {
console.log(i);


  return (<>
    <div key={i} className="w-full flex justify-start gap-[10px] md:gap-[30px] pb-[20px] border-b-2">
      {/* <Link  href={`/carddetails/${encodeURIComponent(product.id)}`}> */}

        <div className="h-[100px]">
          {/* <img className="w-[100px]" src={product.img} alt="" /> */}

          <Image
            src={product.img}
            width={100}
            height={100}
            className="object-contain w-[100px]"
            priority={true}
            alt={product.img}
          />
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

      {/* </Link> */}
    </div>
  </>
  );
}
