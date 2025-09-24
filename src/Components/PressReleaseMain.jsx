import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllBlogs,
  selectBlogs,
  selectBlogsLoading,
  selectBlogsError
} from "../redux/blogsSlice";
import { X, Calendar, ArrowRight, ExternalLink } from "lucide-react";

const PressReleaseMain = () => {
  const dispatch = useDispatch();
  const blogs = useSelector(selectBlogs);
  const loading = useSelector(selectBlogsLoading);
  const error = useSelector(selectBlogsError);

  const [overlay, setOverlay] = useState({ open: false, blog: null });
  const [imageLoaded, setImageLoaded] = useState({});

  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch]);

  const openOverlay = (blog) => {
    setOverlay({ open: true, blog });
    document.body.style.overflow = 'hidden';
  };
  
  const closeOverlay = () => {
    setOverlay({ open: false, blog: null });
    document.body.style.overflow = 'unset';
  };

  const handleImageLoad = (blogId) => {
    setImageLoaded(prev => ({ ...prev, [blogId]: true }));
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-black flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-[#405FFC] text-lg font-medium">Loading articles...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-center justify-center">
        <div className="text-center p-8 bg-red-950/30 rounded-2xl border border-red-800/30 backdrop-blur-sm">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <X className="w-8 h-8 text-red-400" />
          </div>
          <h2 className="text-2xl font-bold text-[#405FFC] mb-2">Something went wrong</h2>
          <p className="text-red-400">Error loading articles: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="min-h-screen bg-black py-20 px-4 md:px-8 lg:px-16">
        {/* Articles Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-8">
            {blogs.map((blog, index) => (
              <article
                key={blog._id}
                className="group cursor-pointer"
                onClick={() => openOverlay(blog)}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Date and Location */}
                <div className="mb-4">
                  <div className="flex items-center text-blue-400 text-sm font-medium mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <time>
                      {new Date(blog.createdAt).toLocaleDateString('en-GB', {
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric'
                      })}
                    </time>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white text-lg font-semibold leading-tight mb-6 group-hover:text-blue-500 transition-colors duration-300 line-clamp-3">
                  {blog.title}
                </h3>

                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-800">
                  {!imageLoaded[blog._id] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                      <div className="w-6 h-6 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                  <img
                    src={blog.blogImgUrl?.url}
                    alt={blog.title}
                    className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                      imageLoaded[blog._id] ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => handleImageLoad(blog._id)}
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      {overlay.open && overlay.blog && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="relative bg-gray-900 text-white rounded-lg max-w-7xl w-full shadow-2xl animate-slideIn overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Close Button */}
            <button
              onClick={closeOverlay}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors duration-300 bg-black/30 hover:bg-black/50 rounded-full p-2"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh] flex-1">
              {/* Left: Image */}
              <div className="relative overflow-hidden bg-gray-800">
                <img
                  src={overlay.blog.blogImgUrl?.url}
                  alt={overlay.blog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right: Content */}
              <div className="p-8 lg:p-12 overflow-y-auto bg-gray-900 overflow-x-hidden">
                {/* Date */}
                <div className="flex items-center text-blue-400 text-sm font-medium mb-6">
                  <Calendar className="w-4 h-4 mr-2" />
                  <time>
                    {new Date(overlay.blog.createdAt).toLocaleDateString('en-GB', {
                      day: 'numeric', 
                      month: 'long', 
                      year: 'numeric'
                    })}
                  </time>
                </div>
                
                {/* Title */}
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8 leading-tight break-words">
                  {overlay.blog.title}
                </h2>
                
                {/* Content */}
                <div
                  className="prose prose-invert max-w-none text-gray-300 leading-relaxed prose-p:text-gray-300 prose-headings:text-white prose-a:text-blue-400 prose-strong:text-white break-words"
                  style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}
                  dangerouslySetInnerHTML={{
                    __html: overlay.blog.blogContent?.markup || overlay.blog.content
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideIn {
          animation: slideIn 0.4s ease-out;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default PressReleaseMain;