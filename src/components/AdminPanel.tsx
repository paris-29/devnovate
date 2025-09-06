import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Upload, Eye, Home, Check, X } from 'lucide-react';

interface AdminPanelProps {
  frameImage: string;
  setFrameImage: (image: string) => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ frameImage, setFrameImage }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState('');
  
  const navigate = useNavigate();

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === '1234') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid PIN. Please try again.');
      setPin('');
    }
  };

  const handleImageUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);
    
    // Simulate upload delay
    setTimeout(() => {
      if (imageUrl.trim()) {
        setFrameImage(imageUrl);
        setSuccess('Image updated successfully!');
        setImageUrl('');
      }
      setIsUploading(false);
    }, 1000);
  };

  const presetImages = [
    'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/374631/pexels-photo-374631.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800'
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center p-6">
        <div className="bg-white rounded-3xl p-8 shadow-2xl w-full max-w-md fade-in-up">
          <div className="text-center mb-8">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="h-8 w-8 text-purple-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Admin Access</h1>
            <p className="text-gray-600">Enter PIN to access the admin panel</p>
          </div>

          <form onSubmit={handlePinSubmit} className="space-y-6">
            <div>
              <input
                type="password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Enter PIN"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-center text-2xl font-mono tracking-widest"
                maxLength={4}
              />
            </div>

            {error && (
              <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-xl">
                <X className="h-5 w-5" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 rounded-xl font-semibold button-hover"
            >
              Access Admin Panel
            </button>

            <button
              type="button"
              onClick={() => navigate('/')}
              className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
            >
              <Home className="h-5 w-5" />
              <span>Back to Home</span>
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white p-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="bg-white rounded-3xl p-6 shadow-xl mb-8 slide-in-up">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-purple-100 p-3 rounded-xl">
                <Upload className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
                <p className="text-gray-600">Manage your frame images</p>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <button
                onClick={() => navigate('/')}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-200 transition-colors flex items-center space-x-2"
              >
                <Eye className="h-4 w-4" />
                <span>Preview Site</span>
              </button>
              
              <button
                onClick={() => setIsAuthenticated(false)}
                className="bg-red-100 text-red-700 px-4 py-2 rounded-xl hover:bg-red-200 transition-colors flex items-center space-x-2"
              >
                <Lock className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Current Image Preview */}
          <div className="bg-white rounded-3xl p-6 shadow-xl slide-in-left">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Current Frame Image</h2>
            <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden">
              <img 
                src={frameImage} 
                alt="Current frame" 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-gray-500 mt-3 break-all">{frameImage}</p>
          </div>

          {/* Update Image Form */}
          <div className="bg-white rounded-3xl p-6 shadow-xl slide-in-right">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Update Image</h2>
            
            {success && (
              <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-xl mb-4">
                <Check className="h-5 w-5" />
                <span>{success}</span>
              </div>
            )}
            
            <form onSubmit={handleImageUpdate} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image URL
                </label>
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isUploading}
                className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 rounded-xl font-semibold button-hover disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isUploading ? (
                  <>
                    <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                    <span>Updating...</span>
                  </>
                ) : (
                  <>
                    <Upload className="h-5 w-5" />
                    <span>Update Image</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Preset Images */}
        <div className="bg-white rounded-3xl p-6 shadow-xl mt-8 fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Select Images</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {presetImages.map((image, index) => (
              <div key={index} className="relative group">
                <img
                  src={image}
                  alt={`Preset ${index + 1}`}
                  className="w-full aspect-video object-cover rounded-xl cursor-pointer transition-all hover:ring-4 hover:ring-purple-300"
                  onClick={() => {
                    setFrameImage(image);
                    setSuccess('Image updated successfully!');
                    setTimeout(() => setSuccess(''), 3000);
                  }}
                />
                <div className="absolute inset-0 bg-purple-500 bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-xl flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-full p-2">
                    <Check className="h-5 w-5 text-purple-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4">Click on any image to set it as the frame image</p>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;