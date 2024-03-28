

const Home = () => {

  return (

    <div>
      <div className="">
        <h2 className="text-3xl text-center mt-10 mb-10">Blood Bank Management System</h2>
        <div className="grid md:grid-cols-4  sm:grid-cols-1 gap-4 w-10/12 mx-auto">
          <div className="bg-sky-600 rounded-2xl">
            <h4 className="text-3xl text-center text-white mt-6">Blood donors</h4>
            <h2 className="text-6xl text-center text-white">400</h2>
          </div>
          <div className="bg-emerald-400 rounded-2xl">
            <h4 className="text-3xl text-center  text-white mt-6">Reporting facilities</h4>
            <h2 className="text-6xl text-center text-white">34</h2>
          </div>
          <div className="bg-green-600 rounded-2xl">
            <h4 className="text-3xl text-center  text-white mt-6">Transfusion received</h4>
            <h2 className="text-6xl text-center  text-white">2451</h2>
          </div>
          <div className="bg-rose-700 rounded-2xl">
            <h4 className="text-3xl text-center  text-white mt-6">Reported transfusion </h4>
            <h2 className="text-6xl text-center text-white">4</h2>
          </div>
        </div>


        <div>
          <div>
            <h2 className="text-3xl mt-10 text-center mb-10">Available blood around you</h2>
          </div>
          <div className=" text-center mb-10 grid grid-cols-2">
           <h4 className="text-left ml-10">show</h4>
           <h4 className="text-right text-2xl mr-6">Search:<input type="text"  className="input input-bordered w-full max-w-44" /></h4>
          </div>
          <table className="table-fixed grid w-989px">
            <thead className="">
              <tr className="font-bold text-2xl text-center grid grid-cols-4 gap-4">
                <th className="">Facility Name</th>
                <th>Blood Group</th>
                <th>Blood Bag Number</th>
                <th>Component</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center mt-6 grid grid-cols-4 gap-4">
                <td>Sir Salimullah Medical College Hospital</td>
                <td>A+</td>
                <td>1100</td>
                <td>Whole Blood</td>
              </tr>
              <tr className="text-center mt-6 grid grid-cols-4 gap-4">
                <td>Sir Salimullah Medical College Hospital</td>
                <td>O+</td>
                <td>1100</td>
                <td>Whole Blood</td>
              </tr>
              <tr className="text-center mt-6 grid grid-cols-4 gap-4">
                <td>Sir Salimullah Medical College Hospital</td>
                <td>B+</td>
                <td>3166</td>
                <td>RCC</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    //         <div className="carousel w-full">
    //   <div id="slide1" className="carousel-item relative w-full">
    //     <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
    //     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    //       <a href="#slide4" className="btn btn-circle">❮</a> 
    //       <a href="#slide2" className="btn btn-circle">❯</a>
    //     </div>
    //   </div> 
    //   <div id="slide2" className="carousel-item relative w-full">
    //     <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
    //     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    //       <a href="#slide1" className="btn btn-circle">❮</a> 
    //       <a href="#slide3" className="btn btn-circle">❯</a>
    //     </div>
    //   </div> 
    //   <div id="slide3" className="carousel-item relative w-full">
    //     <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
    //     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    //       <a href="#slide2" className="btn btn-circle">❮</a> 
    //       <a href="#slide4" className="btn btn-circle">❯</a>
    //     </div>
    //   </div> 
    //   <div id="slide4" className="carousel-item relative w-full">
    //     <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
    //     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    //       <a href="#slide3" className="btn btn-circle">❮</a> 
    //       <a href="#slide1" className="btn btn-circle">❯</a>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Home;