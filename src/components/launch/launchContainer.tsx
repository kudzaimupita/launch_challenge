import React, { useEffect, useState, useMemo } from "react";
import LaunchProfile from "./launchDetail";
import { useDispatch, useSelector } from "react-redux";
import { Container, Loading, AdaptableCard } from "../../components/shared";
import { queryLaunches } from "../../services/LaunchService";
import { DataTable } from "../shared";
import { injectReducer } from "../../store/index";
import reducer from "../../views/pages/store/index";
import { getData } from "../../views/pages/store/dataSlice";

injectReducer("launchData", reducer);

const LaunchContainer = ({ queryParam, navigateButton }: any) => {
  const dispatch = useDispatch();
  const launch = useSelector((state: any) => state.launchData.data.launch);
  const loading = useSelector((state: any) => state.launchData.data.loading);
  const query = {
    query: `
    query ExampleQuery {
      company {
        ceo
      }
      ${queryParam} {
        details
        id
        is_tentative
        launch_date_local
        launch_date_unix
        launch_date_utc
        launch_site {
          site_id
          site_name
          site_name_long
        }
        launch_success
        launch_year
        mission_id
        mission_name
        static_fire_date_unix
        static_fire_date_utc
        telemetry {
          flight_club
        }
        tentative_max_precision
        upcoming
        rocket {
          fairings {
            recovered
            recovery_attempt
            reused
            ship
          }
          first_stage {
            cores {
              block
              core {
                asds_attempts
                asds_landings
                block
                id
                missions {
                  flight
                  name
                }
                original_launch
                reuse_count
                rtls_attempts
                rtls_landings
                status
                water_landing
              }
              flight
              gridfins
              land_success
              landing_intent
              landing_type
              landing_vehicle
              legs
              reused
            }
          }
          rocket {
            active
            boosters
            company
            cost_per_launch
            country
            description
            diameter {
              feet
              meters
            }
            engines {
              engine_loss_max
              layout
              number
              propellant_1
              propellant_2
              thrust_sea_level {
                kN
                lbf
              }
              thrust_to_weight
              thrust_vacuum {
                kN
                lbf
              }
              type
              version
            }
            first_flight
            first_stage {
              burn_time_sec
              engines
              fuel_amount_tons
              reusable
            }
            height {
              feet
              meters
            }
            id
            landing_legs {
              material
              number
            }
            mass {
              kg
              lb
            }
            name
            payload_weights {
              id
              kg
              lb
              name
            }
           
            stages
            success_rate_pct
            type
            wikipedia
          }
          rocket_name
          rocket_type
          second_stage {
            block
            payloads {
              customers
              id
              manufacturer
              nationality
              norad_id
              orbit
              orbit_params {
                apoapsis_km
                arg_of_pericenter
                eccentricity
                epoch
                inclination_deg
                lifespan_years
                longitude
                mean_anomaly
                mean_motion
                periapsis_km
                period_min
                raan
                reference_system
                regime
                semi_major_axis_km
                
              }
              payload_mass_kg
              payload_mass_lbs
              payload_type
              reused
              
            }
          }
        }
      }
    }
    
  `,
  };

  useEffect(() => {
    fetchData();
  }, [queryParam]);

  const fetchData = async () => {
    dispatch(
      getData({
        queryLaunches,
        query,
        param: queryParam,
      })
    );
  };

  const columns = useMemo(
    () => [
      {
        Header: "id",
        accessor: "id",
        // sortable: true,
        Cell: (props: any) => {
          const row = props.row?.original;
          return <span className="capitalize">{row?.id}</span>;
        },
      },
      {
        Header: "name",
        accessor: "name",
        Cell: (props: any) => {
          const row = props.row?.original;
          return <span className="capitalize">{row?.name}</span>;
        },
      },
      {
        Header: "kg",
        accessor: "kg",
        Cell: (props: any) => {
          const row = props.row?.original;
          return <span className="capitalize">{row?.kg}</span>;
        },
      },
      {
        Header: "lb",
        accessor: "lb",
        Cell: (props: any) => {
          const row = props.row?.original;
          return <span className="capitalize">{row?.lb}</span>;
        },
      },
    ],
    []
  );
  return (
    <Loading loading={loading} type="cover">
      <Container className="h-full mb-12">
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-4">
          <div className="col-span-3">
            <LaunchProfile navigateButton={navigateButton} data={launch} />
          </div>
          <div className="col-span-2">
            <AdaptableCard>
              <DataTable
                skeletonAvatarColumns={[0]}
                skeletonAvatarProps={{ className: "rounded-sm" }}
                loading={loading}
                data={launch?.rocket?.rocket?.payload_weights}
                columns={columns}
              />
            </AdaptableCard>
          </div>
        </div>
      </Container>
    </Loading>
  );
};

export default LaunchContainer;
