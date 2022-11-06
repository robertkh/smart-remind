//?
import React from "react";
import { Form, Input, Button } from "antd";

// todo
export default function AddForm({ lsRef, set }) {
	//
	const [form] = Form.useForm();

	//
	function onAddFinish() {
		//
		let arr = new Array(7);
		let now = Date.now();
		arr[0] = now + 5 * 1000;
		arr[1] = now + 25 * 1000;
		arr[2] = now + 120 * 1000;
		arr[3] = now + 600 * 1000;
		arr[4] = now + 3600 * 1000;
		arr[5] = now + 5 * 3600 * 1000;
		arr[6] = now + 24 * 3600 * 1000;
		arr[7] = now + 5 * 24 * 3600 * 1000;
		arr[8] = now + 25 * 24 * 3600 * 1000;
		arr[9] = now + 60 * 24 * 3600 * 1000;
		arr[10] = now + 365 * 24 * 3600 * 1000;

		lsRef.current.push({
			w: form.getFieldValue("addItem"),
			inf: form.getFieldValue("addItemDescription"),
			key: Date.now(),
			t: arr,
		});

		localStorage.setItem("keywords", JSON.stringify(lsRef.current));
		set([...lsRef.current]);

		form.resetFields();
	}

	//
	return (
		<Form
			form={form}
			layout="vertical"
			onFinish={onAddFinish}
			className="border border-success rounded p-2 pb-0 "
		>
			<Form.Item name="addItem">
				<Input placeholder="Մուտքագրվող բառը" required />
			</Form.Item>

			<Form.Item name="addItemDescription">
				<Input placeholder="Բառին առնչվող ինֆորմացիա" />
			</Form.Item>

			<Form.Item>
				<Button type="primary" htmlType="submit">
					Ավելացնել
				</Button>
			</Form.Item>
		</Form>
	);
}
