import { Candidate, Technology, Question, Program } from '../@types/type';

export const candidate_list: Array<Candidate> = [
    {
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, porro!',
        name: 'Sachin Duhan',
        email: 'abc@gmail.com',
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
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, porro!',
        name: 'Aniket',
        email: 'cdsn@gmail.com',
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
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, porro!',
        name: 'Manoj Pandey',
        email: 'abc@gmail.com',
        id: '3',
        skills: [{
            title: 'Python'
        }, {
            title: 'Artificial Intelligence'
        }, {
            title: 'Developer'
        }],
    },
    {
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, porro!',
        name: 'Vikrant',
        email: 'abc@gmail.com',
        id: '4',
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
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, porro!',
        name: 'Sahil',
        email: 'cdsn@gmail.com',
        id: '5',
        skills: [{
            title: 'Python'
        }, {
            title: 'Mahcine Learning'
        }, {
            title: 'Artificial Intelligence'
        }],
    },
    {
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, porro!',
        name: 'Akhil Juneja',
        email: 'abc@gmail.com',
        id: '6',
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
    { title: 'Python Developer' },
    { title: 'Data Science' },
    { title: 'Machine Learning' },
    { title: 'AWS' },
    { title: 'Azure DevOps' },
    { title: 'Data Engineer' },
    { title: 'Linux Administrator' },
    { title: 'DevOps Engineer' },
];

export const jobs_list: Array<Program> = [
    { technology: [{ title: 'Python' }, { title: 'Data Science' }], location: 'USA', title: 'Data Engineer', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, porro', date: new Date(), type: 'job' },
    { technology: [{ title: 'Python' }, { title: 'AWS' }], location: 'India', title: 'AWS Engineer', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, porro', date: new Date(), type: 'job' },
    { technology: [{ title: 'Python' }, { title: 'Data Engineer' }], location: 'Japan', title: 'Data Engineer', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, porro', date: new Date(), type: 'job' },
    { technology: [{ title: 'Python' }, { title: 'AWS' }], location: 'India', title: 'Python Developer', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, porro', date: new Date(), type: 'job' },
    { technology: [{ title: 'Python' }, { title: 'AWS' }], location: 'London, UK', title: 'Machine Learning Engineer', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, porro', date: new Date(), type: 'job' },
    { technology: [{ title: 'Python' }, { title: 'Data Engineer' }], location: 'Japan', title: 'Data Scienist', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, porro', date: new Date(), type: 'job' },
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
        "Bharat Electronics Limited",
        "Wipro Ltd."
    ],
    degree: "B.tech",
    designation: [
        "NLP Engineer"
    ],
    "email": "namithakonda09@gmail.com",
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
    "name": "Namitha Konda",
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

export const video_data = {
    "word_count": 283,
    "word_count_message": "There were 283 words in the input. We need a minimum of 600, preferably 1,200 or more, to compute statistically significant estimates",
    "processed_language": "en",
    "personality": [
        {
            "trait_id": "big5_openness",
            "name": "Openness",
            "category": "personality",
            "percentile": 0.9400957053604502,
            "raw_score": 0.7983163803025506,
            "significant": true,
            "children": [
                {
                    "trait_id": "facet_adventurousness",
                    "name": "Adventurousness",
                    "category": "personality",
                    "percentile": 0.9966517344186393,
                    "raw_score": 0.6012576870894492,
                    "significant": true
                },
                {
                    "trait_id": "facet_artistic_interests",
                    "name": "Artistic interests",
                    "category": "personality",
                    "percentile": 0.6304978114796177,
                    "raw_score": 0.682191040612601,
                    "significant": true
                },
                {
                    "trait_id": "facet_emotionality",
                    "name": "Emotionality",
                    "category": "personality",
                    "percentile": 0.1883480304806856,
                    "raw_score": 0.6121554446099787,
                    "significant": true
                },
                {
                    "trait_id": "facet_imagination",
                    "name": "Imagination",
                    "category": "personality",
                    "percentile": 0.18495347213737162,
                    "raw_score": 0.6903218839115935,
                    "significant": true
                },
                {
                    "trait_id": "facet_intellect",
                    "name": "Intellect",
                    "category": "personality",
                    "percentile": 0.9878692057908707,
                    "raw_score": 0.711529701651014,
                    "significant": true
                },
                {
                    "trait_id": "facet_liberalism",
                    "name": "Authority-challenging",
                    "category": "personality",
                    "percentile": 0.9939648220916442,
                    "raw_score": 0.6426533629212462,
                    "significant": true
                }
            ]
        },
        {
            "trait_id": "big5_conscientiousness",
            "name": "Conscientiousness",
            "category": "personality",
            "percentile": 0.6620576618813738,
            "raw_score": 0.647550863899499,
            "significant": true,
            "children": [
                {
                    "trait_id": "facet_achievement_striving",
                    "name": "Achievement striving",
                    "category": "personality",
                    "percentile": 0.8847975559465937,
                    "raw_score": 0.7518956220422527,
                    "significant": true
                },
                {
                    "trait_id": "facet_cautiousness",
                    "name": "Cautiousness",
                    "category": "personality",
                    "percentile": 0.927306900009842,
                    "raw_score": 0.5843857472540974,
                    "significant": true
                },
                {
                    "trait_id": "facet_dutifulness",
                    "name": "Dutifulness",
                    "category": "personality",
                    "percentile": 0.8032467169756755,
                    "raw_score": 0.6797967867030847,
                    "significant": true
                },
                {
                    "trait_id": "facet_orderliness",
                    "name": "Orderliness",
                    "category": "personality",
                    "percentile": 0.20443349513367615,
                    "raw_score": 0.467103282850545,
                    "significant": true
                },
                {
                    "trait_id": "facet_self_discipline",
                    "name": "Self-discipline",
                    "category": "personality",
                    "percentile": 0.8142716867128316,
                    "raw_score": 0.6132282987847384,
                    "significant": true
                },
                {
                    "trait_id": "facet_self_efficacy",
                    "name": "Self-efficacy",
                    "category": "personality",
                    "percentile": 0.5300675314497747,
                    "raw_score": 0.7557527944350578,
                    "significant": true
                }
            ]
        },
        {
            "trait_id": "big5_extraversion",
            "name": "Extraversion",
            "category": "personality",
            "percentile": 0.0921363197024142,
            "raw_score": 0.4917588020806286,
            "significant": true,
            "children": [
                {
                    "trait_id": "facet_activity_level",
                    "name": "Activity level",
                    "category": "personality",
                    "percentile": 0.9957858634012791,
                    "raw_score": 0.6751792431726601,
                    "significant": true
                },
                {
                    "trait_id": "facet_assertiveness",
                    "name": "Assertiveness",
                    "category": "personality",
                    "percentile": 0.8171886145189642,
                    "raw_score": 0.6892851033837359,
                    "significant": true
                },
                {
                    "trait_id": "facet_cheerfulness",
                    "name": "Cheerfulness",
                    "category": "personality",
                    "percentile": 0.017688387244843895,
                    "raw_score": 0.5475292509880396,
                    "significant": true
                },
                {
                    "trait_id": "facet_excitement_seeking",
                    "name": "Excitement-seeking",
                    "category": "personality",
                    "percentile": 0.018473292774501826,
                    "raw_score": 0.515142713322105,
                    "significant": true
                },
                {
                    "trait_id": "facet_friendliness",
                    "name": "Outgoing",
                    "category": "personality",
                    "percentile": 0.3109573183330527,
                    "raw_score": 0.535754995860254,
                    "significant": true
                },
                {
                    "trait_id": "facet_gregariousness",
                    "name": "Gregariousness",
                    "category": "personality",
                    "percentile": 0.022075818354218457,
                    "raw_score": 0.3498721486737001,
                    "significant": true
                }
            ]
        },
        {
            "trait_id": "big5_agreeableness",
            "name": "Agreeableness",
            "category": "personality",
            "percentile": 0.013566135883019081,
            "raw_score": 0.6543563794137525,
            "significant": true,
            "children": [
                {
                    "trait_id": "facet_altruism",
                    "name": "Altruism",
                    "category": "personality",
                    "percentile": 0.6952833308508137,
                    "raw_score": 0.7230116638295746,
                    "significant": true
                },
                {
                    "trait_id": "facet_cooperation",
                    "name": "Cooperation",
                    "category": "personality",
                    "percentile": 0.9671782368670966,
                    "raw_score": 0.6902959790776434,
                    "significant": true
                },
                {
                    "trait_id": "facet_modesty",
                    "name": "Modesty",
                    "category": "personality",
                    "percentile": 0.5379270626860528,
                    "raw_score": 0.45339976796217807,
                    "significant": true
                },
                {
                    "trait_id": "facet_morality",
                    "name": "Uncompromising",
                    "category": "personality",
                    "percentile": 0.826935553428674,
                    "raw_score": 0.6702641902427698,
                    "significant": true
                },
                {
                    "trait_id": "facet_sympathy",
                    "name": "Sympathy",
                    "category": "personality",
                    "percentile": 0.8138356468370112,
                    "raw_score": 0.6975432732039969,
                    "significant": true
                },
                {
                    "trait_id": "facet_trust",
                    "name": "Trust",
                    "category": "personality",
                    "percentile": 0.949193951151645,
                    "raw_score": 0.6532452508178868,
                    "significant": true
                }
            ]
        },
        {
            "trait_id": "big5_neuroticism",
            "name": "Emotional range",
            "category": "personality",
            "percentile": 0.06883137751278767,
            "raw_score": 0.4291522268992315,
            "significant": true,
            "children": [
                {
                    "trait_id": "facet_anger",
                    "name": "Fiery",
                    "category": "personality",
                    "percentile": 0.057260816967918626,
                    "raw_score": 0.449411015978777,
                    "significant": true
                },
                {
                    "trait_id": "facet_anxiety",
                    "name": "Prone to worry",
                    "category": "personality",
                    "percentile": 0.07823026697709262,
                    "raw_score": 0.49747140679041185,
                    "significant": true
                },
                {
                    "trait_id": "facet_depression",
                    "name": "Melancholy",
                    "category": "personality",
                    "percentile": 0.5318193312166865,
                    "raw_score": 0.45349603626803814,
                    "significant": true
                },
                {
                    "trait_id": "facet_immoderation",
                    "name": "Immoderation",
                    "category": "personality",
                    "percentile": 0.14924448425132003,
                    "raw_score": 0.46063269633061704,
                    "significant": true
                },
                {
                    "trait_id": "facet_self_consciousness",
                    "name": "Self-consciousness",
                    "category": "personality",
                    "percentile": 0.6678709897935882,
                    "raw_score": 0.5695535829618227,
                    "significant": true
                },
                {
                    "trait_id": "facet_vulnerability",
                    "name": "Susceptible to stress",
                    "category": "personality",
                    "percentile": 0.31170209687306794,
                    "raw_score": 0.43633759085705165,
                    "significant": true
                }
            ]
        }
    ],
    "needs": [
        {
            "trait_id": "need_challenge",
            "name": "Challenge",
            "category": "needs",
            "percentile": 0.22775958548990716,
            "raw_score": 0.6983163307980526,
            "significant": true
        },
        {
            "trait_id": "need_closeness",
            "name": "Closeness",
            "category": "needs",
            "percentile": 0.05690105035443954,
            "raw_score": 0.7231711640618046,
            "significant": true
        },
        {
            "trait_id": "need_curiosity",
            "name": "Curiosity",
            "category": "needs",
            "percentile": 0.9833507370097023,
            "raw_score": 0.8726693569773125,
            "significant": true
        },
        {
            "trait_id": "need_excitement",
            "name": "Excitement",
            "category": "needs",
            "percentile": 0.07529545724190245,
            "raw_score": 0.5710206632429169,
            "significant": true
        },
        {
            "trait_id": "need_harmony",
            "name": "Harmony",
            "category": "needs",
            "percentile": 0.07767221321372508,
            "raw_score": 0.7601936353966054,
            "significant": true
        },
        {
            "trait_id": "need_ideal",
            "name": "Ideal",
            "category": "needs",
            "percentile": 0.15253485796457084,
            "raw_score": 0.6423148910707535,
            "significant": true
        },
        {
            "trait_id": "need_liberty",
            "name": "Liberty",
            "category": "needs",
            "percentile": 0.4716428182386416,
            "raw_score": 0.7338465574785734,
            "significant": true
        },
        {
            "trait_id": "need_love",
            "name": "Love",
            "category": "needs",
            "percentile": 0.11028088043147982,
            "raw_score": 0.7090671182634644,
            "significant": true
        },
        {
            "trait_id": "need_practicality",
            "name": "Practicality",
            "category": "needs",
            "percentile": 0.38336391288881705,
            "raw_score": 0.7213638543470507,
            "significant": true
        },
        {
            "trait_id": "need_self_expression",
            "name": "Self-expression",
            "category": "needs",
            "percentile": 0.1030752824700839,
            "raw_score": 0.6314285313974743,
            "significant": true
        },
        {
            "trait_id": "need_stability",
            "name": "Stability",
            "category": "needs",
            "percentile": 0.16449980271254327,
            "raw_score": 0.7033621787702395,
            "significant": true
        },
        {
            "trait_id": "need_structure",
            "name": "Structure",
            "category": "needs",
            "percentile": 0.6645747686292466,
            "raw_score": 0.7075942146252353,
            "significant": true
        }
    ],
    "values": [
        {
            "trait_id": "value_conservation",
            "name": "Conservation",
            "category": "values",
            "percentile": 0.009962236407851544,
            "raw_score": 0.560583699328352,
            "significant": true
        },
        {
            "trait_id": "value_openness_to_change",
            "name": "Openness to change",
            "category": "values",
            "percentile": 0.49296441439659244,
            "raw_score": 0.7835880749138815,
            "significant": true
        },
        {
            "trait_id": "value_hedonism",
            "name": "Hedonism",
            "category": "values",
            "percentile": 0.0006691865193020896,
            "raw_score": 0.5332238545838388,
            "significant": true
        },
        {
            "trait_id": "value_self_enhancement",
            "name": "Self-enhancement",
            "category": "values",
            "percentile": 0.01624597027569169,
            "raw_score": 0.6125183595363535,
            "significant": true
        },
        {
            "trait_id": "value_self_transcendence",
            "name": "Self-transcendence",
            "category": "values",
            "percentile": 0.3172501445051149,
            "raw_score": 0.8252155505502128,
            "significant": true
        }
    ],
    "consumption_preferences": [
        {
            "consumption_preference_category_id": "consumption_preferences_shopping",
            "name": "Purchasing Preferences",
            "consumption_preferences": [
                {
                    "consumption_preference_id": "consumption_preferences_automobile_ownership_cost",
                    "name": "Likely to be sensitive to ownership cost when buying automobiles",
                    "score": 1.0
                },
                {
                    "consumption_preference_id": "consumption_preferences_automobile_safety",
                    "name": "Likely to prefer safety when buying automobiles",
                    "score": 0.0
                },
                {
                    "consumption_preference_id": "consumption_preferences_clothes_quality",
                    "name": "Likely to prefer quality when buying clothes",
                    "score": 1.0
                },
                {
                    "consumption_preference_id": "consumption_preferences_clothes_style",
                    "name": "Likely to prefer style when buying clothes",
                    "score": 0.0
                },
                {
                    "consumption_preference_id": "consumption_preferences_clothes_comfort",
                    "name": "Likely to prefer comfort when buying clothes",
                    "score": 1.0
                },
                {
                    "consumption_preference_id": "consumption_preferences_influence_brand_name",
                    "name": "Likely to be influenced by brand name when making product purchases",
                    "score": 0.0
                },
                {
                    "consumption_preference_id": "consumption_preferences_influence_utility",
                    "name": "Likely to be influenced by product utility when making product purchases",
                    "score": 1.0
                },
                {
                    "consumption_preference_id": "consumption_preferences_influence_online_ads",
                    "name": "Likely to be influenced by online ads when making product purchases",
                    "score": 1.0
                },
                {
                    "consumption_preference_id": "consumption_preferences_influence_social_media",
                    "name": "Likely to be influenced by social media when making product purchases",
                    "score": 0.0
                },
                {
                    "consumption_preference_id": "consumption_preferences_influence_family_members",
                    "name": "Likely to be influenced by family when making product purchases",
                    "score": 0.0
                },
                {
                    "consumption_preference_id": "consumption_preferences_spur_of_moment",
                    "name": "Likely to indulge in spur of the moment purchases",
                    "score": 0.0
                },
                {
                    "consumption_preference_id": "consumption_preferences_credit_card_payment",
                    "name": "Likely to prefer using credit cards for shopping",
                    "score": 1.0
                }
            ]
        },
        {
            "consumption_preference_category_id": "consumption_preferences_health_and_activity",
            "name": "Health & Activity Preferences",
            "consumption_preferences": [
                {
                    "consumption_preference_id": "consumption_preferences_eat_out",
                    "name": "Likely to eat out frequently",
                    "score": 0.0
                },
                {
                    "consumption_preference_id": "consumption_preferences_gym_membership",
                    "name": "Likely to have a gym membership",
                    "score": 0.0
                },
                {
                    "consumption_preference_id": "consumption_preferences_outdoor",
                    "name": "Likely to like outdoor activities",
                    "score": 0.5
                }
            ]
        },
        {
            "consumption_preference_category_id": "consumption_preferences_environmental_concern",
            "name": "Environmental Concern Preferences",
            "consumption_preferences": [
                {
                    "consumption_preference_id": "consumption_preferences_concerned_environment",
                    "name": "Likely to be concerned about the environment",
                    "score": 1.0
                }
            ]
        },
        {
            "consumption_preference_category_id": "consumption_preferences_entrepreneurship",
            "name": "Entrepreneurship Preferences",
            "consumption_preferences": [
                {
                    "consumption_preference_id": "consumption_preferences_start_business",
                    "name": "Likely to consider starting a business in next few years",
                    "score": 0.0
                }
            ]
        },
        {
            "consumption_preference_category_id": "consumption_preferences_movie",
            "name": "Movie Preferences",
            "consumption_preferences": [
                {
                    "consumption_preference_id": "consumption_preferences_movie_romance",
                    "name": "Likely to like romance movies",
                    "score": 0.0
                },
                {
                    "consumption_preference_id": "consumption_preferences_movie_adventure",
                    "name": "Likely to like adventure movies",
                    "score": 1.0
                },
                {
                    "consumption_preference_id": "consumption_preferences_movie_horror",
                    "name": "Likely to like horror movies",
                    "score": 0.0
                },
                {
                    "consumption_preference_id": "consumption_preferences_movie_musical",
                    "name": "Likely to like musical movies",
                    "score": 1.0
                },
                {
                    "consumption_preference_id": "consumption_preferences_movie_historical",
                    "name": "Likely to like historical movies",
                    "score": 1.0
                },
                {
                    "consumption_preference_id": "consumption_preferences_movie_science_fiction",
                    "name": "Likely to like science-fiction movies",
                    "score": 1.0
                },
                {
                    "consumption_preference_id": "consumption_preferences_movie_war",
                    "name": "Likely to like war movies",
                    "score": 0.0
                },
                {
                    "consumption_preference_id": "consumption_preferences_movie_drama",
                    "name": "Likely to like drama movies",
                    "score": 0.0
                },
                {
                    "consumption_preference_id": "consumption_preferences_movie_action",
                    "name": "Likely to like action movies",
                    "score": 1.0
                },
                {
                    "consumption_preference_id": "consumption_preferences_movie_documentary",
                    "name": "Likely to like documentary movies",
                    "score": 1.0
                }
            ]
        },
        {
            "consumption_preference_category_id": "consumption_preferences_music",
            "name": "Music Preferences",
            "consumption_preferences": [
                {
                    "consumption_preference_id": "consumption_preferences_music_rap",
                    "name": "Likely to like rap music",
                    "score": 0.5
                },
                {
                    "consumption_preference_id": "consumption_preferences_music_country",
                    "name": "Likely to like country music",
                    "score": 0.0
                },
                {
                    "consumption_preference_id": "consumption_preferences_music_r_b",
                    "name": "Likely to like R&B music",
                    "score": 0.5
                },
                {
                    "consumption_preference_id": "consumption_preferences_music_hip_hop",
                    "name": "Likely to like hip hop music",
                    "score": 0.5
                },
                {
                    "consumption_preference_id": "consumption_preferences_music_live_event",
                    "name": "Likely to attend live musical events",
                    "score": 1.0
                },
                {
                    "consumption_preference_id": "consumption_preferences_music_playing",
                    "name": "Likely to have experience playing music",
                    "score": 1.0
                },
                {
                    "consumption_preference_id": "consumption_preferences_music_latin",
                    "name": "Likely to like Latin music",
                    "score": 1.0
                },
                {
                    "consumption_preference_id": "consumption_preferences_music_rock",
                    "name": "Likely to like rock music",
                    "score": 1.0
                },
                {
                    "consumption_preference_id": "consumption_preferences_music_classical",
                    "name": "Likely to like classical music",
                    "score": 1.0
                }
            ]
        },
        {
            "consumption_preference_category_id": "consumption_preferences_reading",
            "name": "Reading Preferences",
            "consumption_preferences": [
                {
                    "consumption_preference_id": "consumption_preferences_read_frequency",
                    "name": "Likely to read often",
                    "score": 1.0
                },
                {
                    "consumption_preference_id": "consumption_preferences_books_entertainment_magazines",
                    "name": "Likely to read entertainment magazines",
                    "score": 0.0
                },
                {
                    "consumption_preference_id": "consumption_preferences_books_non_fiction",
                    "name": "Likely to read non-fiction books",
                    "score": 1.0
                },
                {
                    "consumption_preference_id": "consumption_preferences_books_financial_investing",
                    "name": "Likely to read financial investment books",
                    "score": 0.0
                },
                {
                    "consumption_preference_id": "consumption_preferences_books_autobiographies",
                    "name": "Likely to read autobiographical books",
                    "score": 0.0
                }
            ]
        },
        {
            "consumption_preference_category_id": "consumption_preferences_volunteering",
            "name": "Volunteering Preferences",
            "consumption_preferences": [
                {
                    "consumption_preference_id": "consumption_preferences_volunteer",
                    "name": "Likely to volunteer for social causes",
                    "score": 1.0
                }
            ]
        }
    ],
    "warnings": [
        {
            "warning_id": "WORD_COUNT_MESSAGE",
            "message": "There were 283 words in the input. We need a minimum of 600, preferably 1,200 or more, to compute statistically significant estimates"
        }
    ]
}