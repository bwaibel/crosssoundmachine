var React = require('react');
var DataStore = require('../stores/DataStore');
var ActionCreator = require('../actions/DataActionCreators');
var Navbar = require('react-bootstrap/Navbar');
var Nav = require('react-bootstrap/Nav');
var NavItem = require('react-bootstrap/NavItem');



var App = React.createClass({
  getInitialState: function() {
    return DataStore.getAll();
  },
  _onChange: function() {
    this.setState(DataStore.getAll());
  },
  componentDidMount: function() {
    DataStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    DataStore.removeChangeListener(this._onChange);
  },
  handleAddNewClick: function(e) {
    var title = prompt('Enter task title:');
    if (title) {
      ActionCreator.addItem(title);
    }
  },
  render: function() {

    return (
      <div>
      <Navbar brand="Cross Sound Machine" inverse fixedTop>
        <Nav right>
          <NavItem eventKey={1} href="#">Home</NavItem>
          <NavItem eventKey={1} href="#services">Services</NavItem>
          <NavItem eventKey={1} href="#contact">Contact Us</NavItem>
        </Nav>
      </Navbar>
      <section className="welcome container">
        <h2>Welcome</h2>
        <div>
            <p>We are a full service, family run, machine shop located conveniently just North of Bremerton in Kitsap county. We specialize in custom metal fabrication. </p>
            <p><a href="#contact">Contact us</a> to request a quote, or if you have any questions.</p>
        </div>
      </section>
      <section className="container">
        <a className="bookmark" name="services" href="#"></a>
        <h2>Capabilities</h2>
        <div>
            <ul>
                <li>Mill work</li>
                <li>Inspection</li>
                <li>Knowledge of all types of material</li>
                <li>Fabricating: TIG, MIG, ARC</li>
                <li>Re-machining parts to a new size</li>
                <li>Build-up parts by welding and re-machining to original size</li>
            </ul>
        </div>
        <h2>Equipment</h2>
        <div>
            <ul> 
                <li>Manual Milling Machines</li>
                <li>Engine Lathes</li>
                <li>Hardage Chuckers</li>
                <li>Full Grinding: Surface, O.D., Tool & Cutter</li>
                <li>Sheet Metal</li>
                <li>Fabricating: TIG, MIG, ARC</li>
            </ul> 
        </div>
      </section>
      <section className="container">
        <a className="bookmark" name="contact" href="#"></a> 
        <h2>Contact Information</h2>
        <div>
            <table>
                <tr>
                    <td>Owners:</td>
                    <td>Rich and Laurie Irvin</td>
                </tr>
                <tr>
                    <td>Phone:</td>
                    <td>(360) 373-3467</td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td>info@crosssoundmachine.com</td>
                </tr>
                <tr>
                    <td>Website:</td>
                    <td>http://www.crosssoundmachine.com</td>
                </tr>
                <tr>
                    <td>Mailing Address:</td>
                    <td>
                        5885 State Highway 303 NE # 201<br />
                        Bremerton, WA 98311<br />
                        <a href="http://maps.google.com/maps?lsm=1&daddr=Cross+Sound+Machine+Inc+%4047.616116,-122.63051&geocode=&dirflg=&saddr=&f=li&hl=en&sll=47.618285,-122.630467&sspn=0.004455,0.008755&abauth=a2b371:9DwYH2weO62qbOvyFGFmD9M2t9o">Directions</a>
                    </td>
                </tr>
            </table>
            </div>
      </section>
      </div>
    );
  }

});

module.exports = App;
