import React, { useState } from 'react'
import BlogCard from './BlogCard'

const blogPosts = [
  {
    id: 1,
    date: "03 July, 2025",
    title: "How to Automate Boring Tasks with Python and PyAutoGUI",
    description:
      "In today's fast-paced digital world, maximizing efficiency is more important than ever. Repetitive...",
    gradient: "from-blue-900 via-purple-900 to-blue-800",
    accentColor: "bg-yellow-400",
  },
  {
    id: 2,
    date: "02 July, 2025",
    title: "Scalable MEAN Stack Deployment Backed by Expert Development Services",
    description:
      "Building scalable web applications demands robust frameworks and skilled hands to turn an idea into a...",
    gradient: "from-purple-900 via-blue-900 to-purple-800",
    accentColor: "bg-yellow-400",
  },
  {
    id: 3,
    date: "02 July, 2025",
    title: "Static Site Output with Nuxt Generation Models: Insights from a Nuxt JS Development...",
    description: "Web development is now being more and more focused on quick loading, secure, and optimized...",
    gradient: "from-gray-900 via-green-900 to-gray-800",
    accentColor: "bg-green-400",
  },
  {
    id: 4,
    date: "02 July, 2025",
    title: "API Layer Integration with Next.js Endpoints: A Guide for Next.js Developers",
    description: "With the growing demand for modern web applications to exchange dynamic data, creating a...",
    gradient: "from-blue-900 via-teal-900 to-blue-800",
    accentColor: "bg-teal-400",
  },
  {
    id: 5,
    date: "02 July, 2025",
    title: "Magento eCommerce Development: Custom Theme Development Best Practices",
    description:
      "The process of setting up online stores goes beyond simply loading products and getting customers to...",
    gradient: "from-blue-900 via-cyan-900 to-blue-800",
    accentColor: "bg-cyan-400",
  },
  {
    id: 6,
    date: "01 July, 2025",
    title: "Dynamic Routing Features in Next.js Applications",
    description: "Dynamic routing is a key feature in Next.js applications, allowing developers to build scalable...",
    gradient: "from-purple-900 via-indigo-900 to-purple-800",
    accentColor: "bg-yellow-400",
  },
]


const Blog = () => {
  
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Latest Blog Posts</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover insights, tutorials, and best practices in web development, automation, and modern technologies.
            </p>
          </div>
  
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.id}
                post={post}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
  

export default Blog
