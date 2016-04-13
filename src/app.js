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
				},
				{
					key: 'motion',
					image: 'http://assets.myntassets.com/v1458220020/levis-quiz-men-q1option2-min_ha3mbi.png',
				},
				{
					key: 'slim',
					image: 'http://assets.myntassets.com/v1458220020/levis-quiz-men-q1option3-min_djf7sa.png',
				},
				{
					key: 'skinny',
					image: 'http://assets.myntassets.com/v1458220020/levis-quiz-men-q1option4-min_cpdjwc.png',
				},
				{
					key: 'original',
					image: 'http://assets.myntassets.com/v1458220020/levis-quiz-men-q1option5-min_ey70jb.png',
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
				},
				{
					key: 'motion',
					image: 'http://assets.myntassets.com/v1458136125/Lookgood/levis-quiz-men-q2option2-min.png',
				},
				{
					key: 'slim',
					image: 'http://assets.myntassets.com/v1458136126/Lookgood/levis-quiz-men-q2option3-min.png',
				},
				{
					key: 'skinny',
					image: 'http://assets.myntassets.com/v1458136126/Lookgood/levis-quiz-men-q2option4-min.png',
				},
				{
					key: 'original',
					image: 'http://assets.myntassets.com/v1458136126/Lookgood/levis-quiz-men-q2option5-min.png',
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
				},
				{
					key: 'motion',
					image: 'http://assets.myntassets.com/v1458136127/Lookgood/levis-quiz-men-q3option2-min.png',
				},
				{
					key: 'slim',
					image: 'http://assets.myntassets.com/v1458136127/Lookgood/levis-quiz-men-q3option3-min.png',
				},
				{
					key: 'skinny',
					image: 'http://assets.myntassets.com/v1458136127/Lookgood/levis-quiz-men-q3option4-min.png',
				},
				{
					key: 'original',
					image: 'http://assets.myntassets.com/v1458136127/Lookgood/levis-quiz-men-q3option5-min.png',
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
				},
				{
					key: 'motion',
					image: 'http://assets.myntassets.com/v1458136128/Lookgood/levis-quiz-men-q4option2-min.png',
				},
				{
					key: 'slim',
					image: 'http://assets.myntassets.com/v1458136127/Lookgood/levis-quiz-men-q4option3-min.png',
				},
				{
					key: 'skinny',
					image: 'http://assets.myntassets.com/v1458136128/Lookgood/levis-quiz-men-q4option4-min.png',
				},
				{
					key: 'original',
					image: 'http://assets.myntassets.com/v1458136128/Lookgood/levis-quiz-men-q4option5-min.png',
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
				},
				{
					key: 'motion',
					image: 'http://assets.myntassets.com/v1458136698/Lookgood/levis-quiz-men-q5option2-min.png',
				},
				{
					key: 'slim',
					image: 'http://assets.myntassets.com/v1458136698/Lookgood/levis-quiz-men-q5option3-min.png',
				},
				{
					key: 'skinny',
					image: 'http://assets.myntassets.com/v1458136699/Lookgood/levis-quiz-men-q5option4-min.png',
				},
				{
					key: 'original',
					image: 'http://assets.myntassets.com/v1458136699/Lookgood/levis-quiz-men-q5option5-min.png',
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
				},
				{
					key: 'motion',
					image: 'http://assets.myntassets.com/v1458292893/Lookgood/quiz-q6-lean.png',
				},
				{
					key: 'slim',
					image: 'http://assets.myntassets.com/v1458292911/Lookgood/quiz-q6-fit-fot-your-age.png',
				},
				{
					key: 'skinny',
					image: 'http://assets.myntassets.com/v1458292945/Lookgood/quiz-q6-well-built.png',
				},
				{
					key: 'original',
					image: 'http://assets.myntassets.com/v1458293001/Lookgood/quiz-q6-plump.png',
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
				},
				{
					key: 'motion',
					image: 'http://assets.myntassets.com/v1458220021/levis-quiz-men-q7option2-min_thhl4b.png',
				},
				{
					key: 'slim',
					image: 'http://assets.myntassets.com/v1458220021/levis-quiz-men-q7option3-min_t5lsv6.png',
				},
				{
					key: 'skinny',
					image: 'http://assets.myntassets.com/v1458220021/levis-quiz-men-q7option4-min_ihzbqm.png',
				},
				{
					key: 'original',
					image: 'http://assets.myntassets.com/v1458220021/levis-quiz-men-q7option5-min_omvust.png',
				},

			]
		},

	],
}

render(<Finder data={data} />, document.getElementById('finder'));