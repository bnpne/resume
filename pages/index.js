import React from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'

const Index = () => {
  return (
    <div className="">
      <Head>
        <title>Ben Paine</title>
      </Head>
      <div className="px-3 py-2 w-full mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light tracking-tight space-y-12">
        <div>
          <h1>Ben Paine</h1>
          <p>Front End Developer</p>
          <p>So. California</p>
        </div>
        <div className="pl-40">
          <ul>
            <li>
              <a
                className="hover:underline"
                href="https://bnpne.io/"
                target="_blank"
              >
                Website
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href="mailto:bentppaine@gmail.com"
                target="_blank"
              >
                Email
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href="https://github.com/bnpne"
                target="_blank"
              >
                Github
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href="https://www.linkedin.com/in/benpaine/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href="https://twitter.com/bnpneio"
                target="_blank"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p>B.S Computer Science – Feb. 2021</p>
        </div>
        <div>
          <p>Technical Skills</p>
        </div>
        <div className="pl-40">
          <ul>
            <li>React.js (Next.js)</li>
            <li>TailwindCSS</li>
            <li>CSS-in-JS</li>
            <li>Google Firebase</li>
            <li>MongoDB</li>
            <li>AWS</li>
            <li>Git (GitHub)</li>
            <li>Figma</li>
            <li>Adobe Creative Suite</li>
          </ul>
        </div>
        <div>
          <a
            className="hover:underline"
            href="/Ben-Paine-Resume-Mar21.pdf"
            target="_blank"
          >
            (See Full Resume)
          </a>
        </div>
      <Footer />
      </div>
    </div>
  )
}

export default Index
