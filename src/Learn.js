  import React, { useState } from 'react';
  import './Learn.css';

function Learn() {
    const questions = [
		{
			questionText: 'Was ist die Hauptstadt von Frankreich?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Wer ist CEO von Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'Das iPhone wurde von welcher Firma erstellt?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'Wie viele Harry-Potter-Bücher gibt es?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
		{
			questionText: 'Welches Land hat zu Beginn des Jahres in jedem Gebiet verheerende Buschbrände erlebt?',
			answerOptions: [
				{ answerText: 'England', isCorrect: false },
				{ answerText: 'Russia', isCorrect: false },
				{ answerText: 'France', isCorrect: false },
				{ answerText: 'Austrailia', isCorrect: true },
			],
		},
		{
			questionText: 'Was war das meistgespielte Lied von 2020?',
			answerOptions: [
				{ answerText: 'Myron, Lil Uzi', isCorrect: false },
				{ answerText: 'Lavitation, Dua Lipa', isCorrect: false },
				{ answerText: 'The Blinding, The Weeknd', isCorrect: false },
				{ answerText: 'Tycoon, Future', isCorrect: false },
			],
		},
		{
			questionText: 'Im Januar brach in welcher Hauptstadt ein Vulkan aus?',
			answerOptions: [
				{ answerText: 'Manila, Philippine', isCorrect: true },
				{ answerText: 'Laos, Vietnam', isCorrect: false },
				{ answerText: 'Mascow, Russia', isCorrect: false },
				{ answerText: 'Berlin, Germany', isCorrect: false },
			],
		},
		{
			questionText: 'Welcher Star hat beim BAFTAS 2020 den Preis für den besten Schauspieler erhalten?',
			answerOptions: [
				{ answerText: 'Joaquin Phoenix', isCorrect: true },
				{ answerText: 'Johny Depp', isCorrect: false },
				{ answerText: 'Brad Pit', isCorrect: false },
				{ answerText: 'Felix Kjelberg', isCorrect: true },
			],
		},
		{
			questionText: 'Welcher Basketball-Superstar starb bei einem Hubschrauberabsturz?',
			answerOptions: [
				{ answerText: 'Muhammad Ali', isCorrect: false },
				{ answerText: 'JJ Olatunji', isCorrect: false },
				{ answerText: 'Kobe Bryant', isCorrect: true },
				{ answerText: 'Michael Jordan', isCorrect: true },
			],
		},
		{
			questionText: 'Welches Lied wurde bei den Brit Awards zum Lied des Jahres gewählt?',
			answerOptions: [
				{ answerText: 'Cash & Stacks by Future', isCorrect: false },
				{ answerText: 'Blood Crip by 21 Savage', isCorrect: false },
				{ answerText: 'Lamborghini by KSI', isCorrect: false },
				{ answerText: 'Someone You Loved by Lewis Capaldi', isCorrect: true },
			],
		},
		{
			questionText: 'Welcher der 20 reichsten Männer der Welt kandidierte für den US-Präsidenten?',
			answerOptions: [
				{ answerText: 'Michael Bloomberg', isCorrect: true },
				{ answerText: 'Elon Musk', isCorrect: false },
				{ answerText: 'KSI', isCorrect: false },
				{ answerText: 'Bill Gates', isCorrect: true },
			],
		},
		{
			questionText: 'Während ihrer Sonderansprache im April bezieht sich die Königin auf ein Kriegslied. Wie heißt es?',
			answerOptions: [
				{ answerText: 'We’ll Meet Again, by Dame Vera Lynn', isCorrect: true },
				{ answerText: 'No One Be Left Behind by Relaune Vence', isCorrect: false },
				{ answerText: 'Star Light by Davinchi Labos', isCorrect: false },
				{ answerText: 'Alert for the nation by John Junior 3rd', isCorrect: true },
			],
		},
		{
			questionText: 'Wen hat Obama für den Präsidenten unterstützt?',
			answerOptions: [
				{ answerText: 'Joe Biden', isCorrect: false },
				{ answerText: 'Kanye West', isCorrect: false },
				{ answerText: 'Tommy Vercetti', isCorrect: false },
				{ answerText: 'Osama Bin Laden', isCorrect: true },
			],
		},
		{
			questionText: 'Der Covid-Ausbruch soll auf einem Markt in welcher Stadt begonnen haben?',
			answerOptions: [
				{ answerText: 'Detroit', isCorrect: false },
				{ answerText: 'Wuhan', isCorrect: true },
				{ answerText: 'Stockholm', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
			],
		},
		{
			questionText: 'Welches Lied wurde bei den Brit Awards zum Lied des Jahres gewählt?',
			answerOptions: [
				{ answerText: 'Cash & Stacks by Future', isCorrect: false },
				{ answerText: 'Blood Crip by 21 Savage', isCorrect: false },
				{ answerText: 'Lamborghini by KSI', isCorrect: false },
				{ answerText: 'Someone You Loved by Lewis Capaldi', isCorrect: true },
			],
		},
		{
			questionText: 'Welcher Basketball-Superstar starb bei einem Hubschrauberabsturz?',
			answerOptions: [
				{ answerText: 'Muhammad Ali', isCorrect: false },
				{ answerText: 'JJ Olatunji', isCorrect: false },
				{ answerText: 'Kobe Bryant', isCorrect: true },
				{ answerText: 'Michael Jordan', isCorrect: true },
			],
		},
		{
			questionText: 'Im Januar brach in welcher Hauptstadt ein Vulkan aus?',
			answerOptions: [
				{ answerText: 'Manila, Philippine', isCorrect: true },
				{ answerText: 'Laos, Vietnam', isCorrect: false },
				{ answerText: 'Mascow, Russia', isCorrect: false },
				{ answerText: 'Berlin, Germany', isCorrect: false },
			],
		},
        {
			questionText: 'Welcher der 20 reichsten Männer der Welt kandidierte für den US-Präsidenten?',
			answerOptions: [
				{ answerText: 'Michael Bloomberg', isCorrect: true },
				{ answerText: 'Elon Musk', isCorrect: false },
				{ answerText: 'KSI', isCorrect: false },
				{ answerText: 'Bill Gates', isCorrect: true },
			],
		},
		{
			questionText: 'Was ist die Hauptstadt von Frankreich?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Im Januar brach in welcher Hauptstadt ein Vulkan aus?',
			answerOptions: [
				{ answerText: 'Manila, Philippine', isCorrect: true },
				{ answerText: 'Laos, Vietnam', isCorrect: false },
				{ answerText: 'Mascow, Russia', isCorrect: false },
				{ answerText: 'Berlin, Germany', isCorrect: false },
			],
		},
		{
			questionText: 'Welcher Basketball-Superstar starb bei einem Hubschrauberabsturz?',
			answerOptions: [
				{ answerText: 'Muhammad Ali', isCorrect: false },
				{ answerText: 'JJ Olatunji', isCorrect: false },
				{ answerText: 'Kobe Bryant', isCorrect: true },
				{ answerText: 'Michael Jordan', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
        <div className="bg-red-400 w-full h-screen flex justify-center">
		<div className='app absolute top-40 ml-96 left-20 flex justify-center'>
			{showScore ? (
				<div className='score-section '>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
        </div>
	);
}

export default Learn
