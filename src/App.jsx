import { useState } from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setfrom] = useState("usd");
  const [To, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState();

  const currencyInfo = useCurrencyInfo(from);
  //now we have to get all the currency info or all the currenciesx
  //that can be changed hence we get all the keys from the currencyinfo
  //as all the data is stored in object hence object.keys() gives us all
  //the keys which are the different currencies in this scenario
  const currOptions = Object.keys(currencyInfo);
  const swap = () => {
    setfrom(To);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  function convert() {
    return setConvertedAmount(amount * currencyInfo[To]);
  }
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyTypes={currOptions}
                //also anony func mein currency bhi tha param
                //lekin i didnt gave it here
                onCurrencyChange={(currency) => {
                  setfrom(currency);
                }}
                onAmountChange={(amount) => {
                  setAmount(amount);
                }}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                //course mein yhan bas reference diya hai maine lekin
                //callback firekrke call kiya hai
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyTypes={currOptions}
                onCurrencyChange={(currency) => {
                  setTo(currency);
                }}
                selectCurrency={To}
                //normal amount disabled is same as amountDisabled="true"
                amountDisabled
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {To.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
