import { useState, useEffect, useRef } from "react";
import Odometer from "react-odometerjs";
import 'odometer/themes/odometer-theme-minimal.css';




export default function BagHousesOdometer() {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [value, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(0);
    const [value4, setValue4] = useState(0);


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setValue1(0);
                    setValue2(0);
                    setValue3(0);
                    setValue4(0);

                    setTimeout(() => {

                        setValue1(4);
                        setValue2(90);
                        setValue3(99)
                        setValue4(99)
                    }, 300);
                }
            },
            {
                threshold: 0.5,
            }
        );

        const current = sectionRef.current;
        if (current) observer.observe(current);

        return () => {
            if (current) observer.unobserve(current);
        };
    }, []);

    return (
        <div ref={sectionRef} className="bg-white shadow-md p-6 flex flex-col justify-center items-center rounded-lg">
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-row gap-2 items-center text-5xl font-medium">
                    <Odometer value={value} format="(,ddd)" duration={2000} />
                    <p>-</p>
                    <Odometer value={value2} format="(,ddd)" duration={2000} />
                    <p className="font-medium text-sm">thousand ACFM</p>
                </div>
                <div>
                    <h2 className="font-medium text-lg">Baghouses capacity</h2>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-row gap-2 items-center text-5xl font-medium">
                    <Odometer value={value3} format="(,ddd)" duration={2000} />
                    <p>.</p>
                    <Odometer value={value4} format="(,ddd)" duration={2000} />
                    <p className="font-medium text-sm">%</p>
                </div>
                <div>
                    <h2 className="font-medium text-lg">Fine particle filtration efficiency</h2>
                </div>
            </div>
        </div>
    )
}
