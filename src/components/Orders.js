import React, { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await axios.get("https://backend-my-project.onrender.com/allOrders", { withCredentials: true });
                setAllOrders(res.data);
            } catch (error) {
                setError("Error fetching orders. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    return (
        <>
            {loading ? (
                <p>Loading orders...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <>
                    <h3 className="title">Orders ({allOrders.length})</h3>
                    {allOrders.length === 0 ? (
                        <p>No orders found. Start buying stocks!</p>
                    ) : (
                        <div className="order-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Mode</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allOrders.map((order, index) => (
                                        <tr key={index}>
                                            <td>{order.name}</td>
                                            <td>{order.qty}</td>
                                            <td>{order.price.toFixed(2)}</td>
                                            <td>{order.mode}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </>
            )}
        </>
    );
};

export default Orders;
