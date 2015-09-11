var React = require('react-native');

const {
	View,
	Component,
	StyleSheet,
	Image
} = React;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	image: {
		width: 128,
		height: 128
	}
});

class Imagenes extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image style={styles.image} source={{uri: 'https://www.codementor.io/assets/tutorial_icon/reactjs.png'}} />
			</View>
		);
	}
}

module.exports = Imagenes;