import React from 'react'
import { useParams } from 'react-router-dom'

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

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => String(p.id) === String(id));

  if (!post) return <div className="min-h-screen flex items-center justify-center text-xl">No blog post found.</div>

  return (
    <div className="min-h-screen bg-white">
      {/* Main content */}
      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Article header */}
        <header className="mb-8 border-b border-gray-200">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">{post.title}</h1>
          <div className="flex items-center space-x-6 text-sm text-gray-600 mb-8">
            <span>{post.date}</span>
          </div>
        </header>
        {/* Hero image placeholder */}
        {/* Article content */}
        <div className="prose prose-lg max-w-none">
          {post.description && (
            <p className="text-gray-700 leading-relaxed mb-6">{post.description}</p>
          )}
        </div>
        <footer className="mt-12 pt-8"></footer>
      </article>
    </div>
  )
}

export default BlogDetail
