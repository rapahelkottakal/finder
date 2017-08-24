import React from 'react';
import ImageLoader from 'react-imageloader';

import Ga from '../helpers/Ga';

export default class ResultPage extends React.Component {


	handelMenShopBtnClick(e) {
		Ga({ label: e.target.closest('a').href });
	}
	handelWomenShopBtnClick(e) {
		Ga({ label: e.target.closest('a').href });
	}

	clickHandler() {

		setTimeout(()=>{
			this.props.restart();
			window.scrollTo(0, 0);
		}, 750);

		this.props.closeOverlay();
	}

	resultTextStyle(){
		return{
			// backgroundColor: '#F2F1F6',
			padding: '0px 20px 5px 20px',
			// paddingBottom: 50,
			lineHeight: '1.5',
			marginTop: '-5%',
			fontSize: 13
		}
	}

	shopButtonStyle(){
		return{
			backgroundColor: '#a7a8a8',
			padding: '2px 10px',
			textDecoration: 'none',
			color: '#fff',
			textTransform: 'uppercase',
			fontSize: 14,
			display: 'block',
		    width: '50%',
		    float: 'left',
		    marginBottom: 43
		}	
	}

	// shopButtonStyle1(){
	// 	return{
	// 		backgroundColor: '#a7a8a8',
	// 		padding: '2px 10px',
	// 		textDecoration: 'none',
	// 		color: '#fff',
	// 		textTransform: 'uppercase',
	// 		fontSize: 14,
	// 		marginLeft:'2%',
	// 		display: 'block',
	// 	    width: '48%',
	// 	    float: 'left',
	// 	    marginBottom: 43
	// 	}	
	// }

	resetQuizStyle(){
		return{
			position: 'absolute',
			left: 0,
			bottom: 0,
			width: '100%',
			textAlign: 'center',
			backgroundColor: '#61B3Db',
			color: '#fff',
			textTransform: 'uppercase',
			fontSize: 16,
			cursor: 'pointer'
		}
	}


	render() {
		console.log(this.props);
		return(
			<div>
				<a onClick={this.handelMenShopBtnClick} href={this.props.menLink}  target="_blank">
				
					<ImageLoader
						src={this.props.image}
						imgProps={{ style: {width: '100%'} }}
						wrapper={React.DOM.div}
						onLoad={this.props.imageLoaded}>
						Image load failed!
					</ImageLoader>
				</a>
				<div style={{backgroundColor:'#efefef'}}>
					{this.props.body1}
				</div>
				<div style= {this.resultTextStyle()}>
					{/*<p>{this.props.text}</p>
					<div style={{textAlign:'center'}}>
						<a onClick={this.handelMenShopBtnClick} href={this.props.menLink} style= {this.shopButtonStyle() }  target="_blank">Shop Now</a>
					</div>*/}
					<div onClick={this.clickHandler.bind(this)} style= {this.resetQuizStyle()}>Play again</div>
				</div>
			</div>
		);
	}
}