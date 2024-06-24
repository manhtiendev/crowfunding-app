import LayoutDashboard from 'layout/LayoutDashboard';
import CampaignView from 'modules/campaign/CampaignView';
import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Modal from 'react-modal';
import LayoutPayment from 'layout/LayoutPayment';

const SignUpPage = lazy(() => import('./pages/SignUpPage'));
const SignInPage = lazy(() => import('./pages/SignInPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const CampaignPage = lazy(() => import('./pages/CampaignPage'));
const StartCampaignPage = lazy(() => import('./pages/StartCampaignPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));
const ShippingPage = lazy(() => import('./pages/ShippingPage'));
const PaymentPage = lazy(() => import('./pages/PaymentPage'));

// const customStyles = {
//   content: {},
// };

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');
Modal.defaultStyles = {};

function App() {
  return (
    <Suspense>
      <Routes>
        <Route element={<LayoutDashboard></LayoutDashboard>}>
          <Route path='/' element={<DashboardPage></DashboardPage>}></Route>
          <Route path='/campaign' element={<CampaignPage></CampaignPage>}></Route>
          <Route path='/start-campaign' element={<StartCampaignPage></StartCampaignPage>}></Route>
          <Route path='/campaign/:slug' element={<CampaignView></CampaignView>}></Route>
        </Route>
        <Route element={<LayoutPayment></LayoutPayment>}>
          <Route path='/checkout' element={<CheckoutPage></CheckoutPage>}></Route>
          <Route path='/shipping-address' element={<ShippingPage></ShippingPage>}></Route>
          <Route path='/payment' element={<PaymentPage></PaymentPage>}></Route>
        </Route>
        <Route path='/sign-up' element={<SignUpPage></SignUpPage>}></Route>
        <Route path='/sign-in' element={<SignInPage></SignInPage>}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
