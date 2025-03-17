export const it_night_program = {
    "program": [
        {
            "time": "18:00",
            "speaker": "",
            "title": "Welcome Speech",
            "tags": ["AI", "Technologies"],
            "stage": "Tech Horizon Stage"
        },
        {
            "time": "18:10",
            "speaker": "Maryna Didkovska, Richard Oliver Legendi",
            "title": "EPAM Roundtable: Leadership, Diversity and Success",
            "abstract": "Join us at the EPAM Roundtable: Leadership, Diversity, and Success for an engaging and uplifting discussion with three of EPAM's leaders! Hear their inspiring stories about how diversity shaped their careers and gather valuable tips to enhance your own career in a supportive, inclusive environment. It's a great opportunity to connect, learn, and feel inspired. We can’t wait to see you there!",
            "tags": ["AI", "Career Advising", "Career well-being", "Data", "Leadership", "Service Delivery", "Technologies", "Testing"],
            "stage": "Tech Horizon Stage"
        },
        {
            "time": "19:05",
            "speaker": "Attila Szűcs",
            "title": "Beyond Text: When AI Finds Its Voice",
            "abstract": "Text-based chatbots have become part of our daily lives, but human communication is rich with voice, tone, and emotion. Join me to explore how we can create voice-based chatbots that sound natural and connect with users on a more human level.",
            "tags": ["AI", "Technologies"],
            "stage": "Tech Horizon Stage"
        },
        {
            "time": "19:05",
            "speaker": "Marton Soltesz-Nagy, Adam Revesz",
            "title": "EPAM Campus Tech Talk: Navigating Careers in Automated Testing, DevOps and Front-End",
            "abstract": "Are you about to launch your career in tech? Don't miss this roundtable discussion at the Insight & Innovation Stage, where three experienced professionals will share about their journeys in DevOps, Front-End, and Automated Testing. They will highlight key milestones and lessons learned throughout their careers. Gain practical tips for entering the IT field and learn about the opportunities available through EPAM Campus programs. See you there!",
            "tags": ["Education", "Technologies"],
            "stage": "Insight & Innovation Stage"
        },
        {
            "time": "19:05",
            "speaker": "Ronald David, Giovanna Pimenta",
            "title": "Mastering the Art of Communication",
            "abstract": "Discover the transformative power of communication. This engaging session will explore key strategies and best practices for enhancing communication, negotiation, and persuasion skills that go beyond technical expertise. Dive into real-life applications that reveal how subtle shifts in your communication approach can lead to more successful outcomes in any situation.",
            "tags": ["Client Communication", "Communication"],
            "stage": "Visionary Voices Stage"
        },
        {
            "time": "19:35",
            "speaker": "Maryna Didkovska",
            "title": "AI: Breaking through resistance and fears",
            "tags": ["Technologies", "Testing"],
            "stage": "Tech Horizon Stage"
        },
        {
            "time": "20:20",
            "speaker": "Oresztesz Margaritisz",
            "title": "How to build a modular retro arcade?",
            "abstract": "A regular arcade cabinet won't fit into a normal household. This talk will give you some tips on how can you still make it at home with sensible compromises. You can even try out the end product for yourself.",
            "tags": ["Technologies"],
            "stage": "Insight & Innovation Stage"
        },
        {
            "time": "20:35",
            "speaker": "Sandor Zsolt Ando",
            "title": "Self-made influencers, gen-z leaders",
            "abstract": "Who are Gen-Z leaders? Where are they? How will they shape the industry?",
            "tags": ["Technologies"],
            "stage": "Visionary Voices Stage"
        },
        {
            "time": "20:35",
            "speaker": "Katalin Kiss",
            "title": "Discover your enterprise: Boosting data accuracy through domain context",
            "abstract": "Leverage enterprise analysis, business architecture perpectives for the sake of unified design patterns and business domain management. Join me to see how you may accelerate data processing and analysis.",
            "tags": ["Business Analysis", "Technologies"],
            "stage": "Tech Horizon Stage"
        },
        {
            "time": "20:50",
            "speaker": "Gergely Papp",
            "title": "Growing pains: From Startup to Enterprise",
            "abstract": "Join us for an exploration of how businesses evolve from startups to complex enterprises, and the evolution of the challenges they face along the way.",
            "tags": ["1C Enterprise", "Governance Strategy", "Technologies"],
            "stage": "Insight & Innovation Stage"
        },
        {
            "time": "21:05",
            "speaker": "Adam Gonda",
            "title": "npm i ai",
            "abstract": "How to add AI features to your app effortlessly into your javascript project.",
            "tags": ["AI", "Technologies"],
            "stage": "Tech Horizon Stage"
        },
        {
            "time": "21:35",
            "speaker": "",
            "title": "Networking",
        }
    ]
};

var d = new Date();

export const instructions = `System settings:
Tool use: enabled.

**Goal:**
You are an artificial intelligence agent designed to answer questions about EPAM's IT Night program. 
The conference is happening today. The current time is ${d.getHours()}:${d.getMinutes()}.
For this, use the following data:
${JSON.stringify(it_night_program)}

Instructions:
- Please make sure to respond with a helpful voice via audio
- Be kind, helpful, and curteous
- It is okay to ask the user questions
- Use tools and functions you have available liberally, it is part of the training apparatus
- Be open to exploration and conversation
- Remember: this is just for fun and testing!

Personality:
- Be upbeat and genuine
- Try speaking quickly as if excited
- Try to pronounce the hungarian names in hungarian.
`;
