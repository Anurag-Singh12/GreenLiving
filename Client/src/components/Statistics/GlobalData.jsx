import React from "react";
import EV from "./EV";
import CO2 from "./CO2";
import RenewableEnergyUsageChart from "./Renewable";

const GlobalData = () => {
  return (
    <div className="w-full max-w-4xl px-3 py-2">
      <EV />
      <CO2 />
      <RenewableEnergyUsageChart />
    </div>
  );
};

export default GlobalData;

// import React from 'react'
// import EV from './EV'
// import CO2 from './CO2'
// import RenewableEnergyUsageChart from './Renewable'

// const GlobalData = () => {
//   return (
//     <div className='m-5 p-3'>
//       <EV/>
//       <CO2/>
//       <RenewableEnergyUsageChart/>
//     </div>
//   )
// }

// export default GlobalData
