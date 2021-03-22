import React from "react";

const Search: React.VFC = () => (
    <div className="container px-6 py-14 box-border mx-auto h-screen">
        <form className="my-16 text-center">
            <div className="relative">
                <img className="inline-block absolute mt-2 ml-3 w-6" src="/images/icons/commons/ion_search_color.svg" alt="" />
                <input className="w-8/12 inline-block py-2 pl-12 pr-4 bg-custom-gray-200 rounded-3xl" type="text"/>
            </div>
        </form>
    </div>
);

export default Search;
