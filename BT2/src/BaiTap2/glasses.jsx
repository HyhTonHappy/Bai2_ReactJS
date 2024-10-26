import { useState } from "react";

export default function Glasses() {
    const [listGlasses] = useState([
        {
            id: 1,
            price: 30,
            name: "GUCCI G8850U",
            url: "./glassesImage/v1.png",
            desc: "Light pink square lenses define these sunglasses, ending with a mother of pearl effect tip."
        },
        {
            id: 2,
            price: 50,
            name: "GUCCI G8759H",
            url: "./glassesImage/v2.png",
            desc: "Light pink square lenses define these sunglasses, ending with a mother of pearl effect tip."
        },
        {
            id: 3,
            price: 30,
            name: "DIOR D6700HQ",
            url: "./glassesImage/v3.png",
            desc: "Light pink square lenses define these sunglasses, ending with a mother of pearl effect tip."
        },
        {
            id: 4,
            price: 70,
            name: "DIOR D6005U",
            url: "./glassesImage/v4.png",
            desc: "Light pink square lenses define these sunglasses, ending with a mother of pearl effect tip."
        },
        {
            id: 5,
            price: 40,
            name: "PRADA P8750",
            url: "./glassesImage/v5.png",
            desc: "Light pink square lenses define these sunglasses, ending with a mother of pearl effect tip."
        },
        {
            id: 6,
            price: 60,
            name: "PRADA P9700",
            url: "./glassesImage/v6.png",
            desc: "Light pink square lenses define these sunglasses, ending with a mother of pearl effect tip."
        },
        {
            id: 7,
            price: 80,
            name: "FENDI F8750",
            url: "./glassesImage/v7.png",
            desc: "Light pink square lenses define these sunglasses, ending with a mother of pearl effect tip."
        },
        {
            id: 8,
            price: 100,
            name: "FENDI F8500",
            url: "./glassesImage/v8.png",
            desc: "Light pink square lenses define these sunglasses, ending with a mother of pearl effect tip."
        },
        {
            id: 9,
            price: 60,
            name: "FENDI F4300",
            url: "./glassesImage/v9.png",
            desc: "Light pink square lenses define these sunglasses, ending with a mother of pearl effect tip."
        }
    ]);

    const [selectedGlasses, setSelectedGlasses] = useState(null);

    const handleSelectGlasses = (glasses) => {
        setSelectedGlasses(glasses);
    };

    const renderListGlasses = () => {
        return (
            <ul className="grid grid-cols-3 gap-4 mt-6">
                {listGlasses.map((item) => (
                    <li key={item.id} className="cursor-pointer" onClick={() => handleSelectGlasses(item)}>
                        <img className="w-25 h-auto" src={item.url} alt={item.name} />
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div className="text-center">
            <div className="relative flex justify-center mb-6">
                <img className="w-1/2" src="/glassesImage/model.jpg" alt="Model" />

                {selectedGlasses && (
                    <img
                        className="absolute"
                        src={selectedGlasses.url}
                        alt={selectedGlasses.name}
                        style={{
                            top: "50%",        
                            left: "50%",       
                            width: "300px",  
                            transform: "translate(-50%, -225%)",
                            opacity: 0.8
                        }}
                    />
                )}
            </div>

            {selectedGlasses && (
                <div className="text-center mb-6">
                    <h2 className="text-lg font-semibold">{selectedGlasses.name}</h2>
                    <p className="text-gray-600">Price: ${selectedGlasses.price}</p>
                    <p className="text-gray-600">{selectedGlasses.desc}</p>
                </div>
            )}

            <div className="mt-6">
                <h3 className="text-xl font-bold mb-4">Select Glasses</h3>
                {renderListGlasses()}
            </div>
        </div>
    );
}