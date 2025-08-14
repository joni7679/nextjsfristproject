"use client";
import Image from "next/image";
import { FaPaintBrush, FaLaptopCode, FaBullhorn, FaServer, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";

const categories = [
    {
        icon: <FaPaintBrush className="text-4xl" />,
        title: "UI/UX",
        desc: "Creative opportunities for Visual Arts, UI/UX Designer and Graphic Designer.",
    },
    {
        icon: <FaLaptopCode className="text-4xl" />,
        title: "Web Developer",
        desc: "Creates and maintains websites and ensuring seamless functionality and user experience.",
    },
    {
        icon: <FaBullhorn className="text-4xl" />,
        title: "Digital Marketing",
        desc: "Start your career as a Digital Marketer and aimed to build brand awareness.",
    },
    {
        icon: <FaServer className="text-4xl" />,
        title: "Mern Stack Developer",
        desc: "Great opportunities for Mern stack developer and Full-stack developer.",
    },
];

const jobs = [
    {
        logo: "https://logo.clearbit.com/huawei.com",
        company: "Huawei Technology",
        jobs: "25 Job Opportunities",
        tags: ["Tech Startups", "Innovators"],
        link: "https://www.huawei.com/en/",
    },
    {
        logo: "https://logo.clearbit.com/amazon.com",
        company: "Amazon",
        jobs: "35 Job Opportunities",
        tags: ["Tech Startups", "Ecommerce"],
        link: "https://www.amazon.jobs/",
    },
    {
        logo: "https://logo.clearbit.com/stripe.com",
        company: "Stripe Finance",
        jobs: "30 Job Opportunities",
        tags: ["Tech Startups", "Innovators", "Finance"],
        link: "https://stripe.com/jobs",
    },
];



export default function JobSection() {
    return (
        <div className="px-4 md:px-6">
            <section className="my-12 rounded-2xl bg-blue-50/50">
                <div className="mx-auto max-w-6xl py-10 text-center">
                    <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
                        Browse <span className="text-blue-600">Jobs</span> Categories
                    </h2>
                    <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
                        Explore a wide range of job opportunities tailored to your skills and interests. Our job portal categorizes
                        thousands of jobs listings to make your search seamless and efficient.
                    </p>

                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {categories.map((cat) => (
                            <div
                                key={cat.title}
                                className="group rounded-xl border border-blue-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
                            >
                                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-blue-200 bg-blue-50">
                                    <span className="text-blue-600">{cat.icon}</span>
                                </div>
                                <h3 className="text-lg font-semibold">{cat.title}</h3>
                                <p className="mt-2 text-sm text-gray-600">{cat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="my-12 mx-auto max-w-6xl text-center">
                <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
                    Latest <span className="text-blue-600">Job</span> Opportunities
                </h2>

                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {jobs.map((job) => (
                        <article
                            key={job.company}
                            className="relative rounded-xl border border-blue-200 bg-white p-6 text-left shadow-sm transition hover:shadow-md"
                        >
                            <a
                                href={job.link}
                                target="_blank"
                                rel="noreferrer"
                                className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full border bg-white text-blue-600 hover:bg-blue-50"
                                aria-label="Open company page"
                                title="Open company page"
                            >
                                <FaExternalLinkAlt className="text-sm" />
                            </a>

                            <div className="mb-4 flex items-center gap-3">
                                <div>
                                    <p className="text-xs text-gray-500">Company</p>
                                    <h3 className="font-semibold leading-tight">{job.company}</h3>
                                </div>
                            </div>

                            <p className="mb-4 font-medium">{job.jobs}</p>

                            <div className="flex flex-wrap gap-2">
                                {job.tags.map((t) => (
                                    <span
                                        key={t}
                                        className="rounded-md border border-blue-200 bg-blue-50 px-2 py-1 text-xs text-blue-700"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>

                <button className="mt-8 rounded-xl border cursor-pointer border-blue-600 px-5 py-2 font-medium text-blue-700 hover:bg-blue-600 hover:text-white transition">
                    More Opportunities
                </button>
            </section>
        </div>
    );
}
