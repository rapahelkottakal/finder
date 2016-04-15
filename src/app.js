import React from 'react';
import { render } from 'react-dom';

import Finder from './components/finder.js';


const data = {

	overlay: {
		bgColor: 'white',
		img: 'http://assets.myntassets.com/v1455262275/Lookgood/for%20marketing/loading.gif',
		placeholder: 'Avatar - The last airbender'
	},

	qNa: [

		{
			question: {
				text: 'What do you do?',
				weight: 3
			},
			options: [
				{
					key: 'redloop',
					image: 'http://assets.myntassets.com/v1458220020/levis-quiz-men-q1option1-min_zkvo7c.png',
					text: 'Option'
				},
				{
					key: 'motion',
					image: 'http://assets.myntassets.com/v1458220020/levis-quiz-men-q1option2-min_ha3mbi.png',
					text: 'Option'
				},
				{
					key: 'slim',
					image: 'http://assets.myntassets.com/v1458220020/levis-quiz-men-q1option3-min_djf7sa.png',
					text: 'Option'

				},
				{
					key: 'skinny',
					image: 'http://assets.myntassets.com/v1458220020/levis-quiz-men-q1option4-min_cpdjwc.png',
					text: 'Option'

				},
				{
					key: 'original',
					image: 'http://assets.myntassets.com/v1458220020/levis-quiz-men-q1option5-min_ey70jb.png',
					text: 'Option'

				},

			]
		},

		{
			question: {
				text: 'How would you best describe your personal style?',
				weight: 3.5
			},
			options: [
				{
					key: 'redloop',
					image: 'http://assets.myntassets.com/v1458136126/Lookgood/levis-quiz-men-q2option1-min.png',
					text: 'Option'

				},
				{
					key: 'motion',
					image: 'http://assets.myntassets.com/v1458136125/Lookgood/levis-quiz-men-q2option2-min.png',
					text: 'Option'

				},
				{
					key: 'slim',
					image: 'http://assets.myntassets.com/v1458136126/Lookgood/levis-quiz-men-q2option3-min.png',
					text: 'Option'

				},
				{
					key: 'skinny',
					image: 'http://assets.myntassets.com/v1458136126/Lookgood/levis-quiz-men-q2option4-min.png',
					text: 'Option'

				},
				{
					key: 'original',
					image: 'http://assets.myntassets.com/v1458136126/Lookgood/levis-quiz-men-q2option5-min.png',
					text: 'Option'

				},

			]
		},

		{
			question: {
				text: "What's your idea of a perfect weekend?",
				weight: 7.2
			},
			options: [
				{
					key: 'redloop',
					image: 'http://assets.myntassets.com/v1458136126/Lookgood/levis-quiz-men-q3option1-min.png',
					text: 'Option'

				},
				{
					key: 'motion',
					image: 'http://assets.myntassets.com/v1458136127/Lookgood/levis-quiz-men-q3option2-min.png',
					text: 'Option'
				},
				{
					key: 'slim',
					image: 'http://assets.myntassets.com/v1458136127/Lookgood/levis-quiz-men-q3option3-min.png',
					text: 'Option'
				},
				{
					key: 'skinny',
					image: 'http://assets.myntassets.com/v1458136127/Lookgood/levis-quiz-men-q3option4-min.png',
					text: 'Option'
				},
				{
					key: 'original',
					image: 'http://assets.myntassets.com/v1458136127/Lookgood/levis-quiz-men-q3option5-min.png',
					text: 'Option'
				},

			]
		},

		{
			question: {
				text: "What's your footwear of choice?",
				weight: 1
			},
			options: [
				{
					key: 'redloop',
					image: 'http://assets.myntassets.com/v1458136127/Lookgood/levis-quiz-men-q4option1-min.png',
					text: 'Option'
				},
				{
					key: 'motion',
					image: 'http://assets.myntassets.com/v1458136128/Lookgood/levis-quiz-men-q4option2-min.png',
					text: 'Option'
				},
				{
					key: 'slim',
					image: 'http://assets.myntassets.com/v1458136127/Lookgood/levis-quiz-men-q4option3-min.png',
					text: 'Option'
				},
				{
					key: 'skinny',
					image: 'http://assets.myntassets.com/v1458136128/Lookgood/levis-quiz-men-q4option4-min.png',
					text: 'Option'
				},
				{
					key: 'original',
					image: 'http://assets.myntassets.com/v1458136128/Lookgood/levis-quiz-men-q4option5-min.png',
					text: 'Option'
				},

			]
		},

		{
			question: {
				text: 'What kind of shirts do you normally wear?',
				weight: 5.25
			},
			options: [
				{
					key: 'redloop',
					image: 'http://assets.myntassets.com/v1458136698/Lookgood/levis-quiz-men-q5option1-min.png',
					text: 'Option'
				},
				{
					key: 'motion',
					image: 'http://assets.myntassets.com/v1458136698/Lookgood/levis-quiz-men-q5option2-min.png',
					text: 'Option'
				},
				{
					key: 'slim',
					image: 'http://assets.myntassets.com/v1458136698/Lookgood/levis-quiz-men-q5option3-min.png',
					text: 'Option'
				},
				{
					key: 'skinny',
					image: 'http://assets.myntassets.com/v1458136699/Lookgood/levis-quiz-men-q5option4-min.png',
					text: 'Option'
				},
				{
					key: 'original',
					image: 'http://assets.myntassets.com/v1458136699/Lookgood/levis-quiz-men-q5option5-min.png',
					text: 'Option'
				},

			]
		},

		{
			question: {
				text: 'What best sums up your body type?',
				weight: 4.75
			},
			options: [
				{
					key: 'redloop',
					image: 'http://assets.myntassets.com/v1458292893/Lookgood/quiz-q6-average-built.png',
					text: 'Option'
				},
				{
					key: 'motion',
					image: 'http://assets.myntassets.com/v1458292893/Lookgood/quiz-q6-lean.png',
					text: 'Option'
				},
				{
					key: 'slim',
					image: 'http://assets.myntassets.com/v1458292911/Lookgood/quiz-q6-fit-fot-your-age.png',
					text: 'Option'
				},
				{
					key: 'skinny',
					image: 'http://assets.myntassets.com/v1458292945/Lookgood/quiz-q6-well-built.png',
					text: 'Option'
				},
				{
					key: 'original',
					image: 'http://assets.myntassets.com/v1458293001/Lookgood/quiz-q6-plump.png',
					text: 'Option'
				},

			]
		},

		{
			question: {
				text: 'What do you love doing most?',
				weight: 6
			},
			options: [
				{
					key: 'redloop',
					image: 'http://assets.myntassets.com/v1458220020/levis-quiz-men-q7option1-min_bfh2xa.png',
					text: 'Option'
				},
				{
					key: 'motion',
					image: 'http://assets.myntassets.com/v1458220021/levis-quiz-men-q7option2-min_thhl4b.png',
					text: 'Option'
				},
				{
					key: 'slim',
					image: 'http://assets.myntassets.com/v1458220021/levis-quiz-men-q7option3-min_t5lsv6.png',
					text: 'Option'
				},
				{
					key: 'skinny',
					image: 'http://assets.myntassets.com/v1458220021/levis-quiz-men-q7option4-min_ihzbqm.png',
					text: 'Option'
				},
				{
					key: 'original',
					image: 'http://assets.myntassets.com/v1458220021/levis-quiz-men-q7option5-min_omvust.png',
					text: 'Option'
				},

			]
		},

	],

	results: {
		'redloop': {
			image: 'http://assets.myntassets.com/v1458138437/Lookgood/levis-answer-men-red-loop.jpg',
			text: 'You’re quite the party animal aren’t you? You like to keep your outfit classic to match your taste. The perfect pair of jeans for you would be from the stylish Red loop collection complete with a luxurious look and feel.  These jeans fit like a dream and are sure to make you stand out in the crowd. Explore the collection here.',
			links: {
				men: {
					image: 'http://assets.myntassets.com/v1458138181/Lookgood/levis-answer-shop-now.jpg',
					link: 'http://www.myntra.com/Levis-redloop?f=categories%3AJeans&SRC=Lookgood6'
				}
			}
		},
		'motion': {
			image: 'http://assets.myntassets.com/v1458138437/Lookgood/levis-answer-men-motion.jpg',
			text: 'You’re one person who is always on the move. Your style is the perfect blend of casual and comfortable. That’s why the motion collection is perfect for you. These functional jeans are made using a stretch fabric that provides maximum comfort and are designed to be worn all day long. Explore the collection here.',
			links: {
				men: {
					image: 'http://assets.myntassets.com/v1458138181/Lookgood/levis-answer-shop-now.jpg',
					link: 'http://www.myntra.com/Levis-motion?SRC=Lookgood6'
				},
				women: {
					image: 'http://assets.myntassets.com/v1455615424/Lookgood/shop-women-new.jpg',
					link: 'http://www.myntra.com/ss16launch-women-indigo?sort=new&SRC=Lookgood6'
				}
			}
		},
		'slim': {
			image: 'http://assets.myntassets.com/v1458138437/Lookgood/levis-answer-men-511.jpg',
			text: 'You’re quite the no-nonsense type of person. Your style is classic yet understated. The 511slim is the perfect pair of jeans for you. It’s a cut between skinny and straight fit and fits perfectly without restricting any movement. That’s why they’ll make your perfect everyday companion. Explore the collection here.',
			links: {
				men: {
					image: 'http://assets.myntassets.com/v1458138181/Lookgood/levis-answer-shop-now.jpg',
					link: 'http://www.myntra.com/Levis-511-slim?f=categories%3AJeans&SRC=Lookgood6'
				},
				women: {
					image: 'http://assets.myntassets.com/v1455615424/Lookgood/shop-women-new.jpg',
					link: 'http://www.myntra.com/ss16launch-women-alloverprints?sort=new&SRC=Lookgood6'
				}
			}
		},
		'skinny': {
			image: 'http://assets.myntassets.com/v1458138437/Lookgood/levis-answer-men-65504-extra-skinny-.jpg',
			text: 'You’re young, wild and free! Your style keeps changing every day and of course you keep track of all the latest trends. The 65504 extra skinny jeans should be your go-to pair because it’s contemporary, stylish and rugged; just like you. Explore the collection here.',
			links: {
				men: {
					image: 'http://assets.myntassets.com/v1458138181/Lookgood/levis-answer-shop-now.jpg',
					link: 'http://www.myntra.com/Levis-extra-skinny?f=categories%3AJeans&SRC=Lookgood6'
				},
				women: {
					image: 'http://assets.myntassets.com/v1455615424/Lookgood/shop-women-new.jpg',
					link: 'http://www.myntra.com/online-fashion-store?f=Occasion_article_attr%3Aformal%3A%3APattern_article_attr%3Aprinted%2Csolid%2Csolid%2520%252F%2520plain%2Cstripe%2Cstriped%3A%3Acategories%3ABlazers%2CDresses%2CShirts%2CSkirts%2CTops%2CTrousers%3A%3Agender%3Amen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cmen%2520women%2Cwomen&sort=new&SRC=Lookgood6'
				}
			}
		},
		'original': {
			image: 'http://assets.myntassets.com/v1458138437/Lookgood/levis-answer-men-501.jpg',
			text: 'Creative is like your middle name. You love to explore new things and are quite the social animal. You need a pair of jeans that provides you with utmost comfort and that’s why the classic 501 original series is the collection for you. This style suits those with a slightly larger build and is designed to flatter. Explore the collection here. ',
			links: {
				men: {
					image: 'http://assets.myntassets.com/v1458138181/Lookgood/levis-answer-shop-now.jpg',
					link: 'http://www.myntra.com/Levis-501-original?SRC=Lookgood6'
				},
				women: {
					image: 'http://assets.myntassets.com/v1455615424/Lookgood/shop-women-new.jpg',
					link: 'http://www.myntra.com/ss16launch-women-neobasics?SRC=Lookgood6'
				}
			}
		}
	}

}

render(<Finder data={data} />, document.getElementById('finder'));