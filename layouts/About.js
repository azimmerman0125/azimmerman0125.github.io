import { markdownify } from "@lib/utils/textConverter";
import shortcodes from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import Link from 'next/link'

const About = ({ data }) => {
  const { frontmatter, mdxContent } = data;
  const { title, image, education, experience, certification, training, technicalskill, volunteer } = frontmatter;

  return (
    <section className="section mt-16">
      {/* Main Content */}
      <div className="container text-center">
        {image && (
          <div className="mb-8">
            <Image
              src={image}
              width={1298}
              height={616}
              alt={title}
              className="rounded-lg"
              priority={true}
            />
          </div>
        )}

        <div className="content text-right">
          <Link href="/docs/resume.pdf" target="_blank">Download Resume</Link>
        </div>

        {markdownify(title, "h1", "h1 text-left lg:text-[55px] mt-12")}

        <div className="content text-left">
          <MDXRemote {...mdxContent} components={shortcodes} />
        </div>

        {/* Experience Content */}
        <div className="row mt-24 text-left lg:flex-nowrap">
          <div className="experience mt-10 lg:mt-0 lg:col-6">
            <div className="rounded border border-border p-6 dark:border-darkmode-border ">
              {markdownify(experience.title, "h2", "section-title mb-12")}
              <ul className="row">
                {experience?.list?.map((item, index) => (
                  <li
                    className="mb-5 text-lg font-bold text-dark dark:text-darkmode-light lg:col-6"
                    key={"experience-" + index}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Training, Certifications, Technical Skills Content */}
        <div className="row mt-10 text-left lg:flex">
          <div className="technicalskill mt-10 lg:col-6">
            <div className="rounded border border-border p-6 dark:border-darkmode-border ">
              {markdownify(technicalskill.title, "h2", "section-title mb-12")}
              <ul className="row">
                {technicalskill?.list?.map((item, index) => (
                  <li
                    className="mb-5 text-lg font-bold text-dark dark:text-darkmode-light lg:col-6"
                    key={"technicalskill-" + index}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="training mt-10 lg:col-6">
            <div className="rounded border border-border p-6 dark:border-darkmode-border ">
              {markdownify(training.title, "h2", "section-title mb-12")}
              <ul className="row">
                {training?.list?.map((item, index) => (
                  <li
                    className="mb-5 text-lg font-bold text-dark dark:text-darkmode-light lg:col-6"
                    key={"training-" + index}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="certification mt-10 lg:col-6">
            <div className="rounded border border-border p-6 dark:border-darkmode-border ">
              {markdownify(certification.title, "h2", "section-title mb-12")}
              <ul className="row">
                {certification?.list?.map((item, index) => (
                  <li
                    className="mb-5 text-lg font-bold text-dark dark:text-darkmode-light lg:col-6"
                    key={"certification-" + index}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="volunteer mt-10 lg:col-6">
            <div className="rounded border border-border p-6 dark:border-darkmode-border ">
              {markdownify(volunteer.title, "h2", "section-title mb-12")}
              <ul className="row">
                {volunteer?.list?.map((item, index) => (
                  <li
                    className="mb-5 text-lg font-bold text-dark dark:text-darkmode-light lg:col-6"
                    key={"volunteer-" + index}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Formal Education Content */}
        <div className="row mt-10 text-left lg:flex-nowrap">
          <div className="mt-10 lg:col-6 ">
            <div className="rounded border border-border p-6 dark:border-darkmode-border ">
              {markdownify(education.title, "h2", "section-title mb-12")}
              <div className="row">
                {education.degrees.map((degree, index) => (
                  <div className="mb-7 md:col-6" key={"degree-" + index}>
                    <h4 className="text-base lg:text-[25px]">
                      {degree.university}
                    </h4>
                    <p className="mt-2">{degree.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End of Main Content */}
    </section>
  );
};

export default About;
