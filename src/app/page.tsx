import Bicroyjob from "@/components/Home/Bicroyjob";
import Card from "@/components/Home/Card";
import Product from "@/components/Home/Product";
import Search from "@/components/Home/Search";
import Modal from "@/components/Navber/Modal";


export default function Home() {
  return (

    <>
      <div className="bg-[#149777]">
        <div className="max-w-6xl mx-auto pt-16 md:pt-20">
          <div className='flex justify-center md:pt-8 pt-5 pb-2'>
            <Modal></Modal>

          </div>
          <Search></Search>

        </div>
      </div>
      <Product></Product>
      <Bicroyjob></Bicroyjob>
      <Card></Card>
    </>
  );
}
