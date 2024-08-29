import { useState } from 'react';

function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Handle file selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  return (
    <div>
      {/* File input for image */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      
      {/* Display the image preview */}
      {selectedImage && (
        <div>
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Selected"
            style={{ width: '300px', height: 'auto', marginTop: '10px' }}
          />
          <p>{selectedImage.name}</p>
        </div>
      )}
    </div>
  );
}

export default ImageUploader;
