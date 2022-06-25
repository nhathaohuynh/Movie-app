function Banner() {
  return (
    <section className="banner h-[400px] page-container">
      <div className="w-full h-full rounded-lg relative ">
        <div className="overlay absolute inset-0 rounded-lg bg-gradient-to-t from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.3)]"></div>
        <img
          src="https://cdno.asoundeffect.com/DJE4Xy4.DH5V~499bd/w:825/h:582/q:mauto/https://www.asoundeffect.com/wp-content/uploads/2019/05/Avengers-Endgame-sound_3.png"
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute left-5 bottom-5 w-full text-white">
          <h2 className="font-bold text-3xl mb-5">Avengers:Endgame</h2>
          <div className="flex items-center gap-x-3 mb-8">
            <span className="py-2 px-4 border border-white rounded-md cursor-pointer hover:border-primary transition-all">
              Adventure
            </span>
            <span className="py-2 px-4 border border-white rounded-md cursor-pointer hover:border-primary transition-all">
              Adventure
            </span>
            <span className="py-2 px-4 border border-white rounded-md cursor-pointer hover:border-primary transition-all">
              Adventure
            </span>
          </div>
          <button className="py-3 px-6 bg-primary rounded-lg text-whtie font-medium ">
            Watch Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
