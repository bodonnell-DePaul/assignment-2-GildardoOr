import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

function TDLCreator() {
  return (
  <div class="container">
    
    <div class="row">
      <div class="col-sm">
        This is going to be the title of the table
      </div>
    </div>

    <div class="row">
      <div class="col-sm">
        this is the  create new item 
      </div>
      <div class="col-sm">
        this is the todo list with colors
      </div>
      <div class="col-sm">
        Not sure but if needed this is the content of teh to do list
      </div>
    </div>

  </div>
  );
}

export default TDLCreator;
