import React, { useState } from 'react';
import Login from './Login';
import Course from '../components/Course'
import Calender from '../components/Calendar'
import BarFinish from '../components/BarFinish'
import 'bootstrap/dist/css/bootstrap.min.css';
import News from "../components/News";
import Chat from "../components/Chats";

export default function Homepage() {

	return (
		<section className="grid grid-cols-3 gap-4 py-10">
			<article className="border-solid">
				<Calender />
			</article>
			<article className="border-solid py-4">
				<News />
			</article>
			<article className="border-solid">
				<Chat />
			</article>
			<article className="col-span-2 px-4">
				<h3 className='text-center py-2'>Finish Progress</h3>
				<BarFinish />
			</article>

		</section>
	);
}
