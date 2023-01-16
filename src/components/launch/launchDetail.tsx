import React from "react";
import { Card, Avatar, Button } from "../../components/ui";
import { HiPencilAlt, HiOutlineTrash } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const CustomerInfoField = ({ title, value }: any) => {
  return (
    <div>
      <span>{title}</span>
      <p className="text-gray-700 dark:text-gray-200 font-semibold">{value}</p>
    </div>
  );
};

const LaunchDetailAction = ({ navigateButton }: any) => {
  const navigate = useNavigate();

  return (
    <>
      <Button block icon={<HiOutlineTrash />} onClick={() => navigate("/")}>
        Home
      </Button>
      <Button
        icon={<HiPencilAlt />}
        block
        variant="solid"
        onClick={() => navigate(navigateButton.route)}
      >
        {navigateButton.name}
      </Button>
    </>
  );
};

const LaunchDetail = ({ data = {}, navigateButton }: any) => {
  return (
    <Card>
      <div className="flex flex-col xl:justify-between h-full 2xl:min-w-[500px] mx-auto">
        <div className="flex xl:flex-col items-center gap-4">
          <Avatar
            size={150}
            shape="circle"
            src={`https://techcrunch.com/wp-content/uploads/2020/10/starlink-15.gif`}
          />
          <h4 className="font-bold">{data?.mission_name}</h4>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-2 gap-y-2 gap-x-4 mt-8">
          <CustomerInfoField
            title="Site Id"
            value={data?.launch_site?.site_id}
          />
          <CustomerInfoField
            title="Site Name"
            value={data?.launch_site?.site_name}
          />
          <CustomerInfoField
            title="License Plate"
            value={data?.launch_site?.site_name_long}
          />{" "}
          <CustomerInfoField
            title="Launch Date"
            value={data?.launch_date_utc}
          />
          <CustomerInfoField
            title="Rocket Name"
            value={data?.rocket?.rocket_name}
          />
          <CustomerInfoField
            title="Rocket Type"
            value={data?.rocket?.rocket_type}
          />
          <CustomerInfoField
            title="Propellent"
            value={data?.rocket?.rocket.engines?.propellant_1}
          />
          <CustomerInfoField
            title="Description"
            value={data?.rocket?.rocket?.description}
          />
          <CustomerInfoField
            title="Cost_per_launch
"
            value={data?.rocket?.rocket?.cost_per_launch}
          />
        </div>
        <div className="mt-4 flex flex-col xl:flex-row gap-2">
          <LaunchDetailAction navigateButton={navigateButton} />
        </div>
      </div>
    </Card>
  );
};

export default LaunchDetail;
