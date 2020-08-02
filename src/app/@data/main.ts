import { Candidate, Technology, Question, Program } from '../@types/type';

export const video_text: String = `Ingenious and determined Full-stack developer & a Data Science Enthusiast with great experience as Freelancer and Intern in IT & Software Engineering. Im from delhi.
I'm have an entrepreneur mindset, a born leader, a public speaker, a socialist, fitness enthusiast by nature and most importantly a Programmer by profession. I'm currently pursuing a Bachelor of Technology - B.Tech focused in Mathematics and Computer Science from Delhi Technological University, Delhi`;

export const candidate_list: Array<Candidate> = [
    {
        bio: `I'm a full-stack developer and bug hunter. ML enthusiast and keen learner.`,
        name: 'Sachin Duhan',
        email: 'duhan.sachin@gmail.com',
        id: '1',
        skills: [{
            title: 'Python'
        }, {
            title: 'AWS'
        }, {
            title: 'Azure'
        }, {
            title: 'Developer'
        }],
    },
    {
        bio: 'A MAchine learning engineer and data engineer with 3+ years of experience.',
        name: 'Aniket',
        email: 'anikey_rathi@gmail.com',
        id: '2',
        skills: [{
            title: 'Python'
        }, {
            title: 'Mahcine Learning'
        }, {
            title: 'Artificial Intelligence'
        }],
    },
    {
        bio: 'Fresher and Machine learning enthusiast, looking forward to contribute in ML sector.',
        name: 'Manoj Pandey',
        email: 'm_pandey12@gmail.com',
        id: '3',
        skills: [{
            title: 'Python'
        }, {
            title: 'Artificial Intelligence'
        }, {
            title: 'Developer'
        }],
    },
];

export const filters_list: Array<Technology> = [
    { title: 'Python Engineer' },
    { title: 'Data Science' },
    { title: 'Machine Learning' },
    { title: 'AWS' },
    { title: 'Azure DevOps' },
    { title: 'Data Engineer' },
    { title: 'DevOps Engineer' },
];

export const jobs_list: Array<Program> = [
    { technology: [{ title: 'Python' }, { title: 'Data Science' }], location: 'USA', title: 'Data Engineer', description: 'We are looking for a savvy Data Engineer to join our growing team of analytics experts. The hire will be responsible for expanding and optimizing our data. 2+ years of experience...', date: new Date(), type: 'job' },
    { technology: [{ title: 'Python' }, { title: 'Data Analyst' }], location: 'India', title: 'Data Analyst', description: 'We are looking for a experienced Data Analyst for gurugram, India to join our growing team of analytics experts. The hire will be responsible for Processing and optimizing...', date: new Date(), type: 'job' },
    { technology: [{ title: 'Python' }, { title: 'Data Engineer' }], location: 'Japan', title: 'Data Engineer', description: 'We are looking for a Data Engineer to join our growing team of analytics experts. The hire will be responsible for manipulating and understanding our data and data pipeline architecture...', date: new Date(), type: 'job' }
]

export const questions_list: Array<Question> = [
    { id: "1", question: 'Hello, Kindly introduce yourself.' },
    { id: "2", question: 'Tell me something about your experience.' },
    { id: "3", question: 'How will you cop-up with stress and job life balance?' },
    { id: "4", question: 'Why should we select you?' },
]

export const resume_response = {
    Score: "0.10050378152592121",
    college_name: "Delhi technological university",
    company_names: [
        "bitgrit inc",
        "Wipro Ltd."
    ],
    degree: "B.tech",
    designation: [
        "Tech consultant"
    ],
    "email": "antrix_gupta@gmail.com",
    "experience": [
        "(05/2020 – 05/2020)",
        "Full Stack Web developer",
        "BookMyStall",
        "01/2020 – 04/2020",
        "Achievements/Tasks",
        "Foundational Artiﬁcial Intelligence (04/2020 – 05/2020)",
        "Hyderabad,India",
        "Certiﬁcation of Core Java course in Dhanvantrai",
        "Institute(ISO) (06/2018 – 12/2018)",
        "Web development to automate diﬀerent modules of the",
        "company's functionality.",
        "NLP Engineer",
        "Wipro Ltd.",
        "02/2020 – 03/2020",
        "Task",
        "Bangalore,India",
        "Natural Language Processing as part of HRSS",
        "Java Developer",
        "Bharat Electronics Limited",
        "05/2019 – 06/2019",
        "Achievements/Tasks",
        "Hyderabad,India",
        "Designed drone motion tracking & detection using image",
        "sensing . Integrated with existing Aerial Surveillance System",
        "of BEL",
        "CO CURRICULAR",
        "Bitgrit Campus Ambassador (01/2020 – Present)",
        "Conducting contests ,Organised workshops,Datathon and Hackthons"
    ],
    "mobile_number": "8247607794",
    "name": "antrix gupta",
    "no_of_pages": 1,
    "skills": [
        "C++",
        "Content",
        "Coding",
        "Javascript",
        "Technical",
        "Java",
        "Teaching",
        "Php",
        "Css",
        "Opencv",
        "Engineering",
        "System",
        "Reporting",
        "Html",
        "Keras",
        "Js",
        "Algorithms",
        "Ai",
        "Python",
        "Mysql",
        "Electronics",
        "Marketing"
    ],
    "total_experience": 0.0
};