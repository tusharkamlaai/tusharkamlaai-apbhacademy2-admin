import { Card, CardContent } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <>
      <div></div>
      <div className="justify-between lg:flex ">
        <h2 className="font-semibold lg:text-[25px] mb-5">
          Create & Send Zoom Meeting Link
        </h2>
      </div>

      <div className="items-center justify-center flex">
        <Card className="lg:w-[90%] ">
          <CardContent>
            <h2 className="font-semibold text-[20px] mb-3">New Category</h2>
            <hr />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum,
            consectetur, nulla architecto delectus ducimus facere facilis
            asperiores vero saepe natus labore! Officia ex dolores ad deleniti
            numquam laboriosam saepe quisquam?
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default page;
