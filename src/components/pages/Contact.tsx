export const Contact = () => {
  return (
    <div className="light-to-dark text-white flex flex-col">
      <h1 className="text-7xl text-center mt-25 mb-5">Contact</h1>
      <div className="bg-[#9C9457] rounded-4xl opacity-90 shadow-2xl m-5 lg:my-12 lg:mx-150 h-[72vh] flex justify-center">
        <div className="text-5xl">
          Name
          <input type="text" placeholder=" Enter your name" />
        </div>
      </div>
    </div>
  );
};
