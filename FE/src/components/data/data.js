const posts = [
	{
		id: 1,
		title: 'C, Powerful programming language',
		href: '#',
		description: `
            This course will teach you the basics of C, a powerful programming language.
            Through this course, you will learn how to write C programs to solve real-world problems and advance your level of C code.
        `,
		date: 'Feb 16, 2024',
		datetime: '2024-02-16',
		category: { title: 'C', href: '/C' },
		author: {
			name: 'Dave',
			role: 'Co-Founder',
			href: '#',
			imageUrl:
				'https://miro.medium.com/v2/resize:fit:1344/1*s2VjDN8uGFo-izdU7BUETQ.png',
		},
	},
	{
		id: 2,
		title: 'Python, The best programming language',
		href: '#',
		description: `
            This course will teach you the basics of Python, a powerful programming language.
            Through this course, you can see why Python is so popular.
        `,
		date: 'Feb 16, 2024',
		datetime: '2024-02-16',
		category: { title: 'Python', href: '/Python' },
		author: {
			name: 'Dave',
			role: 'Co-Founder',
			href: '#',
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Oxygen480-mimetypes-text-x-python.svg/2048px-Oxygen480-mimetypes-text-x-python.svg.png',
		},
	},
	{
		id: 3,
		title: 'Java, The most popular programming language',
		href: '#',
		description: `
            This course will teach you the basics of Java, a powerful programming language.
            Through this course, you will learn how to write Java programs to solve real-world problems and advance your level of Java code.
        `,
		date: 'Feb 16, 2024',
		datetime: '2024-02-16',
		category: { title: 'Java', href: '/Java' },
		author: {
			name: 'Dave',
			role: 'Co-Founder',
			href: '#',
			imageUrl:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJT-1SOC5DSuaIItrdS-PwuUiOCbz6UJQMpQ&usqp=CAU',
		},
	},
	{
		id: 4,
		title: 'Artificial Intelligence (AI)',
		href: '#',
		description: `
            AI is a field that focuses on creating intelligent machines capable of learning, reasoning, and problem-solving. It encompasses machine learning, natural language processing, computer vision, and robotics. AI has applications in self-driving cars, virtual assistants, medical diagnosis, and more.
        `,
		date: 'Feb 16, 2024',
		datetime: '2024-02-16',
		category: { title: 'AI', href: '/AI' },
		author: {
			name: 'Dave',
			role: 'Co-Founder',
			href: '#',
			imageUrl:
				'https://static.vecteezy.com/system/resources/previews/010/794/340/original/blue-artificial-intelligence-technology-circuit-file-free-png.png',
		},
	},
	{
		id: 5,
		title: 'Web Development Basics',
		href: '#',
		description: `
            Learn the fundamental concepts of web development, including HTML, CSS, and JavaScript. This course covers building static web pages and introduces you to front-end development principles.
        `,
		date: 'Feb 16, 2024',
		datetime: '2024-02-16',
		category: { title: 'Web Development', href: '/web-development' },
		author: {
			name: 'Dave',
			role: 'Co-Founder',
			href: '#',
			imageUrl:
				'https://png.pngtree.com/png-vector/20200312/ourmid/pngtree-modern-flat-design-concept-of-web-development-with-characters-on-screen-png-image_2157892.jpg',
		},
	},
	{
		id: 6,
		title: 'Introduction to Electronics',
		href: '#',
		description: `
            Explore the basics of electronics, including circuit design, components, and troubleshooting techniques. This course is suitable for beginners and covers topics such as Ohm's law, Kirchhoff's laws, and basic electronic circuits.
        `,
		date: 'Feb 16, 2024',
		datetime: '2024-02-16',
		category: { title: 'Electronics', href: '/electronics' },
		author: {
			name: 'Dave',
			role: 'Co-Founder',
			href: '#',
			imageUrl:
				'https://png.pngtree.com/png-vector/20190214/ourmid/pngtree-electronics-icon-png-image_428294.jpg',
		},
	},
	{
		id: 7,
		title: 'Mathematics Fundamentals',
		href: '#',
		description: `
            Dive into the fundamental concepts of mathematics, including algebra, calculus, and geometry. This course covers essential mathematical principles and techniques applicable in various fields such as science, engineering, and finance.
        `,
		date: 'Feb 16, 2024',
		datetime: '2024-02-16',
		category: { title: 'Mathematics', href: '/mathematics' },
		author: {
			name: 'Dave',
			role: 'Co-Founder',
			href: '#',
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/c/c3/Deus_mathematics.png',
		},
	},
	{
		id: 8,
		title: 'PC Hardware Essentials',
		href: '#',
		description: `
            Learn the essential components and principles of PC hardware, including processors, memory, storage, and peripherals. This course covers hardware components, assembly, maintenance, and troubleshooting.
        `,
		date: 'Feb 16, 2024',
		datetime: '2024-02-16',
		category: { title: 'PC Hardware', href: '/pc-hardware' },
		author: {
			name: 'Dave',
			role: 'Co-Founder',
			href: '#',
			imageUrl:
				'https://png.pngtree.com/png-vector/20210131/ourmid/pngtree-computer-hardware-icon-set-2-png-image_2873800.jpg',
		},
	},
	{
		id: 9,
		title: 'Network Configuration Basics',
		href: '#',
		description: `
            Explore the basics of network configuration, including TCP/IP, DNS, DHCP, and routing. This course covers fundamental networking concepts and protocols essential for setting up and maintaining computer networks.
        `,
		date: 'Feb 16, 2024',
		datetime: '2024-02-16',
		category: {
			title: 'Network Configuration',
			href: '/network-configuration',
		},
		author: {
			name: 'Dave',
			role: 'Co-Founder',
			href: '#',
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/1/12/Sample-network-diagram.png',
		},
	},
	{
		id: 10,
		title: 'Data Structures and Algorithms',
		href: '#',
		description: `
            Learn the fundamental data structures and algorithms used in computer science. This course covers topics such as arrays, linked lists, stacks, queues, trees, sorting algorithms, and searching algorithms.
        `,
		date: 'Feb 16, 2024',
		datetime: '2024-02-16',
		category: {
			title: 'Data Structures & Algorithms',
			href: '/data-structures-algorithms',
		},
		author: {
			name: 'Dave',
			role: 'Co-Founder',
			href: '#',
			imageUrl:
				'https://png.pngtree.com/element_our/20190528/ourmid/pngtree-cartoon-color-data-structure-icon-application-image_1137268.jpg',
		},
	},
	// More posts...
];

export default posts;
