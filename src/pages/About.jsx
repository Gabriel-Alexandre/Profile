import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import CTA from "../components/CTA";
import { experiences, skills } from "../constants";
import { Suspense, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "react-vertical-timeline-component/style.min.css";

const About = () => {
  console.log("Rendering About component");
  // Initialize tooltip visibility state
  const [tooltipVisibility, setTooltipVisibility] = useState({});

  // Event handlers to show and hide tooltips
  const showTooltip = (skillName) => {
    setTooltipVisibility({ ...tooltipVisibility, [skillName]: true });
  };

  const hideTooltip = (skillName) => {
    setTooltipVisibility({ ...tooltipVisibility, [skillName]: false });
  };

  return (


    <section className='max-container'>
      <h1 className='head-text'>
        Hello World, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Gabriel
        </span>{" "}
        👨‍💻
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-700 ' style={{ textAlign: 'justify' }}>
      <p>
          Full Stack developer with expertise in web and mobile development, holding a degree in Computer Engineering.
          Skilled in Next.js, Angular, C#, and various cloud technologies, I develop scalable solutions that enhance user experiences and drive business value.
          With over 4 years of professional experience at Dhauz and LUMO, I've worked on complex projects involving CRUD operations, API integrations, and cloud infrastructure.
          My background includes working with technologies like Docker, AWS, Azure and various databases, allowing me to deliver robust full-stack applications.
          As a passionate problem solver, I thrive on tackling complex challenges and finding innovative solutions. If you're looking for a developer who not only codes but also brings a problem-solving mindset to every project, feel free to <Link to="/contact" className="text-blue-500 hover:underline">reach out</Link>.
          Thank you for your time and consideration. I look forward to discussing how I can contribute to your team's success.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div
              className='block-container w-20 h-20 '
              key={skill.name}
              onMouseEnter={() => showTooltip(skill.name)}
              onMouseLeave={() => hideTooltip(skill.name)}
            >
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
              {tooltipVisibility[skill.name] && (
                <div className='tooltip' style={
                  {
                    position: 'absolute',
                    bottom: '120%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    padding: '4px 8px',
                    color: 'white',
                    backgroundColor: 'black',
                    borderRadius: '4px',
                    fontSize: '12px',
                    transition: 'all 0.3s ease' // Smooth transition for appearance
                  }

                }>
                  {skill.name}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p style={{ textAlign: 'justify' }}>
          Throughout my career, I've had the opportunity to work on diverse and challenging projects. Currently, as a Full Stack Developer at Dhauz, I develop robust applications using modern technologies like C#, Angular, and Next.js, while also managing cloud infrastructure with AWS and Azure. Previously, as a Mobile Developer at LUMO, I focused on creating intuitive user interfaces and implementing key functionalities for the SisEnex platform, which enhanced the evaluation process for university events.
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-700 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/80 font-normal pl-1 text-sm'
                      style={{ textAlign: 'justify' }}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        
      </div>

      

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;