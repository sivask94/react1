
var headers = ["Name", "Quantity", "Price"];

var rows = [["Rice", "10", "1000"],["Tomato", "20", "700"],["Onion", "15", "600"],["Wheat", "25", "900"]];

var rowsArray = [{
	name :"Rice",
	quantity : "10",
	price : "1000"
}, {
	quantity : "10",
	name :"Rice",
	price : "1000"
}, {
	quantity : "10",
	price : "1000",
	name :"Rice",
}];


var HeaderCell = React.createClass({
    render() {
        return (
        	<span className="header-cell">{this.props.data}</span>
        );
    }
});

var TableHeader = React.createClass({
    render() {
        return (
        	<div>
        		{this.props.headers.map(function(data, idx) {
        			return <HeaderCell data={data}/>;
        		})}
        	</div>
        );
    }
});

var Cell = React.createClass({
    render() {
        return (
        	<span className="header-cell">{this.props.data}</span>
        );
    }
});

var Row = React.createClass({
    render() {
        return (
        	<div>
        		{
        			this.props.row.map(function(data, idx) {
        				return <Cell data={data}/>;
        			})
        		}
        	</div>
    	);
    }
});

var TableRows =  React.createClass({
    render() {
        return (
        	<div>
        		{
        			this.props.rows.map(function(data, idx) {
        				return <Row row={data}/>;
        			})
        		}
        	</div>
    	);
    }
});


var Table = React.createClass({
    render() {
        return (
        	<div>
        		<TableHeader headers={headers}/>
        		<TableRows rows={rows}/>
    		</div>
        );
    }
});


ReactDOM.render(
  <Table/>,
  document.getElementById('content')
);