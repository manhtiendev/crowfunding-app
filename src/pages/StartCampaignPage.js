import CampaignAddNew from 'modules/campaign/CampaignAddNew';
import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const StartCampaignPage = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user?.email) {
      navigate('/login');
    }
  }, [user, navigate]);
  return (
    <Fragment>
      <CampaignAddNew></CampaignAddNew>
    </Fragment>
  );
};

export default StartCampaignPage;
