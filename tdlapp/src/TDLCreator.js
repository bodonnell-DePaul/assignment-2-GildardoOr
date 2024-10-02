import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function TDLCreator() {
	return (
		<div className="d-flex justify-content-center align-items-center min-vh-100">
			<Container>
				<Row className="justify-content-center">
					<Col xs="auto">This is a space for the title</Col>
				</Row>
				<Row>
			<Col>
				<Form>
					{/*------------- Input todo item ---------------------------*/}
					<Form.Group className="mb-3" controlId="formBasicText">
					<Form.Label>Todo Item</Form.Label>
					<Form.Control type="text" placeholder="Enter Todo Item" />
					<Form.Text className="text-muted">
							We'll never share your email with anyone else.
					</Form.Text>
					</Form.Group>
			{/*------------- Input Date ---------------------------*/}
			<Form.Group className="mb-3" controlId="formBasicDate">
				<Form.Control type="date" placeholder="Date" />
			</Form.Group>
			{/*------------- Submit button ---------------------------*/}
			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	</Col>
	<Col xs={5}>
		<Tab.Container id="left-tabs-example" defaultActiveKey="first">
			<Row>
				<Col sm={3}>
					<Nav variant="pills" className="flex-column">
						<Nav.Item>
							<Nav.Link eventKey="first">Tab 1</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="second">Tab 2</Nav.Link>
						</Nav.Item>
					</Nav>
				</Col>
				<Col sm={9}>
					<Tab.Content>
						<Tab.Pane eventKey="first">First tab content</Tab.Pane>
						<Tab.Pane eventKey="second">Second tab content</Tab.Pane>
					</Tab.Content>
				</Col>
			</Row>
		</Tab.Container>
	</Col>
</Row>
</Container>
		</div>
	);
}
export default TDLCreator;
