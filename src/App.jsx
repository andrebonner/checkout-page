import { useState } from "react";
import {
  ShoppingCartIcon,
  ShoppingBagIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import "./App.css";
import logo from "./assets/images/checkout-logo.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-300 m-0 h-full md:h-screen">
      <div className="container w-11/12 md:w-full mx-auto flex flex-col">
        <h1 className="uppercase text-gray-800 pt-3 text-xl">
          <img src={logo} alt="logo" className="w-16 h-16" />
        </h1>
        <section className="container mt-2 flex flex-col md:flex-row space-y-2 md:space-x-4 md:space-y-0">
          <article className="container w-full md:w-2/3 h-5/6 p-5 bg-white rounded shadow-lg flex flex-col space-y-2">
            <a href="javascript::back()" className="">
              &lt; &nbsp; Back
            </a>
            <div className="rounded border-2 border-blue-300 bg-blue-200 py-1 pl-2 flex items-center space-x-3">
              <input
                type="radio"
                name="method"
                checked
                className="border border-blue-300"
              />

              <ShoppingCartIcon className="h-4 w-4 text-blue-600" />

              <span className="font-medium text-sm">
                Get it delivered in 30 minutes
              </span>
            </div>
            <div className="rounded border-2 border-gray-300 bg-white py-1 pl-2 flex items-center space-x-2 hover:bg-blue-200 hover:border-blue-300">
              <input
                type="radio"
                name="method"
                className="border border-gray-300"
              />
              &nbsp;
              <ShoppingBagIcon className="h-4 w-4 text-gray-600" />
              &nbsp;
              <span className="font-medium text-sm">
                Pickup available in 3 stores near you
              </span>
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-gray-500 text-md">Shipping Address</label>
              <div className="relative w-10/12">
                <input
                  type="text"
                  className="border border-gray-400 outline-none focus:border-gray-600 rounded px-2 py-2 text-md text-gray-800 font-medium w-full"
                  placeholder="Address"
                />
                <PencilIcon className="w-4 h-4 absolute inset-y-2.5 right-0 mr-2 pointer-events-none" />
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <h2 className="font-semibold text-lg py-2">
                Payment Information
              </h2>
              <div className="flex space-x-2">
                <a className="border border-gray-300 rounded w-20 h-10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    className="h-full"
                  >
                    <path
                      fill="#ff9800"
                      d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
                    />
                    <path
                      fill="#d50000"
                      d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
                    />
                    <path
                      fill="#ff3d00"
                      d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
                    />
                  </svg>
                </a>
                <a className="border border-gray-300 rounded w-20 h-10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    className="h-full"
                  >
                    <path
                      fill="#1565C0"
                      d="M18.7,13.767l0.005,0.002C18.809,13.326,19.187,13,19.66,13h13.472c0.017,0,0.034-0.007,0.051-0.006C32.896,8.215,28.887,6,25.35,6H11.878c-0.474,0-0.852,0.335-0.955,0.777l-0.005-0.002L5.029,33.813l0.013,0.001c-0.014,0.064-0.039,0.125-0.039,0.194c0,0.553,0.447,0.991,1,0.991h8.071L18.7,13.767z"
                    />
                    <path
                      fill="#039BE5"
                      d="M33.183,12.994c0.053,0.876-0.005,1.829-0.229,2.882c-1.281,5.995-5.912,9.115-11.635,9.115c0,0-3.47,0-4.313,0c-0.521,0-0.767,0.306-0.88,0.54l-1.74,8.049l-0.305,1.429h-0.006l-1.263,5.796l0.013,0.001c-0.014,0.064-0.039,0.125-0.039,0.194c0,0.553,0.447,1,1,1h7.333l0.013-0.01c0.472-0.007,0.847-0.344,0.945-0.788l0.018-0.015l1.812-8.416c0,0,0.126-0.803,0.97-0.803s4.178,0,4.178,0c5.723,0,10.401-3.106,11.683-9.102C42.18,16.106,37.358,13.019,33.183,12.994z"
                    />
                    <path
                      fill="#283593"
                      d="M19.66,13c-0.474,0-0.852,0.326-0.955,0.769L18.7,13.767l-2.575,11.765c0.113-0.234,0.359-0.54,0.88-0.54c0.844,0,4.235,0,4.235,0c5.723,0,10.432-3.12,11.713-9.115c0.225-1.053,0.282-2.006,0.229-2.882C33.166,12.993,33.148,13,33.132,13H19.66z"
                    />
                  </svg>
                </a>
                <a className="border border-gray-300 rounded w-20 h-10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    className="h-full"
                  >
                    <path fill="#9fa8da" d="M11 24L25 2 39 24 25 32z" />
                    <path fill="#7986cb" d="M25 2L39 24 25 32z" />
                    <path fill="#9fa8da" d="M11 27L25 35 39 27 25 46z" />
                    <path
                      fill="#7986cb"
                      d="M25 35L39 27 25 46zM11 24L25 18 39 24 25 32z"
                    />
                    <path fill="#5c6bc0" d="M25 18L39 24 25 32z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-gray-500 text-md">Name on Card</label>
              <input
                type="text"
                className="border border-gray-400 outline-none focus:border-gray-600 rounded px-2 py-2 text-md text-gray-800 font-medium w-3/5"
                placeholder="John Cardholder"
              />
            </div>

            <div className="flex flex-col space-y-1">
              <label className="text-gray-500 text-md">Card Number</label>
              <input
                type="text"
                maxLength={16}
                className="border border-gray-400 outline-none focus:border-gray-600 rounded px-2 py-2 text-md text-gray-800 font-medium w-3/5"
                placeholder="0000 0000 0000 0000"
              />
            </div>
            <div className="flex flex-col md:flex-row space-y-1 md:space-x-3 md:space-y-0">
              <div className="flex flex-col space-y-1">
                <label className="text-gray-500 text-md">Expiration</label>
                <input
                  type="text"
                  className="border border-gray-400 outline-none focus:border-gray-600 rounded px-2 py-2 text-md text-gray-800 font-medium w-1/2 md:w-auto"
                  placeholder="MM/YY"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label className="text-gray-500 text-md">CVV</label>
                <input
                  type="password"
                  maxLength={3}
                  className="border border-gray-400 outline-none focus:border-gray-600 rounded px-2 py-2 text-md text-gray-800 font-medium w-1/2 md:w-auto"
                />
              </div>
            </div>
            <div className="flex pt-6 space-x-3">
              <a
                href="javascript::back()"
                className="rounded border shadow border-gray-600 text-gray-800 font-semibold px-5 py-2 focus:outline-none hover:bg-gray-600 hover:text-white"
              >
                Back
              </a>
              <button className="rounded shadow bg-blue-500 text-white font-semibold px-5 py-2 focus:outline-none hover:bg-blue-600 hover:text-gray-200">
                Confirm Payment $20.00
              </button>
            </div>
          </article>
          <aside className="container w-full md:w-1/3 h-5/6 p-5 bg-white rounded shadow-lg flex flex-col space-y-2">
            <h2 className="font-medium">Order Summary</h2>
            <div className="flex w-full">
              <ul className="w-full space-y-2">
                <li className=" flex w-full">
                  <span className="font-medium w-4/6">x1 Item A</span>{" "}
                  <i className="w-1/6">$10.50</i>
                  <a className="w-1/6 flex justify-center items-center">
                    <TrashIcon className="w-4 h-4" />
                  </a>
                </li>
                <li className=" flex w-full">
                  <span className="font-medium w-2/3">x1 Item B</span>{" "}
                  <i className="w-1/6">$10.50</i>
                  <a className="w-1/6 flex justify-center items-center">
                    <TrashIcon className="w-4 h-4" />
                  </a>
                </li>
                <li className=" flex w-full">
                  <span className="font-medium w-2/3">x1 Item C</span>{" "}
                  <i className="w-1/6">$10.50</i>
                  <a className="w-1/6 flex justify-center items-center">
                    <TrashIcon className="w-4 h-4" />
                  </a>
                </li>
              </ul>
            </div>
            <hr />
            <div className="w-full space-x-2">
              <ul className="w-full space-y-2">
                <li className="flex w-full">
                  <b className="w-2/3">Delivery</b>{" "}
                  <i className="w-1/3">$10.50</i>
                </li>
                <li className="flex w-full">
                  <b className="w-2/3">Discount</b>{" "}
                  <i className="w-1/3">$0.0</i>
                </li>
              </ul>
            </div>
            <hr />
            <div className="space-x-2">
              <ul className="space-y-2">
                <li className="flex w-full">
                  <b className="w-2/3">Total(etc tax)</b>{" "}
                  <i className="w-1/3">$60.0</i>
                </li>
                <li className="flex w-full">
                  <b className="w-2/3">Tax</b> <i className="w-1/3">$6.00</i>
                </li>
              </ul>
            </div>
            <hr />
            <div className="flex w-full">
              <b className="w-2/3">Order Total</b>{" "}
              <i className="w-1/3">$60.00</i>
            </div>
            <hr />
            <div className="border rounded p-3 border-[#82B366] bg-[#D5E8D4] space-x-2 font-medium flex">
              <span className="text-[#82B366] text-sm w-4/5">
                Youn savings on this order
              </span>
              <span className="text-[#82B366] w-1/5">$16.00</span>
            </div>
            <div className="flex space-x-2">
              <div className="relative w-2/3">
                <svg
                  fill="#000000"
                  className="absolute left-0 pl-2 h-full"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  xml:space="preserve"
                >
                  <g>
                    <g>
                      <path
                        d="M447.147,200.533h-39.253c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533h39.253
			c4.71,0,8.533-3.823,8.533-8.533S451.857,200.533,447.147,200.533z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M368.64,200.533h-39.253c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533h39.253c4.71,0,8.533-3.823,8.533-8.533
			S373.35,200.533,368.64,200.533z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M503.467,200.533H486.4c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533h8.533v8.533
			c0,4.71,3.823,8.533,8.533,8.533s8.533-3.823,8.533-8.533v-17.067C512,204.356,508.177,200.533,503.467,200.533z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M503.467,309.026c-4.71,0-8.533,3.823-8.533,8.533v30.473c0,4.71,3.823,8.533,8.533,8.533s8.533-3.823,8.533-8.533
			v-30.473C512,312.849,508.177,309.026,503.467,309.026z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M503.467,248.073c-4.71,0-8.533,3.823-8.533,8.533v30.473c0,4.71,3.823,8.533,8.533,8.533s8.533-3.823,8.533-8.533
			v-30.473C512,251.895,508.177,248.073,503.467,248.073z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M503.467,369.98c-4.71,0-8.533,3.823-8.533,8.533v30.473c0,4.71,3.823,8.533,8.533,8.533s8.533-3.823,8.533-8.533v-30.473
			C512,373.803,508.177,369.98,503.467,369.98z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M503.467,430.933c-4.71,0-8.533,3.823-8.533,8.533V448H486.4c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533
			h17.067c4.71,0,8.533-3.823,8.533-8.533v-17.067C512,434.756,508.177,430.933,503.467,430.933z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M167.381,448h-35.447c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533h35.447c4.71,0,8.533-3.823,8.533-8.533
			S172.092,448,167.381,448z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M96.495,448H61.047c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533h35.447c4.71,0,8.533-3.823,8.533-8.533
			S101.205,448,96.495,448z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M238.276,448h-35.448c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533h35.448c4.71,0,8.533-3.823,8.533-8.533
			S242.995,448,238.276,448z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M309.171,448h-35.447c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533h35.447c4.71,0,8.533-3.823,8.533-8.533
			S313.882,448,309.171,448z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M450.953,448h-35.447c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533h35.447c4.71,0,8.533-3.823,8.533-8.533
			S455.663,448,450.953,448z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M380.066,448h-35.447c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533h35.447c4.71,0,8.533-3.823,8.533-8.533
			S384.777,448,380.066,448z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M25.6,448h-8.533v-8.533c0-4.71-3.823-8.533-8.533-8.533S0,434.756,0,439.467v17.067c0,4.71,3.823,8.533,8.533,8.533H25.6
			c4.71,0,8.533-3.823,8.533-8.533S30.31,448,25.6,448z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M8.533,309.035c-4.71,0-8.533,3.823-8.533,8.533v30.473c0,4.71,3.823,8.533,8.533,8.533s8.533-3.823,8.533-8.533v-30.473
			C17.067,312.858,13.244,309.035,8.533,309.035z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M8.533,248.081c-4.71,0-8.533,3.823-8.533,8.533v30.473c0,4.71,3.823,8.533,8.533,8.533s8.533-3.823,8.533-8.533v-30.473
			C17.067,251.904,13.244,248.081,8.533,248.081z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M8.533,369.988c-4.71,0-8.533,3.823-8.533,8.533v30.473c0,4.71,3.823,8.533,8.533,8.533s8.533-3.823,8.533-8.533v-30.473
			C17.067,373.811,13.244,369.988,8.533,369.988z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M25.6,200.533H8.533c-4.71,0-8.533,3.823-8.533,8.533v17.067c0,4.71,3.823,8.533,8.533,8.533s8.533-3.823,8.533-8.533
			V217.6H25.6c4.71,0,8.533-3.823,8.533-8.533S30.31,200.533,25.6,200.533z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M99.558,200.533H62.575c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533h36.983c4.71,0,8.533-3.823,8.533-8.533
			S104.269,200.533,99.558,200.533z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M440.158,321.587L293.547,216.866c3.012-1.323,5.12-4.309,5.12-7.799c0-4.71-3.823-8.533-8.533-8.533h-17.067
			c-0.657,0-1.246,0.23-1.86,0.375l-1.075-0.768l170.01-120.653c3.029-2.15,4.318-6.016,3.191-9.549
			C442.206,66.406,438.912,64,435.2,64h-76.8c-1.758,0-3.473,0.538-4.915,1.553l-140.032,98.543l-37.06-29.645
			c1.801-6.11,2.807-12.561,2.807-19.251c0-37.641-30.626-68.267-68.267-68.267c-37.641,0-68.267,30.626-68.267,68.267
			c0,37.641,30.626,68.267,68.267,68.267c4.335,0,8.559-0.452,12.663-1.229l0.009,0.009l30.72,18.432
			c-0.256-0.017-0.469-0.145-0.725-0.145h-17.067c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533h0.888l-13.858,9.754
			c-4.096-0.768-8.311-1.22-12.629-1.22c-37.641,0-68.267,30.626-68.267,68.267c0,37.641,30.626,68.267,68.267,68.267
			c37.641,0,68.267-30.626,68.267-68.267c0-9.327-1.894-18.219-5.291-26.334c0.58-0.239,1.161-0.461,1.698-0.845l40.465-28.715
			l137.412,96.998c1.434,1.016,3.149,1.562,4.915,1.562h76.8c3.712,0,6.997-2.398,8.124-5.931
			C444.459,327.603,443.179,323.746,440.158,321.587z M110.933,166.4c-28.237,0-51.2-22.963-51.2-51.2
			c0-28.237,22.963-51.2,51.2-51.2s51.2,22.963,51.2,51.2C162.133,143.437,139.17,166.4,110.933,166.4z M144.247,174.729
			c10.266-5.768,18.85-14.123,24.969-24.166l29.705,23.765l-25.472,17.92L144.247,174.729z M110.933,345.6
			c-28.237,0-51.2-22.963-51.2-51.2c0-28.237,22.963-51.2,51.2-51.2s51.2,22.963,51.2,51.2
			C162.133,322.637,139.17,345.6,110.933,345.6z M165.726,253.312c-0.094,0.068-0.137,0.171-0.23,0.247
			c-5.922-7.893-13.457-14.507-22.178-19.226l73.318-51.601c0.819-0.341,1.502-0.939,2.193-1.545L361.097,81.067h47.326
			L165.726,253.312z M361.105,320l-130.278-91.964l24.576-17.442L408.568,320H361.105z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M110.933,81.067C92.109,81.067,76.8,96.375,76.8,115.2c0,18.825,15.309,34.133,34.133,34.133s34.133-15.309,34.133-34.133
			C145.067,96.375,129.758,81.067,110.933,81.067z M110.933,132.267c-9.412,0-17.067-7.654-17.067-17.067
			c0-9.412,7.654-17.067,17.067-17.067c9.412,0,17.067,7.654,17.067,17.067C128,124.612,120.346,132.267,110.933,132.267z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M110.933,260.267c-18.825,0-34.133,15.309-34.133,34.133c0,18.825,15.309,34.133,34.133,34.133
			s34.133-15.309,34.133-34.133C145.067,275.575,129.758,260.267,110.933,260.267z M110.933,311.467
			c-9.412,0-17.067-7.654-17.067-17.067c0-9.412,7.654-17.067,17.067-17.067c9.412,0,17.067,7.654,17.067,17.067
			C128,303.812,120.346,311.467,110.933,311.467z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M213.419,192h-0.085c-4.71,0-8.491,3.823-8.491,8.533s3.866,8.533,8.576,8.533c4.71,0,8.533-3.823,8.533-8.533
			S218.129,192,213.419,192z"
                      />
                    </g>
                  </g>
                </svg>
                <input
                  type="text"
                  className="border border-gray-400 outline-none focus:border-gray-600 rounded px-16 py-2 text-md text-gray-800 w-full"
                  placeholder="Coupon Code"
                />
              </div>
              <button
                onClick={() => applyCoupon}
                className="border border-gray-600 rounded p-2 text-gray-800 font-semibold focus:outline-none hover:bg-gray-600 hover:text-white w-1/3"
              >
                Apply
              </button>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}

export default App;
