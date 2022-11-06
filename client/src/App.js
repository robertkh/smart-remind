// todo
import TabComponent from "./components/TabComponent";
import { StorageContextProvider } from "./my-hooks/StorageContext";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.css";

// todo
export default function App() {
	return (
		<div className="col-xl-7 col-lg-8 col-md-9 col-sm-10 col-11 mx-auto mt-5 ">
			<StorageContextProvider>
				<TabComponent />
			</StorageContextProvider>
		</div>
	);
}
