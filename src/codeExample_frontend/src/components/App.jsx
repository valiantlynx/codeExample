import React, { useState, useEffect } from "react";
import { codeExample_backend } from "../../../declarations/codeExample_backend";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

function App(props) {
    const [balance, setBalance] = useState(0);
    const [balance0, setBalance0] = useState(0);

    async function checkBalance() {
        const currentAmount = await codeExample_backend.checkBalance();
        setBalance(currentAmount)
    };

    async function checkInitialBalance() {
        const initialAmount = await codeExample_backend.checkInitialBalance();
        setBalance0(initialAmount)
    };

    useEffect(() => {
      checkBalance();
      checkInitialBalance();
    }, []);

    async function topUp() {
        const inputAmount = parseFloat(document.getElementById("input-amount").value);
        await codeExample_backend.topUp(inputAmount);

    };

    async function withdraw() {
        const outputAmount = parseFloat(document.getElementById("withdrawal-amount").value);
        await codeExample_backend.withdraw(outputAmount);

    };
    async function compound() {
        await codeExample_backend.compound();

    };


    return (
        <BrowserRouter forceRefresh={true}>
            <div className="container">
                <Link
                    to="/" >
                    <center>
                        <img
                            src="default.svg"
                            alt="logo of variant bank"
                            width="100"
                            role="img"

                            aria-label="Bootstrap" />
                    </center>
                </Link>
                <div className="divider"></div>
                <Link className="link" to="/initial" >Initial Balance</Link>
                <Link className="link" to="/current">Current Balance</Link>


                <div className="divider"></div>
                <form noValidate="" >
                    <h2>Amount to Top Up</h2>
                    <input

                        id="input-amount"
                        type="number"
                        step="0.01"
                        name="topUp"
                        defaultValue="" />
                    <button
                        id="submit-btn"
                        type="submit"
                        onClick={topUp}
                    >topUp</button>

                </form>
                <form noValidate="" action="#">

                    <h2>Amount to Withdraw</h2>
                    <input
                        id="withdrawal-amount"
                        type="number"
                        name="withdraw"
                        step="0.01"
                        defaultValue="" />
                    <button
                        id="submit-btn"
                        type="submit"
                        onClick={withdraw}
                    >withdraw</button>

                </form>
                <button id="submit-btn" type="submit" onClick={compound}>compound</button>
            </div>
            <Routes >
                <Route exact path="/" />

                <Route path="/initial" element={<h1>Initial Balance: $<span id="value">{balance0}</span></h1>} />
                <Route path="/current" element={<h1>Current Balance: $<span id="value">{balance}</span></h1>} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
