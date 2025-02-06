"use client"
import React, { use, useEffect, useState } from "react";
import { v4 as uuidv4, } from 'uuid';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "@/lib/fire";
import Cookies from 'js-cookie';
import { deleteObject, getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { useProduct } from "@/lib/features/products/ProductServer";
import { useAppSelector } from "@/lib/hooks";
import { Setproducts } from "@/lib/features/products/ProductsSlice";


interface CardDetailsProps {
    params: Promise<{ id: string }>
  }

export default function EditProduct({ params }: CardDetailsProps) {
    const newParams = use(params)
    const { GetOneProduct } = useProduct()
    const { AddEditProduct } = useProduct()
    const { oneProduct, loading } = useAppSelector(state => state.products)
    const cookPhone: any = Cookies.get("userPhone")
    const [characteristics, setСharacteristics] = useState<any>([
        {
            name: "",
            info: ""
        }
    ]);
    const [extraProduct, setExtraProduct] = useState<any>(
        [
            {
                color: "#000000",
                characteristics: [ { name: "",info: ""}],
                images: [],
                price: 0,
                sale: 0,
                quantity: 0,
            }
        ]
        // oneProduct? oneProduct.extraProduct :[]
    );

    const [product, setProduct] = useState<any>(
        {
            name: "",
            category: "",
            description: "",
            phone: cookPhone,
            extraProduct: extraProduct,
            id: "",
        }
    )
    useEffect(() => {
        GetOneProduct(newParams.id);
    }, [newParams.id]);

    useEffect(() => {
        // Обновляем product, но правильно копируя данные

        setExtraProduct(
            (prev: any) => (oneProduct.extraProduct ? [...oneProduct.extraProduct] : prev)
        )


        setProduct((prevProduct: any) =>
        ({
            ...prevProduct,
            ...oneProduct,
        }));
        console.log(extraProduct);

    }, [oneProduct]);

    const handleNameChange = (event: any) => {
        const updatedProduct = {
            ...product,
            [event.target.name]: event.target.value,
        };

        setProduct(updatedProduct);
    };

    const handleExtraProductFieldChange = (indexProduct: number, e: any) => {

        const updatedExtraProduct = [...extraProduct];
        updatedExtraProduct[indexProduct] = {
            ...updatedExtraProduct[indexProduct],
            [e.name]: e.value,
        };

        setExtraProduct(updatedExtraProduct);
        setProduct(({ ...product, extraProduct: updatedExtraProduct, }));
    };

    const handleCharacteristicChange = (indexProduct: number, index: number, e: any) => {
        const updatedExtraProduct = [...extraProduct];
        const updatedCharacteristics = [...updatedExtraProduct[indexProduct].characteristics];
        updatedCharacteristics[index] = {
            ...updatedCharacteristics[index],
            [e.name]: e.value,
         };


        updatedExtraProduct[indexProduct] = {
            ...updatedExtraProduct[indexProduct],
            characteristics: updatedCharacteristics,
        };

        setExtraProduct(updatedExtraProduct);
        setProduct(({ ...product, extraProduct: updatedExtraProduct, }));
    }

    const AddExtraProductChange = () => {
        const newExtraProduct = {
            color: "#000000",
            characteristics: [{name:"",info:""}],
            images: [],
            price: 0,
            sale: 0,
            quantity: 0,
        }
        if (extraProduct.length !== 5) {
            setExtraProduct([...extraProduct, newExtraProduct])
            setProduct(({ ...product, extraProduct: [...extraProduct, newExtraProduct] }))
        } else {
            alert("Вы достигили максимального количества")
        }
    };

    const AddСharacteristicsChange = (indexProduct: number) => {
        const updatedExtraProduct = [...extraProduct];
        const newCharacteristics =  { name:"",info:""}
        const characteristics= [...updatedExtraProduct[indexProduct].characteristics ];
        const updatedCharacteristics= [...characteristics,newCharacteristics] ;
        
        updatedExtraProduct[indexProduct] = {
            ...updatedExtraProduct[indexProduct],
            characteristics: updatedCharacteristics ,
        };

        setExtraProduct(updatedExtraProduct);
        setProduct(({ ...product, extraProduct: updatedExtraProduct, }));
    };

    const DeleteExtraProduct = async (indexProduct: number) => {
        if (indexProduct > 0) {
            const deleteExtraProduct = extraProduct.filter((e: any, i: number) => i !== indexProduct)
            const mainProductFolder = `productImages/${product.id}`;
            const additionalProductFolder = `${mainProductFolder}/extraProduct${indexProduct}`;
            const imageRef = ref(storage, `${additionalProductFolder}`);
            if (extraProduct[indexProduct].images[0]) {
                try {
                    const imgs = await listAll(imageRef)
                    for (const img of imgs.items) {
                        deleteObject(img)
                    }
                    setExtraProduct(deleteExtraProduct);
                    setProduct(({ ...product, extraProduct: deleteExtraProduct, }));

                } catch (e) {
                    console.log(e);
                }

            }
            else {
                setExtraProduct(deleteExtraProduct);
                setProduct(({ ...product, extraProduct: deleteExtraProduct, }));
            }
        } else {

        }
    }

    const DeleteСharacteristic = (index: number, indexProduct: number) => {
        const deletechas = extraProduct[indexProduct].characteristics.filter((items: any, i: any) => i !== index)

        setСharacteristics(deletechas)
        const updatedExtraProduct = [...extraProduct];
        updatedExtraProduct[indexProduct] = {
            ...updatedExtraProduct[indexProduct],
            characteristics: deletechas,
        };

        setExtraProduct(updatedExtraProduct);
        setProduct(({ ...product, extraProduct: updatedExtraProduct, }));

    };


    const handleImgsChange = async (indexProduct: any, e: any) => {
        const files = e.files
        const imageUrls: string[] = [];
        const mainProductFolder = `productImages/${product.id}`;
        const additionalProductFolder = `${mainProductFolder}/extraProduct${indexProduct}`;

        for (let index = 0; index < files.length; index++) {
            const file: any = files[index];
            const response: any = await fetch(URL.createObjectURL(file));

            const imageRef = ref(storage, `${additionalProductFolder}/${index}`);
            const blob = await response.blob();
            await uploadBytes(imageRef, blob);
            const imageUrl = await getDownloadURL(imageRef);
            imageUrls.push(imageUrl);
        }
        const updatedExtraProduct = [...extraProduct];
        updatedExtraProduct[indexProduct] = {
            ...updatedExtraProduct[indexProduct],
            images: imageUrls,
        };
        setExtraProduct(updatedExtraProduct);
        setProduct(({ ...product, extraProduct: updatedExtraProduct, }));
    }



    const ClickEditProduct = (e: any) => {
        e.preventDefault();
        AddEditProduct(product)

    }
    console.log(product);


    return (
        <>
            <div className="w-full flex flex-col gap-[20px]  rounded-[10px] bg-white px-[40px] pt-[50px] pb-[30px] ">
                <form className="w-full flex flex-col gap-[20px]" onSubmit={ClickEditProduct} >
                    <div className="flex gap-[20px]">
                        <input
                            className="w-full  rounded-[10px] border-grey border-[2px] px-[20px] py-[15px] placeholder:text-black "
                            type="text"
                            name="name"
                            required
                            value={product.name}
                            onChange={handleNameChange}
                            placeholder="название товара" />
                        <select
                            id="cities"
                            name="category"
                            required
                            value={product.category}
                            onChange={handleNameChange}
                            className="w-full appearance-none rounded-[10px] border-grey border-[2px] px-[20px] py-[15px]">
                            <option className="px-[20px] rounded-[10px] hover:!text-whiter hover:!bg-black" value=''>Категории</option>
                            <option className="px-[20px] rounded-[10px] hover:!text-whiter hover:!bg-black" value="phone">Смартфон</option>
                            <option className="px-[20px] rounded-[10px] hover:!text-whiter hover:!bg-black" value="laptop">Ноутбук</option>
                            <option className="px-[20px] rounded-[10px] hover:!text-whiter hover:!bg-black" value="home appliances">Бытовая техника</option>
                            <option className="px-[20px] rounded-[10px] hover:!text-whiter hover:!bg-black" value="PC Accessories">Аксессуары для ПК</option>
                        </select>
                        <input
                            className="w-full  rounded-[10px] border-grey border-[2px] px-[20px] py-[15px] placeholder:text-black "
                            type="tel"
                            name="phone"
                            required
                            value={product.phone}
                            onChange={handleNameChange}
                            placeholder="номер телефона"
                        />
                    </div>
                    <div>
                        <textarea
                            name="description"
                            value={product.description}
                            onChange={handleNameChange}
                            className="w-full  rounded-[10px] border-grey border-[2px] px-[20px] pt-[25px]  placeholder:text-black"
                            placeholder="описание"
                        />
                    </div>



                    {extraProduct.map((productExtra: any, indexProduct: number) => (
                        <div key={indexProduct} style={{ borderColor: productExtra.color }} className={`flex flex-col gap-[20px] px-[20px]  border-x-[4px]`}>
                            <div className="flex gap-[20px]">
                                <input
                                    className="w-full h-auto  rounded-[10px] border-grey border-[2px] px-[20px] py-[15px] placeholder:text-black "
                                    type="color"
                                    name="color"
                                    required
                                    value={productExtra.color}
                                    onChange={(e) => handleExtraProductFieldChange(indexProduct, e.target)}
                                    placeholder="."
                                />

                                <label htmlFor={`file${indexProduct}`}
                                    className="w-full  rounded-[10px] border-grey border-[2px] px-[20px]  py-[15px] placeholder:text-black " >
                                    <span >выбрано фот {extraProduct[indexProduct].images.length}</span>
                                    <input
                                        type="file"
                                        multiple
                                        id={`file${indexProduct}`}
                                        name="images"
                                        className="hidden"
                                        onChange={(e) => handleImgsChange(indexProduct, e.target)}
                                    />
                                </label>
                                <div className="w-full relative ">
                                    <input
                                        required
                                        className="w-full  rounded-[10px] border-grey border-[2px] px-[20px]  py-[15px] placeholder:text-black"
                                        type="number"
                                        name="price"
                                        placeholder="цена"
                                        value={productExtra.price}
                                        onChange={(e) => handleExtraProductFieldChange(indexProduct, e.target)}
                                    />
                                    <span className="absolute top-[28%] right-[10px]">сом</span>
                                </div>
                                <div className="w-full relative ">
                                    <input
                                        className="w-full  rounded-[10px] border-grey border-[2px] px-[20px]  py-[15px] placeholder:text-black after:content-['сом*'] "
                                        type="number"
                                        name="sale"
                                        placeholder="скидка"
                                        value={productExtra.sale}
                                        onChange={(e) => handleExtraProductFieldChange(indexProduct, e.target)}
                                    />
                                    <span className="absolute top-[28%] right-[10px]">%</span>
                                </div>
                                <input
                                    className="w-full  rounded-[10px] border-grey border-[2px] px-[20px]  py-[15px] placeholder:text-black after:content-['сом*'] "
                                    type="number"
                                    name="quantity"
                                    required
                                    placeholder="Количество"
                                    value={productExtra.quantity}
                                    onChange={(e) => handleExtraProductFieldChange(indexProduct, e.target)}
                                />
                            </div>
                            <div className="w-full">
                                <Swiper
                                    loop={true}
                                    modules={[Navigation]}
                                    navigation={true}
                                    spaceBetween={20}
                                    className="w-full"
                                    slidesPerView={3}
                                >
                                    {productExtra.images.map((file: any ,i:number) =>
                                        <SwiperSlide key={i} className="flex justify-center">
                                            <img className="w-full rounded-[10px]" src={file} alt="" />
                                        </SwiperSlide>
                                    )}
                                </Swiper>
                            </div>
                            <div className="flex flex-col gap-[20px] ">
                                {productExtra.characteristics.map((product: any, index: number) =>
                                    <div key={index} className="flex gap-[20px] items-center">
                                        <input
                                            className="w-full  rounded-[10px] border-grey border-[2px] px-[20px] py-[15px] placeholder:text-black "
                                            type="text"
                                            name="name"
                                            value={product.name}
                                            required
                                            onChange={(e) => handleCharacteristicChange(indexProduct, index, e.target)}
                                            placeholder="название хар."
                                        />
                                        <input
                                            className="w-full  rounded-[10px] border-grey border-[2px] px-[20px] py-[15px] placeholder:text-black "
                                            type="text"
                                            name="info"
                                            value={product.info}
                                            required
                                            onChange={(e) => handleCharacteristicChange(indexProduct, index, e.target)}
                                            placeholder="информация хар."
                                        />
                                        <button
                                            type="button"
                                            onClick={() => DeleteСharacteristic(index, indexProduct)}
                                            className="p-[10px] h-[40px] bg-white rounded-[10px] hover:bg-black">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="#0000" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.5 1.5H11.5M1.5 4H16.5M14.8333 4L14.2489 12.7661C14.1612 14.0813 14.1174 14.7389 13.8333 15.2375C13.5833 15.6765 13.206 16.0294 12.7514 16.2497C12.235 16.5 11.5759 16.5 10.2578 16.5H7.74221C6.42409 16.5 5.76503 16.5 5.24861 16.2497C4.79396 16.0294 4.41674 15.6765 4.16665 15.2375C3.88259 14.7389 3.83875 14.0813 3.75107 12.7661L3.16667 4" stroke="#e5e7eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                )}
                                <div className="flex gap-[20px]">
                                    <button
                                        type="button"
                                        onClick={() => AddСharacteristicsChange(indexProduct)}
                                        className="w-full h-[60px] mt-[20px] rounded-[10px] border-black border-2 bg-black text-white ">
                                        Добавить характеристику
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => DeleteExtraProduct(indexProduct)}
                                        disabled={indexProduct <= 0}
                                        className="w-full h-[60px] mt-[20px] rounded-[10px] border-black border-2 bg-black text-white disabled:opacity-30">
                                        Удалить вид товара
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div>
                        <button
                            type="button"
                            onClick={AddExtraProductChange}
                            className="w-full h-[60px] mt-[20px] rounded-[10px] border-black border-2 bg-black text-white ">
                            Создать доп. вид товара</button>
                        <button
                            type="submit"
                            className="w-full h-[60px] mt-[20px] rounded-[10px] border-black border-2 bg-black text-white ">
                            Изменить товар</button>
                    </div>
                </form>
            </div>
        </>
    );
}

