import React from "react";
import {Link} from "react-router-dom";

const AppGuestHeaderComponent = () => (
    <header className="fixed left-0 right-0 z-20 w-hull bg-custom-black-100 shadow-md">
        <div className="container px-6 py-2 mx-auto">
            <div className="relative">
                <div className="flex justify-between items-center">
                    <Link to="/">
                        <h1 className="text-white text-white font-bold">
                            syukai
                        </h1>
                    </Link>
                </div>
            </div>
        </div>
    </header>
);

export default AppGuestHeaderComponent
