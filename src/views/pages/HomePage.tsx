import React, { useEffect } from "react";
import HomeContainer from "../../components/launch/homeContainer";
import { useDispatch, useSelector } from "react-redux";
import { Container, Loading } from "../../components/shared";
import { queryLaunches } from "../../services/LaunchService";
import { injectReducer } from "../../store/index";
import reducer from "./store/index";
import { getData } from "./store/dataSlice";

injectReducer("launchData", reducer);

const query = {
  query: `
  query ExampleQuery {
	company {
	  ceo
	}
	roadster {
	  apoapsis_au
	}
	launchLatest {
	  id
	  launch_date_utc
	  upcoming
	  launch_date_unix
	  launch_date_local
	}
	launchNext {
		launch_date_utc
	  }
  }
`,
};

const Home = () => {
  const dispatch = useDispatch();

  const launch = useSelector((state: any) => state.launchData.data.launch);
  const loading = useSelector((state: any) => state.launchData.data.loading);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    dispatch(
      getData({
        queryLaunches,
        query,
      })
    );
  };
  return (
    <Loading loading={loading} type="cover">
      <Container className="h-full mb-12">
        <HomeContainer launchDates={launch} />
      </Container>
    </Loading>
  );
};

export default Home;
