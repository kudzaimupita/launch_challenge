import React from "react";
import { Button } from "../../components/ui";
import { Link } from "react-router-dom";
import { BiSkipNextCircle, BiSkipPreviousCircle } from "react-icons/bi";

const DateInfoField = ({ title, value }: any) => {
  return (
    <div>
      <span>{title}</span>
      <p className="text-gray-700 dark:text-gray-200 font-semibold mb-6">
        {value}
      </p>
    </div>
  );
};

const HomeContainer = ({ launchDates }: any) => {
  return (
    <div className="text-center">
      <h3 className="mb-2">SpaceX Updates</h3>

      <DateInfoField
        title="Previous Launch Date"
        value={new Date(launchDates?.latestLaunch).toDateString()}
      />
      <DateInfoField
        title="Next Launch Date"
        value={new Date(launchDates?.nextLaunch).toDateString()}
      />
      <div className="mt-8 max-w-[350px] mx-auto">
        <Link to="/next-launch">
          <Button
            icon={<BiSkipPreviousCircle className=" text-white" />}
            className="mb-2"
            variant="solid"
            block
          >
            Next Launch
          </Button>
        </Link>
        <Link to="/previous-launch">
          <Button
            icon={<BiSkipNextCircle className=" text-indigo-700" />}
            variant="plain"
            block
          >
            Previous Launch
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomeContainer;
