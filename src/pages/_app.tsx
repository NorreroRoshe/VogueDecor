import type { AppProps } from "next/app";
import { appWithTranslation } from 'next-i18next';

// import 'swiper/css/swiper.min.css';
import "@/styles/custom-plugins.css";
import "@/styles/drawer-lib.css";
import "@/styles/tailwind.css";
import "@/styles/global.css";
import "@/styles/scrollbar.css";
import "@/styles/swiper-carousel.css";
import "@/styles/ImgSlick.scss";
import "@/styles/allCategories.scss";
import { Provider } from "react-redux";
import { setupStore } from "@/Store/store";
import "@/layouts/MainLayout.scss";
import MainLayout from "@/layouts/MainLayout";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ModalProvider } from "@/components/common/modal/modal.context";
import ManagedModal from "@/components/common/modal/managed-modal";
import { CartProvider } from "@/contexts/cart/cart.context";
import { UIProvider } from "@/contexts/ui.context";
import ManagedDrawer from "@/components/common/drawer/managed-drawer";
// import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";
import { getDirection } from '@/utils/get-direction';
import { useRouter } from 'next/router';

// import { useRefreshTokenMutation } from "@/Store/auth/auth.api";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	let store = setupStore();
	let persistor = persistStore(store);
	const queryClient = new QueryClient();

  const router = useRouter();
  const dir = getDirection(router.locale);
  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);


	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<QueryClientProvider client={queryClient}>
					<CartProvider>
						<UIProvider>
							<ModalProvider>
								{/* <SessionProvider session={session}> */}
								<MainLayout>
									<Component {...pageProps} />
									<ToastContainer />
									<ManagedModal />
									<ManagedDrawer />
								</MainLayout>
							</ModalProvider>
						</UIProvider>
					</CartProvider>
					{/* </SessionProvider> */}
				</QueryClientProvider>
			</PersistGate>
		</Provider>
	);
}

export default appWithTranslation(App);
