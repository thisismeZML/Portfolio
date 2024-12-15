import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import useNavStore from "../store/useNavStore"; // Adjust the path as per your folder structure

const PublicLayout = () => {
  const { isOpen } = useNavStore();

  return (
    <main className="relative">
      <Header />

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => useNavStore.getState().setIsOpen()}
        ></div>
      )}

      <div className={`${isOpen ? "overflow-hidden" : ""}`}>
        <Outlet />
      </div>

    </main>
  );
};

export default PublicLayout;
