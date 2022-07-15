export default function campaignsReducer(
  state = {
    campaigns: [],
  },
  action
) {
  switch (action.type) {
    case "CAMPAIGNS_DATA":
      return {
        ...state,
        campaigns: action.payload,
        filteredCampaigns: action.payload,
      };
    case "FILTERED_CAMPAIGNS":
      return { ...state, filteredCampaigns: action.payload };

    default:
      return state;
  }
}
