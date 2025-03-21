import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import React from 'react';
import { Monitor, ThumbsUp, Network } from "lucide-react"
// import { Card, CardContent } from "@/components/ui/card"

function Service() {

    const services = [
        {
            icon: (
                <svg className="w-12 h-12 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 2L2 7L12 12L22 7L12 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M2 17L12 22L22 17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            title: "Refreshing Design",
            description:
                "We enjoy working with discerning clients, people for whom quality, service, integrity & aesthetics.",
        },
        {
            icon: (
                <svg className="w-12 h-12 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M4 3H20C21.1 3 22 3.9 22 5V19C22 20.1 21.1 21 20 21H4C2.9 21 2 20.1 2 19V5C2 3.9 2.9 3 4 3Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M9 7L15 12L9 17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            title: "Based on Tailwind CSS",
            description:
                "We enjoy working with discerning clients, people for whom quality, service, integrity & aesthetics.",
        },
        {
            icon: (
                <svg className="w-12 h-12 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path d="M7 10H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7 14H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "300+ Components",
            description:
                "We enjoy working with discerning clients, people for whom quality, service, integrity & aesthetics.",
        },
        {
            icon: <Monitor className="w-12 h-12 text-blue-600" />,
            title: "Speed Optimized",
            description:
                "We enjoy working with discerning clients, people for whom quality, service, integrity & aesthetics.",
        },
        {
            icon: <Network className="w-12 h-12 text-blue-600" />,
            title: "Fully Customizable",
            description:
                "We enjoy working with discerning clients, people for whom quality, service, integrity & aesthetics.",
        },
        {
            icon: <ThumbsUp className="w-12 h-12 text-blue-600" />,
            title: "Regular Updates",
            description:
                "We enjoy working with discerning clients, people for whom quality, service, integrity & aesthetics.",
        },
    ]

    return (
        <>
            <div>
                <div className='py-40 bg-black text-center text-white px-4'>
                    <h1 className='text-5xl lg:text-7xl font-bold mb-5'> Service Page</h1>
                </div>
            </div>

            <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-orange-500 font-medium mb-2">Our Services</h2>
                    <h3 className="text-4xl font-bold mb-4">What We Offer</h3>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in
                        some form.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="p-6">
                                <div className="mb-4">{service.icon}</div>
                                <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                                <p className="text-gray-500">{service.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </>
    )
}
export default Service