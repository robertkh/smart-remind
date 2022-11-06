// todo
import { Tabs, Collapse } from "antd";
import Words from "./Words";
import Remainder from "./Remainder";

//?
const { TabPane } = Tabs;
const { Panel } = Collapse;

// todo
export default function TabComponent() {
	//
	return (
		<Tabs defaultActiveKey="1" size="large">
			<TabPane tab={<span>Բառեր</span>} key="1" className="mt-4">
				<Collapse className="mb-3">
					<Panel header="Ըստ Պիմսլեռի՝ հիշեցւմները կկատարվեն">
						<ol>
							<li>
								<b>5 վարկյան հետո։</b>
							</li>
							<li>
								<b>25 վարկյան հետո։</b>
							</li>
							<li>
								<b>2 րոպե հետո։ </b>
							</li>
							<li>
								<b> 10 րոպե հետո։</b>
							</li>
							<li>
								<b> 1 ժամ հետո։</b>
							</li>
							<li>
								<b> 5 ժամ հետո։</b>
							</li>
							<li>
								<b> 1 օր հետո։</b>
							</li>
							<li>
								<b> 5 օր հետո։</b>
							</li>
							<li>
								<b> 25 օր հետո։</b>
							</li>
							<li>
								<b> 4 ամիս հետո։</b>
							</li>
							<li>
								<b> 2 տարի հետո։</b>
							</li>
						</ol>
					</Panel>
				</Collapse>

				<Words />
			</TabPane>

			<TabPane tab={<span>Ծանուցագրեր</span>} key="2">
				<Remainder />
			</TabPane>
		</Tabs>
	);
}
