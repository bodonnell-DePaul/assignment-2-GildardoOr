import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './TDLCreator.css';
import { todos as initialTodos } from './todoItems.js';  
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';

console.log(initialTodos);  // This should now print the array to the console

// Helper function to determine color variant based on due date
const getTodoVariant = (dueDate) => {
	const currentDate = new Date();
	const todoDate = new Date(dueDate);
	const timeDiff = todoDate - currentDate;
	const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

	if (dayDiff > 7) {
	  return 'primary';  // Due date is more than 7 days away
	} else if (dayDiff <= 7 && dayDiff >= 4) {
	  return 'success';  // Due date is within the next 7 days
	} else if (dayDiff < 4 && dayDiff >= 2) {
	  return 'warning';  // Due date is within the next 4 days
	} else if (dayDiff < 2) {
	  return 'danger';  // Due date is within the next 2 days or overdue
	}
};

function TDLCreator() {
	const [todos, setTodos] = useState(initialTodos);

	// Handle description changes
	const handleDescriptionChange = (index, newDescription) => {
		const updatedTodos = [...todos];
		updatedTodos[index].description = newDescription;
		setTodos(updatedTodos);
	};

	// Handle due date changes
	const handleDueDateChange = (index, newDueDate) => {
		const updatedTodos = [...todos];
		updatedTodos[index].dueDate = newDueDate;
		setTodos(updatedTodos);
	};

	return (
		<div className="d-flex justify-content-center align-items-center min-vh-100">
			<Container>
				{/*------------- Start of Row 1 ---------------------------*/}
				<Row className="justify-content-center text-align">
					Assignment 2: Gildardo Orea Amador ToDo List 
				</Row>

				{/*------------- Start of Row 2 ---------------------------*/}		
				<Row>
					{/*------------- Column 1 ---------------------------*/}
					<Col className="custom-background">
						<Form>
							{/*------------- Input todo item ---------------------------*/}
							<Form.Group className="mb-3" controlId="formBasicText">
								<Form.Label>Todo Item</Form.Label>
								<Form.Control type="text" placeholder="Add Todo Item" />
							</Form.Group>

							{/*------------- Input Date ---------------------------*/}
							<Form.Group className="mb-3" controlId="formBasicDate">
								<Form.Label>Due Date</Form.Label>
								<Form.Control type="date" placeholder="Date" />
							</Form.Group>

							{/*------------- Submit button ---------------------------*/}
							<Button variant="primary" type="submit">
								Submit
							</Button>
						</Form>
					</Col>

					{/*------------- Column 2 ---------------------------*/}
					<Col>
						<Tab.Container id="left-tabs-example" defaultActiveKey="todo-0">
							<Row>
								<Col>
									<ListGroup>
										{/* Creating a ListGroup.Item for each todo */}
										{todos.map((todo, index) => (
											<ListGroup.Item
												action key={index}
												eventKey={`todo-${index}`}
												style={{ cursor: 'pointer' }}
												variant={getTodoVariant(todo.dueDate)}  // Apply the color variant based on due date
											>
												{todo.title}  {/* Each list group item will display the todo title */}
											</ListGroup.Item>
										))}
									</ListGroup>
								</Col>

								<Col>
									<Tab.Content style={{ marginLeft: '20px' }}>
										{/* Creating a Tab.Pane for each todo description and date */}
										{todos.map((todo, index) => (
											<Tab.Pane eventKey={`todo-${index}`} key={index}>
												{/* Editable Description */}
												<p
													contenteditable="true"
													suppressContentEditableWarning
													onBlur={(e) => handleDescriptionChange(index, e.target.innerText)}>
													{todo.description}
												</p>
											
												{/* Editable Due Date */}
												<label>
													<input
														type="date"
														value={todo.dueDate}
														onChange={(e) => handleDueDateChange(index, e.target.value)}
														// style={{ marginLeft: '10px' }}
													/>
												</label>
											</Tab.Pane>
										))}
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