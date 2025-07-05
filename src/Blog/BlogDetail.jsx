import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const [post, setPost] = useState(state?.post || null);
  const [loading, setLoading] = useState(!state?.post);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostIfNeeded = async () => {
      if (post) return;

      try {
        const response = await fetch('https://asios-server.vercel.app/api/blog/get-blog');
        if (!response.ok) throw new Error('Failed to fetch blog post');

        const result = await response.json();
        const foundPost = result.data?.find((p) => String(p.$id) === String(id));

        if (foundPost) {
          setPost({
            id: foundPost.$id,
            title: foundPost.title,
            content: foundPost.content,
            imageUrl: foundPost.imageUrl,
            date: new Date(foundPost.$createdAt).toLocaleDateString('en-US', {
              day: '2-digit',
              month: 'long',
              year: 'numeric'
            }),
            $createdAt: foundPost.$createdAt,
            $updatedAt: foundPost.$updatedAt
          });
        } else {
          setError('Blog post not found');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPostIfNeeded();
  }, [id, post]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <div>
          <p className="text-red-600 text-lg mb-4">Error loading blog post</p>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">No blog post found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-8 border-b border-gray-200">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        </header>

        {post.imageUrl && (
          <div className="mb-8">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
              onError={(e) => (e.target.style.display = 'none')}
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </article>
    </div>
  );
};

export default BlogDetail;
