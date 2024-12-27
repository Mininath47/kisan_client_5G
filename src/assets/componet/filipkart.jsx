import { useState } from "react";

export function FilipkartView() {
    const [product] = useState({
        Name: "Suraj TV",
        Price: 45000.65,
        cities: ["Delhi", "Pune"],
        Rating: { Rate: 4.5 },
    });

    return (
        <div className="container-fluid">
            <h1>Product Details</h1>
            {Object.keys(product).map((key) => (
                <p key={key}>
                    <strong>{key}:</strong> {JSON.stringify(product[key])}
                </p>
            ))}
        </div>
    );
}
