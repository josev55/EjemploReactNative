var React = require('react-native');
var VistaSimple = require('./VistaSimple.ios.js');
var Imagenes = require('./Imagenes.ios.js');

const {
	ListView,
	View,
	Text,
	TouchableHighlight,
	Component,
	StyleSheet
} = React;

const styles = StyleSheet.create({
	container: {
		flex: 1,  
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#F45',
        padding: 10,        
        height: 300
	},
	row: {
		flex: 1,
		height: 120,
		justifyContent: 'center',
		backgroundColor: 'green'
	},
	rowTitle: {
		color: '#000',
		paddingLeft: 10
	}
});

var menuArray = [{title: 'Vista Simple', component: VistaSimple},{title: 'Imagenes', component: Imagenes},{title: 'Vista Simple', component: VistaSimple},{title: 'Imagenes', component: Imagenes}];

class HomeMenu extends Component {

	constructor(props){
		super(props);
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		debugger;
		this.state = {
			dataSource: ds.cloneWithRows(menuArray)
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<ListView dataSource={this.state.dataSource} renderRow={this.renderMenuRow.bind(this)} />
			</View>
		);
	}

	renderMenuRow(menuRow) {
		debugger;
		return (
			<TouchableHighlight onPress={() => {this._handleRowSelected(menuRow)}}>
				<View style={styles.row}>
					<Text style={styles.rowTitle}>{menuRow.title}</Text>					
				</View>
			</TouchableHighlight>
		);
	}

	renderMenuSeparator() {
		return(<View style={{backgroundColor: '#000', height: 1}}></View>);
	}

	_handleRowSelected(row) {
		this.props.navigator.push({
			title: row.title,
			component: row.component			
		});
	}
}

module.exports = HomeMenu;