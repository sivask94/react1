
var headers = ["Name", "Quantity", "Price"];


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

var TableRows = React.createClass({
    render() {
        return null;
    }
});

var Table = React.createClass({
    render() {
        return (
        	<div>
        		<TableHeader headers={headers}/>
        		<TableRows/>
    		</div>
        );
    }
});


ReactDOM.render(
  <Table/>,
  document.getElementById('content')
);