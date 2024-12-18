import { create } from "zustand";
import { Campaign } from "../schemas/Campaign";

type State = {
  campaign: Campaign | null;
};

type Actions = {
  setCampaign: (newCampaign: Campaign) => void;
  clearCampaign: () => void;
};

const useCampaignState = create<State & Actions>((set) => ({
  campaign: null,
  setCampaign: (newCampaign: Campaign) => {
    set({ campaign: newCampaign });
  },
  clearCampaign: () => {
    set({ campaign: null });
  },
}));

export default useCampaignState;
