import React, { useEffect, useState } from "react";
import HeroSection from "./heroSection/HeroData";
import TrendingSection from "./trendingSection/TrendingData";
import BrowseSection from "./browseSection/BrowseData";
import DiscoverSection from "./discoverSection/DiscoverData";
import HighlightsSection from "./highlightsSection/HighlightsData";
import WorkSection from "./workSection/WorkData";
import SubscribeSection from "./subscribeSection/SubscribeData";
import { useAppDispatch } from "../../store/store";
import { collectionsImages } from "../../store/slice/collectionsSlice";
import Loader from "../../components/loader/Loader";

const Index = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(collectionsImages());
  }, [dispatch]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 3000));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HeroSection />
          <TrendingSection />
          <BrowseSection />
          <DiscoverSection />
          <HighlightsSection />
          <WorkSection />
          <SubscribeSection />
        </>
      )}
    </>
  );
};

export default Index;
