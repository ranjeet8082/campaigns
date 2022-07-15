import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import Search from "../components/search";
import Table from "../components/table";
import DatePicker from "../components/DatePicker";
import { getCampaigns, updateFilteredCampaigns } from "../store/actions";

function Campaigns() {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [startDate, setStartDate] = useState(new Date("01/05/2017"));
  const [endDate, setEndDate] = useState(new Date("3/10/2018"));

  const { campaigns, filteredCampaigns } = useSelector(
    (state) => state.campaignsReducer
  );

  useEffect(() => {
    dispatch(getCampaigns());
  }, []);

  useEffect(() => {
    onFilter();
  }, [startDate, endDate, searchText]);

  const onFilter = (event) => {
    event && event.preventDefault();
    const filteredCampaigns = campaigns.filter((campaign) => {
      if (campaign.name.toLowerCase().includes(searchText.toLowerCase()))
        return true;
      return false;
    });
    filterCampaignsByDate(filteredCampaigns);
    // dispatch(updateFilteredCampaigns(filteredCampaigns));
  };

  const filterCampaignsByDate = (filteredCampaigns) => {
    const filteredCampaignsByDate = filteredCampaigns.filter((campaign) => {
      return (
        moment(campaign.startDate).isSameOrAfter(startDate) &&
        moment(campaign.startDate).isSameOrBefore(endDate)
      );
    });
    dispatch(updateFilteredCampaigns(filteredCampaignsByDate));
  };

  const onStartDateChange = (date) => {
    setStartDate(date);
  };
  const onEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <>
      {campaigns.length ? (
        <div className="campaigns-container">
          <div className="filters">
            {/* <div className="date-range"> */}
            <DatePicker onDateChange={onStartDateChange} selected={startDate} />
            <DatePicker onDateChange={onEndDateChange} selected={endDate} />
            {/* </div> */}
            <Search
              searchText={searchText}
              setSearchText={setSearchText}
              onFilter={onFilter}
            />
          </div>

          <Table tableData={filteredCampaigns} />
        </div>
      ) : (
        <span>Loading Campaigns...</span>
      )}
    </>
  );
}

export default Campaigns;
