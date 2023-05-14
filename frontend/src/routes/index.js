import ActiveRegister from '~/component/ActiveRegister/ActiveRegister';
import WithLoading from '~/component/Loading/WithLoading';
import DonHang from '~/page/purchasehistory/donhang/DonHang';
import Features from '~/page/features/Features';
import Cart from '~/page/features/cart/Cart';
import Home from '~/page/features/home/Home';
import PurchaseHistory from '~/page/purchasehistory/PurchaseHistory';
import SignUp2 from '~/page/signup/SignUp2';

const FeaturesWithLoading = WithLoading(Features);

const publicRoutes = [
  {
    path: '/',
    component: FeaturesWithLoading,
    childRoute: [
      { path: '', component: Home },
      { path: '/cart', component: Cart },
      // { path: '/history',
      //   component: PurchaseHistory,
      //   childRoute:[
      //     { path: '/history/donhang', component: DonHang }
      //   ]
      // }
      
    ],
  },
  // {
  //   path: '/history',
  //   component: PurchaseHistory,
  //   childRoute: [{ path: '/donhang', component: DonHang }],
  // },
  {
    path: '/sign-up2',
    component: SignUp2,
  },
  {
    path: '/active/account',
    component: ActiveRegister,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
