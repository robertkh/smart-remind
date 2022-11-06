//?
import { ListGroup } from "reactstrap";
import ListItem from "./ListItem";

// todo
export default function ListMaker({ list, set }) {
	//
	function onDelete(item) {
		set(list.filter((el) => el !== item));
	}

	//
	let mapArr = list.map((item) => <ListItem el={item} onDelete={onDelete} />);

	//
	return (
		<ListGroup>
			{mapArr.length ? mapArr : "Բոլոր ծանուցագրերն ուղարկված են։"}
		</ListGroup>
	);
}
