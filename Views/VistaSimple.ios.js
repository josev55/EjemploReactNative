var React = require('react-native');

const {
	View,
	Text,
	Component,
	StyleSheet
} = React;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		color: '#000'
	}
});

class VistaSimple extends Component {
	
	render(){
		return (
			<View style={styles.container}>
				<Text style={styles.text}>Esto es un simple texto de prueba</Text>
			</View>
		);
	}
}

module.exports = VistaSimple;