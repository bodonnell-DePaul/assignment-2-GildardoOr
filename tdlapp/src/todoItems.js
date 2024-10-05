  export const todos = [
    { title: 'Todo 1', description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum.`, dueDate: '2025-04-03' },

    { title: 'Todo 2', description: `Sed auctor nunc nec nisi ultrices, in molestie nibh mattis. 
    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
    Suspendisse potenti. Nullam nec nibh nibh. Nullam quis nisl nec nunc congue mollis. 
    Vivamus nec nisi nec nunc mattis molestie. Sed auctor nunc nec nisi ultrices, in molestie nibh mattis.`, dueDate: '2024-10-10' },

    { title: 'Todo 3', description: `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
    Suspendisse potenti. Nullam nec nibh nibh. Nullam quis nisl nec nunc congue mollis. Vivamus nec nisi nec nunc mattis molestie. 
    Sed auctor nunc nec nisi ultrices, in molestie nibh mattis. Pellentesque habitant morbi tristique 
    senectus et netus et malesuada fames ac turpis egestas.`, dueDate: '2024-04-09' },

    { title: 'Todo 4', description: `Suspendisse potenti. Nullam nec nibh nibh. Nullam quis nisl nec nunc congue mollis. 
    Vivamus nec nisi nec nunc mattis molestie. Sed auctor nunc nec nisi ultrices, in molestie nibh mattis. 
    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. 
    Nullam nec nibh nibh. Nullam quis nisl nec nunc congue mollis. `, dueDate: '2024-04-11' },
  ];



//   import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// // import Nav from 'react-bootstrap/Nav';
// import Tab from 'react-bootstrap/Tab';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import './TDLCreator.css';
// import { todos } from './todoItems.js';  
// import ListGroup from 'react-bootstrap/ListGroup';

// console.log(todos);  // This should now print the array to the console
// // ------------------- Name: Gildardo Orea Amador -----------------------------------------------*/


// const getTodoVariant = (dueDate) => {
// 	const currentDate = new Date();
// 	const todoDate = new Date(dueDate);
  
// 	// Calculate the difference in time (in milliseconds)
// 	const timeDiff = todoDate - currentDate;
  
// 	// Convert time difference to days
// 	const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  
// 	// Determine the Bootstrap variant based on the days difference
// 	if (dayDiff > 7) {
// 	  return 'primary';  // Due date is more than 7 days away
// 	} else if (dayDiff <= 7 && dayDiff >= 4) {
// 	  return 'success';  // Due date is within the next 7 days
// 	} else if (dayDiff < 4 && dayDiff >= 2) {
// 	  return 'warning';  // Due date is within the next 4 days
// 	} else if (dayDiff < 2) {
// 	  return 'danger';  // Due date is within the next 2 days or overdue
// 	}
//   };

// // todos.forEach(todo => {
// // 	console.log(`Title: ${todo.title}`);
// // 	console.log(`Description: ${todo.description}`);
// // 	console.log(`Due Date: ${todo.dueDate}`);
// // 	console.log('------------------------');
// //   });

// function TDLCreator() {
// 	return (
// 		<div className="d-flex justify-content-center align-items-center min-vh-100">
// 			<Container>
// 		{/*------------- Start of Row 1 ---------------------------*/}
// 				<Row className="justify-content-center">
// 					<Col xs="auto">Gildardo </Col>
// 				</Row>
// 		{/*------------- Start of Row 2 ---------------------------*/}		
// 				<Row>
// 		{/*------------- Column 1 ---------------------------*/}
// 					<Col className="custom-background">
// 						<Form>
// 							{/*------------- Input todo item ---------------------------*/}
// 							<Form.Group className="mb-3" controlId="formBasicText">
// 							<Form.Label>Todo Item</Form.Label>
// 							<Form.Control type="text" placeholder="Enter Todo Item" />
// 							<Form.Text className="text-muted">
// 									We'll never share your email with anyone else.
// 							</Form.Text>
// 							</Form.Group>
// 							{/*------------- Input Date ---------------------------*/}
// 							<Form.Group className="mb-3" controlId="formBasicDate">
// 							<Form.Control type="date" placeholder="Date" />
// 							</Form.Group>
// 							{/*------------- Submit button ---------------------------*/}
// 							<Button variant="primary" type="submit">
// 								Submit
// 							</Button>
// 						</Form>
// 					</Col>
// 		{/*------------- Column 2 ---------------------------*/}

// 					<Col>
// 						<Tab.Container id="left-tabs-example" defaultActiveKey="first">
// 							<Row>
// 								<Col>
// 								<ListGroup>
// 									{/* Creating a ListGroup.Item for each todo */}
// 									{todos.map((todo, index) => (
// 										<ListGroup.Item
// 										action key={index}
// 										eventKey={`todo-${index}`}
// 										style={{ cursor: 'pointer' }}
// 										variant={getTodoVariant(todo.dueDate)}  // Apply the color variant based on due date
// 										>
// 										{todo.title}  {/* Each list group item will display the todo title */}
// 										</ListGroup.Item>
// 									))}
// 								</ListGroup>
// 								</Col>

// 								<Col>
// 									<Tab.Content style={{ marginLeft: '20px' }}>
// 										{/* Creating a Tab.Pane for each todo description and date */}
// 										{todos.map((todo, index) => (
// 											<Tab.Pane eventKey={`todo-${index}`} key={index}>
// 											<p>{todo.description}</p>  {/* Displaying the corresponding description */}
// 											<p style={{ fontStyle: 'italic', color: 'gray' }}>
// 												Due Date: {todo.dueDate}  {/* Displaying the due date at the bottom */}
// 											</p>
// 											</Tab.Pane>
// 										))}
// 									</Tab.Content>
// 								</Col>
// 							</Row>     
// 						</Tab.Container>
// 					</Col>
// 				</Row>
// 			</Container>
// 		</div>
// 	);
// }
// export default TDLCreator;
