import React from "react";

function table({ tableData }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>User Name</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Active</th>
          <th>Budget</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((campaign, i) => (
          <tr key={i}>
            <td>{campaign.name}</td>
            <td>{campaign.userId}</td>
            <td>{campaign.startDate}</td>
            <td>{campaign.endDate}</td>
            <td>{campaign.id}</td>
            <td>{campaign.Budget}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default table;
