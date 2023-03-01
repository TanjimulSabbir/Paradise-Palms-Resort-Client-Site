import React from "react";
import {Puff,ThreeDots ,BallTriangle,Watch, ColorRing} from "react-loader-spinner";
const PageLoading = () => {
  return (
    <div className="flex justify-center items-center">
 <ColorRing
  visible={true}
  height="200"
  width="30"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={[]}
/>
    </div>
  );
};

export default PageLoading;
