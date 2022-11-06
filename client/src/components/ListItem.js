//?
import { ListGroupItem } from "reactstrap";
import { MdClose } from "react-icons/md";
//
import moment from "moment";
import "moment/min/locales";
moment.locale("hy-am");
//

// todo
export default function ListItem({ el, onDelete }) {
	return (
		<ListGroupItem>
			<span className="text-secondary">
				{moment(el.time).format("lll")} {" /"}
			</span>
			<b>
				<span className="ms-2 text-primary">{el.title}</span>
			</b>

			<span className="ms-2 text-primary">{el.body}</span>

			<MdClose
				size={18}
				style={{ cursor: "pointer", float: "right" }}
				onClick={() => onDelete(el)}
			/>
		</ListGroupItem>
	);
}
