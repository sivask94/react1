
var headers = ["Name", "Quantity", "Price"];

var row1 = ["Rice", "10", "1000"];
var row2 = ["Tomato", "20", "700"];
var row3 = ["Onion", "15", "600"];
var row4 = ["Wheat", "25", "900"];


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

var RowCell1 = React.createClass({
    render() {
        return (
        	<span className="header-cell">{this.props.data}</span>
        );
    }
});

var RowCell2 = React.createClass({
    render() {
        return (
        	<span className="header-cell">{this.props.data}</span>
        );
    }
});

var RowCell3 = React.createClass({
    render() {
        return (
        	<span className="header-cell">{this.props.data}</span>
        );
    }
});

var RowCell4 = React.createClass({
    render() {
        return (
        	<span className="header-cell">{this.props.data}</span>
        );
    }
});



var TableRow1 = React.createClass({
    render() {
        return (

        	<div>

        	{this.props.row1.map(function(data, idx) {
        			return <RowCell1 data={data}/>;
        		})}
        	</div>

        	);
    }
});

var TableRow2 = React.createClass({
    render() {
        return (

        	<div>

        	{this.props.row2.map(function(data, idx) {
        			return <RowCell2 data={data}/>;
        		})}
        	</div>

        	);
    }
});

var TableRow3 = React.createClass({
    render() {
        return (

        	<div>

        	{this.props.row3.map(function(data, idx) {
        			return <RowCell3 data={data}/>;
        		})}
        	</div>

        	);
    }
});

var TableRow4 = React.createClass({
    render() {
        return (

        	<div>

        	{this.props.row4.map(function(data, idx) {
        			return <RowCell4 data={data}/>;
        		})}
        	</div>

        	);
    }
});


var Table = React.createClass({
    render() {
        return (
        	<div>
        		<TableHeader headers={headers}/>
        		<TableRow1 row1={row1}/>
        		<TableRow2 row2={row2}/>
        		<TableRow3 row3={row3}/>
        		<TableRow4 row4={row4}/>
    		</div>
        );
    }
});


ReactDOM.render(
  <Table/>,
  document.getElementById('content')
);