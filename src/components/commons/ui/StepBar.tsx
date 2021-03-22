import React from "react";

const StepBarComponent: React.VFC<{num: number}> = ({ num }) => {
    const lineClass = "relative w-1/2 h-1 bg-custom-blue-base"
    const circleClass = "absolute -top-2.5 -left-2.5 inline-block w-6 h-6 rounded-full bg-custom-blue-base"

    return (
        <div className="mt-4">
            <div className="relative flex">
                {num === 1 && (
                    <>
                        <div className="relative w-1/2 bg-gray-200 h-1" />
                        <div className={circleClass} />
                        <div className="relative w-1/2 bg-gray-200 h-1">
                            <div className="absolute -top-2.5 -left-2.5 bg-gray-200 inline-block w-6 h-6 rounded-full" />
                        </div>
                        <div className="relative w-0 bg-gray-200 h-1">
                            <div className="absolute -top-2.5 -left-2.5 bg-gray-200 inline-block w-6 h-6 rounded-full" />
                        </div>
                    </>
                )}
                {num === 2 && (
                    <>
                        <div className={lineClass} />
                        <div className={circleClass} />
                        <div className="relative w-1/2 h-1 bg-gray-200">
                            <div className={circleClass} />
                        </div>
                        <div className="relative w-0 bg-gray-200 h-1">
                            <div className="absolute -top-2.5 -left-2.5 bg-gray-200 inline-block w-6 h-6 rounded-full" />
                        </div>
                    </>
                )}
                {num === 3 && (
                    <>
                        <div className={lineClass} />
                        <div className={circleClass} />
                        <div className={lineClass}>
                            <div className={circleClass} />
                        </div>
                        <div className="relative w-0 bg-custom-blue-base h-1">
                            <div className="absolute -top-2.5 -left-2.5 bg-custom-blue-base inline-block w-6 h-6 rounded-full" />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default StepBarComponent;
