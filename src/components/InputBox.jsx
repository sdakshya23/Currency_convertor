/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  //we make currencyTypes that will further
  //store all the different currencies in an array
  //an empty array is given as default that will cater
  //the case when the user doesn't passes an input.
  currencyTypes = [],
  //anyone currency is always selected
  selectCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,

  className = "",
}) {
  const amountID = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountID} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountID}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => {
            onAmountChange && onAmountChange(Number(e.target.value));
          }}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
          disabled={currencyDisabled}
        >
          {currencyTypes.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
