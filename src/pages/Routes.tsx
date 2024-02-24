import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./homePage";
import NftCollection from "./nftCollectionPage/NftCollection";
import NftDetail from "./nftDetailPage/NftDetail";
import NoPage from "./noPage/NoPage";

export default function Index() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/collection/:collection_slug"
            element={<NftCollection />}
          />
          <Route path="/nft" element={<NftDetail />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
