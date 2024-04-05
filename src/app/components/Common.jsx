import React from "react";

const Common = () => {
  return (
    <div className="relative hidden select-none flex-col justify-center bg-blue-500 text-center md:flex md:w-1/2">
      <div classNameclass="mx-auto py-16 px-8 text-white xl:w-[40rem]">
        <span className="rounded-full bg-white px-3 py-1 font-medium text-blue-600">
          Featuring
        </span>
        <p className="my-4 3xl font-bold leading-10 text-white text-5xl">
          Darwinbox Insights
        </p>
        <p className="mb-4 font-semibold text-xl text-gray-100">
          For Darwinbox, by Darwinbox.
        </p>
      </div>
      {/* <img class="mx-auto w-11/12 max-w-lg rounded-lg object-cover" src="/images/SoOmmtD2P6rjV76JvJTc6.png" />  */}
    </div>
  );
};

export default Common;
