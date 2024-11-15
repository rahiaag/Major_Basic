import React, { useState } from 'react';

const AboutUs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What is PrepTalk and how does it work?",
            answer: "PrepTalk is a platform designed to help students prepare for interviews and career opportunities. It offers direct access to job listings, internship opportunities, mentorship programs, learning resources, and AI-driven support. Students can explore company-specific preparation resources, connect with industry mentors, and stay updated on the latest career news."
        },
        {
            question: "How can I connect with mentors through PrepTalk?",
            answer: "You can easily browse a list of available mentors in the Mentors section. Each mentor profile includes their expertise and background. Once you find a mentor who aligns with your interests, you can send them a message or schedule a session to discuss your career-related queries and get guidance."
        },
        {
            question: "How do I find job and internship opportunities on PrepTalk?",
            answer: "The Jobs and Internships sections provide curated listings of the latest opportunities. You can search and filter based on your interests, industry, or location, and apply directly through the provided links to the respective company’s application process."
        },
        {
            question: "How does the AI chatbot assist users?",
            answer: "The AI chatbot on PrepTalk is available 24/7 to answer your queries, provide interview tips, and guide you through the platform. It can suggest job opportunities, provide company-specific resources, and help you navigate the features of PrepTalk to make the most out of your preparation."
        },
        {
            question: "Can I customize my learning resources based on my career interests?",
            answer: "Yes, you can personalize your experience by selecting fields or companies that you’re interested in. PrepTalk will then tailor the resources, job listings, and mentorship suggestions based on your preferences, helping you focus on the opportunities most relevant to your goals."
        },
        {
            question: "Is PrepTalk free to use, and how secure is my data?",
            answer: "Yes, PrepTalk is completely free to use for all students. The platform ensures that your data is safe with secure authentication and encryption methods. Your personal information will remain private and will not be shared without your consent."
        },
    ];

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', lineHeight: '1.6' }}>
            <h1>About Us</h1>
            <p>
                Welcome to <strong>PrepTalk</strong>, your all-in-one platform for interview preparation and career advancement.
                Whether you're a student preparing for your first interview or a professional looking to explore new opportunities, PrepTalk is here to support you.
                Our platform offers a wide range of resources, including company-specific interview materials, personalized mentorship from experienced professionals,
                and the latest job listings tailored to your field. Additionally, our AI-powered chatbot is ready to assist with your questions,
                providing insights to help you stay on track. At PrepTalk, we’re committed to making your preparation journey seamless, efficient, and successful.
            </p>
            
            <h2 style={{ marginTop: '30px' }}>FAQs</h2>
            <div style={{ marginTop: '15px' }}>
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        style={{
                            borderBottom: '1px solid #ddd',
                            padding: '10px 0',
                            cursor: 'pointer',
                        }}
                    >
                        <p
                            onClick={() => toggleFAQ(index)}
                            style={{
                                fontWeight: 'bold',
                                color: '#333',
                                marginBottom: '5px',
                            }}
                        >
                            {faq.question}
                        </p>
                        {activeIndex === index && (
                            <p style={{ marginLeft: '20px', color: '#555' }}>{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutUs;
