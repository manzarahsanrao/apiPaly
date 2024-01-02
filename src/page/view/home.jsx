import React, { useState, useEffect } from "react";
import getapi from "../../axios/getapi";
import style from "./home.module.css";
import Card from "../../component/card.jsx";
import { TailSpin } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import Selector from "./selector.jsx";
import Filter from "./filter.jsx";
let timer;

const Home = () => {
  const [data, setData] = useState(null);
  const [root, setRoot] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalLength, setTotalLength] = useState(null);
  const [loading, setLoading] = useState(false);
  const [itemPerPage, setItemPerPage] = useState(10);
  const [statusValue, setStatusValue] = useState();
  const [searchValue, setSearchValue] = useState(null);
  const [inputValue, setInputValue] = useState(null);
  const navigate = useNavigate();
  let numberOfPages, pageIndex;

  const fetch = async () => {
    const params = {
      page: currentPage,
      limit: itemPerPage,
      search: searchValue,
    };

    if (statusValue !== "All") {
      params.isBlocked = statusValue === "Active" ? true : false;
    }

    try {
      setLoading(true);
      const response = await getapi(params);
      // console.log(response.data);
      setData(response.data);
      setTotalLength(response.totalRecords);
      setLoading(false);
    } catch (error) {
      throw error;
    }
  };

  const getDataFromChild = (value) => {
    setItemPerPage(value);
  };

  const getSatusValue = (value) => {
    setStatusValue(value);
    // console.log(value);
  };

  useEffect(() => {
    fetch();
  }, [currentPage, itemPerPage, searchValue, statusValue]);

  useEffect(() => {
    navigate("/1");
    setCurrentPage(1);
    setSearchValue(null);
    setRoot(false);
  }, [itemPerPage, root, statusValue]);

  const debounce = (e) => {
    setInputValue(e);
    clearTimeout(timer);
    timer = setTimeout(() => {
      setSearchValue(e);
    }, 700);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    navigate(`/${pageNumber}`);
  };
  if (totalLength) {
    numberOfPages = Math.ceil(totalLength / itemPerPage);
    pageIndex = Array.from({ length: numberOfPages }, (_, indx) => indx + 1);
  }

  return (
    <>
      <div className={style.container}>
        {loading ? (
          <div className={style.loader}>
            {" "}
            <TailSpin color="#36D7B7" height={100} width={100} />{" "}
          </div>
        ) : (
          <>
            <div className={style.heading}>
              <span
                onClick={() => {
                  navigate("/1");
                  setRoot(true);
                }}
              >
                {" "}
                getApi
              </span>
              <div className={style.filter}>
                <Selector sendDataToParent={getDataFromChild} />
                <input
                  type="text"
                  onChange={(e) => debounce(e.target.value)}
                  placeholder="Search..."
                  value={inputValue}
                />
                <Filter sendDataToParent={getSatusValue} status={statusValue} />
              </div>
            </div>
            <div className={style.main}>
              {data?.map((value, index) => (
                <Card key={index} data={value} />
              ))}
            </div>

            {/* Pagination */}
            <div className={style.buttonbox}>
              <button
                className={style.button}
                onClick={() =>
                  handlePageChange(
                    currentPage >= 2 ? currentPage - 1 : currentPage
                  )
                }
              >
                &lt;
              </button>
              {pageIndex?.map((page, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(page)}
                  className={page === currentPage ? style.active : style.button}
                >
                  {page}
                </button>
              ))}
              <button
                className={style.button}
                onClick={() =>
                  handlePageChange(
                    currentPage <= numberOfPages - 1
                      ? currentPage + 1
                      : numberOfPages
                  )
                }
              >
                &gt;
              </button>
            </div>
          </>
        )}{" "}
      </div>
    </>
  );
};

export default Home;
