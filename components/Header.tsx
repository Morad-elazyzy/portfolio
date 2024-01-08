function Header() {
  return (
    <header
      className="px-4 bg-dark bg-no-repeat bg-cover h-100 h-screen flex justify-center items-center m-0"
      style={{ backgroundImage: "url(https://i.ibb.co/Gf6HKmJ/445126.jpg)" }}
    >
      <div className="flex flex-col gap-4 items-center py-4 sm:p-0">
        <img
          className="w-40 h-40"
          src="https://i.ibb.co/RYnZkV4/Ellipse-1.png"
          //   style={{ width: "60px", height: "60px" }}
          alt="user avatar"
        />
        <h3 className="text-white text-4xl font-bold">Morad Elazyzy</h3>
        <h2 className="text-fuchsia-800 text-3xl bold max-w-lg text-center">
          Front-end Developer and ux/ui Designer
        </h2>
        <p className="text-lg text-gray-300  max-w-2xl text-center">
          experienced UX/UI developer proficient in both front-end development
          and design. With a passion for crafting intuitive user experiences, I
          bring together the best of both worlds to create impactful digital
          solutions.
        </p>
        {/* <button className="bg-fuchsia-800 text-xl text-white rounded py-3 px-8">
          View work
        </button> */}
      </div>
    </header>
  );
}

export default Header;
